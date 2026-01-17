// Shared layout components for 1000 Dragons Hub

export const baseHead = (title: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | 1000 Dragons Hub</title>
  <meta name="description" content="1000 Dragons - Gamification Hub by SNS Innovation Hub. Learn with your favorite superheroes!">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Poppins:wght@400;500;600;700;800&family=Press+Start+2P&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Font Awesome -->
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
  
  <!-- Animate.css -->
  <link href="https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css" rel="stylesheet">
  
  <!-- AOS (Animate on Scroll) -->
  <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
  
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            'bangers': ['Bangers', 'cursive'],
            'poppins': ['Poppins', 'sans-serif'],
            'pixel': ['Press Start 2P', 'cursive'],
          },
          colors: {
            'dragon': {
              50: '#fef3f2',
              100: '#ffe4e1',
              200: '#ffccc7',
              300: '#ffa8a0',
              400: '#ff7468',
              500: '#ff4433',
              600: '#ed2815',
              700: '#c81d0d',
              800: '#a51c10',
              900: '#881e15',
            },
            'magic': {
              50: '#f5f3ff',
              100: '#ede8ff',
              200: '#ddd4fe',
              300: '#c3b2fd',
              400: '#a687fa',
              500: '#8b5cf6',
              600: '#7c3aed',
              700: '#6d28d9',
              800: '#5b21b6',
              900: '#4c1d95',
            }
          },
          animation: {
            'float': 'float 3s ease-in-out infinite',
            'pulse-slow': 'pulse 3s ease-in-out infinite',
            'bounce-slow': 'bounce 2s ease-in-out infinite',
            'spin-slow': 'spin 8s linear infinite',
            'wiggle': 'wiggle 1s ease-in-out infinite',
            'glow': 'glow 2s ease-in-out infinite',
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' },
            },
            wiggle: {
              '0%, 100%': { transform: 'rotate(-3deg)' },
              '50%': { transform: 'rotate(3deg)' },
            },
            glow: {
              '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' },
              '50%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.8)' },
            }
          }
        }
      }
    }
  </script>
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Poppins', sans-serif;
      overflow-x: hidden;
    }
    
    .hero-title {
      font-family: 'Bangers', cursive;
      letter-spacing: 2px;
      text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
    }
    
    .game-text {
      font-family: 'Press Start 2P', cursive;
    }
    
    .gradient-text {
      background: linear-gradient(135deg, #ff4433 0%, #ff9500 25%, #ffcc00 50%, #00ff88 75%, #00ccff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .card-hover {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .card-hover:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    
    .hero-card {
      position: relative;
      overflow: hidden;
      border-radius: 20px;
      transition: all 0.4s ease;
    }
    
    .hero-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: 0.5s;
    }
    
    .hero-card:hover::before {
      left: 100%;
    }
    
    .xp-bar {
      background: linear-gradient(90deg, #22c55e, #84cc16, #eab308);
      border-radius: 999px;
      animation: pulse 2s ease-in-out infinite;
    }
    
    .level-badge {
      background: linear-gradient(135deg, #ffd700 0%, #ffaa00 100%);
      border: 3px solid #fff;
      box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
    }
    
    .floating-emoji {
      animation: float 3s ease-in-out infinite;
    }
    
    .floating-emoji:nth-child(2) { animation-delay: 0.5s; }
    .floating-emoji:nth-child(3) { animation-delay: 1s; }
    .floating-emoji:nth-child(4) { animation-delay: 1.5s; }
    
    .particle {
      position: absolute;
      pointer-events: none;
      opacity: 0.6;
      animation: float 4s ease-in-out infinite;
    }
    
    @keyframes confetti {
      0% { transform: translateY(0) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
    
    .nav-link {
      position: relative;
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 3px;
      background: linear-gradient(90deg, #ff4433, #ffcc00);
      border-radius: 2px;
      transition: width 0.3s ease;
    }
    
    .nav-link:hover::after {
      width: 100%;
    }
    
    .tier-badge {
      padding: 4px 12px;
      border-radius: 20px;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.75rem;
    }
    
    .tier-bronze { background: linear-gradient(135deg, #cd7f32, #8b4513); color: white; }
    .tier-silver { background: linear-gradient(135deg, #c0c0c0, #808080); color: #333; }
    .tier-gold { background: linear-gradient(135deg, #ffd700, #ffaa00); color: #333; }
    .tier-platinum { background: linear-gradient(135deg, #e5e4e2, #9da3a6); color: #333; }
    .tier-dragon { background: linear-gradient(135deg, #ff4433, #8b5cf6); color: white; }
    
    .rarity-common { border-color: #9ca3af; }
    .rarity-rare { border-color: #3b82f6; }
    .rarity-epic { border-color: #8b5cf6; }
    .rarity-legendary { border-color: #f59e0b; animation: glow 2s ease-in-out infinite; }
    
    /* Scrollbar */
    ::-webkit-scrollbar {
      width: 10px;
    }
    
    ::-webkit-scrollbar-track {
      background: #1a1a2e;
    }
    
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #ff4433, #8b5cf6);
      border-radius: 5px;
    }
    
    /* Toast notifications */
    .toast {
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 16px 24px;
      border-radius: 12px;
      background: linear-gradient(135deg, #1a1a2e, #2d2d44);
      color: white;
      box-shadow: 0 10px 40px rgba(0,0,0,0.3);
      transform: translateX(120%);
      transition: transform 0.4s ease;
      z-index: 9999;
    }
    
    .toast.show {
      transform: translateX(0);
    }
  </style>
</head>
`

export const navbar = (activePage: string = '') => `
<nav class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-lg border-b border-white/10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-3 group">
        <span class="text-4xl animate-bounce-slow">🐉</span>
        <div>
          <h1 class="hero-title text-2xl text-white">1000 DRAGONS</h1>
          <p class="text-[10px] text-gray-400 -mt-1">SNS Innovation Hub</p>
        </div>
      </a>
      
      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <a href="/" class="nav-link text-white font-medium hover:text-yellow-400 transition ${activePage === 'home' ? 'text-yellow-400' : ''}">Home</a>
        <a href="/heroes" class="nav-link text-white font-medium hover:text-yellow-400 transition ${activePage === 'heroes' ? 'text-yellow-400' : ''}">Heroes</a>
        <a href="/dashboard" class="nav-link text-white font-medium hover:text-yellow-400 transition ${activePage === 'dashboard' ? 'text-yellow-400' : ''}">Dashboard</a>
        <a href="/leaderboard" class="nav-link text-white font-medium hover:text-yellow-400 transition ${activePage === 'leaderboard' ? 'text-yellow-400' : ''}">Leaderboard</a>
        <a href="/achievements" class="nav-link text-white font-medium hover:text-yellow-400 transition ${activePage === 'achievements' ? 'text-yellow-400' : ''}">Achievements</a>
        <a href="/store" class="nav-link text-white font-medium hover:text-yellow-400 transition ${activePage === 'store' ? 'text-yellow-400' : ''}">Store</a>
        <a href="/products" class="nav-link text-white font-medium hover:text-yellow-400 transition ${activePage === 'products' ? 'text-yellow-400' : ''}">Products</a>
      </div>
      
      <!-- User Section -->
      <div class="flex items-center gap-4">
        <div class="hidden sm:flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
          <span class="text-yellow-400">🪙</span>
          <span class="text-white font-bold">450</span>
        </div>
        <div class="hidden sm:flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
          <span class="text-purple-400">💎</span>
          <span class="text-white font-bold">25</span>
        </div>
        <button class="bg-gradient-to-r from-dragon-500 to-magic-500 text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition shadow-lg">
          Login
        </button>
      </div>
      
      <!-- Mobile Menu Button -->
      <button id="mobileMenuBtn" class="md:hidden text-white text-2xl">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </div>
  
  <!-- Mobile Menu -->
  <div id="mobileMenu" class="hidden md:hidden bg-slate-900/98 border-t border-white/10">
    <div class="px-4 py-4 space-y-3">
      <a href="/" class="block text-white font-medium py-2 hover:text-yellow-400">Home</a>
      <a href="/heroes" class="block text-white font-medium py-2 hover:text-yellow-400">Heroes</a>
      <a href="/dashboard" class="block text-white font-medium py-2 hover:text-yellow-400">Dashboard</a>
      <a href="/leaderboard" class="block text-white font-medium py-2 hover:text-yellow-400">Leaderboard</a>
      <a href="/achievements" class="block text-white font-medium py-2 hover:text-yellow-400">Achievements</a>
      <a href="/store" class="block text-white font-medium py-2 hover:text-yellow-400">Store</a>
      <a href="/products" class="block text-white font-medium py-2 hover:text-yellow-400">Products</a>
    </div>
  </div>
</nav>
`

export const footer = `
<footer class="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-t border-white/10 py-12">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid md:grid-cols-4 gap-8">
      <!-- Brand -->
      <div>
        <div class="flex items-center gap-3 mb-4">
          <span class="text-4xl">🐉</span>
          <div>
            <h3 class="hero-title text-xl text-white">1000 DRAGONS</h3>
            <p class="text-xs text-gray-400">SNS Innovation Hub</p>
          </div>
        </div>
        <p class="text-gray-400 text-sm">Redesigning common minds through gamification. Building 1000 AI startups in 10 years.</p>
      </div>
      
      <!-- Quick Links -->
      <div>
        <h4 class="text-white font-bold mb-4">Quick Links</h4>
        <ul class="space-y-2">
          <li><a href="/heroes" class="text-gray-400 hover:text-yellow-400 text-sm">Meet Heroes</a></li>
          <li><a href="/dashboard" class="text-gray-400 hover:text-yellow-400 text-sm">Dashboard</a></li>
          <li><a href="/leaderboard" class="text-gray-400 hover:text-yellow-400 text-sm">Leaderboard</a></li>
          <li><a href="/achievements" class="text-gray-400 hover:text-yellow-400 text-sm">Achievements</a></li>
        </ul>
      </div>
      
      <!-- Products -->
      <div>
        <h4 class="text-white font-bold mb-4">Dragon Suite</h4>
        <ul class="space-y-2">
          <li><a href="/products" class="text-gray-400 hover:text-yellow-400 text-sm">🐲 Dragon Recruit</a></li>
          <li><a href="/products" class="text-gray-400 hover:text-yellow-400 text-sm">📊 Dragon Assess</a></li>
          <li><a href="/products" class="text-gray-400 hover:text-yellow-400 text-sm">🎓 Dragon Upskill</a></li>
          <li><a href="/products" class="text-gray-400 hover:text-yellow-400 text-sm">🚀 Dragon Founders</a></li>
        </ul>
      </div>
      
      <!-- Connect -->
      <div>
        <h4 class="text-white font-bold mb-4">Connect</h4>
        <div class="flex gap-4 mb-4">
          <a href="#" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-yellow-500 transition">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-yellow-500 transition">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="#" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-yellow-500 transition">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-yellow-500 transition">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
        <p class="text-gray-400 text-sm">Sincerity • Nobility • Service</p>
      </div>
    </div>
    
    <div class="border-t border-white/10 mt-8 pt-8 text-center">
      <p class="text-gray-400 text-sm">© 2026 SNS Innovation Hub. All rights reserved. Building entrepreneurial mindsets through design thinking.</p>
    </div>
  </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
<script>
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  });
  
  // Mobile menu toggle
  document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
    document.getElementById('mobileMenu')?.classList.toggle('hidden');
  });
</script>
</body>
</html>
`
