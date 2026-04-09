import { supabaseAdmin } from './lib/supabaseClient';

const badges = [
  // ============================================
  // BEGINNER BADGES (Common)
  // ============================================
  {
    slug: 'first-dose',
    name_pt: 'Primeira Dose',
    name_en: 'First Dose',
    description_pt: 'Gere sua primeira frase desmotivacional',
    description_en: 'Generate your first demotivational phrase',
    icon: '🎯',
    category: 'BEGINNER',
    requirement_type: 'COUNT',
    requirement_value: 1,
    points_reward: 10,
    rarity: 'COMMON',
  },
  {
    slug: 'social-butterfly',
    name_pt: 'Borboleta Social',
    name_en: 'Social Butterfly',
    description_pt: 'Compartilhe sua primeira frase',
    description_en: 'Share your first phrase',
    icon: '🦋',
    category: 'BEGINNER',
    requirement_type: 'COUNT',
    requirement_value: 1,
    points_reward: 10,
    rarity: 'COMMON',
  },
  {
    slug: 'coming-back',
    name_pt: 'Voltando',
    name_en: 'Coming Back',
    description_pt: 'Visite 3 dias seguidos',
    description_en: 'Visit 3 days in a row',
    icon: '🔄',
    category: 'BEGINNER',
    requirement_type: 'STREAK',
    requirement_value: 3,
    points_reward: 15,
    rarity: 'COMMON',
  },
  {
    slug: 'explorer',
    name_pt: 'Explorador',
    name_en: 'Explorer',
    description_pt: 'Use as versões em PT e EN',
    description_en: 'Use both PT and EN versions',
    icon: '🌍',
    category: 'BEGINNER',
    requirement_type: 'SPECIAL',
    requirement_value: 2,
    points_reward: 20,
    rarity: 'COMMON',
  },
  {
    slug: 'ten-club',
    name_pt: 'Clube dos 10',
    name_en: 'Ten Club',
    description_pt: 'Gere 10 frases',
    description_en: 'Generate 10 phrases',
    icon: '🔟',
    category: 'BEGINNER',
    requirement_type: 'COUNT',
    requirement_value: 10,
    points_reward: 15,
    rarity: 'COMMON',
  },

  // ============================================
  // INTERMEDIATE BADGES (Rare)
  // ============================================
  {
    slug: 'addicted',
    name_pt: 'Viciado',
    name_en: 'Addicted',
    description_pt: 'Mantenha uma sequência de 7 dias',
    description_en: 'Maintain a 7-day streak',
    icon: '🔥',
    category: 'INTERMEDIATE',
    requirement_type: 'STREAK',
    requirement_value: 7,
    points_reward: 50,
    rarity: 'RARE',
  },
  {
    slug: 'century-club',
    name_pt: 'Clube dos 100',
    name_en: 'Century Club',
    description_pt: 'Gere 100 frases',
    description_en: 'Generate 100 frases',
    icon: '💯',
    category: 'INTERMEDIATE',
    requirement_type: 'COUNT',
    requirement_value: 100,
    points_reward: 100,
    rarity: 'RARE',
  },
  {
    slug: 'influencer',
    name_pt: 'Influenciador',
    name_en: 'Influencer',
    description_pt: 'Compartilhe 50 vezes',
    description_en: 'Share 50 times',
    icon: '📢',
    category: 'INTERMEDIATE',
    requirement_type: 'COUNT',
    requirement_value: 50,
    points_reward: 75,
    rarity: 'RARE',
  },
  {
    slug: 'collector',
    name_pt: 'Colecionador',
    name_en: 'Collector',
    description_pt: 'Veja 25 frases únicas',
    description_en: 'See 25 unique phrases',
    icon: '📚',
    category: 'INTERMEDIATE',
    requirement_type: 'UNIQUE',
    requirement_value: 25,
    points_reward: 50,
    rarity: 'RARE',
  },
  {
    slug: 'two-weeks',
    name_pt: 'Duas Semanas',
    name_en: 'Two Weeks',
    description_pt: 'Mantenha uma sequência de 14 dias',
    description_en: 'Maintain a 14-day streak',
    icon: '📅',
    category: 'INTERMEDIATE',
    requirement_type: 'STREAK',
    requirement_value: 14,
    points_reward: 100,
    rarity: 'RARE',
  },

  // ============================================
  // ADVANCED BADGES (Epic)
  // ============================================
  {
    slug: 'demotivation-master',
    name_pt: 'Mestre da Desmotivação',
    name_en: 'Demotivation Master',
    description_pt: 'Mantenha uma sequência de 30 dias',
    description_en: 'Maintain a 30-day streak',
    icon: '👑',
    category: 'ADVANCED',
    requirement_type: 'STREAK',
    requirement_value: 30,
    points_reward: 300,
    rarity: 'EPIC',
  },
  {
    slug: 'viral-king',
    name_pt: 'Rei Viral',
    name_en: 'Viral King',
    description_pt: 'Compartilhe 500 vezes',
    description_en: 'Share 500 times',
    icon: '👑',
    category: 'ADVANCED',
    requirement_type: 'COUNT',
    requirement_value: 500,
    points_reward: 500,
    rarity: 'EPIC',
  },
  {
    slug: 'completionist',
    name_pt: 'Completista',
    name_en: 'Completionist',
    description_pt: 'Veja todas as 75 frases únicas',
    description_en: 'See all 75 unique phrases',
    icon: '🏆',
    category: 'ADVANCED',
    requirement_type: 'UNIQUE',
    requirement_value: 75,
    points_reward: 250,
    rarity: 'EPIC',
  },
  {
    slug: 'dedicated',
    name_pt: 'Dedicado',
    name_en: 'Dedicated',
    description_pt: 'Mantenha uma sequência de 100 dias',
    description_en: 'Maintain a 100-day streak',
    icon: '💎',
    category: 'ADVANCED',
    requirement_type: 'STREAK',
    requirement_value: 100,
    points_reward: 1000,
    rarity: 'EPIC',
  },
  {
    slug: 'thousand-club',
    name_pt: 'Clube dos 1000',
    name_en: 'Thousand Club',
    description_pt: 'Gere 1000 frases',
    description_en: 'Generate 1000 frases',
    icon: '🎖️',
    category: 'ADVANCED',
    requirement_type: 'COUNT',
    requirement_value: 1000,
    points_reward: 500,
    rarity: 'EPIC',
  },

  // ============================================
  // SPECIAL BADGES (Legendary)
  // ============================================
  {
    slug: 'early-adopter',
    name_pt: 'Adotante Inicial',
    name_en: 'Early Adopter',
    description_pt: 'Junte-se no primeiro mês',
    description_en: 'Join in the first month',
    icon: '⭐',
    category: 'SPECIAL',
    requirement_type: 'SPECIAL',
    requirement_value: 1,
    points_reward: 100,
    rarity: 'LEGENDARY',
  },
  {
    slug: 'weekend-warrior',
    name_pt: 'Guerreiro de Fim de Semana',
    name_en: 'Weekend Warrior',
    description_pt: 'Visite todos os fins de semana por um mês',
    description_en: 'Visit every weekend for a month',
    icon: '🎮',
    category: 'SPECIAL',
    requirement_type: 'SPECIAL',
    requirement_value: 4,
    points_reward: 150,
    rarity: 'LEGENDARY',
  },
  {
    slug: 'night-owl',
    name_pt: 'Coruja Noturna',
    name_en: 'Night Owl',
    description_pt: 'Gere 50 frases após meia-noite',
    description_en: 'Generate 50 phrases after midnight',
    icon: '🦉',
    category: 'SPECIAL',
    requirement_type: 'TIME',
    requirement_value: 50,
    points_reward: 100,
    rarity: 'LEGENDARY',
  },
  {
    slug: 'morning-person',
    name_pt: 'Pessoa Matinal',
    name_en: 'Morning Person',
    description_pt: 'Gere 50 frases antes das 8h',
    description_en: 'Generate 50 phrases before 8 AM',
    icon: '🌅',
    category: 'SPECIAL',
    requirement_type: 'TIME',
    requirement_value: 50,
    points_reward: 100,
    rarity: 'LEGENDARY',
  },
  {
    slug: 'year-long',
    name_pt: 'Um Ano Inteiro',
    name_en: 'Year Long',
    description_pt: 'Mantenha uma sequência de 365 dias',
    description_en: 'Maintain a 365-day streak',
    icon: '🎊',
    category: 'SPECIAL',
    requirement_type: 'STREAK',
    requirement_value: 365,
    points_reward: 3650,
    rarity: 'LEGENDARY',
  },
  {
    slug: 'super-sharer',
    name_pt: 'Super Compartilhador',
    name_en: 'Super Sharer',
    description_pt: 'Compartilhe em todas as 3 plataformas',
    description_en: 'Share on all 3 platforms',
    icon: '🚀',
    category: 'SPECIAL',
    requirement_type: 'SPECIAL',
    requirement_value: 3,
    points_reward: 50,
    rarity: 'LEGENDARY',
  },
];

async function main() {
  console.log('🌱 Starting badge seeding via Supabase...');
  
  // Clear existing badges
  const { error: deleteError } = await supabaseAdmin
    .from('badges')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all
    
  if (deleteError) {
    console.error('❌ Error clearing badges:', deleteError);
    return;
  }
  
  console.log('🗑️  Cleared existing badges');
  
  // Insert new badges
  const { data, error: insertError } = await supabaseAdmin
    .from('badges')
    .insert(badges)
    .select();
    
  if (insertError) {
    console.error('❌ Error inserting badges:', insertError);
    return;
  }
  
  console.log(`✅ Inserted ${data.length} badges`);
  console.log('🎉 Badge seeding completed!');
}

main().catch(console.error);