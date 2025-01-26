"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale, locales } from "@/lib/i18n/locales";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1] as Locale;
  const t = locales[currentLang];

  useEffect(() => {
    setMounted(true);
  }, []);

  // 确保 t 存在且有 nav 属性
  if (!t?.nav || !mounted) {
    return null; // 或者显示加载状态
  }

  const navItems = [
    { href: `/${currentLang}`, label: t.nav.home },
    { href: `/${currentLang}/profile`, label: t.nav.profile },
    { href: `/${currentLang}/leaderboard`, label: t.nav.leaderboard },
    { href: `/${currentLang}/rewards`, label: t.nav.rewards },
    { href: `/${currentLang}/challenges`, label: t.nav.challenges },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link
              href={`/${currentLang}`}
              className="text-xl font-bold text-theme-primary"
            >
              {t.title}
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${
                      pathname === href
                        ? "bg-theme-light text-theme-primary"
                        : "text-gray-600 hover:text-theme-primary hover:bg-theme-light/50"
                    }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
