"use client";

import { Challenge } from "@/lib/types/challenge";
import { HiCalendar, HiUsers, HiTrophy, HiChartBar } from "react-icons/hi2";
import { locales } from "@/lib/i18n/locales";
import Link from "next/link";

type ChallengeCardProps = {
  challenge: Challenge;
  lang: string;
};

export default function ChallengeCard({ challenge, lang }: ChallengeCardProps) {
  const t = locales[lang as keyof typeof locales];

  const getDifficultyColor = (difficulty: Challenge["difficulty"]) => {
    switch (difficulty) {
      case "easy":
        return "text-green-500";
      case "medium":
        return "text-yellow-500";
      case "hard":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="card min-h-[280px] flex flex-col">
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-semibold text-gray-900">
              {challenge.title}
            </h3>
            <span
              className={`text-sm font-medium px-2 py-1 rounded-full ${
                challenge.type === "team"
                  ? "bg-blue-50 text-blue-600"
                  : "bg-purple-50 text-purple-600"
              }`}
            >
              {t.challenges.filters[challenge.type]}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {challenge.description}
          </p>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <HiTrophy className="w-4 h-4 mr-2 text-theme-accent" />
              {challenge.points} {t.challenges.points}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <HiUsers className="w-4 h-4 mr-2 text-blue-500" />
              {challenge.participants} {t.challenges.participants}
            </div>
            {challenge.daysLeft && (
              <div className="flex items-center text-sm text-gray-600">
                <HiCalendar className="w-4 h-4 mr-2 text-green-500" />
                {challenge.daysLeft} {t.challenges.daysLeft}
              </div>
            )}
            <div className="flex items-center text-sm">
              <HiChartBar
                className={`w-4 h-4 mr-2 ${getDifficultyColor(
                  challenge.difficulty
                )}`}
              />
              {t.challenges.difficulty[challenge.difficulty]}
            </div>
          </div>

          {challenge.progress !== undefined && (
            <div className="mb-4">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-500">Progress</span>
                <span className="font-medium text-gray-700">
                  {challenge.progress}%
                </span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-theme-primary transition-all duration-300"
                  style={{ width: `${challenge.progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <Link
          href={`/${lang}/challenges/${challenge.id}`}
          className="btn-primary w-full text-center"
        >
          {challenge.status === "active"
            ? t.challenges.joinChallenge
            : t.challenges.viewDetails}
        </Link>
      </div>
    </div>
  );
}
