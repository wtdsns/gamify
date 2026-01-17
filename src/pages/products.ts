import { baseHead, navbar, footer } from './layout'

const products = [
  { 
    code: 'recruit', 
    name: 'Dragon Recruit', 
    icon: '🐲', 
    desc: 'Connect candidates with industries - AI-powered recruitment platform',
    fullDesc: 'Revolutionary AI-driven recruitment that matches the right talent with the right opportunities. From resume screening to final placement, powered by intelligent algorithms.',
    color: '#6366F1',
    gradient: 'from-indigo-500 to-purple-600',
    xpMultiplier: 1.2,
    features: ['AI Resume Screening', 'Video Interview Analysis', 'Skill Matching', 'Industry Connect'],
    heroBonus: { hero: 'Iron Man', bonus: 'Tech hiring +20% XP' },
    stats: { users: '12K+', placements: '3.5K', companies: '250+' }
  },
  { 
    code: 'assess', 
    name: 'Dragon Assess', 
    icon: '📊', 
    desc: 'Certify niche IT skills with AI video interviews and coding challenges',
    fullDesc: 'Comprehensive skill assessment platform covering AI/ML, MERN, DevOps, Cloud, DSA, System Design, and more. AI-proctored video interviews with real-time coding playground.',
    color: '#8B5CF6',
    gradient: 'from-purple-500 to-pink-600',
    xpMultiplier: 1.5,
    features: ['Coding Playground', 'AI Video Interview', 'Skill Certification', 'Industry Benchmarks'],
    heroBonus: { hero: 'Spider-Man', bonus: 'Problem solving +25% XP' },
    stats: { assessments: '50K+', certifications: '15K', skills: '100+' }
  },
  { 
    code: 'upskill', 
    name: 'Dragon Upskill', 
    icon: '🎓', 
    desc: 'Learn AI, MERN, DevOps, Cloud, and more based on career needs',
    fullDesc: 'Personalized learning paths that adapt to your career goals. Master cutting-edge technologies with hands-on projects, mentorship, and industry-recognized certifications.',
    color: '#EC4899',
    gradient: 'from-pink-500 to-rose-600',
    xpMultiplier: 1.3,
    features: ['Adaptive Learning', 'Hands-on Projects', 'Expert Mentorship', 'Career Roadmaps'],
    heroBonus: { hero: 'Doraemon', bonus: 'Learning speed +30% XP' },
    stats: { courses: '500+', learners: '25K', completion: '85%' }
  },
  { 
    code: 'accredit', 
    name: 'Dragon Accredit', 
    icon: '🏆', 
    desc: 'Achieve NAAC, NIRF, NBA rankings for institutions',
    fullDesc: 'Comprehensive platform for colleges and universities to track, improve, and achieve accreditation excellence. Data-driven insights for continuous improvement.',
    color: '#F59E0B',
    gradient: 'from-amber-500 to-orange-600',
    xpMultiplier: 1.4,
    features: ['NAAC Preparation', 'NIRF Ranking Tools', 'NBA Compliance', 'Analytics Dashboard'],
    heroBonus: { hero: 'Ben 10', bonus: 'Adaptation +20% XP' },
    stats: { institutions: '150+', accreditations: '80+', improvement: '40%' }
  },
  { 
    code: 'health', 
    name: 'Dragon Health', 
    icon: '🏥', 
    desc: 'Agentic AI platform connecting the healthcare ecosystem',
    fullDesc: 'Connecting insurance, hospitals, doctors, patients, labs, and pharma on one intelligent platform. AI-driven diagnostics, appointment management, and health records.',
    color: '#10B981',
    gradient: 'from-emerald-500 to-teal-600',
    xpMultiplier: 1.2,
    features: ['Patient Portal', 'Doctor Connect', 'Lab Integration', 'Insurance Claims'],
    heroBonus: { hero: 'Hulk', bonus: 'Health tracking +15% XP' },
    stats: { hospitals: '200+', doctors: '5K+', patients: '100K+' }
  },
  { 
    code: 'founders', 
    name: 'Dragon Founders', 
    icon: '🚀', 
    desc: 'Build, invest, and market - Agentic AI for startup ecosystem',
    fullDesc: 'The ultimate platform for founders to build, investors to discover opportunities, and marketers to scale. AI-powered pitch decks, investor matching, and growth tools.',
    color: '#EF4444',
    gradient: 'from-red-500 to-rose-600',
    xpMultiplier: 1.6,
    features: ['Pitch Builder', 'Investor Match', 'Growth Tools', 'Market Analysis'],
    heroBonus: { hero: 'Kung Fu Panda', bonus: 'Founder journey +35% XP' },
    stats: { startups: '500+', funding: '$15M+', mentors: '100+' }
  },
  { 
    code: 'gps', 
    name: 'Dragon GPS', 
    icon: '🗺️', 
    desc: 'AI auto-routing for career paths - Like Google Maps for careers',
    fullDesc: 'Your personal career navigator that plots the optimal path to your dream role. Real-time adjustments based on market trends, skill gaps, and opportunities.',
    color: '#3B82F6',
    gradient: 'from-blue-500 to-cyan-600',
    xpMultiplier: 1.3,
    features: ['Career Mapping', 'Skill Gap Analysis', 'Market Trends', 'Route Optimization'],
    heroBonus: { hero: 'Lightning McQueen', bonus: 'Career speed +25% XP' },
    stats: { paths: '10K+', transitions: '3K+', accuracy: '92%' }
  },
]

