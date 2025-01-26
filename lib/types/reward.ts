export type RewardCategory = "digital" | "physical" | "experience" | "badge";

export type Reward = {
  id: string;
  title: string;
  description: string;
  category: RewardCategory;
  points: number;
  image: string;
  available: number;
  claimed?: number;
  expiresAt?: string;
  featured?: boolean;
  requirements?: {
    minLevel?: number;
    badges?: string[];
    challenges?: string[];
  };
};

export type RewardsData = {
  featured: Reward[];
  categories: {
    [key in RewardCategory]: {
      title: string;
      description: string;
      rewards: Reward[];
    };
  };
  userPoints: number;
  userLevel: number;
  recentRewards: {
    id: string;
    userId: string;
    userName: string;
    userAvatar: string;
    rewardId: string;
    rewardTitle: string;
    date: string;
  }[];
};
