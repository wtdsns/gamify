import { baseHead, navbar, footer } from './layout'

export const dashboardPage = () => `
${baseHead('Dashboard')}
<body class="bg-slate-900">
  ${navbar('dashboard')}
  
  <!-- Dashboard Header -->
  <section class="pt-24 pb-8 bg-gradient-to-b from-purple-900/50 to-slate-900">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center gap-6">
        <!-- User Avatar & Hero -->
        <div class="relative" data-aos="zoom-in">
          <div class="w-32 h-32 rounded-full bg-gradient-to-br from-dragon-500 to-magic-500 p-1">
            <div class="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-6xl">
              🕷️
            </div>
          </div>
          <!-- Level Badge -->
          <div class="absolute -bottom-2 -right-2 level-badge w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
            8
          </div>
        </div>
        
        <!-- User Info -->
        <div class="flex-1 text-center md:text-left" data-aos="fade-up">
          <div class="flex items-center justify-center md:justify-start gap-3 mb-2">
            <h1 class="text-3xl font-bold text-white">Demo Dragon</h1>
            <span class="tier-badge tier-silver">Silver</span>
          </div>
          <p class="text-gray-400 mb-3">@demo_dragon • Joined Jan 2026</p>
          <div class="flex items-center justify-center md:justify-start gap-2">
            <span class="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">🕷️ Spider-Man</span>
            <span class="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">🔥 7 Day Streak</span>
          </div>
        </div>
        
        <!-- Quick Stats -->
        <div class="flex gap-4" data-aos="fade-left">
          <div class="text-center bg-white/5 rounded-2xl p-4">
            <div class="text-3xl font-bold text-yellow-400">🪙 450</div>
            <div class="text-xs text-gray-400">Coins</div>
          </div>
          <div class="text-center bg-white/5 rounded-2xl p-4">
            <div class="text-3xl font-bold text-purple-400">💎 25</div>
            <div class="text-xs text-gray-400">Gems</div>
          </div>
        </div>
      </div>
      
      <!-- XP Progress Bar -->
      <div class="mt-8 bg-white/5 backdrop-blur rounded-2xl p-6" data-aos="fade-up">
        <div class="flex items-center justify-between mb-3">
          <span class="text-white font-medium">Level 8 Progress</span>
          <span class="text-green-400 font-bold">2,500 / 3,500 XP</span>
        </div>
        <div class="bg-slate-700 rounded-full h-6 overflow-hidden">
          <div class="xp-bar h-full flex items-center justify-end pr-3" style="width: 71%">
            <span class="text-xs font-bold text-white">71%</span>
          </div>
        </div>
        <div class="flex items-center justify-between mt-2 text-sm">
          <span class="text-gray-400">🎖️ Level 8</span>
          <span class="text-gray-400">1,000 XP to Level 9</span>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Main Dashboard Content -->
  <section class="py-8 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid lg:grid-cols-3 gap-6">
        
        <!-- Left Column - Challenges & Activity -->
        <div class="lg:col-span-2 space-y-6">
          
          <!-- Daily Challenges -->
          <div class="bg-white/5 backdrop-blur rounded-3xl p-6 border border-white/10" data-aos="fade-up">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-white flex items-center gap-2">
                <span class="text-orange-400">🎯</span> Daily Challenges
              </h2>
              <span class="text-sm text-gray-400">Resets in 14h 23m</span>
            </div>
            
            <div class="space-y-4">
              <!-- Challenge 1 - Completed -->
              <div class="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center gap-4">
                <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-2xl">
                  ✅
                </div>
                <div class="flex-1">
                  <h3 class="text-white font-medium">Dragon Check-In</h3>
                  <p class="text-gray-400 text-sm">Login to the platform today</p>
                </div>
                <div class="text-right">
                  <div class="text-green-400 font-bold">+25 XP</div>
                  <div class="text-yellow-400 text-sm">+10 🪙</div>
                </div>
              </div>
              
              <!-- Challenge 2 - In Progress -->
              <div class="bg-white/5 rounded-xl p-4 flex items-center gap-4">
                <div class="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-2xl">
                  🎯
                </div>
                <div class="flex-1">
                  <h3 class="text-white font-medium">Stay Active</h3>
                  <p class="text-gray-400 text-sm">Complete any activity in any product</p>
                  <div class="mt-2 bg-slate-700 rounded-full h-2 overflow-hidden">
                    <div class="bg-orange-500 h-full w-1/2"></div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-gray-400 font-bold">+50 XP</div>
                  <div class="text-gray-500 text-sm">+15 🪙</div>
                </div>
              </div>
              
              <!-- Challenge 3 - Locked -->
              <div class="bg-white/5 rounded-xl p-4 flex items-center gap-4 opacity-60">
                <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-2xl">
                  🔒
                </div>
                <div class="flex-1">
                  <h3 class="text-white font-medium">Keep the Fire</h3>
                  <p class="text-gray-400 text-sm">Maintain your login streak</p>
                </div>
                <div class="text-right">
                  <div class="text-gray-500 font-bold">+30 XP</div>
                  <div class="text-gray-600 text-sm">+10 🪙</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Weekly Challenges -->
          <div class="bg-white/5 backdrop-blur rounded-3xl p-6 border border-white/10" data-aos="fade-up" data-aos-delay="100">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-white flex items-center gap-2">
                <span class="text-purple-400">📅</span> Weekly Challenges
              </h2>
              <span class="text-sm text-gray-400">Resets in 5 days</span>
            </div>
            
            <div class="grid sm:grid-cols-2 gap-4">
              <div class="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-2xl">⚡</span>
                  <div>
                    <h3 class="text-white font-medium">XP Grinder</h3>
                    <p class="text-gray-400 text-xs">Earn 500 XP this week</p>
                  </div>
                </div>
                <div class="bg-slate-700 rounded-full h-3 overflow-hidden mb-2">
                  <div class="bg-blue-500 h-full" style="width: 65%"></div>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-400">325/500 XP</span>
                  <span class="text-blue-400">+200 XP</span>
                </div>
              </div>
              
              <div class="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-2xl">🏆</span>
                  <div>
                    <h3 class="text-white font-medium">Challenge Champion</h3>
                    <p class="text-gray-400 text-xs">Complete 5 daily challenges</p>
                  </div>
                </div>
                <div class="bg-slate-700 rounded-full h-3 overflow-hidden mb-2">
                  <div class="bg-pink-500 h-full" style="width: 40%"></div>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-400">2/5 Done</span>
                  <span class="text-pink-400">+150 XP</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Recent Activity -->
          <div class="bg-white/5 backdrop-blur rounded-3xl p-6 border border-white/10" data-aos="fade-up" data-aos-delay="200">
            <h2 class="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <span class="text-green-400">📈</span> Recent Activity
            </h2>
            
            <div class="space-y-4">
              <div class="flex items-center gap-4 p-3 bg-white/5 rounded-xl">
                <div class="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center text-xl">⚡</div>
                <div class="flex-1">
                  <p class="text-white">Earned <span class="text-green-400 font-bold">+50 XP</span> from Dragon Assess</p>
                  <p class="text-gray-500 text-xs">2 hours ago</p>
                </div>
              </div>
              <div class="flex items-center gap-4 p-3 bg-white/5 rounded-xl">
                <div class="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center text-xl">🏆</div>
                <div class="flex-1">
                  <p class="text-white">Unlocked <span class="text-yellow-400 font-bold">Streak 7</span> achievement</p>
                  <p class="text-gray-500 text-xs">5 hours ago</p>
                </div>
              </div>
              <div class="flex items-center gap-4 p-3 bg-white/5 rounded-xl">
                <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-xl">🎖️</div>
                <div class="flex-1">
                  <p class="text-white">Reached <span class="text-blue-400 font-bold">Level 8</span></p>
                  <p class="text-gray-500 text-xs">Yesterday</p>
                </div>
              </div>
              <div class="flex items-center gap-4 p-3 bg-white/5 rounded-xl">
                <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-xl">🦸</div>
                <div class="flex-1">
                  <p class="text-white">Evolved <span class="text-purple-400 font-bold">Spider-Man</span> to Stage 2</p>
                  <p class="text-gray-500 text-xs">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right Column - Stats & Quick Actions -->
        <div class="space-y-6">
          
          <!-- Current Hero -->
          <div class="bg-gradient-to-br from-red-500/20 to-red-900/20 backdrop-blur rounded-3xl p-6 border border-red-500/20" data-aos="fade-left">
            <h2 class="text-lg font-bold text-white mb-4">Active Hero</h2>
            <div class="text-center">
              <div class="text-7xl mb-3 animate-bounce-slow">🕷️</div>
              <h3 class="text-xl font-bold text-white">Spider-Man</h3>
              <p class="text-red-300 text-sm mb-3">Evolution Stage 2</p>
              <div class="bg-white/10 rounded-xl p-3">
                <p class="text-xs text-gray-400 mb-1">Active Power</p>
                <p class="text-yellow-400 font-medium text-sm">⚡ Web of Learning</p>
                <p class="text-gray-400 text-xs">Connects related concepts</p>
              </div>
              <div class="mt-4 bg-slate-700 rounded-full h-2 overflow-hidden">
                <div class="bg-red-500 h-full" style="width: 60%"></div>
              </div>
              <p class="text-gray-400 text-xs mt-2">800/1200 XP to Stage 3</p>
            </div>
            <button class="w-full mt-4 bg-white/10 hover:bg-white/20 text-white py-2 rounded-xl transition">
              Switch Hero
            </button>
          </div>
          
          <!-- My Heroes Collection -->
          <div class="bg-white/5 backdrop-blur rounded-3xl p-6 border border-white/10" data-aos="fade-left" data-aos-delay="100">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-lg font-bold text-white">My Heroes</h2>
              <span class="text-gray-400 text-sm">3/15</span>
            </div>
            <div class="grid grid-cols-5 gap-2">
              <div class="aspect-square bg-red-500/30 rounded-xl flex items-center justify-center text-2xl border-2 border-red-500">🕷️</div>
              <div class="aspect-square bg-red-500/30 rounded-xl flex items-center justify-center text-2xl">🐭</div>
              <div class="aspect-square bg-yellow-500/30 rounded-xl flex items-center justify-center text-2xl">🍌</div>
              <div class="aspect-square bg-white/10 rounded-xl flex items-center justify-center text-2xl opacity-40">🔒</div>
              <div class="aspect-square bg-white/10 rounded-xl flex items-center justify-center text-2xl opacity-40">🔒</div>
            </div>
            <a href="/heroes" class="block mt-4 text-center text-purple-400 hover:text-purple-300 text-sm">
              View All Heroes →
            </a>
          </div>
          
          <!-- Product Progress -->
          <div class="bg-white/5 backdrop-blur rounded-3xl p-6 border border-white/10" data-aos="fade-left" data-aos-delay="200">
            <h2 class="text-lg font-bold text-white mb-4">Product Progress</h2>
            <div class="space-y-4">
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-white text-sm">📊 Dragon Assess</span>
                  <span class="text-purple-400 text-sm">Lv.6</span>
                </div>
                <div class="bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div class="bg-purple-500 h-full" style="width: 75%"></div>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-white text-sm">🐲 Dragon Recruit</span>
                  <span class="text-indigo-400 text-sm">Lv.4</span>
                </div>
                <div class="bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div class="bg-indigo-500 h-full" style="width: 50%"></div>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-white text-sm">🎓 Dragon Upskill</span>
                  <span class="text-pink-400 text-sm">Lv.3</span>
                </div>
                <div class="bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div class="bg-pink-500 h-full" style="width: 35%"></div>
                </div>
              </div>
            </div>
            <a href="/products" class="block mt-4 text-center text-purple-400 hover:text-purple-300 text-sm">
              View All Products →
            </a>
          </div>
          
          <!-- Quick Stats -->
          <div class="bg-white/5 backdrop-blur rounded-3xl p-6 border border-white/10" data-aos="fade-left" data-aos-delay="300">
            <h2 class="text-lg font-bold text-white mb-4">Stats</h2>
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-white/5 rounded-xl p-3 text-center">
                <div class="text-2xl font-bold text-white">38</div>
                <div class="text-xs text-gray-400">Challenges</div>
              </div>
              <div class="bg-white/5 rounded-xl p-3 text-center">
                <div class="text-2xl font-bold text-white">5</div>
                <div class="text-xs text-gray-400">Achievements</div>
              </div>
              <div class="bg-white/5 rounded-xl p-3 text-center">
                <div class="text-2xl font-bold text-white">7</div>
                <div class="text-xs text-gray-400">Day Streak</div>
              </div>
              <div class="bg-white/5 rounded-xl p-3 text-center">
                <div class="text-2xl font-bold text-white">#42</div>
                <div class="text-xs text-gray-400">Global Rank</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
  
  ${footer}
</body>
`
