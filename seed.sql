-- 1000 Dragons Gamification Hub - Seed Data
-- SNS Innovation Hub - Redesigning Common Minds

-- Insert 15 Superheroes
INSERT OR IGNORE INTO heroes (name, tagline, description, category, color_primary, color_secondary, emoji, unlock_type, unlock_cost, unlock_level, base_power, special_ability, evolution_stages) VALUES
('Spider-Man', 'Your Friendly Neighborhood Hero!', 'With great power comes great responsibility. Swing through challenges with agility and quick thinking!', 'action', '#E23636', '#1A1A2E', '🕷️', 'free', 0, 1, 120, 'Web of Learning - Connects related concepts together', 3),
('Chhota Bheem', 'Super Strong & Smart!', 'Laddu-powered strength meets street-smart wisdom. Face every challenge head-on!', 'kids', '#FF8C00', '#8B4513', '💪', 'free', 0, 1, 130, 'Laddu Boost - Extra energy for marathon sessions', 3),
('Mickey Mouse', 'Fun & Friendship!', 'Where magic meets determination. Every challenge is an adventure waiting to happen!', 'kids', '#FF0000', '#FFD700', '🐭', 'free', 0, 1, 100, 'Magic Spark - Turns difficult tasks fun', 3),
('Elsa', 'Let It Go!', 'Embrace your unique powers. Transform challenges into beautiful achievements!', 'adventure', '#89CFF0', '#FFFFFF', '❄️', 'xp', 500, 5, 140, 'Frozen Focus - Enhanced concentration mode', 4),
('Minions', 'Banana! Bello!', 'Teamwork makes the dream work! Chaotic but effective problem solvers.', 'comedy', '#FFD700', '#0033A0', '🍌', 'free', 0, 1, 90, 'Banana Split - Multitask mastery', 3),
('Doraemon', 'Gadget Master!', 'Got a problem? There is a gadget for that! Future-tech solutions for today.', 'kids', '#0095D9', '#FFFFFF', '🤖', 'coins', 200, 3, 150, 'Pocket Dimension - Access hidden resources', 4),
('Peppa Pig', 'Snort Snort Fun!', 'Jump in muddy puddles of knowledge! Learning is always an adventure.', 'kids', '#FF69B4', '#FFB6C1', '🐷', 'free', 0, 1, 85, 'Puddle Jump - Leap over obstacles easily', 3),
('Pikachu', 'Pika Pika!', 'Electric enthusiasm for every challenge! Shock your way to success.', 'adventure', '#FFD700', '#FFA500', '⚡', 'xp', 300, 3, 135, 'Thunder Shock - Instant energy burst', 4),
('Iron Man', 'Genius Hero!', 'Billionaire, genius, hero. Build your way to greatness with tech and tenacity!', 'action', '#B22222', '#FFD700', '🦾', 'gems', 50, 10, 160, 'Arc Reactor - Unlimited creative energy', 5),
('Paw Patrol', 'Ready for Action!', 'No job is too big, no pup is too small! Team up to tackle any mission.', 'kids', '#4169E1', '#FF6347', '🐾', 'free', 0, 1, 95, 'Team Call - Summon help when stuck', 3),
('Ben 10', 'Its Hero Time!', 'Transform and adapt to any challenge. 10 solutions for every problem!', 'action', '#32CD32', '#000000', '⌚', 'xp', 800, 8, 145, 'Omnitrix Transform - Adapt to any challenge type', 5),
('Motu & Patlu', 'Best Friends Forever!', 'Two heads are better than one! Samosa-powered problem solving duo.', 'comedy', '#FF4500', '#32CD32', '🥟', 'coins', 150, 2, 100, 'Samosa Power - Boost from snack breaks', 3),
('Hulk', 'Hulk Smash!', 'The madder you get, the stronger you become. Smash through any obstacle!', 'action', '#228B22', '#9932CC', '💚', 'xp', 1000, 12, 180, 'Rage Mode - Power through difficult content', 4),
('Lightning McQueen', 'Ka-Chow!', 'Speed is not everything, but winning is! Race to the top of leaderboards.', 'adventure', '#DC143C', '#FFD700', '🏎️', 'coins', 300, 5, 125, 'Turbo Boost - Speed completion bonus', 4),
('Kung Fu Panda', 'Skadoosh!', 'There is no secret ingredient. The power was inside you all along!', 'action', '#000000', '#FFD700', '🐼', 'gems', 30, 7, 155, 'Inner Peace - Perfect calm during tests', 5);

