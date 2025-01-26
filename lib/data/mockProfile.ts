import { UserProfile } from "@/lib/types/profile";

export const mockProfile: UserProfile = {
  id: "1",
  name: "Александр Петров",
  email: "a.petrov@example.com",
  avatar: "https://picsum.photos/200",
  department: "Разработка",
  position: "Senior Developer",
  joinDate: "2023-01-15",
  level: 12,
  points: 2450,
  rank: 5,
  stats: {
    challengesCompleted: 15,
    badgesEarned: 8,
    totalPoints: 2450,
    activeChallenges: 2,
  },
  achievements: [
    {
      id: "1",
      title: "Мастер спринта",
      description: "Успешно завершил 5 командных спринтов",
      date: "2024-02-15",
      points: 500,
      badge: "Sprint Master",
    },
    {
      id: "2",
      title: "Инноватор",
      description: "Предложил успешное инновационное решение",
      date: "2024-01-20",
      points: 300,
      badge: "Innovator",
    },
  ],
  recentActivity: [
    {
      id: "1",
      type: "challenge_joined",
      title: "Присоединился к челленджу",
      description: "Командный спринт",
      date: "2024-02-01",
      challengeId: "1",
    },
    {
      id: "2",
      type: "badge_earned",
      title: "Получен новый значок",
      description: "Sprint Master",
      date: "2024-02-15",
      badgeId: "sprint_master",
    },
  ],
  badges: ["Sprint Master", "Innovator", "Team Player", "Problem Solver"],
};
