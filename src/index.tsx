import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-pages'
import { landingPage } from './pages/landing'
import { heroesPage } from './pages/heroes'
import { dashboardPage } from './pages/dashboard'
import { leaderboardPage } from './pages/leaderboard'
import { achievementsPage } from './pages/achievements'
import { storePage } from './pages/store'
import { productsPage } from './pages/products'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

// CORS for API
app.use('/api/*', cors())

// Static files
app.use('/static/*', serveStatic())

// ============ PAGES ============

// Landing Page
app.get('/', (c) => {
  return c.html(landingPage())
})

// Heroes Gallery
app.get('/heroes', (c) => {
  return c.html(heroesPage())
})

// User Dashboard
app.get('/dashboard', (c) => {
  return c.html(dashboardPage())
})

// Leaderboard
app.get('/leaderboard', (c) => {
  return c.html(leaderboardPage())
})

// Achievements
app.get('/achievements', (c) => {
  return c.html(achievementsPage())
})

// Rewards Store
app.get('/store', (c) => {
  return c.html(storePage())
})

// Products
app.get('/products', (c) => {
  return c.html(productsPage())
})

// ============ API ROUTES ============

// Get all heroes
app.get('/api/heroes', async (c) => {
  try {
    const { DB } = c.env
    const heroes = await DB.prepare('SELECT * FROM heroes ORDER BY unlock_level ASC').all()
    return c.json({ success: true, data: heroes.results })
  } catch (error) {
    return c.json({ success: false, error: 'Database not initialized' })
  }
})

// Get all products
app.get('/api/products', async (c) => {
  try {
    const { DB } = c.env
    const products = await DB.prepare('SELECT * FROM products WHERE is_active = 1').all()
    return c.json({ success: true, data: products.results })
  } catch (error) {
    return c.json({ success: false, error: 'Database not initialized' })
  }
})

// Get user profile
app.get('/api/user/:id', async (c) => {
  try {
    const { DB } = c.env
    const userId = c.req.param('id')
    const user = await DB.prepare('SELECT * FROM users WHERE id = ?').bind(userId).first()
    
    if (!user) {
      return c.json({ success: false, error: 'User not found' }, 404)
    }

    // Get user's heroes
    const heroes = await DB.prepare(`
      SELECT uh.*, h.name, h.emoji, h.color_primary 
      FROM user_heroes uh 
      JOIN heroes h ON uh.hero_id = h.id 
      WHERE uh.user_id = ?
    `).bind(userId).all()

    // Get user's achievements
    const achievements = await DB.prepare(`
      SELECT ua.*, a.name, a.icon, a.rarity 
      FROM user_achievements ua 
      JOIN achievements a ON ua.achievement_id = a.id 
      WHERE ua.user_id = ? AND ua.is_claimed = 1
    `).bind(userId).all()

    // Get product XP
    const productXp = await DB.prepare(`
      SELECT upx.*, p.name, p.icon 
      FROM user_product_xp upx 
      JOIN products p ON upx.product_id = p.id 
      WHERE upx.user_id = ?
    `).bind(userId).all()

    return c.json({ 
      success: true, 
      data: {
        ...user,
        heroes: heroes.results,
        achievements: achievements.results,
        productXp: productXp.results
      }
    })
  } catch (error) {
    return c.json({ success: false, error: 'Database error' })
  }
})

// Get leaderboard
app.get('/api/leaderboard', async (c) => {
  try {
    const { DB } = c.env
    const type = c.req.query('type') || 'global'
    const limit = parseInt(c.req.query('limit') || '10')

    let query = `
      SELECT u.id, u.username, u.display_name, u.total_xp, u.current_level, u.tier, 
             u.avatar_url, h.name as hero_name, h.emoji as hero_emoji
      FROM users u
      LEFT JOIN heroes h ON u.current_hero_id = h.id
      ORDER BY u.total_xp DESC
      LIMIT ?
    `

    const leaders = await DB.prepare(query).bind(limit).all()
    return c.json({ success: true, data: leaders.results })
  } catch (error) {
    return c.json({ success: false, error: 'Database error' })
  }
})

