import { baseHead, navbar, footer } from './layout'

const leaderboardData = [
  { rank: 1, name: 'Dragon_Master', hero: '🦾', heroName: 'Iron Man', xp: 45230, level: 25, tier: 'Dragon', streak: 45, avatar: '👨‍💻' },
  { rank: 2, name: 'Hero_Seeker', hero: '🐼', heroName: 'Kung Fu Panda', xp: 42100, level: 23, tier: 'Dragon', streak: 38, avatar: '👩‍🎓' },
  { rank: 3, name: 'XP_Hunter', hero: '💚', heroName: 'Hulk', xp: 38750, level: 21, tier: 'Platinum', streak: 30, avatar: '🧑‍💼' },
  { rank: 4, name: 'Code_Ninja', hero: '🕷️', heroName: 'Spider-Man', xp: 35200, level: 20, tier: 'Platinum', streak: 28, avatar: '👨‍🔬' },
  { rank: 5, name: 'AI_Wizard', hero: '🤖', heroName: 'Doraemon', xp: 32800, level: 19, tier: 'Platinum', streak: 25, avatar: '👩‍🔬' },
  { rank: 6, name: 'Tech_Titan', hero: '⌚', heroName: 'Ben 10', xp: 29500, level: 17, tier: 'Gold', streak: 22, avatar: '🧑‍🎨' },
  { rank: 7, name: 'Data_Dragon', hero: '⚡', heroName: 'Pikachu', xp: 27200, level: 16, tier: 'Gold', streak: 20, avatar: '👨‍🎨' },
  { rank: 8, name: 'Cloud_Champion', hero: '❄️', heroName: 'Elsa', xp: 25800, level: 15, tier: 'Gold', streak: 18, avatar: '👩‍🚀' },
  { rank: 9, name: 'Dev_Dynamo', hero: '🏎️', heroName: 'Lightning McQueen', xp: 23400, level: 14, tier: 'Gold', streak: 15, avatar: '🧑‍🚀' },
  { rank: 10, name: 'Skill_Storm', hero: '💪', heroName: 'Chhota Bheem', xp: 21000, level: 13, tier: 'Gold', streak: 14, avatar: '👨‍🏫' },
]

const productLeaderboards = [
  { product: 'Dragon Recruit', icon: '🐲', leaders: [{ name: 'Hire_Pro', xp: 12500 }, { name: 'Talent_Scout', xp: 11200 }, { name: 'HR_Hero', xp: 10800 }] },
  { product: 'Dragon Assess', icon: '📊', leaders: [{ name: 'Test_Master', xp: 15800 }, { name: 'Code_Guru', xp: 14500 }, { name: 'Skill_King', xp: 13200 }] },
  { product: 'Dragon Upskill', icon: '🎓', leaders: [{ name: 'Learn_Legend', xp: 18200 }, { name: 'Growth_Guru', xp: 16900 }, { name: 'Know_It_All', xp: 15500 }] },
]

