export type ThemeName = "janapost" | "goldenbridge" | "skyline" | "sunset";

export const themes = {
  janapost: {
    primary: "#10B981",
    secondary: "#059669",
    light: "#D1FAE5",
    accent: "#F59E0B",
  },
  goldenbridge: {
    primary: "#F59E0B",
    secondary: "#B45309",
    light: "#FEF3C7",
    accent: "#10B981",
  },
  skyline: {
    primary: "#3B82F6",
    secondary: "#1D4ED8",
    light: "#DBEAFE",
    accent: "#EC4899",
  },
  sunset: {
    primary: "#EC4899",
    secondary: "#BE185D",
    light: "#FCE7F3",
    accent: "#6366F1",
  },
} as const;
