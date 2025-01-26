import { useRouter } from "next/router";
import { locales } from "@/lib/i18n/locales";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  const { locale = "kk" } = useRouter();
  const t = locales[locale as keyof typeof locales];

  const features = [
    {
      href: "/leaderboard",
      iconName: "trophy",
      title: t.features.leaderboard.title,
      description: t.features.leaderboard.description,
      color: "text-yellow-500",
    },
    {
      href: "/rewards",
      iconName: "gift",
      title: t.features.rewards.title,
      description: t.features.rewards.description,
      color: "text-purple-500",
    },
    {
      href: "/challenges",
      iconName: "lightning",
      title: t.features.challenges.title,
      description: t.features.challenges.description,
      color: "text-blue-500",
    },
  ] as const;

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.welcome}</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {t.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.href} {...feature} />
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-janapost-light to-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">本月最新挑战</h2>
        <div className="bg-white rounded-lg p-6 shadow-inner">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                团队协作挑战
              </h3>
              <p className="text-gray-600">完成团队项目并获得额外奖励点数</p>
            </div>
            <Link href="/challenges" className="btn-primary">
              查看详情
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
