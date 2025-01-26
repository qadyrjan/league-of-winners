import { Challenge } from "../types/challenge";

export const mockChallenges: Challenge[] = [
  {
    id: "1",
    title: "Командный спринт",
    description: "Завершите проект в команде за 2 недели",
    status: "active",
    type: "team",
    difficulty: "medium",
    points: 1000,
    daysLeft: 10,
    participants: 24,
    progress: 60,
    startDate: "2024-02-01",
    endDate: "2024-02-14",
    tasks: [
      { id: "1", title: "Планирование проекта", completed: true },
      { id: "2", title: "Разработка MVP", completed: true },
      { id: "3", title: "Тестирование", completed: false },
      { id: "4", title: "Запуск", completed: false },
    ],
    content: {
      sections: [
        {
          title: "О челлендже",
          text: "Командный спринт - это интенсивный двухнедельный проект, где команды должны разработать и запустить MVP продукта.",
          image: {
            src: "https://picsum.photos/800/600.webp",
            alt: "Team Sprint Challenge",
          },
        },
        {
          title: "Цели",
          text: "Развить навыки командной работы, научиться быстро создавать работающие прототипы и эффективно управлять временем.",
        },
      ],
    },
    rewards: {
      points: 1000,
      badges: ["Team Player", "Sprint Master"],
      other: ["Premium доступ к курсам на 1 месяц"],
    },
  },
  {
    id: "3",
    title: "Инновационный вызов",
    description: "Предложите инновационное решение для компании",
    status: "upcoming",
    type: "individual",
    difficulty: "hard",
    points: 1500,
    participants: 0,
    startDate: "2024-03-01",
    endDate: "2024-03-31",
    tasks: [
      { id: "1", title: "Анализ проблемы", completed: false },
      { id: "2", title: "Разработка решения", completed: false },
      { id: "3", title: "Презентация", completed: false },
    ],
    content: {
      sections: [
        {
          title: "Описание",
          text: "Разработайте инновационное решение для оптимизации бизнес-процессов компании.",
          image: {
            src: "https://picsum.photos/800/600.webp",
            alt: "Innovation Challenge",
          },
        },
      ],
    },
    rewards: {
      points: 1500,
      badges: ["Innovator", "Problem Solver"],
      other: ["Возможность реализации идеи в компании"],
    },
  },
  {
    id: "4",
    title: "Марафон знаний",
    description: "Пройдите серию обучающих курсов",
    status: "completed",
    type: "individual",
    difficulty: "medium",
    points: 800,
    participants: 89,
    progress: 100,
    startDate: "2024-01-01",
    endDate: "2024-01-31",
    tasks: [
      { id: "1", title: "Базовый курс", completed: true },
      { id: "2", title: "Продвинутый курс", completed: true },
      { id: "3", title: "Финальный тест", completed: true },
    ],
    content: {
      sections: [
        {
          title: "О марафоне",
          text: "Интенсивный курс обучения, включающий базовые и продвинутые материалы по ключевым технологиям.",
          image: {
            src: "https://picsum.photos/800/600.webp",
            alt: "Knowledge Marathon",
          },
        },
      ],
    },
    rewards: {
      points: 800,
      badges: ["Knowledge Seeker", "Expert Learner"],
      other: ["Сертификат об окончании курса"],
    },
  },
];
