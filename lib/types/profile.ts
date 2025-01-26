export type Achievement = {
  id: string;
  title: string;
  description: string;
  date: string;
  points: number;
  badge?: string;
};

export type Activity = {
  id: string;
  type:
    | "challenge_joined"
    | "challenge_completed"
    | "badge_earned"
    | "points_earned";
  title: string;
  description: string;
  date: string;
  points?: number;
  challengeId?: string;
  badgeId?: string;
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  department: string;
  position: string;
  joinDate: string;
  level: number;
  points: number;
  rank: number;
  stats: {
    challengesCompleted: number;
    badgesEarned: number;
    totalPoints: number;
    activeChallenges: number;
  };
  achievements: Achievement[];
  recentActivity: Activity[];
  badges: string[];
};
