import { baseHead, navbar, footer } from './layout'

const achievements = [
  { id: 1, name: 'Welcome Dragon!', desc: 'Begin your journey in the 1000 Dragons universe', icon: '🐣', category: 'milestone', xp: 50, coins: 20, rarity: 'common', unlocked: true },
  { id: 2, name: 'Hero Within', desc: 'Choose your first superhero companion', icon: '🦸', category: 'milestone', xp: 100, coins: 30, rarity: 'common', unlocked: true },
  { id: 3, name: 'Warming Up', desc: 'Login for 3 consecutive days', icon: '🔥', category: 'streak', xp: 75, coins: 25, rarity: 'common', unlocked: true },
  { id: 4, name: 'On Fire!', desc: 'Login for 7 consecutive days', icon: '🔥', category: 'streak', xp: 200, coins: 50, rarity: 'rare', unlocked: true },
  { id: 5, name: 'Unstoppable!', desc: 'Login for 30 consecutive days', icon: '⚡', category: 'streak', xp: 1000, coins: 200, rarity: 'epic', unlocked: false, progress: 7, target: 30 },
  { id: 6, name: 'Rising Star', desc: 'Reach Level 5', icon: '⭐', category: 'milestone', xp: 150, coins: 40, rarity: 'common', unlocked: true },
  { id: 7, name: 'Dragon Apprentice', desc: 'Reach Level 10', icon: '🌟', category: 'milestone', xp: 500, coins: 100, rarity: 'rare', unlocked: false, progress: 8, target: 10 },
  { id: 8, name: 'Dragon Master', desc: 'Reach Level 25', icon: '💫', category: 'milestone', xp: 1500, coins: 300, rarity: 'epic', unlocked: false, progress: 8, target: 25 },
  { id: 9, name: 'Dragon Lord', desc: 'Reach Level 50', icon: '👑', category: 'milestone', xp: 5000, coins: 1000, rarity: 'legendary', unlocked: false, progress: 8, target: 50 },
  { id: 10, name: 'Collector Supreme', desc: 'Unlock all 15 superheroes', icon: '🎭', category: 'special', xp: 3000, coins: 500, rarity: 'legendary', unlocked: false, progress: 3, target: 15 },
  { id: 11, name: 'XP Hunter', desc: 'Earn 1000 total XP', icon: '💎', category: 'milestone', xp: 100, coins: 50, rarity: 'common', unlocked: true },
  { id: 12, name: 'XP Champion', desc: 'Earn 10000 total XP', icon: '💎', category: 'milestone', xp: 500, coins: 150, rarity: 'rare', unlocked: false, progress: 2500, target: 10000 },
  { id: 13, name: 'Challenge Seeker', desc: 'Complete 10 challenges', icon: '🎯', category: 'skill', xp: 200, coins: 75, rarity: 'common', unlocked: true },
  { id: 14, name: 'Challenge Master', desc: 'Complete 50 challenges', icon: '🎯', category: 'skill', xp: 750, coins: 200, rarity: 'rare', unlocked: false, progress: 38, target: 50 },
  { id: 15, name: 'Explorer', desc: 'Use 3 different products', icon: '🧭', category: 'special', xp: 300, coins: 100, rarity: 'rare', unlocked: true },
  { id: 16, name: 'Dragon Suite Master', desc: 'Use all 7 products', icon: '🐉', category: 'special', xp: 2000, coins: 500, rarity: 'legendary', unlocked: false, progress: 3, target: 7 },
]

const categories = [
  { id: 'all', name: 'All', icon: '🏆' },
  { id: 'milestone', name: 'Milestones', icon: '🎖️' },
  { id: 'streak', name: 'Streaks', icon: '🔥' },
  { id: 'skill', name: 'Skills', icon: '⚡' },
  { id: 'special', name: 'Special', icon: '✨' },
]

