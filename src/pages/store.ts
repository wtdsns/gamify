import { baseHead, navbar, footer } from './layout'

const rewards = [
  { id: 1, name: 'Golden Dragon Frame', desc: 'A prestigious golden frame for your avatar', type: 'virtual', image: '🖼️', costCoins: 500, costGems: 0, featured: true, category: 'avatars' },
  { id: 2, name: 'Fire Dragon Frame', desc: 'Blazing frame that shows your passion', type: 'virtual', image: '🔥', costCoins: 300, costGems: 0, featured: false, category: 'avatars' },
  { id: 3, name: '24H XP Boost', desc: 'Double XP for 24 hours', type: 'power_boost', image: '⚡', costCoins: 200, costGems: 0, featured: true, category: 'boosts' },
  { id: 4, name: 'Weekly XP Boost', desc: 'Double XP for 7 days', type: 'power_boost', image: '🚀', costCoins: 0, costGems: 25, featured: true, category: 'boosts' },
  { id: 5, name: 'Hero Costume Pack 1', desc: 'Exclusive costumes for your heroes', type: 'virtual', image: '👔', costCoins: 0, costGems: 50, featured: false, category: 'heroes' },
  { id: 6, name: 'Digital Certificate', desc: 'Shareable certificate of your achievements', type: 'redeemable', image: '📜', costCoins: 1000, costGems: 0, featured: true, category: 'rewards' },
  { id: 7, name: 'Mentorship Session', desc: '30-minute session with an industry expert', type: 'redeemable', image: '👨‍🏫', costCoins: 0, costGems: 100, featured: true, category: 'rewards' },
  { id: 8, name: 'SNS Swag Pack', desc: 'Exclusive SNS Innovation Hub merchandise', type: 'redeemable', image: '🎁', costCoins: 2000, costGems: 0, featured: true, category: 'rewards' },
  { id: 9, name: 'Streak Shield', desc: 'Protect your streak for one day', type: 'power_boost', image: '🛡️', costCoins: 150, costGems: 0, featured: false, category: 'boosts' },
  { id: 10, name: 'Mystery Box', desc: 'Random reward - could be anything!', type: 'virtual', image: '📦', costCoins: 100, costGems: 0, featured: false, category: 'special' },
  { id: 11, name: 'Elsa Unlock', desc: 'Unlock the Frozen Queen immediately', type: 'hero_unlock', image: '❄️', costCoins: 0, costGems: 30, featured: false, category: 'heroes' },
  { id: 12, name: 'Iron Man Unlock', desc: 'Unlock the Genius Hero immediately', type: 'hero_unlock', image: '🦾', costCoins: 0, costGems: 75, featured: false, category: 'heroes' },
]

const categories = [
  { id: 'all', name: 'All Items', icon: '🛍️' },
  { id: 'featured', name: 'Featured', icon: '⭐' },
  { id: 'boosts', name: 'Power Boosts', icon: '⚡' },
  { id: 'avatars', name: 'Avatars', icon: '🖼️' },
  { id: 'heroes', name: 'Heroes', icon: '🦸' },
  { id: 'rewards', name: 'Real Rewards', icon: '🎁' },
]

