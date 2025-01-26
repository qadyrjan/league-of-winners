export type ChallengeStatus = "active" | "completed" | "upcoming";
export type ChallengeDifficulty = "easy" | "medium" | "hard";
export type ChallengeType = "individual" | "team";

export interface Challenge {
  id: string;
  title: string;
  description: string;
  status: ChallengeStatus;
  type: ChallengeType;
  difficulty: ChallengeDifficulty;
  points: number;
  daysLeft?: number;
  participants: number;
  progress?: number;
  startDate: string;
  endDate: string;
  tasks: Array<{
    id: string;
    title: string;
    completed: boolean;
  }>;
  content: {
    sections: Array<{
      title: string;
      text: string;
      image?: {
        src: string;
        alt: string;
      };
    }>;
  };
  rewards: {
    points: number;
    badges: string[];
    other?: string[];
  };
}
