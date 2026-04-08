import { PrismaClient, BadgeCategory, RequirementType, BadgeRarity } from '@prisma/client';

const prisma = new PrismaClient();

const badges = [
  // ============================================
  // BEGINNER BADGES (Common)
  // ============================================
  {
    slug: 'first-dose',
    namePt: 'Primeira Dose',
    nameEn: 'First Dose',
    descriptionPt: 'Gere sua primeira frase desmotivacional',
    descriptionEn: 'Generate your first demotivational phrase',
    icon: '🎯',
    category: BadgeCategory.BEGINNER,
    requirementType: RequirementType.COUNT,
    requirementValue: 1,
    pointsReward: 10,
    rarity: BadgeRarity.COMMON,
  },
  {
    slug: 'social-butterfly',
    namePt: 'Borboleta Social',
    nameEn: 'Social Butterfly',
    descriptionPt: 'Compartilhe sua primeira frase',
    descriptionEn: 'Share your first phrase',
    icon: '🦋',
    category: BadgeCategory.BEGINNER,
    requirementType: RequirementType.COUNT,
    requirementValue: 1,
    pointsReward: 10,
    rarity: BadgeRarity.COMMON,
  },
  {
    slug: 'coming-back',
    namePt: 'Voltando',
    nameEn: 'Coming Back',
    descriptionPt: 'Visite 3 dias seguidos',
    descriptionEn: 'Visit 3 days in a row',
    icon: '🔄',
    category: BadgeCategory.BEGINNER,
    requirementType: RequirementType.STREAK,
    requirementValue: 3,
    pointsReward: 15,
    rarity: BadgeRarity.COMMON,
  },
  {
    slug: 'explorer',
    namePt: 'Explorador',
    nameEn: 'Explorer',
    descriptionPt: 'Use as versões em PT e EN',
    descriptionEn: 'Use both PT and EN versions',
    icon: '🌍',
    category: BadgeCategory.BEGINNER,
    requirementType: RequirementType.SPECIAL,
    requirementValue: 2,
    pointsReward: 20,
    rarity: BadgeRarity.COMMON,
  },
  {
    slug: 'ten-club',
    namePt: 'Clube dos 10',
    nameEn: 'Ten Club',
    descriptionPt: 'Gere 10 frases',
    descriptionEn: 'Generate 10 phrases',
    icon: '🔟',
    category: BadgeCategory.BEGINNER,
    requirementType: RequirementType.COUNT,
    requirementValue: 10,
    pointsReward: 15,
    rarity: BadgeRarity.COMMON,
  },

  // ============================================
  // INTERMEDIATE BADGES (Rare)
  // ============================================
  {
    slug: 'addicted',
    namePt: 'Viciado',
    nameEn: 'Addicted',
    descriptionPt: 'Mantenha uma sequência de 7 dias',
    descriptionEn: 'Maintain a 7-day streak',
    icon: '🔥',
    category: BadgeCategory.INTERMEDIATE,
    requirementType: RequirementType.STREAK,
    requirementValue: 7,
    pointsReward: 50,
    rarity: BadgeRarity.RARE,
  },
  {
    slug: 'century-club',
    namePt: 'Clube dos 100',
    nameEn: 'Century Club',
    descriptionPt: 'Gere 100 frases',
    descriptionEn: 'Generate 100 phrases',
    icon: '💯',
    category: BadgeCategory.INTERMEDIATE,
    requirementType: RequirementType.COUNT,
    requirementValue: 100,
    pointsReward: 100,
    rarity: BadgeRarity.RARE,
  },
  {
    slug: 'influencer',
    namePt: 'Influenciador',
    nameEn: 'Influencer',
    descriptionPt: 'Compartilhe 50 vezes',
    descriptionEn: 'Share 50 times',
    icon: '📢',
    category: BadgeCategory.INTERMEDIATE,
    requirementType: RequirementType.COUNT,
    requirementValue: 50,
    pointsReward: 75,
    rarity: BadgeRarity.RARE,
  },
  {
    slug: 'collector',
    namePt: 'Colecionador',
    nameEn: 'Collector',
    descriptionPt: 'Veja 25 frases únicas',
    descriptionEn: 'See 25 unique phrases',
    icon: '📚',
    category: BadgeCategory.INTERMEDIATE,
    requirementType: RequirementType.UNIQUE,
    requirementValue: 25,
    pointsReward: 50,
    rarity: BadgeRarity.RARE,
  },
  {
    slug: 'two-weeks',
    namePt: 'Duas Semanas',
    nameEn: 'Two Weeks',
    descriptionPt: 'Mantenha uma sequência de 14 dias',
    descriptionEn: 'Maintain a 14-day streak',
    icon: '📅',
    category: BadgeCategory.INTERMEDIATE,
    requirementType: RequirementType.STREAK,
    requirementValue: 14,
    pointsReward: 100,
    rarity: BadgeRarity.RARE,
  },

  // ============================================
  // ADVANCED BADGES (Epic)
  // ============================================
  {
    slug: 'demotivation-master',
    namePt: 'Mestre da Desmotivação',
    nameEn: 'Demotivation Master',
    descriptionPt: 'Mantenha uma sequência de 30 dias',
    descriptionEn: 'Maintain a 30-day streak',
    icon: '👑',
    category: BadgeCategory.ADVANCED,
    requirementType: RequirementType.STREAK,
    requirementValue: 30,
    pointsReward: 300,
    rarity: BadgeRarity.EPIC,
  },
  {
    slug: 'viral-king',
    namePt: 'Rei Viral',
    nameEn: 'Viral King',
    descriptionPt: 'Compartilhe 500 vezes',
    descriptionEn: 'Share 500 times',
    icon: '👑',
    category: BadgeCategory.ADVANCED,
    requirementType: RequirementType.COUNT,
    requirementValue: 500,
    pointsReward: 500,
    rarity: BadgeRarity.EPIC,
  },
  {
    slug: 'completionist',
    namePt: 'Completista',
    nameEn: 'Completionist',
    descriptionPt: 'Veja todas as 75 frases únicas',
    descriptionEn: 'See all 75 unique phrases',
    icon: '🏆',
    category: BadgeCategory.ADVANCED,
    requirementType: RequirementType.UNIQUE,
    requirementValue: 75,
    pointsReward: 250,
    rarity: BadgeRarity.EPIC,
  },
  {
    slug: 'dedicated',
    namePt: 'Dedicado',
    nameEn: 'Dedicated',
    descriptionPt: 'Mantenha uma sequência de 100 dias',
    descriptionEn: 'Maintain a 100-day streak',
    icon: '💎',
    category: BadgeCategory.ADVANCED,
    requirementType: RequirementType.STREAK,
    requirementValue: 100,
    pointsReward: 1000,
    rarity: BadgeRarity.EPIC,
  },
  {
    slug: 'thousand-club',
    namePt: 'Clube dos 1000',
    nameEn: 'Thousand Club',
    descriptionPt: 'Gere 1000 frases',
    descriptionEn: 'Generate 1000 phrases',
    icon: '🎖️',
    category: BadgeCategory.ADVANCED,
    requirementType: RequirementType.COUNT,
    requirementValue: 1000,
    pointsReward: 500,
    rarity: BadgeRarity.EPIC,
  },

  // ============================================
  // SPECIAL BADGES (Legendary)
  // ============================================
  {
    slug: 'early-adopter',
    namePt: 'Adotante Inicial',
    nameEn: 'Early Adopter',
    descriptionPt: 'Junte-se no primeiro mês',
    descriptionEn: 'Join in the first month',
    icon: '⭐',
    category: BadgeCategory.SPECIAL,
    requirementType: RequirementType.SPECIAL,
    requirementValue: 1,
    pointsReward: 100,
    rarity: BadgeRarity.LEGENDARY,
  },
  {
    slug: 'weekend-warrior',
    namePt: 'Guerreiro de Fim de Semana',
    nameEn: 'Weekend Warrior',
    descriptionPt: 'Visite todos os fins de semana por um mês',
    descriptionEn: 'Visit every weekend for a month',
    icon: '🎮',
    category: BadgeCategory.SPECIAL,
    requirementType: RequirementType.SPECIAL,
    requirementValue: 4,
    pointsReward: 150,
    rarity: BadgeRarity.LEGENDARY,
  },
  {
    slug: 'night-owl',
    namePt: 'Coruja Noturna',
    nameEn: 'Night Owl',
    descriptionPt: 'Gere 50 frases após meia-noite',
    descriptionEn: 'Generate 50 phrases after midnight',
    icon: '🦉',
    category: BadgeCategory.SPECIAL,
    requirementType: RequirementType.TIME,
    requirementValue: 50,
    pointsReward: 100,
    rarity: BadgeRarity.LEGENDARY,
  },
  {
    slug: 'morning-person',
    namePt: 'Pessoa Matinal',
    nameEn: 'Morning Person',
    descriptionPt: 'Gere 50 frases antes das 8h',
    descriptionEn: 'Generate 50 phrases before 8 AM',
    icon: '🌅',
    category: BadgeCategory.SPECIAL,
    requirementType: RequirementType.TIME,
    requirementValue: 50,
    pointsReward: 100,
    rarity: BadgeRarity.LEGENDARY,
  },
  {
    slug: 'year-long',
    namePt: 'Um Ano Inteiro',
    nameEn: 'Year Long',
    descriptionPt: 'Mantenha uma sequência de 365 dias',
    descriptionEn: 'Maintain a 365-day streak',
    icon: '🎊',
    category: BadgeCategory.SPECIAL,
    requirementType: RequirementType.STREAK,
    requirementValue: 365,
    pointsReward: 3650,
    rarity: BadgeRarity.LEGENDARY,
  },
  {
    slug: 'super-sharer',
    namePt: 'Super Compartilhador',
    nameEn: 'Super Sharer',
    descriptionPt: 'Compartilhe em todas as 3 plataformas',
    descriptionEn: 'Share on all 3 platforms',
    icon: '🚀',
    category: BadgeCategory.SPECIAL,
    requirementType: RequirementType.SPECIAL,
    requirementValue: 3,
    pointsReward: 50,
    rarity: BadgeRarity.LEGENDARY,
  },
];

async function main() {
  console.log('🌱 Starting seed...');

  // Clear existing badges
  await prisma.badge.deleteMany({});
  console.log('🗑️  Cleared existing badges');

  // Create badges
  for (const badge of badges) {
    await prisma.badge.create({
      data: badge,
    });
  }

  console.log(`✅ Created ${badges.length} badges`);
  console.log('🎉 Seed completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
