"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales, Locale } from "@/lib/i18n/locales";
import { useState, useRef } from "react";
import { HiGlobeAlt } from "react-icons/hi2";
import { useClickAway } from "@/hooks/useClickAway";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1] as Locale;
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        aria-label="Select language"
      >
        <HiGlobeAlt className="w-5 h-5 text-theme-primary" />
        <span className="text-sm font-medium text-gray-700">
          {locales[currentLang].name}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 transform opacity-0 scale-95 animate-dropdown origin-top-right">
          {Object.entries(locales).map(([key, value]) => (
            <Link
              key={key}
              href={pathname.replace(`/${currentLang}`, `/${key}`)}
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 px-4 py-2 text-sm ${
                currentLang === key
                  ? "bg-theme-light text-theme-primary font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              } transition-colors duration-200`}
            >
              <span className="w-6">{getFlagEmoji(key)}</span>
              <span>{value.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function getFlagEmoji(langCode: string) {
  const flags: Record<string, string> = {
    kk: "🇰🇿",
    ru: "🇷🇺",
    en: "🇬🇧",
  };
  return flags[langCode] || "🌐";
}
