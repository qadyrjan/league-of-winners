export type Locale = "en" | "ru" | "kk";

export interface LocaleContent {
  name: string;
  title: string;
  welcome: string;
  description: string;
  nav: {
    home: string;
    profile: string;
    leaderboard: string;
    rewards: string;
    challenges: string;
  };
  features: {
    leaderboard: { title: string; description: string };
    rewards: { title: string; description: string };
    challenges: { title: string; description: string };
  };
  settings: {
    theme: string;
    language: string;
  };
  profile: {
    edit: string;
    save: string;
    cancel: string;
    clickToChange: string;
    name: string;
    email: string;
    department: string;
    position: string;
    saveChanges: string;
  };
  leaderboard: {
    title: string;
    description: string;
    charts: {
      departmentPerformance: string;
      pointsDistribution: string;
    };
  };
  rewards: {
    title: string;
    description: string;
    yourPoints: string;
    level: string;
    availableRewards: string;
    confirmRedeem: string;
    confirmRedeemMessage: string;
    cancel: string;
    confirm: string;
  };
  monthlyChallenge: {
    title: string;
    description: string;
    progress: string;
    daysLeft: string;
    participants: string;
    joinNow: string;
    teamwork: {
      title: string;
      description: string;
      goal: string;
      reward: string;
    };
  };
  challenges: {
    title: string;
    description: string;
    status: {
      active: string;
      completed: string;
      upcoming: string;
    };
    difficulty: {
      easy: string;
      medium: string;
      hard: string;
    };
    details: {
      daysLeft: string;
      participants: string;
      progress: string;
      startDate: string;
      endDate: string;
      tasks: string;
    };
    filters: {
      all: string;
      individual: string;
      team: string;
      active: string;
      completed: string;
      upcoming: string;
      easy: string;
      medium: string;
      hard: string;
      noResults: string;
    };
  };
}

