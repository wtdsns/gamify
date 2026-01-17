import { baseHead, navbar, footer } from './layout'

const heroes = [
  { id: 1, name: 'Spider-Man', emoji: '🕷️', tagline: 'Your Friendly Neighborhood Hero!', desc: 'With great power comes great responsibility. Swing through challenges with agility and quick thinking!', color: '#E23636', colorSecondary: '#1A1A2E', category: 'action', unlockType: 'free', unlockCost: 0, unlockLevel: 1, power: 120, ability: 'Web of Learning - Connects related concepts together', evolutions: 3, stars: 5 },
  { id: 2, name: 'Chhota Bheem', emoji: '💪', tagline: 'Super Strong & Smart!', desc: 'Laddu-powered strength meets street-smart wisdom. Face every challenge head-on!', color: '#FF8C00', colorSecondary: '#8B4513', category: 'kids', unlockType: 'free', unlockCost: 0, unlockLevel: 1, power: 130, ability: 'Laddu Boost - Extra energy for marathon sessions', evolutions: 3, stars: 5 },
  { id: 3, name: 'Mickey Mouse', emoji: '🐭', tagline: 'Fun & Friendship!', desc: 'Where magic meets determination. Every challenge is an adventure waiting to happen!', color: '#FF0000', colorSecondary: '#FFD700', category: 'kids', unlockType: 'free', unlockCost: 0, unlockLevel: 1, power: 100, ability: 'Magic Spark - Turns difficult tasks fun', evolutions: 3, stars: 5 },
  { id: 4, name: 'Elsa', emoji: '❄️', tagline: 'Let It Go!', desc: 'Embrace your unique powers. Transform challenges into beautiful achievements!', color: '#89CFF0', colorSecondary: '#FFFFFF', category: 'adventure', unlockType: 'xp', unlockCost: 500, unlockLevel: 5, power: 140, ability: 'Frozen Focus - Enhanced concentration mode', evolutions: 4, stars: 4 },
  { id: 5, name: 'Minions', emoji: '🍌', tagline: 'Banana! Bello!', desc: 'Teamwork makes the dream work! Chaotic but effective problem solvers.', color: '#FFD700', colorSecondary: '#0033A0', category: 'comedy', unlockType: 'free', unlockCost: 0, unlockLevel: 1, power: 90, ability: 'Banana Split - Multitask mastery', evolutions: 3, stars: 4 },
  { id: 6, name: 'Doraemon', emoji: '🤖', tagline: 'Gadget Master!', desc: 'Got a problem? There is a gadget for that! Future-tech solutions for today.', color: '#0095D9', colorSecondary: '#FFFFFF', category: 'kids', unlockType: 'coins', unlockCost: 200, unlockLevel: 3, power: 150, ability: 'Pocket Dimension - Access hidden resources', evolutions: 4, stars: 5 },
  { id: 7, name: 'Peppa Pig', emoji: '🐷', tagline: 'Snort Snort Fun!', desc: 'Jump in muddy puddles of knowledge! Learning is always an adventure.', color: '#FF69B4', colorSecondary: '#FFB6C1', category: 'kids', unlockType: 'free', unlockCost: 0, unlockLevel: 1, power: 85, ability: 'Puddle Jump - Leap over obstacles easily', evolutions: 3, stars: 4 },
  { id: 8, name: 'Pikachu', emoji: '⚡', tagline: 'Pika Pika!', desc: 'Electric enthusiasm for every challenge! Shock your way to success.', color: '#FFD700', colorSecondary: '#FFA500', category: 'adventure', unlockType: 'xp', unlockCost: 300, unlockLevel: 3, power: 135, ability: 'Thunder Shock - Instant energy burst', evolutions: 4, stars: 5 },
  { id: 9, name: 'Iron Man', emoji: '🦾', tagline: 'Genius Hero!', desc: 'Billionaire, genius, hero. Build your way to greatness with tech and tenacity!', color: '#B22222', colorSecondary: '#FFD700', category: 'action', unlockType: 'gems', unlockCost: 50, unlockLevel: 10, power: 160, ability: 'Arc Reactor - Unlimited creative energy', evolutions: 5, stars: 5 },
  { id: 10, name: 'Paw Patrol', emoji: '🐾', tagline: 'Ready for Action!', desc: 'No job is too big, no pup is too small! Team up to tackle any mission.', color: '#4169E1', colorSecondary: '#FF6347', category: 'kids', unlockType: 'free', unlockCost: 0, unlockLevel: 1, power: 95, ability: 'Team Call - Summon help when stuck', evolutions: 3, stars: 4 },
  { id: 11, name: 'Ben 10', emoji: '⌚', tagline: 'Its Hero Time!', desc: 'Transform and adapt to any challenge. 10 solutions for every problem!', color: '#32CD32', colorSecondary: '#000000', category: 'action', unlockType: 'xp', unlockCost: 800, unlockLevel: 8, power: 145, ability: 'Omnitrix Transform - Adapt to any challenge type', evolutions: 5, stars: 5 },
  { id: 12, name: 'Motu & Patlu', emoji: '🥟', tagline: 'Best Friends Forever!', desc: 'Two heads are better than one! Samosa-powered problem solving duo.', color: '#FF4500', colorSecondary: '#32CD32', category: 'comedy', unlockType: 'coins', unlockCost: 150, unlockLevel: 2, power: 100, ability: 'Samosa Power - Boost from snack breaks', evolutions: 3, stars: 4 },
  { id: 13, name: 'Hulk', emoji: '💚', tagline: 'Hulk Smash!', desc: 'The madder you get, the stronger you become. Smash through any obstacle!', color: '#228B22', colorSecondary: '#9932CC', category: 'action', unlockType: 'xp', unlockCost: 1000, unlockLevel: 12, power: 180, ability: 'Rage Mode - Power through difficult content', evolutions: 4, stars: 5 },
  { id: 14, name: 'Lightning McQueen', emoji: '🏎️', tagline: 'Ka-Chow!', desc: 'Speed is not everything, but winning is! Race to the top of leaderboards.', color: '#DC143C', colorSecondary: '#FFD700', category: 'adventure', unlockType: 'coins', unlockCost: 300, unlockLevel: 5, power: 125, ability: 'Turbo Boost - Speed completion bonus', evolutions: 4, stars: 5 },
  { id: 15, name: 'Kung Fu Panda', emoji: '🐼', tagline: 'Skadoosh!', desc: 'There is no secret ingredient. The power was inside you all along!', color: '#000000', colorSecondary: '#FFD700', category: 'action', unlockType: 'gems', unlockCost: 30, unlockLevel: 7, power: 155, ability: 'Inner Peace - Perfect calm during tests', evolutions: 5, stars: 5 },
]

