import { RewardsData } from "@/lib/types/reward";

export const mockRewardsData: RewardsData = {
  featured: [
    {
      id: "1",
      title: "Premium подписка",
      description: "Месяц доступа к образовательной платформе",
      category: "digital",
      points: 1000,
      image: "https://picsum.photos/400/300",
      available: 50,
      featured: true,
    },
    {
      id: "2",
      title: "Брендированный мерч",
      description: "Набор фирменной одежды",
      category: "physical",
      points: 2000,
      image: "https://picsum.photos/400/301",
      available: 20,
      featured: true,
    },
  ],
  categories: {
    digital: {
      title: "Цифровые награды",
      description: "Подписки и цифровой контент",
      rewards: [
        {
          id: "3",
          title: "Подписка на курсы",
          description: "3 месяца доступа к курсам",
          category: "digital",
          points: 1500,
          image: "https://picsum.photos/400/302",
          available: 100,
        },
        // ... добавить больше цифровых наград
      ],
    },
    physical: {
      title: "Физические награды",
      description: "Мерч и другие физические призы",
      rewards: [
        {
          id: "4",
          title: "Рюкзак",
          description: "Стильный рюкзак с логотипом",
          category: "physical",
          points: 3000,
          image: "https://picsum.photos/400/303",
          available: 15,
        },
        // ... добавить больше физических наград
      ],
    },
    experience: {
      title: "Впечатления",
      description: "Особые мероприятия и активности",
      rewards: [
        {
          id: "5",
          title: "Мастер-класс",
          description: "Участие в эксклюзивном мастер-классе",
          category: "experience",
          points: 5000,
          image: "https://picsum.photos/400/304",
          available: 5,
          requirements: {
            minLevel: 10,
          },
        },
        // ... добавить больше наград-впечатлений
      ],
    },
    badge: {
      title: "Значки",
      description: "Коллекционные значки достижений",
      rewards: [
        {
          id: "6",
          title: "Мастер инноваций",
          description: "За выдающиеся инновационные решения",
          category: "badge",
          points: 1000,
          image: "https://picsum.photos/400/305",
          available: -1,
          requirements: {
            challenges: ["innovation_challenge"],
          },
        },
        // ... добавить больше значков
      ],
    },
  },
  userPoints: 2500,
  userLevel: 8,
  recentRewards: [
    {
      id: "1",
      userId: "1",
      userName: "Александр Петров",
      userAvatar: "https://picsum.photos/200",
      rewardId: "3",
      rewardTitle: "Подписка на курсы",
      date: "2024-02-15",
    },
    // ... добавить больше недавних наград
  ],
};
