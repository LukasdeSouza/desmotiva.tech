-- Badges for Desmotiva Dev
-- Run this SQL in your Supabase SQL editor to populate the badges table

-- Clear existing badges (optional)
-- DELETE FROM badges;

-- ============================================
-- BEGINNER BADGES (Common)
-- ============================================
INSERT INTO badges (slug, name_pt, name_en, description_pt, description_en, icon, category, requirement_type, requirement_value, points_reward, rarity) VALUES
('first-dose', 'Primeira Dose', 'First Dose', 'Gere sua primeira frase desmotivacional', 'Generate your first demotivational phrase', '🎯', 'BEGINNER', 'COUNT', 1, 10, 'COMMON'),
('social-butterfly', 'Borboleta Social', 'Social Butterfly', 'Compartilhe sua primeira frase', 'Share your first phrase', '🦋', 'BEGINNER', 'COUNT', 1, 10, 'COMMON'),
('coming-back', 'Voltando', 'Coming Back', 'Visite 3 dias seguidos', 'Visit 3 days in a row', '🔄', 'BEGINNER', 'STREAK', 3, 15, 'COMMON'),
('explorer', 'Explorador', 'Explorer', 'Use as versões em PT e EN', 'Use both PT and EN versions', '🌍', 'BEGINNER', 'SPECIAL', 2, 20, 'COMMON'),
('ten-club', 'Clube dos 10', 'Ten Club', 'Gere 10 frases', 'Generate 10 phrases', '🔟', 'BEGINNER', 'COUNT', 10, 15, 'COMMON');

-- ============================================
-- INTERMEDIATE BADGES (Rare)
-- ============================================
INSERT INTO badges (slug, name_pt, name_en, description_pt, description_en, icon, category, requirement_type, requirement_value, points_reward, rarity) VALUES
('addicted', 'Viciado', 'Addicted', 'Mantenha uma sequência de 7 dias', 'Maintain a 7-day streak', '🔥', 'INTERMEDIATE', 'STREAK', 7, 50, 'RARE'),
('century-club', 'Clube dos 100', 'Century Club', 'Gere 100 frases', 'Generate 100 phrases', '💯', 'INTERMEDIATE', 'COUNT', 100, 100, 'RARE'),
('influencer', 'Influenciador', 'Influencer', 'Compartilhe 50 vezes', 'Share 50 times', '📢', 'INTERMEDIATE', 'COUNT', 50, 75, 'RARE'),
('collector', 'Colecionador', 'Collector', 'Veja 25 frases únicas', 'See 25 unique phrases', '📚', 'INTERMEDIATE', 'UNIQUE', 25, 50, 'RARE'),
('two-weeks', 'Duas Semanas', 'Two Weeks', 'Mantenha uma sequência de 14 dias', 'Maintain a 14-day streak', '📅', 'INTERMEDIATE', 'STREAK', 14, 100, 'RARE');

-- ============================================
-- ADVANCED BADGES (Epic)
-- ============================================
INSERT INTO badges (slug, name_pt, name_en, description_pt, description_en, icon, category, requirement_type, requirement_value, points_reward, rarity) VALUES
('demotivation-master', 'Mestre da Desmotivação', 'Demotivation Master', 'Mantenha uma sequência de 30 dias', 'Maintain a 30-day streak', '👑', 'ADVANCED', 'STREAK', 30, 300, 'EPIC'),
('viral-king', 'Rei Viral', 'Viral King', 'Compartilhe 500 vezes', 'Share 500 times', '👑', 'ADVANCED', 'COUNT', 500, 500, 'EPIC'),
('completionist', 'Completista', 'Completionist', 'Veja todas as 75 frases únicas', 'See all 75 unique phrases', '🏆', 'ADVANCED', 'UNIQUE', 75, 250, 'EPIC'),
('dedicated', 'Dedicado', 'Dedicated', 'Mantenha uma sequência de 100 dias', 'Maintain a 100-day streak', '💎', 'ADVANCED', 'STREAK', 100, 1000, 'EPIC'),
('thousand-club', 'Clube dos 1000', 'Thousand Club', 'Gere 1000 frases', 'Generate 1000 phrases', '🎖️', 'ADVANCED', 'COUNT', 1000, 500, 'EPIC');

-- ============================================
-- SPECIAL BADGES (Legendary)
-- ============================================
INSERT INTO badges (slug, name_pt, name_en, description_pt, description_en, icon, category, requirement_type, requirement_value, points_reward, rarity) VALUES
('early-adopter', 'Adotante Inicial', 'Early Adopter', 'Junte-se no primeiro mês', 'Join in the first month', '⭐', 'SPECIAL', 'SPECIAL', 1, 100, 'LEGENDARY'),
('weekend-warrior', 'Guerreiro de Fim de Semana', 'Weekend Warrior', 'Visite todos os fins de semana por um mês', 'Visit every weekend for a month', '🎮', 'SPECIAL', 'SPECIAL', 4, 150, 'LEGENDARY'),
('night-owl', 'Coruja Noturna', 'Night Owl', 'Gere 50 frases após meia-noite', 'Generate 50 phrases after midnight', '🦉', 'SPECIAL', 'TIME', 50, 100, 'LEGENDARY'),
('morning-person', 'Pessoa Matinal', 'Morning Person', 'Gere 50 frases antes das 8h', 'Generate 50 phrases before 8 AM', '🌅', 'SPECIAL', 'TIME', 50, 100, 'LEGENDARY'),
('year-long', 'Um Ano Inteiro', 'Year Long', 'Mantenha uma sequência de 365 dias', 'Maintain a 365-day streak', '🎊', 'SPECIAL', 'STREAK', 365, 3650, 'LEGENDARY'),
('super-sharer', 'Super Compartilhador', 'Super Sharer', 'Compartilhe em todas as 3 plataformas', 'Share on all 3 platforms', '🚀', 'SPECIAL', 'SPECIAL', 3, 50, 'LEGENDARY');