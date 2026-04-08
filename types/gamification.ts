import { 
  User, 
  UserActivity, 
  Badge, 
  UserBadge, 
  PhraseSeen, 
  UserFavorite, 
  DailyStreak,
  ActionType,
  BadgeCategory,
  BadgeRarity,
  RequirementType
} from '@prisma/client';

// ============================================
// USER TYPES
// ============================================

export type UserWithStats = User & {
  activities: UserActivity[];
  badges: (UserBadge & { badge: Badge })[];
  phrasesSeen: PhraseSeen[];
  favorites: UserFavorite[];
  dailyStreaks: DailyStreak[];
};

export type UserProfile = {
  id: string;
  clerkId: string;
  githubUsername: string | null;
  email: string;
  avatarUrl: string | null;
  displayName: string | null;
  totalPoints: number;
  currentStreak: number;
  longestStreak: number;
  level: number;
  createdAt: Date;
  lastActivityAt: Date;
};

export type UserStats = {
  totalPoints: number;
  currentStreak: number;
  longestStreak: number;
  level: number;
  totalPhrases: number;
  totalShares: number;
  uniquePhrasesSeen: number;
  badgesUnlocked: number;
  totalBadges: number;
  rank: number | null;
  joinedDaysAgo: number;
};

// ============================================
// ACTIVITY TYPES
// ============================================

export type ActivityMetadata = {
  phraseIndex?: number;
  platform?: 'whatsapp' | 'twitter' | 'linkedin';
  badgeId?: string;
  badgeSlug?: string;
  oldLevel?: number;
  newLevel?: number;
  locale?: 'pt' | 'en';
};

export type CreateActivityInput = {
  userId: string;
  actionType: ActionType;
  pointsEarned: number;
  metadata?: ActivityMetadata;
};

export type ActivityWithDetails = UserActivity & {
  metadata: ActivityMetadata;
};

// ============================================
// BADGE TYPES
// ============================================

export type BadgeWithProgress = Badge & {
  progress: number;
  isUnlocked: boolean;
  unlockedAt?: Date;
};

export type BadgeUnlockResult = {
  badge: Badge;
  isNewUnlock: boolean;
  pointsAwarded: number;
};

export type BadgeCheckResult = {
  unlockedBadges: BadgeUnlockResult[];
  totalPointsAwarded: number;
};

// ============================================
// LEADERBOARD TYPES
// ============================================

export type LeaderboardPeriod = 'daily' | 'weekly' | 'monthly' | 'alltime';

export type LeaderboardEntry = {
  rank: number;
  userId: string;
  username: string;
  avatarUrl: string | null;
  points: number;
  phrasesGenerated: number;
  sharesCount: number;
  isCurrentUser?: boolean;
};

export type LeaderboardData = {
  period: LeaderboardPeriod;
  entries: LeaderboardEntry[];
  currentUserRank: number | null;
  totalUsers: number;
  updatedAt: Date;
};

// ============================================
// POINT SYSTEM TYPES
// ============================================

export const POINTS = {
  GENERATE_PHRASE: 1,
  FIRST_PHRASE_OF_DAY: 2,
  SHARE_WHATSAPP: 3,
  SHARE_TWITTER: 3,
  SHARE_LINKEDIN: 3,
  DAILY_STREAK_BONUS: 5,
  WEEKLY_STREAK_BONUS: 20,
  MONTHLY_STREAK_BONUS: 100,
  BADGE_UNLOCK_BASE: 10,
  REFERRAL_SIGNUP: 50,
  SEE_ALL_PHRASES: 75,
} as const;

export const BADGE_RARITY_MULTIPLIER = {
  COMMON: 1,
  RARE: 2,
  EPIC: 5,
  LEGENDARY: 10,
} as const;

// ============================================
// LEVEL SYSTEM TYPES
// ============================================

export type LevelInfo = {
  level: number;
  name: string;
  minPoints: number;
  maxPoints: number;
  namePt: string;
  nameEn: string;
};

export const LEVELS: LevelInfo[] = [
  { level: 1, name: 'Newbie', namePt: 'Novato', nameEn: 'Newbie', minPoints: 0, maxPoints: 50 },
  { level: 2, name: 'Regular', namePt: 'Regular', nameEn: 'Regular', minPoints: 51, maxPoints: 200 },
  { level: 3, name: 'Enthusiast', namePt: 'Entusiasta', nameEn: 'Enthusiast', minPoints: 201, maxPoints: 500 },
  { level: 4, name: 'Addict', namePt: 'Viciado', nameEn: 'Addict', minPoints: 501, maxPoints: 1000 },
  { level: 5, name: 'Master', namePt: 'Mestre', nameEn: 'Master', minPoints: 1001, maxPoints: 2500 },
  { level: 6, name: 'Legend', namePt: 'Lenda', nameEn: 'Legend', minPoints: 2501, maxPoints: Infinity },
];

export type LevelUpResult = {
  leveledUp: boolean;
  oldLevel: number;
  newLevel: number;
  levelInfo: LevelInfo;
  pointsToNextLevel: number;
};

// ============================================
// STREAK TYPES
// ============================================

export type StreakInfo = {
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: Date | null;
  isActiveToday: boolean;
  streakBroken: boolean;
};

export type StreakUpdateResult = {
  currentStreak: number;
  longestStreak: number;
  bonusPoints: number;
  milestoneReached: boolean;
  milestone?: number;
};

// ============================================
// PHRASE TRACKING TYPES
// ============================================

export type PhraseSeenInput = {
  userId: string;
  phraseIndex: number;
};

export type PhraseSeenResult = {
  isFirstTime: boolean;
  seenCount: number;
  totalUniqueSeen: number;
};

// ============================================
// NOTIFICATION TYPES
// ============================================

export type NotificationType = 
  | 'badge_unlock'
  | 'level_up'
  | 'streak_milestone'
  | 'leaderboard_rank';

export type Notification = {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  icon?: string;
  data?: Record<string, unknown>;
  createdAt: Date;
};

// ============================================
// API RESPONSE TYPES
// ============================================

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

export type TrackActivityResponse = {
  pointsEarned: number;
  totalPoints: number;
  badges: BadgeUnlockResult[];
  levelUp?: LevelUpResult;
  streak?: StreakUpdateResult;
};

// ============================================
// EXPORT ALL PRISMA TYPES
// ============================================

export type {
  User,
  UserActivity,
  Badge,
  UserBadge,
  PhraseSeen,
  UserFavorite,
  DailyStreak,
  ActionType,
  BadgeCategory,
  BadgeRarity,
  RequirementType,
};
