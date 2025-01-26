import { Metadata } from "next";
import { Locale, locales } from "@/lib/i18n/locales";
import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "League of Winners",
  description: "Employee engagement and rewards platform",
};

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const t = locales[params.lang as Locale];

  return (
    <div>
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo和标题 */}
            <div className="flex items-center">
              <Link
                href={`/${params.lang}`}
                className="text-xl font-bold text-gray-900"
              >
                {t.title}
              </Link>
            </div>

            {/* 桌面端导航链接 */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href={`/${params.lang}/profile`}
                className="text-gray-600 hover:text-gray-900"
              >
                {t.nav.profile}
              </Link>
              <Link
                href={`/${params.lang}/leaderboard`}
                className="text-gray-600 hover:text-gray-900"
              >
                {t.nav.leaderboard}
              </Link>
              <Link
                href={`/${params.lang}/rewards`}
                className="text-gray-600 hover:text-gray-900"
              >
                {t.nav.rewards}
              </Link>
              <Link
                href={`/${params.lang}/challenges`}
                className="text-gray-600 hover:text-gray-900"
              >
                {t.nav.challenges}
              </Link>
            </div>

            {/* 主题和语言切换器 */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>

            {/* 移动端菜单按钮 */}
            <MobileNav lang={params.lang} />
          </div>
        </div>
      </nav>

      <main className="min-h-screen bg-gray-50">{children}</main>
    </div>
  );
}