export const leaderboardPage = () => `
${baseHead('Leaderboard')}
<body class="bg-slate-900">
  ${navbar('leaderboard')}
  
  <!-- Page Header -->
  <section class="pt-24 pb-8 bg-gradient-to-b from-purple-900/50 to-slate-900">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h1 class="hero-title text-5xl md:text-6xl text-white mb-4" data-aos="fade-up">
        <span class="text-yellow-400">Leaderboard</span> 🏆
      </h1>
      <p class="text-xl text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        Compete with dragons worldwide! Rise to the top and claim your glory.
      </p>
    </div>
  </section>
  
  <!-- Leaderboard Type Tabs -->
  <section class="py-4 bg-slate-900/50 sticky top-16 z-40 backdrop-blur">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex flex-wrap justify-center gap-3">
        <button class="leaderboard-tab active bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-2 rounded-full font-bold transition" data-tab="global">
          🌍 Global
        </button>
        <button class="leaderboard-tab bg-white/10 text-gray-300 hover:bg-white/20 px-6 py-2 rounded-full font-bold transition" data-tab="weekly">
          📅 Weekly
        </button>
        <button class="leaderboard-tab bg-white/10 text-gray-300 hover:bg-white/20 px-6 py-2 rounded-full font-bold transition" data-tab="products">
          📦 Products
        </button>
        <button class="leaderboard-tab bg-white/10 text-gray-300 hover:bg-white/20 px-6 py-2 rounded-full font-bold transition" data-tab="streaks">
          🔥 Streaks
        </button>
      </div>
    </div>
  </section>
  
  <!-- Main Leaderboard -->
  <section class="py-8 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4">
      
      <!-- Top 3 Showcase -->
      <div class="flex flex-col md:flex-row items-end justify-center gap-4 mb-12" data-aos="zoom-in">
        <!-- 2nd Place -->
        <div class="order-2 md:order-1 w-full md:w-64">
          <div class="bg-gradient-to-b from-gray-400/30 to-gray-600/20 rounded-3xl p-6 text-center border border-gray-400/30 transform md:translate-y-8">
            <div class="text-5xl mb-2">🥈</div>
            <div class="text-5xl mb-3">${leaderboardData[1].hero}</div>
            <h3 class="text-xl font-bold text-white mb-1">${leaderboardData[1].name}</h3>
            <p class="text-gray-400 text-sm mb-2">${leaderboardData[1].heroName}</p>
            <div class="tier-badge tier-${leaderboardData[1].tier.toLowerCase()} mb-3">${leaderboardData[1].tier}</div>
            <div class="text-2xl font-bold text-white">${leaderboardData[1].xp.toLocaleString()} XP</div>
            <div class="text-gray-400 text-sm">Level ${leaderboardData[1].level}</div>
          </div>
        </div>
        
        <!-- 1st Place -->
        <div class="order-1 md:order-2 w-full md:w-72">
          <div class="bg-gradient-to-b from-yellow-500/30 to-orange-600/20 rounded-3xl p-8 text-center border-2 border-yellow-500/50 shadow-xl shadow-yellow-500/20">
            <div class="text-6xl mb-2 animate-bounce-slow">🥇</div>
            <div class="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-5xl mb-3 shadow-lg">
              ${leaderboardData[0].hero}
            </div>
            <div class="inline-block bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-2">👑 Champion</div>
            <h3 class="text-2xl font-bold text-white mb-1">${leaderboardData[0].name}</h3>
            <p class="text-yellow-300 text-sm mb-2">${leaderboardData[0].heroName}</p>
            <div class="tier-badge tier-${leaderboardData[0].tier.toLowerCase()} mb-3">${leaderboardData[0].tier}</div>
            <div class="text-3xl font-bold text-yellow-400">${leaderboardData[0].xp.toLocaleString()} XP</div>
            <div class="text-gray-300 text-sm">Level ${leaderboardData[0].level} • 🔥 ${leaderboardData[0].streak} Day Streak</div>
          </div>
        </div>
        
        <!-- 3rd Place -->
        <div class="order-3 w-full md:w-64">
          <div class="bg-gradient-to-b from-orange-600/30 to-orange-800/20 rounded-3xl p-6 text-center border border-orange-600/30 transform md:translate-y-12">
            <div class="text-5xl mb-2">🥉</div>
            <div class="text-5xl mb-3">${leaderboardData[2].hero}</div>
            <h3 class="text-xl font-bold text-white mb-1">${leaderboardData[2].name}</h3>
            <p class="text-gray-400 text-sm mb-2">${leaderboardData[2].heroName}</p>
            <div class="tier-badge tier-${leaderboardData[2].tier.toLowerCase()} mb-3">${leaderboardData[2].tier}</div>
            <div class="text-2xl font-bold text-white">${leaderboardData[2].xp.toLocaleString()} XP</div>
            <div class="text-gray-400 text-sm">Level ${leaderboardData[2].level}</div>
          </div>
        </div>
      </div>
      
      <!-- Your Position Banner -->
      <div class="bg-gradient-to-r from-dragon-500/20 via-magic-500/20 to-dragon-500/20 rounded-2xl p-4 mb-8 border border-purple-500/30" data-aos="fade-up">
        <div class="flex items-center justify-between flex-wrap gap-4">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-purple-500/30 rounded-xl flex items-center justify-center text-3xl">🕷️</div>
            <div>
              <p class="text-gray-400 text-sm">Your Position</p>
              <p class="text-white font-bold text-xl">#42 - Demo Dragon</p>
            </div>
          </div>
          <div class="flex items-center gap-6">
            <div class="text-center">
              <p class="text-green-400 font-bold text-xl">2,500 XP</p>
              <p class="text-gray-400 text-xs">Total XP</p>
            </div>
            <div class="text-center">
              <p class="text-yellow-400 font-bold text-xl">Level 8</p>
              <p class="text-gray-400 text-xs">Current Level</p>
            </div>
            <div class="text-center">
              <p class="text-orange-400 font-bold text-xl">🔥 7</p>
              <p class="text-gray-400 text-xs">Day Streak</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Full Leaderboard Table -->
      <div class="bg-white/5 backdrop-blur rounded-3xl overflow-hidden border border-white/10" data-aos="fade-up">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="bg-white/5">
                <th class="py-4 px-6 text-left text-gray-400 font-medium">Rank</th>
                <th class="py-4 px-6 text-left text-gray-400 font-medium">Player</th>
                <th class="py-4 px-6 text-center text-gray-400 font-medium">Hero</th>
                <th class="py-4 px-6 text-center text-gray-400 font-medium">Tier</th>
                <th class="py-4 px-6 text-center text-gray-400 font-medium">Streak</th>
                <th class="py-4 px-6 text-right text-gray-400 font-medium">XP</th>
              </tr>
            </thead>
            <tbody>
              ${leaderboardData.map((player, index) => `
                <tr class="border-t border-white/5 hover:bg-white/5 transition ${index < 3 ? 'bg-gradient-to-r from-yellow-500/5 to-transparent' : ''}">
                  <td class="py-4 px-6">
                    <span class="font-bold ${index === 0 ? 'text-yellow-400 text-xl' : index === 1 ? 'text-gray-300 text-xl' : index === 2 ? 'text-orange-400 text-xl' : 'text-gray-400'}">
                      ${index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '#' + player.rank}
                    </span>
                  </td>
                  <td class="py-4 px-6">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-lg">
                        ${player.avatar}
                      </div>
                      <div>
                        <p class="text-white font-medium">${player.name}</p>
                        <p class="text-gray-500 text-xs">Level ${player.level}</p>
                      </div>
                    </div>
                  </td>
                  <td class="py-4 px-6 text-center">
                    <div class="inline-flex flex-col items-center">
                      <span class="text-2xl">${player.hero}</span>
                      <span class="text-gray-500 text-xs">${player.heroName}</span>
                    </div>
                  </td>
                  <td class="py-4 px-6 text-center">
                    <span class="tier-badge tier-${player.tier.toLowerCase()}">${player.tier}</span>
                  </td>
                  <td class="py-4 px-6 text-center">
                    <span class="text-orange-400">🔥 ${player.streak}</span>
                  </td>
                  <td class="py-4 px-6 text-right">
                    <span class="text-green-400 font-bold">${player.xp.toLocaleString()}</span>
                    <span class="text-gray-500 text-sm"> XP</span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
      
      <!-- Product Leaderboards -->
      <div class="mt-12">
        <h2 class="hero-title text-3xl text-white text-center mb-8" data-aos="fade-up">
          Product <span class="text-purple-400">Champions</span> 🏅
        </h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          ${productLeaderboards.map((product, index) => `
            <div class="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10" data-aos="fade-up" data-aos-delay="${index * 100}">
              <div class="flex items-center gap-3 mb-4">
                <span class="text-3xl">${product.icon}</span>
                <h3 class="text-lg font-bold text-white">${product.product}</h3>
              </div>
              <div class="space-y-3">
                ${product.leaders.map((leader, i) => `
                  <div class="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
                    <span class="font-bold ${i === 0 ? 'text-yellow-400' : i === 1 ? 'text-gray-300' : 'text-orange-400'}">
                      ${i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉'}
                    </span>
                    <span class="text-white flex-1">${leader.name}</span>
                    <span class="text-green-400 text-sm">${leader.xp.toLocaleString()} XP</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
    </div>
  </section>
  
  ${footer}
  
  <script>
    // Tab switching
    document.querySelectorAll('.leaderboard-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.leaderboard-tab').forEach(t => {
          t.classList.remove('active', 'bg-gradient-to-r', 'from-yellow-500', 'to-orange-500', 'text-black');
          t.classList.add('bg-white/10', 'text-gray-300');
        });
        tab.classList.add('active', 'bg-gradient-to-r', 'from-yellow-500', 'to-orange-500', 'text-black');
        tab.classList.remove('bg-white/10', 'text-gray-300');
      });
    });
  </script>
</body>
`