-- Insert Products (1000 Dragons Suite)
INSERT OR IGNORE INTO products (code, name, description, icon, color, xp_multiplier) VALUES
('recruit', 'Dragon Recruit', 'Connect candidates with industries - AI-powered recruitment platform', '🐲', '#6366F1', 1.2),
('assess', 'Dragon Assess', 'Certify niche IT skills with AI video interviews and coding challenges', '📊', '#8B5CF6', 1.5),
('upskill', 'Dragon Upskill', 'Learn AI, MERN, DevOps, Cloud, and more - Career-driven learning', '🎓', '#EC4899', 1.3),
('accredit', 'Dragon Accredit', 'Achieve NAAC, NIRF, NBA rankings - Institutional excellence platform', '🏆', '#F59E0B', 1.4),
('health', 'Dragon Health', 'Agentic AI platform for Healthcare - Connecting the health ecosystem', '🏥', '#10B981', 1.2),
('founders', 'Dragon Founders', 'Build, invest, and market - Agentic AI for startup ecosystem', '🚀', '#EF4444', 1.6),
('gps', 'Dragon GPS', 'AI auto-routing for career paths - Like Google Maps for your career', '🗺️', '#3B82F6', 1.3);

-- Insert Global Achievements
INSERT OR IGNORE INTO achievements (code, name, description, icon, category, xp_reward, coins_reward, rarity, requirement_type, requirement_value) VALUES
('first_login', 'Welcome Dragon!', 'Begin your journey in the 1000 Dragons universe', '🐣', 'milestone', 50, 20, 'common', 'login', 1),
('hero_selected', 'Hero Within', 'Choose your first superhero companion', '🦸', 'milestone', 100, 30, 'common', 'hero_select', 1),
('streak_3', 'Warming Up', 'Login for 3 consecutive days', '🔥', 'streak', 75, 25, 'common', 'streak', 3),
('streak_7', 'On Fire!', 'Login for 7 consecutive days', '🔥', 'streak', 200, 50, 'rare', 'streak', 7),
('streak_30', 'Unstoppable!', 'Login for 30 consecutive days', '⚡', 'streak', 1000, 200, 'epic', 'streak', 30),
('level_5', 'Rising Star', 'Reach Level 5', '⭐', 'milestone', 150, 40, 'common', 'level', 5),
('level_10', 'Dragon Apprentice', 'Reach Level 10', '🌟', 'milestone', 500, 100, 'rare', 'level', 10),
('level_25', 'Dragon Master', 'Reach Level 25', '💫', 'milestone', 1500, 300, 'epic', 'level', 25),
('level_50', 'Dragon Lord', 'Reach Level 50', '👑', 'milestone', 5000, 1000, 'legendary', 'level', 50),
('all_heroes', 'Collector Supreme', 'Unlock all 15 superheroes', '🎭', 'special', 3000, 500, 'legendary', 'heroes_unlocked', 15),
('xp_1000', 'XP Hunter', 'Earn 1000 total XP', '💎', 'milestone', 100, 50, 'common', 'total_xp', 1000),
('xp_10000', 'XP Champion', 'Earn 10000 total XP', '💎', 'milestone', 500, 150, 'rare', 'total_xp', 10000),
('challenges_10', 'Challenge Seeker', 'Complete 10 challenges', '🎯', 'skill', 200, 75, 'common', 'challenges', 10),
('challenges_50', 'Challenge Master', 'Complete 50 challenges', '🎯', 'skill', 750, 200, 'rare', 'challenges', 50),
('multi_product', 'Explorer', 'Use 3 different products', '🧭', 'special', 300, 100, 'rare', 'products_used', 3),
('all_products', 'Dragon Suite Master', 'Use all 7 products', '🐉', 'special', 2000, 500, 'legendary', 'products_used', 7);