// Get achievements
app.get('/api/achievements', async (c) => {
  try {
    const { DB } = c.env
    const achievements = await DB.prepare('SELECT * FROM achievements ORDER BY rarity DESC, xp_reward DESC').all()
    return c.json({ success: true, data: achievements.results })
  } catch (error) {
    return c.json({ success: false, error: 'Database error' })
  }
})

// Get rewards
app.get('/api/rewards', async (c) => {
  try {
    const { DB } = c.env
    const rewards = await DB.prepare('SELECT * FROM rewards WHERE is_active = 1 ORDER BY is_featured DESC').all()
    return c.json({ success: true, data: rewards.results })
  } catch (error) {
    return c.json({ success: false, error: 'Database error' })
  }
})

// Get challenges
app.get('/api/challenges', async (c) => {
  try {
    const { DB } = c.env
    const type = c.req.query('type') || 'daily'
    const challenges = await DB.prepare('SELECT * FROM challenges WHERE challenge_type = ? AND is_active = 1').bind(type).all()
    return c.json({ success: true, data: challenges.results })
  } catch (error) {
    return c.json({ success: false, error: 'Database error' })
  }
})

// API for external products to award XP
app.post('/api/xp/award', async (c) => {
  try {
    const { DB } = c.env
    const { userId, productCode, action, xpAmount, description } = await c.req.json()

    // Get product
    const product = await DB.prepare('SELECT * FROM products WHERE code = ?').bind(productCode).first()
    if (!product) {
      return c.json({ success: false, error: 'Invalid product code' }, 400)
    }

    // Calculate XP with multiplier
    const finalXp = Math.floor(xpAmount * (product.xp_multiplier || 1))

    // Update user XP
    await DB.prepare(`
      UPDATE users 
      SET total_xp = total_xp + ?, 
          updated_at = CURRENT_TIMESTAMP 
      WHERE id = ?
    `).bind(finalXp, userId).run()

    // Update product-specific XP
    await DB.prepare(`
      INSERT INTO user_product_xp (user_id, product_id, xp_earned, last_activity_at)
      VALUES (?, ?, ?, CURRENT_TIMESTAMP)
      ON CONFLICT(user_id, product_id) DO UPDATE SET
        xp_earned = xp_earned + ?,
        last_activity_at = CURRENT_TIMESTAMP
    `).bind(userId, product.id, finalXp, finalXp).run()

    // Log the XP
    await DB.prepare(`
      INSERT INTO xp_log (user_id, product_id, action, xp_amount, description)
      VALUES (?, ?, ?, ?, ?)
    `).bind(userId, product.id, action, finalXp, description).run()

    // Check for level up
    const user = await DB.prepare('SELECT total_xp, current_level FROM users WHERE id = ?').bind(userId).first()
    const newLevel = calculateLevel(user?.total_xp || 0)
    
    if (newLevel > (user?.current_level || 1)) {
      const newTier = calculateTier(newLevel)
      await DB.prepare(`
        UPDATE users SET current_level = ?, tier = ? WHERE id = ?
      `).bind(newLevel, newTier, userId).run()
    }

    return c.json({ 
      success: true, 
      data: { 
        xpAwarded: finalXp, 
        newTotal: (user?.total_xp || 0) + finalXp,
        newLevel 
      }
    })
  } catch (error) {
    return c.json({ success: false, error: 'Failed to award XP' }, 500)
  }
})

// Helper functions
function calculateLevel(xp: number): number {
  // XP needed for each level increases: Level 1=0, Level 2=100, Level 3=250, etc.
  if (xp < 100) return 1
  if (xp < 250) return 2
  if (xp < 500) return 3
  if (xp < 850) return 4
  if (xp < 1300) return 5
  if (xp < 1900) return 6
  if (xp < 2600) return 7
  if (xp < 3500) return 8
  if (xp < 4600) return 9
  if (xp < 6000) return 10
  return Math.floor(10 + (xp - 6000) / 1000)
}

function calculateTier(level: number): string {
  if (level < 5) return 'Bronze'
  if (level < 10) return 'Silver'
  if (level < 20) return 'Gold'
  if (level < 35) return 'Platinum'
  return 'Dragon'
}

export default app