export const storePage = () => `
${baseHead('Rewards Store')}
<body class="bg-slate-900">
  ${navbar('store')}
  
  <!-- Page Header -->
  <section class="pt-24 pb-8 bg-gradient-to-b from-purple-900/50 to-slate-900">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h1 class="hero-title text-5xl md:text-6xl text-white mb-4" data-aos="fade-up">
        Rewards <span class="text-yellow-400">Store</span> 🛍️
      </h1>
      <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
        Spend your hard-earned coins and gems on awesome rewards!
      </p>
      
      <!-- Balance -->
      <div class="flex justify-center gap-6" data-aos="fade-up" data-aos-delay="200">
        <div class="bg-yellow-500/20 backdrop-blur rounded-2xl px-8 py-4 border border-yellow-500/30">
          <div class="text-4xl font-bold text-yellow-400">🪙 450</div>
          <div class="text-yellow-300/70 text-sm">Coins</div>
        </div>
        <div class="bg-purple-500/20 backdrop-blur rounded-2xl px-8 py-4 border border-purple-500/30">
          <div class="text-4xl font-bold text-purple-400">💎 25</div>
          <div class="text-purple-300/70 text-sm">Gems</div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Category Filter -->
  <section class="py-4 bg-slate-900/50 sticky top-16 z-40 backdrop-blur">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex flex-wrap justify-center gap-3">
        ${categories.map((cat, index) => `
          <button class="store-cat-btn ${index === 0 ? 'active bg-gradient-to-r from-yellow-500 to-orange-500 text-black' : 'bg-white/10 text-gray-300 hover:bg-white/20'} px-5 py-2 rounded-full font-medium transition flex items-center gap-2" data-category="${cat.id}">
            <span>${cat.icon}</span>
            <span>${cat.name}</span>
          </button>
        `).join('')}
      </div>
    </div>
  </section>
  
  <!-- Featured Banner -->
  <section class="py-8 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4">
      <div class="bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 rounded-3xl p-6 border border-yellow-500/30" data-aos="fade-up">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <div class="text-7xl animate-bounce-slow">🎁</div>
          <div class="flex-1 text-center md:text-left">
            <span class="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">LIMITED TIME</span>
            <h2 class="text-2xl font-bold text-white mt-2">Weekly Special Offer!</h2>
            <p class="text-gray-400">Get the SNS Swag Pack at 20% off this week only!</p>
          </div>
          <button class="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition">
            🪙 1,600 (was 2,000)
          </button>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Store Grid -->
  <section class="py-8 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="storeGrid">
        ${rewards.map((item, index) => `
          <div class="store-item bg-white/5 backdrop-blur rounded-2xl overflow-hidden border border-white/10 card-hover group ${item.featured ? 'ring-2 ring-yellow-500/50' : ''}" 
               data-category="${item.category}" data-featured="${item.featured}" data-aos="zoom-in" data-aos-delay="${index * 50}">
            ${item.featured ? '<div class="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-center text-xs font-bold py-1">⭐ FEATURED</div>' : ''}
            
            <div class="p-6">
              <!-- Item Image -->
              <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl flex items-center justify-center text-5xl group-hover:scale-110 transition">
                ${item.image}
              </div>
              
              <!-- Item Info -->
              <h3 class="text-lg font-bold text-white text-center mb-1">${item.name}</h3>
              <p class="text-gray-400 text-sm text-center mb-4">${item.desc}</p>
              
              <!-- Type Badge -->
              <div class="text-center mb-4">
                <span class="text-xs px-3 py-1 rounded-full ${getTypeBadgeClass(item.type)}">${formatType(item.type)}</span>
              </div>
              
              <!-- Price & Buy Button -->
              <div class="space-y-3">
                <div class="text-center">
                  ${item.costCoins > 0 ? `<span class="text-yellow-400 font-bold text-xl">🪙 ${item.costCoins}</span>` : ''}
                  ${item.costGems > 0 ? `<span class="text-purple-400 font-bold text-xl">💎 ${item.costGems}</span>` : ''}
                </div>
                
                <button class="w-full py-3 rounded-xl font-bold transition ${canAfford(item) ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:scale-105' : 'bg-gray-600 text-gray-400 cursor-not-allowed'}">
                  ${canAfford(item) ? '🛒 Purchase' : '❌ Not Enough'}
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
  
  <!-- Earn More Section -->
  <section class="py-16 bg-gradient-to-b from-slate-900 to-purple-900/30">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="hero-title text-3xl md:text-4xl text-white mb-4" data-aos="fade-up">
          Need More <span class="text-yellow-400">Currency?</span> 💰
        </h2>
        <p class="text-gray-400" data-aos="fade-up" data-aos-delay="100">
          Here's how to earn coins and gems!
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white/5 rounded-2xl p-6 border border-white/10 text-center" data-aos="fade-up">
          <div class="text-5xl mb-4">🎯</div>
          <h3 class="text-xl font-bold text-white mb-2">Complete Challenges</h3>
          <p class="text-gray-400 text-sm mb-3">Daily and weekly challenges reward coins</p>
          <div class="text-yellow-400 font-bold">+10-75 🪙 per challenge</div>
        </div>
        
        <div class="bg-white/5 rounded-2xl p-6 border border-white/10 text-center" data-aos="fade-up" data-aos-delay="100">
          <div class="text-5xl mb-4">🏆</div>
          <h3 class="text-xl font-bold text-white mb-2">Unlock Achievements</h3>
          <p class="text-gray-400 text-sm mb-3">Achievements give both coins and XP</p>
          <div class="text-yellow-400 font-bold">+20-1000 🪙 per achievement</div>
        </div>
        
        <div class="bg-white/5 rounded-2xl p-6 border border-white/10 text-center" data-aos="fade-up" data-aos-delay="200">
          <div class="text-5xl mb-4">📈</div>
          <h3 class="text-xl font-bold text-white mb-2">Level Up</h3>
          <p class="text-gray-400 text-sm mb-3">Each level grants gems as bonus</p>
          <div class="text-purple-400 font-bold">+5-20 💎 per level</div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Purchase History -->
  <section class="py-12 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-2xl font-bold text-white mb-6" data-aos="fade-up">Recent Purchases</h2>
      
      <div class="bg-white/5 rounded-2xl p-6 border border-white/10" data-aos="fade-up">
        <div class="space-y-4">
          <div class="flex items-center gap-4 p-3 bg-white/5 rounded-xl">
            <div class="text-3xl">⚡</div>
            <div class="flex-1">
              <p class="text-white font-medium">24H XP Boost</p>
              <p class="text-gray-500 text-xs">Purchased 3 days ago</p>
            </div>
            <div class="text-yellow-400">-200 🪙</div>
          </div>
          <div class="flex items-center gap-4 p-3 bg-white/5 rounded-xl">
            <div class="text-3xl">🔥</div>
            <div class="flex-1">
              <p class="text-white font-medium">Fire Dragon Frame</p>
              <p class="text-gray-500 text-xs">Purchased 1 week ago</p>
            </div>
            <div class="text-yellow-400">-300 🪙</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  ${footer}
  
  <script>
    // User balance (demo)
    const userCoins = 450;
    const userGems = 25;
    
    // Category filter
    document.querySelectorAll('.store-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.store-cat-btn').forEach(b => {
          b.classList.remove('active', 'bg-gradient-to-r', 'from-yellow-500', 'to-orange-500', 'text-black');
          b.classList.add('bg-white/10', 'text-gray-300');
        });
        btn.classList.add('active', 'bg-gradient-to-r', 'from-yellow-500', 'to-orange-500', 'text-black');
        btn.classList.remove('bg-white/10', 'text-gray-300');
        
        const category = btn.dataset.category;
        document.querySelectorAll('.store-item').forEach(item => {
          const itemCategory = item.dataset.category;
          const isFeatured = item.dataset.featured === 'true';
          
          if (category === 'all') {
            item.style.display = 'block';
          } else if (category === 'featured') {
            item.style.display = isFeatured ? 'block' : 'none';
          } else {
            item.style.display = itemCategory === category ? 'block' : 'none';
          }
        });
      });
    });
  </script>
</body>
`

function getTypeBadgeClass(type: string): string {
  switch(type) {
    case 'virtual': return 'bg-blue-500/30 text-blue-400'
    case 'power_boost': return 'bg-green-500/30 text-green-400'
    case 'redeemable': return 'bg-orange-500/30 text-orange-400'
    case 'hero_unlock': return 'bg-purple-500/30 text-purple-400'
    default: return 'bg-gray-500/30 text-gray-400'
  }
}

function formatType(type: string): string {
  switch(type) {
    case 'virtual': return '🎨 Virtual Item'
    case 'power_boost': return '⚡ Power Boost'
    case 'redeemable': return '🎁 Redeemable'
    case 'hero_unlock': return '🦸 Hero Unlock'
    default: return type
  }
}

function canAfford(item: any): boolean {
  const userCoins = 450
  const userGems = 25
  if (item.costCoins > 0 && item.costCoins > userCoins) return false
  if (item.costGems > 0 && item.costGems > userGems) return false
  return true
}
