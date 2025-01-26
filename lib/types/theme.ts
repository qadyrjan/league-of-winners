export type ThemeMode = "light" | "dark";

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface Theme {
  name: string;
  mode: ThemeMode;
  colors: ThemeColors;
}

export const themes: Record<ThemeMode, Theme> = {
  light: {
    name: "Light",
    mode: "light",
    colors: {
      primary: "var(--theme-primary)",
      secondary: "var(--theme-secondary)",
      accent: "var(--theme-accent)",
      background: "#f8fafc",
      text: "var(--theme-text)",
    },
  },
  dark: {
    name: "Dark",
    mode: "dark",
    colors: {
      primary: "var(--theme-primary-dark)",
      secondary: "var(--theme-secondary-dark)",
      accent: "var(--theme-accent-dark)",
      background: "#0f172a",
      text: "var(--theme-text-dark)",
    },
  },
};