-- Insert Daily/Weekly Challenges
INSERT OR IGNORE INTO challenges (code, name, description, challenge_type, xp_reward, coins_reward, requirement_type, requirement_value, refresh_hours) VALUES
('daily_login', 'Dragon Check-In', 'Login to the platform today', 'daily', 25, 10, 'login', 1, 24),
('daily_activity', 'Stay Active', 'Complete any activity in any product', 'daily', 50, 15, 'activity', 1, 24),
('daily_streak', 'Keep the Fire', 'Maintain your login streak', 'daily', 30, 10, 'streak_maintain', 1, 24),
('weekly_xp', 'XP Grinder', 'Earn 500 XP this week', 'weekly', 200, 75, 'xp_earn', 500, 168),
('weekly_challenges', 'Challenge Champion', 'Complete 5 daily challenges', 'weekly', 150, 50, 'challenges_complete', 5, 168),
('weekly_product', 'Product Explorer', 'Use at least 2 different products', 'weekly', 100, 40, 'products_use', 2, 168);

-- Insert Rewards
INSERT OR IGNORE INTO rewards (code, name, description, reward_type, cost_coins, cost_gems, is_featured) VALUES
('avatar_frame_gold', 'Golden Dragon Frame', 'A prestigious golden frame for your avatar', 'virtual', 500, 0, 1),
('avatar_frame_fire', 'Fire Dragon Frame', 'Blazing frame that shows your passion', 'virtual', 300, 0, 0),
('xp_boost_24h', '24H XP Boost', 'Double XP for 24 hours', 'power_boost', 200, 0, 1),
('xp_boost_week', 'Weekly XP Boost', 'Double XP for 7 days', 'power_boost', 0, 25, 1),
('hero_costume_1', 'Hero Costume Pack 1', 'Exclusive costumes for your heroes', 'virtual', 0, 50, 0),
('certificate_digital', 'Digital Achievement Certificate', 'Shareable certificate of your achievements', 'redeemable', 1000, 0, 1),
('mentorship_session', 'Mentorship Session', '30-minute session with an industry expert', 'redeemable', 0, 100, 1),
('sns_swag', 'SNS Swag Pack', 'Exclusive SNS Innovation Hub merchandise', 'redeemable', 2000, 0, 1);

-- Insert sample users for demo
INSERT OR IGNORE INTO users (email, username, display_name, current_hero_id, total_xp, current_level, tier, coins, gems, streak_days) VALUES
('demo@snsihub.ai', 'demo_dragon', 'Demo Dragon', 1, 2500, 8, 'Silver', 450, 25, 7),
('test@snsihub.ai', 'test_hero', 'Test Hero', 3, 1200, 5, 'Bronze', 200, 15, 3);

-- Give demo user some heroes
INSERT OR IGNORE INTO user_heroes (user_id, hero_id, evolution_stage, hero_xp, hero_level) VALUES
(1, 1, 2, 800, 4),
(1, 3, 1, 200, 2),
(1, 5, 1, 100, 1),
(2, 3, 1, 150, 1);

-- Give demo user some achievements
INSERT OR IGNORE INTO user_achievements (user_id, achievement_id, is_claimed) VALUES
(1, 1, 1),
(1, 2, 1),
(1, 3, 1),
(1, 4, 1),
(1, 6, 1);

-- Product XP for demo user
INSERT OR IGNORE INTO user_product_xp (user_id, product_id, xp_earned, level, challenges_completed) VALUES
(1, 1, 800, 4, 12),
(1, 2, 1200, 6, 18),
(1, 3, 500, 3, 8);