export const productsPage = () => `
${baseHead('Dragon Suite Products')}
<body class="bg-slate-900">
  ${navbar('products')}
  
  <!-- Page Header -->
  <section class="pt-24 pb-12 bg-gradient-to-b from-purple-900/50 to-slate-900">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h1 class="hero-title text-5xl md:text-6xl text-white mb-4" data-aos="fade-up">
        The <span class="text-dragon-400">Dragon Suite</span> 🐲
      </h1>
      <p class="text-xl text-gray-400 max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
        7 powerful AI-driven products. One unified gamification experience. Building 1000 startups in 10 years through the Agentic/GenAI framework.
      </p>
      
      <!-- Suite Stats -->
      <div class="flex flex-wrap justify-center gap-6" data-aos="fade-up" data-aos-delay="200">
        <div class="bg-white/10 backdrop-blur rounded-2xl px-6 py-4">
          <div class="text-3xl font-bold text-white">7</div>
          <div class="text-gray-400 text-sm">Products</div>
        </div>
        <div class="bg-white/10 backdrop-blur rounded-2xl px-6 py-4">
          <div class="text-3xl font-bold text-white">150K+</div>
          <div class="text-gray-400 text-sm">Users</div>
        </div>
        <div class="bg-white/10 backdrop-blur rounded-2xl px-6 py-4">
          <div class="text-3xl font-bold text-white">1000</div>
          <div class="text-gray-400 text-sm">Startup Goal</div>
        </div>
        <div class="bg-white/10 backdrop-blur rounded-2xl px-6 py-4">
          <div class="text-3xl font-bold text-white">∞</div>
          <div class="text-gray-400 text-sm">Possibilities</div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Products Grid -->
  <section class="py-12 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4">
      <div class="space-y-8">
        ${products.map((product, index) => `
          <div class="bg-gradient-to-r ${product.gradient} rounded-3xl overflow-hidden card-hover" data-aos="${index % 2 === 0 ? 'fade-right' : 'fade-left'}">
            <div class="bg-black/30 backdrop-blur p-6 md:p-8">
              <div class="flex flex-col lg:flex-row gap-8">
                <!-- Product Icon & Basic Info -->
                <div class="lg:w-1/3">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-5xl">
                      ${product.icon}
                    </div>
                    <div>
                      <h2 class="text-2xl font-bold text-white">${product.name}</h2>
                      <div class="flex items-center gap-2 mt-1">
                        <span class="bg-white/20 px-2 py-0.5 rounded text-xs text-white">⚡ ${product.xpMultiplier}x XP</span>
                        <span class="bg-green-500/30 px-2 py-0.5 rounded text-xs text-green-300">Active</span>
                      </div>
                    </div>
                  </div>
                  
                  <p class="text-white/80 mb-4">${product.fullDesc}</p>
                  
                  <!-- Hero Bonus -->
                  <div class="bg-white/10 rounded-xl p-3">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-yellow-400">⭐</span>
                      <span class="text-white font-medium text-sm">Hero Bonus</span>
                    </div>
                    <p class="text-white/70 text-sm">${product.heroBonus.hero}: ${product.heroBonus.bonus}</p>
                  </div>
                </div>
                
                <!-- Features & Stats -->
                <div class="lg:w-2/3">
                  <div class="grid sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h3 class="text-white font-bold mb-3 flex items-center gap-2">
                        <span>🎯</span> Key Features
                      </h3>
                      <ul class="space-y-2">
                        ${product.features.map(feature => `
                          <li class="flex items-center gap-2 text-white/80 text-sm">
                            <span class="text-green-400">✓</span>
                            ${feature}
                          </li>
                        `).join('')}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 class="text-white font-bold mb-3 flex items-center gap-2">
                        <span>📈</span> Impact Stats
                      </h3>
                      <div class="grid grid-cols-3 gap-2">
                        ${Object.entries(product.stats).map(([key, value]) => `
                          <div class="bg-white/10 rounded-lg p-2 text-center">
                            <div class="text-white font-bold">${value}</div>
                            <div class="text-white/50 text-xs capitalize">${key}</div>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  </div>
                  
                  <!-- Action Buttons -->
                  <div class="flex flex-wrap gap-3">
                    <button class="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:scale-105 transition flex items-center gap-2">
                      <span>🚀</span> Launch App
                    </button>
                    <button class="bg-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition flex items-center gap-2">
                      <span>📊</span> View Progress
                    </button>
                    <button class="bg-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition flex items-center gap-2">
                      <span>🎯</span> Challenges
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
  
  <!-- SHAAARP Industries -->
  <section class="py-16 bg-gradient-to-b from-slate-900 to-purple-900/30">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="hero-title text-3xl md:text-4xl text-white mb-4" data-aos="fade-up">
          SHAAARP <span class="text-green-400">Industries</span> 🏭
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Our products serve these key industry verticals
        </p>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        ${[
          { name: 'Smart City', icon: '🏙️' },
          { name: 'Healthcare', icon: '🏥' },
          { name: 'Agriculture', icon: '🌾' },
          { name: 'Retail FMCG', icon: '🛒' },
          { name: 'Automotive', icon: '🚗' },
          { name: 'Defense', icon: '🛡️' },
          { name: 'Real Estate', icon: '🏠' },
          { name: 'Sports & Media', icon: '🎬' },
          { name: 'BFSI', icon: '💳' },
          { name: 'Energy', icon: '⚡' },
        ].map((industry, index) => `
          <div class="bg-white/5 backdrop-blur rounded-xl p-4 text-center hover:bg-white/10 transition" data-aos="zoom-in" data-aos-delay="${index * 50}">
            <div class="text-3xl mb-2">${industry.icon}</div>
            <div class="text-white text-sm font-medium">${industry.name}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
  
  <!-- RADICAL Technologies -->
  <section class="py-16 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="hero-title text-3xl md:text-4xl text-white mb-4" data-aos="fade-up">
          RADICAL <span class="text-purple-400">Technologies</span> 🔬
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Cutting-edge technologies powering our products
        </p>
      </div>
      
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        ${[
          { name: 'Robotics & Automation', icon: '🤖', color: 'from-blue-500 to-cyan-500' },
          { name: 'AR/VR', icon: '🥽', color: 'from-purple-500 to-pink-500' },
          { name: 'Data Science/AI/ML', icon: '🧠', color: 'from-green-500 to-emerald-500' },
          { name: 'IoT/Cybersecurity', icon: '🔐', color: 'from-red-500 to-orange-500' },
          { name: 'Communication Tech', icon: '📡', color: 'from-yellow-500 to-amber-500' },
          { name: 'Additive Manufacturing', icon: '🖨️', color: 'from-indigo-500 to-violet-500' },
          { name: 'Low Code/No Code', icon: '⚙️', color: 'from-pink-500 to-rose-500' },
        ].map((tech, index) => `
          <div class="bg-gradient-to-r ${tech.color} rounded-xl p-4 text-center transform hover:scale-105 transition" data-aos="flip-up" data-aos-delay="${index * 50}">
            <div class="text-4xl mb-2">${tech.icon}</div>
            <div class="text-white font-bold text-sm">${tech.name}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
  
  <!-- CTA -->
  <section class="py-16 bg-gradient-to-r from-dragon-600 via-magic-600 to-dragon-600">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 class="hero-title text-3xl md:text-4xl text-white mb-4" data-aos="zoom-in">
        Ready to Join the Dragon Suite?
      </h2>
      <p class="text-white/80 mb-8" data-aos="fade-up" data-aos-delay="100">
        Start your journey today and unlock the power of unified gamification across all products!
      </p>
      <div class="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
        <a href="/heroes" class="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition">
          Choose Your Hero 🦸
        </a>
        <a href="/dashboard" class="bg-white/20 text-white border-2 border-white/50 px-8 py-3 rounded-full font-bold hover:bg-white/30 transition">
          View Dashboard 📊
        </a>
      </div>
    </div>
  </section>
  
  ${footer}
</body>
`