export const locales: Record<Locale, LocaleContent> = {
  en: {
    name: "English",
    title: "League of Winners",
    welcome: "Welcome to League of Winners",
    description: "Employee engagement platform",
    nav: {
      home: "Home",
      profile: "Profile",
      leaderboard: "Leaderboard",
      rewards: "Rewards",
      challenges: "Challenges",
    },
    features: {
      leaderboard: {
        title: "Leaderboard",
        description: "Track your progress and compete with colleagues",
      },
      rewards: {
        title: "Rewards",
        description: "Exchange your points for rewards",
      },
      challenges: {
        title: "Challenges",
        description: "Complete challenges to earn points",
      },
    },
    settings: {
      theme: "Theme",
      language: "Language",
    },
    profile: {
      edit: "Edit",
      save: "Save",
      cancel: "Cancel",
      clickToChange: "Click to change avatar",
      name: "Name",
      email: "Email",
      department: "Department",
      position: "Position",
      saveChanges: "Save Changes",
    },
    leaderboard: {
      title: "Leaderboard",
      description: "Track your progress and compete with colleagues",
      charts: {
        departmentPerformance: "Department Performance",
        pointsDistribution: "Points Distribution",
      },
    },
    rewards: {
      title: "Rewards",
      description: "Exchange your points for rewards",
      yourPoints: "Your Points",
      level: "Level",
      availableRewards: "Available Rewards",
      confirmRedeem: "Confirm Redemption",
      confirmRedeemMessage:
        "Are you sure you want to redeem this reward for {points} points?",
      cancel: "Cancel",
      confirm: "Confirm",
    },
    monthlyChallenge: {
      title: "Monthly Challenge",
      description: "Complete this month's special challenge",
      progress: "Progress",
      daysLeft: "Days Left",
      participants: "Participants",
      joinNow: "Join Now",
      teamwork: {
        title: "Team Collaboration Challenge",
        description: "Work together to achieve team goals",
        goal: "Team Goal",
        reward: "Team Reward",
      },
    },
    challenges: {
      title: "Challenges",
      description: "Complete challenges to earn points",
      status: {
        active: "Active",
        completed: "Completed",
        upcoming: "Upcoming",
      },
      difficulty: {
        easy: "Easy",
        medium: "Medium",
        hard: "Hard",
      },
      details: {
        daysLeft: "Days Left",
        participants: "Participants",
        progress: "Progress",
        startDate: "Start Date",
        endDate: "End Date",
        tasks: "Tasks",
      },
      filters: {
        all: "All",
        individual: "Individual",
        team: "Team",
        active: "Active",
        completed: "Completed",
        upcoming: "Upcoming",
        easy: "Easy",
        medium: "Medium",
        hard: "Hard",
        noResults: "No challenges found",
      },
    },
  },
  ru: {
    name: "Русский",
    title: "Лига Победителей",
    welcome: "Добро пожаловать в Лигу Победителей",
    description: "Платформа вовлечения сотрудников",
    nav: {
      home: "Главная",
      profile: "Профиль",
      leaderboard: "Рейтинг",
      rewards: "Награды",
      challenges: "Задания",
    },
    features: {
      leaderboard: {
        title: "Рейтинг",
        description: "Отслеживайте свой прогресс и соревнуйтесь с коллегами",
      },
      rewards: {
        title: "Награды",
        description: "Обменивайте баллы на награды",
      },
      challenges: {
        title: "Задания",
        description: "Выполняйте задания и получайте баллы",
      },
    },
    settings: {
      theme: "Тема",
      language: "Язык",
    },
    profile: {
      edit: "Изменить",
      save: "Сохранить",
      cancel: "Отмена",
      clickToChange: "Нажмите, чтобы изменить аватар",
      name: "Имя",
      email: "Email",
      department: "Отдел",
      position: "Должность",
      saveChanges: "Сохранить изменения",
    },
    leaderboard: {
      title: "Рейтинг",
      description: "Отслеживайте свой прогресс и соревнуйтесь с коллегами",
      charts: {
        departmentPerformance: "Показатели отделов",
        pointsDistribution: "Распределение баллов",
      },
    },
    rewards: {
      title: "Награды",
      description: "Обменивайте баллы на награды",
      yourPoints: "Ваши баллы",
      level: "Уровень",
      availableRewards: "Доступные награды",
      confirmRedeem: "Подтверждение обмена",
      confirmRedeemMessage:
        "Вы уверены, что хотите обменять {points} баллов на эту награду?",
      cancel: "Отмена",
      confirm: "Подтвердить",
    },
    monthlyChallenge: {
      title: "Месячный Вызов",
      description: "Выполните специальное задание этого месяца",
      progress: "Прогресс",
      daysLeft: "Осталось дней",
      participants: "Участники",
      joinNow: "Участвовать",
      teamwork: {
        title: "Командный Вызов",
        description: "Работайте вместе для достижения командных целей",
        goal: "Командная Цель",
        reward: "Командная Награда",
      },
    },
    challenges: {
      title: "Задания",
      description: "Выполняйте задания и получайте баллы",
      status: {
        active: "Активные",
        completed: "Завершенные",
        upcoming: "Предстоящие",
      },
      difficulty: {
        easy: "Легкий",
        medium: "Средний",
        hard: "Сложный",
      },
      details: {
        daysLeft: "Осталось дней",
        participants: "Участники",
        progress: "Прогресс",
        startDate: "Дата начала",
        endDate: "Дата окончания",
        tasks: "Задачи",
      },
      filters: {
        all: "Все",
        individual: "Индивидуальные",
        team: "Командные",
        active: "Активные",
        completed: "Завершенные",
        upcoming: "Предстоящие",
        easy: "Легкие",
        medium: "Средние",
        hard: "Сложные",
        noResults: "Задания не найдены",
      },
    },
  },
  kk: {
    name: "Қазақша",
    title: "Жеңімпаздар Лигасы",
    welcome: "Жеңімпаздар Лигасына қош келдіңіз",
    description: "Қызметкерлерді ынталандыру платформасы",
    nav: {
      home: "Басты бет",
      profile: "Профиль",
      leaderboard: "Рейтинг",
      rewards: "Марапаттар",
      challenges: "Тапсырмалар",
    },
    features: {
      leaderboard: {
        title: "Рейтинг",
        description:
          "Прогресіңізді қадағалаңыз және әріптестеріңізбен жарысыңыз",
      },
      rewards: {
        title: "Марапаттар",
        description: "Ұпайларды марапаттарға айырбастаңыз",
      },
      challenges: {
        title: "Тапсырмалар",
        description: "Тапсырмаларды орындап, ұпай жинаңыз",
      },
    },
    settings: {
      theme: "Тақырып",
      language: "Тіл",
    },
    profile: {
      edit: "Өзгерту",
      save: "Сақтау",
      cancel: "Бас тарту",
      clickToChange: "Аватарды өзгерту үшін басыңыз",
      name: "Аты",
      email: "Email",
      department: "Бөлім",
      position: "Лауазым",
      saveChanges: "Өзгерістерді сақтау",
    },
    leaderboard: {
      title: "Рейтинг",
      description: "Прогресіңізді қадағалаңыз және әріптестеріңізбен жарысыңыз",
      charts: {
        departmentPerformance: "Бөлімдер көрсеткіштері",
        pointsDistribution: "Ұпайлар үлестірімі",
      },
    },
    rewards: {
      title: "Марапаттар",
      description: "Ұпайларды марапаттарға айырбастаңыз",
      yourPoints: "Сіздің ұпайларыңыз",
      level: "Деңгей",
      availableRewards: "Қолжетімді марапаттар",
      confirmRedeem: "Айырбастауды растау",
      confirmRedeemMessage:
        "Сіз {points} ұпайды осы марапатқа айырбастағыңыз келе ме?",
      cancel: "Бас тарту",
      confirm: "Растау",
    },
    monthlyChallenge: {
      title: "Айлық Сынақ",
      description: "Осы айдың арнайы тапсырмасын орындаңыз",
      progress: "Прогресс",
      daysLeft: "Қалған күндер",
      participants: "Қатысушылар",
      joinNow: "Қатысу",
      teamwork: {
        title: "Командалық Сынақ",
        description: "Командалық мақсаттарға жету үшін бірге жұмыс істеңіз",
        goal: "Команда Мақсаты",
        reward: "Команда Марапаты",
      },
    },
    challenges: {
      title: "Тапсырмалар",
      description: "Тапсырмаларды орындап, ұпай жинаңыз",
      status: {
        active: "Белсенді",
        completed: "Аяқталған",
        upcoming: "Алдағы",
      },
      difficulty: {
        easy: "Оңай",
        medium: "Орташа",
        hard: "Қиын",
      },
      details: {
        daysLeft: "Қалған күндер",
        participants: "Қатысушылар",
        progress: "Прогресс",
        startDate: "Басталу күні",
        endDate: "Аяқталу күні",
        tasks: "Тапсырмалар",
      },
      filters: {
        all: "Барлығы",
        individual: "Жеке",
        team: "Командалық",
        active: "Белсенді",
        completed: "Аяқталған",
        upcoming: "Алдағы",
        easy: "Оңай",
        medium: "Орташа",
        hard: "Қиын",
        noResults: "Тапсырмалар табылмады",
      },
    },
  },
};
