import { Locale, locales } from "@/lib/i18n/locales";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = locales[lang];

  const features = [
    {
      href: `/${lang}/leaderboard`,
      iconName: "trophy",
      title: t.features.leaderboard.title,
      description: t.features.leaderboard.description,
      color: "text-yellow-500",
    },
    {
      href: `/${lang}/rewards`,
      iconName: "gift",
      title: t.features.rewards.title,
      description: t.features.rewards.description,
      color: "text-purple-500",
    },
    {
      href: `/${lang}/challenges`,
      iconName: "lightning",
      title: t.features.challenges.title,
      description: t.features.challenges.description,
      color: "text-blue-500",
    },
  ] as const;

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-16 space-y-4">
        <h1 className="page-title">{t.welcome}</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {t.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={feature.href}
            className="opacity-0 animate-fade-in"
            style={{
              animationDelay: `${index * 200}ms`,
              height: "200px",
            }}
          >
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-janapost-light via-white to-goldenbridge-primary/10 rounded-2xl p-8 shadow-lg">
        <h2 className="section-title">{t.monthlyChallenge.title}</h2>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-inner">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">
                {t.monthlyChallenge.teamwork.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.monthlyChallenge.teamwork.description}
              </p>
            </div>
            <Link
              href={`/${lang}/challenges`}
              className="btn-primary whitespace-nowrap text-center"
            >
              {t.monthlyChallenge.viewDetails}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return [{ lang: "kk" }, { lang: "ru" }, { lang: "en" }];
}
