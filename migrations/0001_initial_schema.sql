-- 1000 Dragons Gamification Hub - Database Schema
-- SNS Innovation Hub - Building 1000 AI Startups

-- Users table with SSO support
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL,
  avatar_url TEXT,
  current_hero_id INTEGER,
  total_xp INTEGER DEFAULT 0,
  current_level INTEGER DEFAULT 1,
  tier TEXT DEFAULT 'Bronze',
  coins INTEGER DEFAULT 100,
  gems INTEGER DEFAULT 10,
  streak_days INTEGER DEFAULT 0,
  last_active_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 15 Superheroes
CREATE TABLE IF NOT EXISTS heroes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE NOT NULL,
  tagline TEXT,
  description TEXT,
  category TEXT, -- kids, action, comedy, adventure
  color_primary TEXT,
  color_secondary TEXT,
  emoji TEXT,
  unlock_type TEXT DEFAULT 'free', -- free, xp, coins, gems, achievement
  unlock_cost INTEGER DEFAULT 0,
  unlock_level INTEGER DEFAULT 1,
  base_power INTEGER DEFAULT 100,
  special_ability TEXT,
  evolution_stages INTEGER DEFAULT 3,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- User-Hero ownership and progression
CREATE TABLE IF NOT EXISTS user_heroes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  hero_id INTEGER NOT NULL,
  unlocked_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  evolution_stage INTEGER DEFAULT 1,
  hero_xp INTEGER DEFAULT 0,
  hero_level INTEGER DEFAULT 1,
  times_selected INTEGER DEFAULT 0,
  is_favorite INTEGER DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (hero_id) REFERENCES heroes(id),
  UNIQUE(user_id, hero_id)
);

-- Products in the 1000 Dragons suite
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  color TEXT,
  xp_multiplier REAL DEFAULT 1.0,
  is_active INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Product-specific XP tracking
CREATE TABLE IF NOT EXISTS user_product_xp (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  xp_earned INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  challenges_completed INTEGER DEFAULT 0,
  last_activity_at DATETIME,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (product_id) REFERENCES products(id),
  UNIQUE(user_id, product_id)
);

-- Achievements system
CREATE TABLE IF NOT EXISTS achievements (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  category TEXT, -- milestone, skill, social, streak, special
  xp_reward INTEGER DEFAULT 50,
  coins_reward INTEGER DEFAULT 0,
  gems_reward INTEGER DEFAULT 0,
  rarity TEXT DEFAULT 'common', -- common, rare, epic, legendary
  product_id INTEGER, -- NULL for global achievements
  requirement_type TEXT,
  requirement_value INTEGER,
  is_hidden INTEGER DEFAULT 0,
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- User achievements
CREATE TABLE IF NOT EXISTS user_achievements (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  achievement_id INTEGER NOT NULL,
  unlocked_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  progress INTEGER DEFAULT 0,
  is_claimed INTEGER DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (achievement_id) REFERENCES achievements(id),
  UNIQUE(user_id, achievement_id)
);

-- Daily/Weekly Challenges
CREATE TABLE IF NOT EXISTS challenges (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  challenge_type TEXT, -- daily, weekly, special, product
  product_id INTEGER, -- NULL for global challenges
  xp_reward INTEGER DEFAULT 25,
  coins_reward INTEGER DEFAULT 10,
  requirement_type TEXT,
  requirement_value INTEGER,
  refresh_hours INTEGER DEFAULT 24,
  is_active INTEGER DEFAULT 1,
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- User challenge progress
CREATE TABLE IF NOT EXISTS user_challenges (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  challenge_id INTEGER NOT NULL,
  progress INTEGER DEFAULT 0,
  is_completed INTEGER DEFAULT 0,
  completed_at DATETIME,
  assigned_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  expires_at DATETIME,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (challenge_id) REFERENCES challenges(id)
);

-- Rewards Store
CREATE TABLE IF NOT EXISTS rewards (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  reward_type TEXT, -- virtual, redeemable, hero_unlock, power_boost
  image_url TEXT,
  cost_coins INTEGER DEFAULT 0,
  cost_gems INTEGER DEFAULT 0,
  stock INTEGER DEFAULT -1, -- -1 for unlimited
  is_featured INTEGER DEFAULT 0,
  is_active INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- User reward redemptions
CREATE TABLE IF NOT EXISTS user_rewards (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  reward_id INTEGER NOT NULL,
  redeemed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'pending', -- pending, delivered, cancelled
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (reward_id) REFERENCES rewards(id)
);

-- XP Activity log
CREATE TABLE IF NOT EXISTS xp_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  product_id INTEGER,
  action TEXT NOT NULL,
  xp_amount INTEGER NOT NULL,
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Leaderboard snapshots (for performance)
CREATE TABLE IF NOT EXISTS leaderboard_cache (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  leaderboard_type TEXT NOT NULL, -- global, product, weekly, monthly
  product_id INTEGER,
  user_id INTEGER NOT NULL,
  rank INTEGER NOT NULL,
  score INTEGER NOT NULL,
  cached_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_users_total_xp ON users(total_xp DESC);
CREATE INDEX IF NOT EXISTS idx_users_tier ON users(tier);
CREATE INDEX IF NOT EXISTS idx_user_heroes_user ON user_heroes(user_id);
CREATE INDEX IF NOT EXISTS idx_user_product_xp_user ON user_product_xp(user_id);
CREATE INDEX IF NOT EXISTS idx_xp_log_user ON xp_log(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leaderboard_cache ON leaderboard_cache(leaderboard_type, rank);
