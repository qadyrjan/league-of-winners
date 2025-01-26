export type Trend = "up" | "down";

export interface TopPerformer {
  id: string;
  name: string;
  avatar: string;
  points: number;
  rank: number;
  department: string;
  trend: Trend;
  badges: string[];
}

export interface Department {
  name: string;
  points: number;
  members: number;
  completionRate: number;
  activeChallenges: number;
  topPerformer: string;
}

export interface PointsDistribution {
  range: string;
  count: number;
  percentage: number;
}

export interface WeeklyStats {
  totalPointsEarned: number;
  challengesCompleted: number;
  newBadgesAwarded: number;
  activeParticipants: number;
  topDepartment: string;
  mostPopularChallenge: string;
}

export interface LeaderboardData {
  topPerformers: TopPerformer[];
  departments: Department[];
  pointsDistribution: PointsDistribution[];
  weeklyStats: WeeklyStats;
}
