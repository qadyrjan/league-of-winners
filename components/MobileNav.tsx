"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiBars3 as HiMenu,
  HiXMark as HiX,
  HiHome,
  HiUser,
  HiTrophy,
  HiGift,
  HiFlag,
} from "react-icons/hi2";
import { Locale, locales } from "@/lib/i18n/locales";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

type MobileNavProps = {
  lang: string;
};

export default function MobileNav({ lang }: MobileNavProps) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = locales[lang as Locale];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) {
    return null;
  }

  const navItems = [
    { href: `/${lang}`, label: t.nav.home, icon: HiHome },
    { href: `/${lang}/profile`, label: t.nav.profile, icon: HiUser },
    { href: `/${lang}/leaderboard`, label: t.nav.leaderboard, icon: HiTrophy },
    { href: `/${lang}/rewards`, label: t.nav.rewards, icon: HiGift },
    { href: `/${lang}/challenges`, label: t.nav.challenges, icon: HiFlag },
  ];

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="Open menu"
      >
        <HiMenu className="h-6 w-6" />
      </button>

      {/* 背景遮罩 */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 z-40
            ${
              isOpen
                ? "bg-opacity-50 backdrop-blur-sm"
                : "bg-opacity-0 pointer-events-none"
            }`}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 侧边菜单 */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-theme-background shadow-xl z-50 
          transform transition-all duration-300 ease-in-out border-l border-gray-200 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex h-full flex-col">
          {/* 头部 */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">{t.title}</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <HiX className="h-6 w-6" />
            </button>
          </div>

          {/* 导航链接 */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-3">
              {navItems.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      pathname === href
                        ? "bg-theme-primary text-white"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 底部设置 */}
          <div className="border-t p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{t.settings.theme}</span>
              <ThemeSwitcher />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                {t.settings.language}
              </span>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
