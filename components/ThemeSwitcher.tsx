"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { ThemeName, themes } from "@/lib/themes";
import { HiSwatch } from "react-icons/hi2";
import Select from "@/components/ui/Select";
import { useMemo, useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeOptions = useMemo(
    () =>
      Object.keys(themes).map((key) => ({
        value: key as ThemeName,
        label: key.charAt(0).toUpperCase() + key.slice(1),
      })),
    []
  );

  if (!mounted) {
    return <div className="w-[160px]" />;
  }

  return (
    <div className="flex items-center space-x-2">
      <HiSwatch className="w-5 h-5 text-theme-primary" />
      <Select
        value={theme}
        onChange={setTheme}
        options={themeOptions}
        className="w-40"
      />
    </div>
  );
}
