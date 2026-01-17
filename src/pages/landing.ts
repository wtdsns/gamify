import { baseHead, navbar, footer } from './layout'

// Hero data for landing page
const heroes = [
  { name: 'Spider-Man', emoji: '🕷️', tagline: 'Your Friendly Neighborhood Hero!', color: '#E23636', stars: 5 },
  { name: 'Chhota Bheem', emoji: '💪', tagline: 'Super Strong & Smart!', color: '#FF8C00', stars: 5 },
  { name: 'Mickey Mouse', emoji: '🐭', tagline: 'Fun & Friendship!', color: '#FF0000', stars: 5 },
  { name: 'Elsa', emoji: '❄️', tagline: 'Let It Go!', color: '#89CFF0', stars: 4 },
  { name: 'Minions', emoji: '🍌', tagline: 'Banana! Bello!', color: '#FFD700', stars: 4 },
  { name: 'Doraemon', emoji: '🤖', tagline: 'Gadget Master!', color: '#0095D9', stars: 5 },
  { name: 'Peppa Pig', emoji: '🐷', tagline: 'Snort Snort Fun!', color: '#FF69B4', stars: 4 },
  { name: 'Pikachu', emoji: '⚡', tagline: 'Pika Pika!', color: '#FFD700', stars: 5 },
  { name: 'Iron Man', emoji: '🦾', tagline: 'Genius Hero!', color: '#B22222', stars: 5 },
  { name: 'Paw Patrol', emoji: '🐾', tagline: 'Ready for Action!', color: '#4169E1', stars: 4 },
  { name: 'Ben 10', emoji: '⌚', tagline: 'Its Hero Time!', color: '#32CD32', stars: 5 },
  { name: 'Motu & Patlu', emoji: '🥟', tagline: 'Best Friends Forever!', color: '#FF4500', stars: 4 },
  { name: 'Hulk', emoji: '💚', tagline: 'Hulk Smash!', color: '#228B22', stars: 5 },
  { name: 'Lightning McQueen', emoji: '🏎️', tagline: 'Ka-Chow!', color: '#DC143C', stars: 5 },
  { name: 'Kung Fu Panda', emoji: '🐼', tagline: 'Skadoosh!', color: '#000000', stars: 5 },
]

const products = [
  { code: 'recruit', name: 'Dragon Recruit', icon: '🐲', desc: 'AI-Powered Recruitment', color: '#6366F1' },
  { code: 'assess', name: 'Dragon Assess', icon: '📊', desc: 'Skill Certification', color: '#8B5CF6' },
  { code: 'upskill', name: 'Dragon Upskill', icon: '🎓', desc: 'Career Learning', color: '#EC4899' },
  { code: 'accredit', name: 'Dragon Accredit', icon: '🏆', desc: 'Institution Rankings', color: '#F59E0B' },
  { code: 'health', name: 'Dragon Health', icon: '🏥', desc: 'Healthcare AI', color: '#10B981' },
  { code: 'founders', name: 'Dragon Founders', icon: '🚀', desc: 'Startup Ecosystem', color: '#EF4444' },
  { code: 'gps', name: 'Dragon GPS', icon: '🗺️', desc: 'Career Navigation', color: '#3B82F6' },
]

