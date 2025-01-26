"use client";

import { useParams, useRouter } from "next/navigation";
import { mockChallenges } from "@/lib/data/mockChallenges";
import { Locale, locales } from "@/lib/i18n/locales";
import {
  HiCalendar,
  HiUsers,
  HiTrophy,
  HiChartBar,
  HiArrowLeft,
} from "react-icons/hi2";
import Link from "next/link";

export default function ChallengeDetail() {
  const { id, lang } = useParams();
  const router = useRouter();
  const t = locales[lang as Locale];
  const challenge = mockChallenges.find((c) => c.id === id);

  if (!challenge) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-gray-500">{t.challenges.notFound}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center text-sm text-gray-600">
          <Link
            href={`/${lang}/challenges`}
            className="hover:text-theme-primary transition-colors"
          >
            {t.challenges.title}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">{challenge.title}</span>
        </div>
        <button
          onClick={() => router.back()}
          className="flex items-center text-sm text-gray-600 hover:text-theme-primary transition-colors"
        >
          <HiArrowLeft className="w-4 h-4 mr-1" />
          {t.challenges.back}
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative p-8 pb-0">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {challenge.title}
              </h1>
              <p className="text-gray-600 max-w-2xl">{challenge.description}</p>
            </div>
            <span
              className={`text-sm font-medium px-3 py-1.5 rounded-full ${
                challenge.type === "team"
                  ? "bg-blue-50 text-blue-600"
                  : "bg-purple-50 text-purple-600"
              }`}
            >
              {t.challenges.filters[challenge.type]}
            </span>
          </div>

          <div className="absolute top-8 right-8">
            <span
              className={`text-sm font-medium px-3 py-1.5 rounded-full ${
                challenge.status === "active"
                  ? "bg-green-50 text-green-600"
                  : challenge.status === "completed"
                  ? "bg-gray-50 text-gray-600"
                  : "bg-yellow-50 text-yellow-600"
              }`}
            >
              {t.challenges.status[challenge.status]}
            </span>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="flex items-center text-sm text-gray-600">
              <HiTrophy className="w-5 h-5 mr-2 text-theme-accent" />
              <div>
                <div className="font-medium text-gray-900">
                  {challenge.points} {t.challenges.points}
                </div>
                <div className="text-xs text-gray-500">
                  {t.challenges.reward}
                </div>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <HiUsers className="w-5 h-5 mr-2 text-blue-500" />
              <div>
                <div className="font-medium text-gray-900">
                  {challenge.participants}
                </div>
                <div className="text-xs text-gray-500">
                  {t.challenges.participants}
                </div>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <HiCalendar className="w-5 h-5 mr-2 text-green-500" />
              <div>
                <div className="font-medium text-gray-900">
                  {challenge.daysLeft} {t.challenges.daysLeft}
                </div>
                <div className="text-xs text-gray-500">
                  {t.challenges.timeRemaining}
                </div>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <HiChartBar className="w-5 h-5 mr-2 text-yellow-500" />
              <div>
                <div className="font-medium text-gray-900">
                  {t.challenges.difficulty[challenge.difficulty]}
                </div>
                <div className="text-xs text-gray-500">
                  {t.challenges.difficultyLevel}
                </div>
              </div>
            </div>
          </div>

          {challenge.progress !== undefined && (
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">{t.challenges.progress}</span>
                <span className="font-medium text-gray-900">
                  {challenge.progress}%
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-theme-primary transition-all duration-300"
                  style={{ width: `${challenge.progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-gray-100">
          <div className="p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {t.challenges.details}
            </h2>
            <div className="space-y-12">
              {challenge.content.sections.map((section, index) => (
                <div
                  key={index}
                  className={`grid ${
                    section.image
                      ? "grid-cols-1 md:grid-cols-2 gap-8 items-center"
                      : "grid-cols-1"
                  }`}
                >
                  <div
                    className={`${
                      index % 2 === 1 && section.image ? "md:order-2" : ""
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {section.title}
                    </h3>
                    <div className="text-base text-gray-800 leading-relaxed">
                      {section.text}
                    </div>
                  </div>
                  {section.image && (
                    <div
                      className={`${
                        index % 2 === 1 ? "md:order-1" : ""
                      } relative aspect-video rounded-lg overflow-hidden shadow-md`}
                    >
                      <img
                        src={section.image.src}
                        alt={section.image.alt}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100">
          <div className="p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              {t.challenges.rewards}
              <span className="ml-3 text-lg font-bold text-theme-accent">
                {challenge.rewards.points} {t.challenges.points}
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {challenge.rewards.badges && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    {t.challenges.badges}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {challenge.rewards.badges.map((badge, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gray-50 rounded-full px-4 py-2"
                      >
                        <span className="text-sm font-medium text-gray-700">
                          {badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {challenge.rewards.other && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    {t.challenges.otherRewards}
                  </h3>
                  <ul className="space-y-2">
                    {challenge.rewards.other.map((reward, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <span className="w-2 h-2 bg-theme-accent rounded-full mr-3" />
                        {reward}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100">
          <div className="p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              {t.challenges.tasks}
              <span className="ml-2 text-sm font-medium text-gray-500">
                ({challenge.tasks.filter((t) => t.completed).length}/
                {challenge.tasks.length})
              </span>
            </h2>
            <div className="space-y-4">
              {challenge.tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-gray-700">{task.title}</span>
                  {task.completed ? (
                    <span className="text-sm font-medium text-green-600 bg-green-50 px-2.5 py-0.5 rounded-full">
                      {t.challenges.completed}
                    </span>
                  ) : (
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
                      {t.challenges.pending}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {challenge.status === "active" && (
          <div className="border-t border-gray-100 p-8">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <span className="font-medium text-gray-900">
                  {challenge.daysLeft}
                </span>{" "}
                {t.challenges.daysLeft}
              </div>
              <button
                onClick={() => {
                  // TODO: 实现参加功能
                  console.log("Joining challenge:", challenge.id);
                }}
                className="btn-primary"
              >
                {t.challenges.joinChallenge}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