export const achievementsPage = () => `
${baseHead('Achievements')}
<body class="bg-slate-900">
  ${navbar('achievements')}
  
  <!-- Page Header -->
  <section class="pt-24 pb-8 bg-gradient-to-b from-purple-900/50 to-slate-900">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h1 class="hero-title text-5xl md:text-6xl text-white mb-4" data-aos="fade-up">
        <span class="text-purple-400">Achievements</span> 🏆
      </h1>
      <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
        Collect badges, unlock rewards, and showcase your accomplishments!
      </p>
      
      <!-- Stats -->
      <div class="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
        <div class="bg-white/10 backdrop-blur rounded-2xl px-6 py-4">
          <div class="text-3xl font-bold text-yellow-400">${achievements.filter(a => a.unlocked).length}/${achievements.length}</div>
          <div class="text-gray-400 text-sm">Unlocked</div>
        </div>
        <div class="bg-white/10 backdrop-blur rounded-2xl px-6 py-4">
          <div class="text-3xl font-bold text-green-400">+1,225</div>
          <div class="text-gray-400 text-sm">XP Earned</div>
        </div>
        <div class="bg-white/10 backdrop-blur rounded-2xl px-6 py-4">
          <div class="text-3xl font-bold text-orange-400">+340</div>
          <div class="text-gray-400 text-sm">Coins Earned</div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Category Filter -->
  <section class="py-4 bg-slate-900/50 sticky top-16 z-40 backdrop-blur">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex flex-wrap justify-center gap-3">
        ${categories.map((cat, index) => `
          <button class="achievement-cat-btn ${index === 0 ? 'active bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'} px-5 py-2 rounded-full font-medium transition flex items-center gap-2" data-category="${cat.id}">
            <span>${cat.icon}</span>
            <span>${cat.name}</span>
          </button>
        `).join('')}
      </div>
    </div>
  </section>
  
  <!-- Achievements Grid -->
  <section class="py-12 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4">
      
      <!-- Unlocked Achievements -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-2" data-aos="fade-up">
          <span class="text-green-400">✅</span> Unlocked Achievements
        </h2>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" id="unlockedGrid">
          ${achievements.filter(a => a.unlocked).map((achievement, index) => `
            <div class="achievement-card bg-gradient-to-br from-${getRarityColor(achievement.rarity)}-500/20 to-${getRarityColor(achievement.rarity)}-900/10 rounded-2xl p-5 border-2 border-${getRarityColor(achievement.rarity)}-500/50 rarity-${achievement.rarity} card-hover" 
                 data-category="${achievement.category}" data-aos="zoom-in" data-aos-delay="${index * 50}">
              <div class="flex items-start justify-between mb-3">
                <div class="text-4xl">${achievement.icon}</div>
                <span class="text-xs font-bold uppercase px-2 py-1 rounded-full bg-${getRarityColor(achievement.rarity)}-500/30 text-${getRarityColor(achievement.rarity)}-400">${achievement.rarity}</span>
              </div>
              <h3 class="text-lg font-bold text-white mb-1">${achievement.name}</h3>
              <p class="text-gray-400 text-sm mb-3">${achievement.desc}</p>
              <div class="flex items-center gap-3 text-sm">
                <span class="text-green-400">+${achievement.xp} XP</span>
                <span class="text-yellow-400">+${achievement.coins} 🪙</span>
              </div>
              <div class="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                <span class="text-green-400 text-sm font-medium">✓ Unlocked</span>
                <span class="text-gray-500 text-xs">${achievement.category}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <!-- Locked Achievements -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-2" data-aos="fade-up">
          <span class="text-gray-500">🔒</span> Locked Achievements
        </h2>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" id="lockedGrid">
          ${achievements.filter(a => !a.unlocked).map((achievement, index) => `
            <div class="achievement-card relative bg-white/5 rounded-2xl p-5 border border-white/10 card-hover overflow-hidden" 
                 data-category="${achievement.category}" data-aos="zoom-in" data-aos-delay="${index * 50}">
              <!-- Lock overlay -->
              <div class="absolute inset-0 bg-black/30 backdrop-blur-[1px] z-10"></div>
              
              <div class="relative z-0">
                <div class="flex items-start justify-between mb-3">
                  <div class="text-4xl opacity-50">${achievement.icon}</div>
                  <span class="text-xs font-bold uppercase px-2 py-1 rounded-full bg-white/10 text-gray-400">${achievement.rarity}</span>
                </div>
                <h3 class="text-lg font-bold text-white/70 mb-1">${achievement.name}</h3>
                <p class="text-gray-500 text-sm mb-3">${achievement.desc}</p>
                
                <!-- Progress bar -->
                ${achievement.progress !== undefined ? `
                  <div class="mb-3">
                    <div class="flex justify-between text-xs mb-1">
                      <span class="text-gray-400">Progress</span>
                      <span class="text-gray-400">${achievement.progress}/${achievement.target}</span>
                    </div>
                    <div class="bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div class="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all" style="width: ${(achievement.progress / achievement.target) * 100}%"></div>
                    </div>
                  </div>
                ` : ''}
                
                <div class="flex items-center gap-3 text-sm">
                  <span class="text-gray-500">+${achievement.xp} XP</span>
                  <span class="text-gray-500">+${achievement.coins} 🪙</span>
                </div>
                <div class="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span class="text-gray-500 text-sm font-medium">🔒 Locked</span>
                  <span class="text-gray-600 text-xs">${achievement.category}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
    </div>
  </section>
  
  <!-- Achievement Showcase -->
  <section class="py-16 bg-gradient-to-b from-slate-900 to-purple-900/30">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="hero-title text-3xl md:text-4xl text-white mb-4" data-aos="fade-up">
          Rarity <span class="text-yellow-400">Guide</span> ✨
        </h2>
      </div>
      
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-gray-500/10 rounded-2xl p-6 border border-gray-500/30 text-center" data-aos="fade-up">
          <div class="text-5xl mb-3">🥉</div>
          <h3 class="text-xl font-bold text-gray-300 mb-2">Common</h3>
          <p class="text-gray-500 text-sm">Basic achievements for starting your journey</p>
          <div class="mt-3 text-gray-400">${achievements.filter(a => a.rarity === 'common').length} Achievements</div>
        </div>
        
        <div class="bg-blue-500/10 rounded-2xl p-6 border border-blue-500/30 text-center" data-aos="fade-up" data-aos-delay="100">
          <div class="text-5xl mb-3">🥈</div>
          <h3 class="text-xl font-bold text-blue-300 mb-2">Rare</h3>
          <p class="text-gray-500 text-sm">Requires dedication and consistent effort</p>
          <div class="mt-3 text-blue-400">${achievements.filter(a => a.rarity === 'rare').length} Achievements</div>
        </div>
        
        <div class="bg-purple-500/10 rounded-2xl p-6 border border-purple-500/30 text-center" data-aos="fade-up" data-aos-delay="200">
          <div class="text-5xl mb-3">🥇</div>
          <h3 class="text-xl font-bold text-purple-300 mb-2">Epic</h3>
          <p class="text-gray-500 text-sm">For the most dedicated dragons</p>
          <div class="mt-3 text-purple-400">${achievements.filter(a => a.rarity === 'epic').length} Achievements</div>
        </div>
        
        <div class="bg-yellow-500/10 rounded-2xl p-6 border border-yellow-500/30 text-center animate-glow" data-aos="fade-up" data-aos-delay="300">
          <div class="text-5xl mb-3 animate-bounce-slow">👑</div>
          <h3 class="text-xl font-bold text-yellow-300 mb-2">Legendary</h3>
          <p class="text-gray-500 text-sm">Ultra-rare, only true legends achieve these</p>
          <div class="mt-3 text-yellow-400">${achievements.filter(a => a.rarity === 'legendary').length} Achievements</div>
        </div>
      </div>
    </div>
  </section>
  
  ${footer}
  
  <script>
    // Category filter
    document.querySelectorAll('.achievement-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.achievement-cat-btn').forEach(b => {
          b.classList.remove('active', 'bg-gradient-to-r', 'from-purple-500', 'to-pink-500', 'text-white');
          b.classList.add('bg-white/10', 'text-gray-300');
        });
        btn.classList.add('active', 'bg-gradient-to-r', 'from-purple-500', 'to-pink-500', 'text-white');
        btn.classList.remove('bg-white/10', 'text-gray-300');
        
        const category = btn.dataset.category;
        document.querySelectorAll('.achievement-card').forEach(card => {
          if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  </script>
</body>
`

function getRarityColor(rarity: string): string {
  switch(rarity) {
    case 'common': return 'gray'
    case 'rare': return 'blue'
    case 'epic': return 'purple'
    case 'legendary': return 'yellow'
    default: return 'gray'
  }
}