const categories = [
  { id: 'all', name: 'All Heroes', icon: '🌟' },
  { id: 'kids', name: 'Kids Favorites', icon: '👶' },
  { id: 'action', name: 'Action Heroes', icon: '💥' },
  { id: 'adventure', name: 'Adventure', icon: '🗺️' },
  { id: 'comedy', name: 'Comedy', icon: '😂' },
]

export const heroesPage = () => `
${baseHead('Meet Your Heroes')}
<body class="bg-slate-900">
  ${navbar('heroes')}
  
  <!-- Page Header -->
  <section class="pt-24 pb-12 bg-gradient-to-b from-purple-900/50 to-slate-900">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h1 class="hero-title text-5xl md:text-6xl text-white mb-4" data-aos="fade-up">
        Meet Your <span class="text-yellow-400">Super Friends!</span> ✨
      </h1>
      <p class="text-xl text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        Choose your companion wisely. Each hero brings unique powers to help you on your journey!
      </p>
      
      <!-- User Stats Bar -->
      <div class="flex flex-wrap justify-center gap-4 mt-8" data-aos="fade-up" data-aos-delay="200">
        <div class="bg-white/10 backdrop-blur rounded-full px-6 py-2 flex items-center gap-2">
          <span class="text-yellow-400">🪙</span>
          <span class="text-white font-bold">450 Coins</span>
        </div>
        <div class="bg-white/10 backdrop-blur rounded-full px-6 py-2 flex items-center gap-2">
          <span class="text-purple-400">💎</span>
          <span class="text-white font-bold">25 Gems</span>
        </div>
        <div class="bg-white/10 backdrop-blur rounded-full px-6 py-2 flex items-center gap-2">
          <span class="text-green-400">⚡</span>
          <span class="text-white font-bold">2,500 XP</span>
        </div>
        <div class="bg-white/10 backdrop-blur rounded-full px-6 py-2 flex items-center gap-2">
          <span class="text-blue-400">🎖️</span>
          <span class="text-white font-bold">Level 8</span>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Category Filter -->
  <section class="py-6 bg-slate-900/50 sticky top-16 z-40 backdrop-blur">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex flex-wrap justify-center gap-3">
        ${categories.map((cat, index) => `
          <button class="category-btn ${index === 0 ? 'active bg-gradient-to-r from-dragon-500 to-magic-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'} px-5 py-2 rounded-full font-medium transition flex items-center gap-2" data-category="${cat.id}">
            <span>${cat.icon}</span>
            <span>${cat.name}</span>
          </button>
        `).join('')}
      </div>
    </div>
  </section>
  
  <!-- Heroes Grid -->
  <section class="py-12 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="heroesGrid">
        ${heroes.map((hero, index) => {
          const isLocked = hero.unlockType !== 'free'
          const unlockIcon = hero.unlockType === 'xp' ? '⚡' : hero.unlockType === 'coins' ? '🪙' : hero.unlockType === 'gems' ? '💎' : '✅'
          
          return `
          <div class="hero-detail-card group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02]" 
               data-category="${hero.category}" data-aos="fade-up" data-aos-delay="${index * 50}">
            <!-- Background Gradient -->
            <div class="absolute inset-0 bg-gradient-to-br opacity-90 transition-opacity group-hover:opacity-100" style="background: linear-gradient(135deg, ${hero.color}, ${hero.colorSecondary})"></div>
            
            <!-- Lock Overlay -->
            ${isLocked ? `
            <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10 flex items-center justify-center">
              <div class="text-center">
                <div class="text-6xl mb-2 animate-bounce-slow">🔒</div>
                <div class="bg-black/50 rounded-full px-4 py-2 text-white font-bold">
                  ${unlockIcon} ${hero.unlockCost} ${hero.unlockType === 'xp' ? 'XP' : hero.unlockType === 'coins' ? 'Coins' : 'Gems'}
                </div>
                <div class="text-white/60 text-sm mt-1">Level ${hero.unlockLevel} Required</div>
              </div>
            </div>
            ` : ''}
            
            <!-- Content -->
            <div class="relative z-5 p-6">
              <!-- Category Badge -->
              <div class="absolute top-4 right-4">
                <span class="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white uppercase">${hero.category}</span>
              </div>
              
              <!-- Hero Avatar -->
              <div class="text-center mb-4">
                <div class="text-8xl inline-block transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 drop-shadow-lg">
                  ${hero.emoji}
                </div>
              </div>
              
              <!-- Hero Info -->
              <div class="text-center mb-4">
                <h3 class="text-2xl font-bold text-white mb-1">${hero.name}</h3>
                <p class="text-white/80 text-sm italic">"${hero.tagline}"</p>
              </div>
              
              <!-- Stars -->
              <div class="flex justify-center mb-4">
                ${Array(hero.stars).fill('⭐').join('')}
              </div>
              
              <!-- Stats -->
              <div class="grid grid-cols-3 gap-2 mb-4">
                <div class="bg-white/10 rounded-xl p-2 text-center">
                  <div class="text-white font-bold text-lg">${hero.power}</div>
                  <div class="text-white/60 text-xs">Power</div>
                </div>
                <div class="bg-white/10 rounded-xl p-2 text-center">
                  <div class="text-white font-bold text-lg">${hero.evolutions}</div>
                  <div class="text-white/60 text-xs">Evolutions</div>
                </div>
                <div class="bg-white/10 rounded-xl p-2 text-center">
                  <div class="text-white font-bold text-lg">Lv.${hero.unlockLevel}</div>
                  <div class="text-white/60 text-xs">Unlock</div>
                </div>
              </div>
              
              <!-- Description -->
              <p class="text-white/70 text-sm text-center mb-4 line-clamp-2">${hero.desc}</p>
              
              <!-- Special Ability -->
              <div class="bg-white/10 backdrop-blur rounded-xl p-3 mb-4">
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-yellow-400">⚡</span>
                  <span class="text-white font-bold text-sm">Special Ability</span>
                </div>
                <p class="text-white/70 text-xs">${hero.ability}</p>
              </div>
              
              <!-- Action Button -->
              <button class="w-full py-3 rounded-xl font-bold text-lg transition-all ${isLocked ? 'bg-white/20 text-white/60 cursor-not-allowed' : 'bg-white text-gray-900 hover:bg-yellow-400 hover:scale-105'}">
                ${isLocked ? '🔒 Unlock Hero' : '✨ Select Hero'}
              </button>
            </div>
          </div>
          `
        }).join('')}
      </div>
    </div>
  </section>
  
  <!-- Hero Comparison -->
  <section class="py-16 bg-gradient-to-b from-slate-900 to-purple-900/50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="hero-title text-3xl md:text-4xl text-white mb-4" data-aos="fade-up">
          Hero Power <span class="text-green-400">Comparison</span> 📊
        </h2>
        <p class="text-gray-400" data-aos="fade-up" data-aos-delay="100">
          See how each hero stacks up!
        </p>
      </div>
      
      <div class="bg-white/5 backdrop-blur rounded-3xl p-6 border border-white/10" data-aos="fade-up" data-aos-delay="200">
        <div class="space-y-4">
          ${heroes.sort((a, b) => b.power - a.power).slice(0, 10).map((hero, index) => `
            <div class="flex items-center gap-4">
              <div class="w-8 text-center font-bold ${index === 0 ? 'text-yellow-400' : index === 1 ? 'text-gray-300' : index === 2 ? 'text-orange-400' : 'text-gray-500'}">
                ${index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
              </div>
              <div class="text-3xl">${hero.emoji}</div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-1">
                  <span class="text-white font-medium">${hero.name}</span>
                  <span class="text-green-400 font-bold">${hero.power}</span>
                </div>
                <div class="bg-white/10 rounded-full h-3 overflow-hidden">
                  <div class="h-full rounded-full transition-all duration-1000" style="width: ${(hero.power / 180) * 100}%; background: linear-gradient(90deg, ${hero.color}, ${hero.colorSecondary})"></div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  </section>
  
  ${footer}
  
  <script>
    // Category filter functionality
    document.querySelectorAll('.category-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        // Update button styles
        document.querySelectorAll('.category-btn').forEach(b => {
          b.classList.remove('active', 'bg-gradient-to-r', 'from-dragon-500', 'to-magic-500', 'text-white');
          b.classList.add('bg-white/10', 'text-gray-300');
        });
        btn.classList.add('active', 'bg-gradient-to-r', 'from-dragon-500', 'to-magic-500', 'text-white');
        btn.classList.remove('bg-white/10', 'text-gray-300');
        
        // Filter heroes
        const category = btn.dataset.category;
        document.querySelectorAll('.hero-detail-card').forEach(card => {
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