export const landingPage = () => `
${baseHead('Welcome')}
<body class="bg-slate-900">
  ${navbar('home')}
  
  <!-- Hero Section -->
  <section class="min-h-screen relative overflow-hidden pt-16">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-20 left-10 text-6xl floating-emoji">🐉</div>
      <div class="absolute top-40 right-20 text-5xl floating-emoji">⚡</div>
      <div class="absolute bottom-40 left-20 text-5xl floating-emoji">🌟</div>
      <div class="absolute bottom-20 right-10 text-6xl floating-emoji">🎮</div>
      <div class="absolute top-1/2 left-1/4 text-4xl floating-emoji">💎</div>
      <div class="absolute top-1/3 right-1/3 text-4xl floating-emoji">🏆</div>
    </div>
    
    <!-- Hero Content -->
    <div class="relative max-w-7xl mx-auto px-4 pt-20 pb-32">
      <div class="text-center">
        <!-- Main Title -->
        <div class="mb-6" data-aos="zoom-in">
          <span class="text-8xl md:text-9xl animate-bounce-slow inline-block">🐉</span>
        </div>
        
        <h1 class="hero-title text-5xl md:text-7xl lg:text-8xl text-white mb-4" data-aos="fade-up">
          1000 <span class="gradient-text">DRAGONS</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-purple-200 mb-4 font-medium" data-aos="fade-up" data-aos-delay="100">
          Learn & Become Friends with Your Favorite 15 SUPER HEROES!
        </p>
        
        <p class="text-lg text-gray-400 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Who knows, you may become one soon. Transform your daily tasks into epic adventures!
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12" data-aos="fade-up" data-aos-delay="300">
          <a href="/heroes" class="group bg-gradient-to-r from-dragon-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-xl flex items-center justify-center gap-2">
            <span>Meet Your Heroes</span>
            <span class="group-hover:translate-x-1 transition">→</span>
          </a>
          <a href="/dashboard" class="bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition flex items-center justify-center gap-2">
            <span>🎮</span>
            <span>Start Playing</span>
          </a>
        </div>
        
        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="400">
          <div class="bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10">
            <div class="text-3xl font-bold text-white">15</div>
            <div class="text-sm text-gray-400">Super Heroes</div>
          </div>
          <div class="bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10">
            <div class="text-3xl font-bold text-white">7</div>
            <div class="text-sm text-gray-400">Products</div>
          </div>
          <div class="bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10">
            <div class="text-3xl font-bold text-white">1000</div>
            <div class="text-sm text-gray-400">AI Startups Goal</div>
          </div>
          <div class="bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10">
            <div class="text-3xl font-bold text-white">∞</div>
            <div class="text-sm text-gray-400">Adventures</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
        <div class="w-1.5 h-3 bg-white/60 rounded-full"></div>
      </div>
    </div>
  </section>
  
  <!-- Heroes Showcase -->
  <section class="py-20 bg-gradient-to-b from-slate-900 to-purple-900/50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="hero-title text-4xl md:text-5xl text-white mb-4" data-aos="fade-up">
          Meet Your <span class="text-yellow-400">Super Friends!</span> ✨
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          These amazing heroes are excited to learn and play with you at SNS Academy!
        </p>
      </div>
      
      <!-- Heroes Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        ${heroes.map((hero, index) => `
          <div class="hero-card card-hover cursor-pointer group" style="background: linear-gradient(135deg, ${hero.color}, ${hero.color}dd)" data-aos="zoom-in" data-aos-delay="${index * 50}">
            <div class="p-4 text-center">
              <div class="text-5xl md:text-6xl mb-3 group-hover:scale-110 transition transform">${hero.emoji}</div>
              <h3 class="font-bold text-white text-sm md:text-base mb-1">${hero.name}</h3>
              <p class="text-white/70 text-xs">${hero.tagline}</p>
              <div class="flex justify-center mt-2">
                ${Array(hero.stars).fill('⭐').join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      
      <div class="text-center mt-10" data-aos="fade-up">
        <a href="/heroes" class="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg">
          <span>Explore All Heroes</span>
          <span>🦸</span>
        </a>
      </div>
    </div>
  </section>
  
  <!-- Gamification Features -->
  <section class="py-20 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="hero-title text-4xl md:text-5xl text-white mb-4" data-aos="fade-up">
          Level Up Your <span class="text-green-400">Journey!</span> 🚀
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Experience gamification that makes learning addictive and work inspiring!
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- XP System -->
        <div class="bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-3xl p-6 border border-green-500/20 card-hover" data-aos="fade-up">
          <div class="text-4xl mb-4">⚡</div>
          <h3 class="text-xl font-bold text-white mb-2">XP & Leveling</h3>
          <p class="text-gray-400 mb-4">Earn XP for every action. Level up from Bronze to Dragon tier. Unlock exclusive powers!</p>
          <div class="bg-slate-800 rounded-full h-4 overflow-hidden">
            <div class="xp-bar h-full w-3/4"></div>
          </div>
          <div class="flex justify-between mt-2 text-sm">
            <span class="text-gray-400">Level 8</span>
            <span class="text-green-400">2,500 / 3,500 XP</span>
          </div>
        </div>
        
        <!-- Daily Challenges -->
        <div class="bg-gradient-to-br from-orange-500/20 to-red-500/10 rounded-3xl p-6 border border-orange-500/20 card-hover" data-aos="fade-up" data-aos-delay="100">
          <div class="text-4xl mb-4">🎯</div>
          <h3 class="text-xl font-bold text-white mb-2">Daily Challenges</h3>
          <p class="text-gray-400 mb-4">Complete daily & weekly missions. Build streaks. Earn bonus rewards!</p>
          <div class="space-y-2">
            <div class="flex items-center gap-2 bg-white/5 rounded-lg p-2">
              <span class="text-green-500">✓</span>
              <span class="text-white text-sm">Login today</span>
              <span class="ml-auto text-yellow-500 text-sm">+25 XP</span>
            </div>
            <div class="flex items-center gap-2 bg-white/5 rounded-lg p-2">
              <span class="text-gray-500">○</span>
              <span class="text-gray-400 text-sm">Complete 1 activity</span>
              <span class="ml-auto text-gray-500 text-sm">+50 XP</span>
            </div>
          </div>
        </div>
        
        <!-- Achievements -->
        <div class="bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-3xl p-6 border border-purple-500/20 card-hover" data-aos="fade-up" data-aos-delay="200">
          <div class="text-4xl mb-4">🏆</div>
          <h3 class="text-xl font-bold text-white mb-2">Achievements</h3>
          <p class="text-gray-400 mb-4">Unlock badges from common to legendary. Show off your accomplishments!</p>
          <div class="flex flex-wrap gap-2">
            <span class="bg-gray-600/50 px-3 py-1 rounded-full text-sm text-white">🐣 Beginner</span>
            <span class="bg-blue-600/50 px-3 py-1 rounded-full text-sm text-white">🔥 Streak 7</span>
            <span class="bg-purple-600/50 px-3 py-1 rounded-full text-sm text-white">⭐ Level 10</span>
            <span class="bg-yellow-600/50 px-3 py-1 rounded-full text-sm text-white animate-pulse">👑 Legend</span>
          </div>
        </div>
        
        <!-- Leaderboards -->
        <div class="bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-3xl p-6 border border-blue-500/20 card-hover" data-aos="fade-up" data-aos-delay="300">
          <div class="text-4xl mb-4">📊</div>
          <h3 class="text-xl font-bold text-white mb-2">Leaderboards</h3>
          <p class="text-gray-400 mb-4">Compete globally, by product, or among friends. Rise to the top!</p>
          <div class="space-y-2">
            <div class="flex items-center gap-3 bg-yellow-500/20 rounded-lg p-2">
              <span class="text-yellow-500 font-bold">🥇</span>
              <span class="text-white text-sm">Dragon_Master</span>
              <span class="ml-auto text-yellow-500 text-sm">45,230 XP</span>
            </div>
            <div class="flex items-center gap-3 bg-white/5 rounded-lg p-2">
              <span class="text-gray-400 font-bold">🥈</span>
              <span class="text-white text-sm">Hero_Seeker</span>
              <span class="ml-auto text-gray-400 text-sm">42,100 XP</span>
            </div>
          </div>
        </div>
        
        <!-- Rewards Store -->
        <div class="bg-gradient-to-br from-yellow-500/20 to-amber-500/10 rounded-3xl p-6 border border-yellow-500/20 card-hover" data-aos="fade-up" data-aos-delay="400">
          <div class="text-4xl mb-4">🛍️</div>
          <h3 class="text-xl font-bold text-white mb-2">Rewards Store</h3>
          <p class="text-gray-400 mb-4">Spend coins & gems on virtual items, power-ups, or real rewards!</p>
          <div class="flex gap-4">
            <div class="bg-white/5 rounded-xl p-3 flex-1 text-center">
              <span class="text-2xl">🎨</span>
              <p class="text-xs text-gray-400 mt-1">Avatars</p>
            </div>
            <div class="bg-white/5 rounded-xl p-3 flex-1 text-center">
              <span class="text-2xl">⚡</span>
              <p class="text-xs text-gray-400 mt-1">Boosts</p>
            </div>
            <div class="bg-white/5 rounded-xl p-3 flex-1 text-center">
              <span class="text-2xl">🎁</span>
              <p class="text-xs text-gray-400 mt-1">Merch</p>
            </div>
          </div>
        </div>
        
        <!-- Hero Powers -->
        <div class="bg-gradient-to-br from-red-500/20 to-rose-500/10 rounded-3xl p-6 border border-red-500/20 card-hover" data-aos="fade-up" data-aos-delay="500">
          <div class="text-4xl mb-4">🦸</div>
          <h3 class="text-xl font-bold text-white mb-2">Hero Powers</h3>
          <p class="text-gray-400 mb-4">Each hero unlocks unique abilities. Evolve them for more power!</p>
          <div class="flex items-center gap-3 bg-white/5 rounded-lg p-3">
            <span class="text-3xl">🕷️</span>
            <div>
              <p class="text-white font-medium text-sm">Web of Learning</p>
              <p class="text-gray-500 text-xs">Connects related concepts</p>
            </div>
            <span class="ml-auto text-green-400 text-xs">Active</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Products Section -->
  <section class="py-20 bg-gradient-to-b from-slate-900 to-purple-900/50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="hero-title text-4xl md:text-5xl text-white mb-4" data-aos="fade-up">
          The <span class="text-dragon-400">Dragon Suite</span> 🐲
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          7 powerful products. One unified experience. Gamification across your entire journey!
        </p>
      </div>
      
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${products.map((product, index) => `
          <div class="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 card-hover group" data-aos="fade-up" data-aos-delay="${index * 50}">
            <div class="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4" style="background: ${product.color}20; border: 2px solid ${product.color}">
              ${product.icon}
            </div>
            <h3 class="font-bold text-white text-lg mb-1">${product.name}</h3>
            <p class="text-gray-400 text-sm mb-4">${product.desc}</p>
            <div class="flex items-center gap-2 text-sm">
              <span class="text-green-400">●</span>
              <span class="text-gray-400">1.5x XP Multiplier</span>
            </div>
          </div>
        `).join('')}
        
        <!-- Coming Soon -->
        <div class="bg-white/5 backdrop-blur rounded-2xl p-6 border border-dashed border-white/20 card-hover flex flex-col items-center justify-center text-center" data-aos="fade-up" data-aos-delay="350">
          <div class="text-4xl mb-2">🔮</div>
          <h3 class="font-bold text-white text-lg mb-1">More Coming</h3>
          <p class="text-gray-500 text-sm">Building 1000 startups</p>
        </div>
      </div>
      
      <div class="text-center mt-10" data-aos="fade-up">
        <a href="/products" class="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-white/20 transition">
          <span>Explore All Products</span>
          <span>→</span>
        </a>
      </div>
    </div>
  </section>
  
  <!-- SNS Philosophy -->
  <section class="py-20 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="hero-title text-4xl md:text-5xl text-white mb-4" data-aos="fade-up">
          The <span class="text-purple-400">SNS Way</span> 💜
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Redesigning common minds through Design Thinking and the 3P Culture
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Purpose -->
        <div class="relative bg-gradient-to-br from-blue-500/20 to-indigo-500/10 rounded-3xl p-8 border border-blue-500/20 card-hover" data-aos="fade-up">
          <div class="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div class="text-5xl mb-4">🎯</div>
          <h3 class="text-2xl font-bold text-white mb-3">Purpose</h3>
          <p class="text-gray-400">Find your WHY. Every hero has a mission. What's yours?</p>
          <div class="mt-4 text-blue-400 font-medium">Building 1000 AI Startups</div>
        </div>
        
        <!-- Process -->
        <div class="relative bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-3xl p-8 border border-green-500/20 card-hover" data-aos="fade-up" data-aos-delay="100">
          <div class="absolute -top-4 -right-4 w-20 h-20 bg-green-500/10 rounded-full blur-2xl"></div>
          <div class="text-5xl mb-4">⚙️</div>
          <h3 class="text-2xl font-bold text-white mb-3">Process</h3>
          <p class="text-gray-400">Design Thinking methodology. Iterate, improve, evolve.</p>
          <div class="mt-4 text-green-400 font-medium">Empathize → Define → Ideate → Prototype → Test</div>
        </div>
        
        <!-- People -->
        <div class="relative bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20 card-hover" data-aos="fade-up" data-aos-delay="200">
          <div class="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl"></div>
          <div class="text-5xl mb-4">👥</div>
          <h3 class="text-2xl font-bold text-white mb-3">People</h3>
          <p class="text-gray-400">Community of learners, achievers, and future entrepreneurs.</p>
          <div class="mt-4 text-purple-400 font-medium">Sincerity • Nobility • Service</div>
        </div>
      </div>
      
      <!-- 5 Pillars -->
      <div class="mt-12 bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10" data-aos="fade-up">
        <h3 class="text-2xl font-bold text-white text-center mb-8">The 5 Pillars of Excellence</h3>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl mb-2">📚</div>
            <p class="text-white font-medium text-sm">Learning</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-2xl mb-2">🎯</div>
            <p class="text-white font-medium text-sm">Upskilling</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl mb-2">💡</div>
            <p class="text-white font-medium text-sm">Innovation</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-2xl mb-2">🤝</div>
            <p class="text-white font-medium text-sm">Networking</p>
          </div>
          <div class="text-center col-span-2 md:col-span-1">
            <div class="w-16 h-16 mx-auto bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center text-2xl mb-2">💎</div>
            <p class="text-white font-medium text-sm">Character</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- CTA Section -->
  <section class="py-20 bg-gradient-to-r from-dragon-600 via-magic-600 to-dragon-600 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 text-8xl">🐉</div>
      <div class="absolute bottom-10 right-10 text-8xl">🦸</div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-20">⚡</div>
    </div>
    
    <div class="relative max-w-4xl mx-auto px-4 text-center">
      <h2 class="hero-title text-4xl md:text-6xl text-white mb-6" data-aos="zoom-in">
        Ready to Begin Your <br>Hero Journey?
      </h2>
      <p class="text-xl text-white/80 mb-8" data-aos="fade-up" data-aos-delay="100">
        Join thousands of learners transforming their daily routine into epic adventures!
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
        <a href="/heroes" class="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-xl">
          Choose Your Hero 🦸
        </a>
        <a href="/dashboard" class="bg-white/20 backdrop-blur text-white border-2 border-white/50 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition">
          View Dashboard 📊
        </a>
      </div>
    </div>
  </section>
  
  ${footer}
</body>
`
