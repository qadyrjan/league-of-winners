"use client";

import { useParams } from "next/navigation";
import { mockProfile } from "@/lib/data/mockProfile";
import { Locale, locales } from "@/lib/i18n/locales";
import { HiTrophy, HiChartBar, HiSparkles, HiPencil } from "react-icons/hi2";
import { useState } from "react";
import EditProfileModal from "@/components/profile/EditProfileModal";

// 计算下一个等级所需的点数
const getNextLevelPoints = (level: number) => {
  return level * 1000; // 简单的计算公式，可以根据需求调整
};

export default function Profile() {
  const { lang } = useParams();
  const t = locales[lang as Locale];
  const profile = mockProfile;
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // 计算等级进度
  const nextLevelPoints = getNextLevelPoints(profile.level);
  const currentLevelPoints = getNextLevelPoints(profile.level - 1);
  const progress =
    ((profile.points - currentLevelPoints) /
      (nextLevelPoints - currentLevelPoints)) *
    100;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 个人信息卡片 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex items-start gap-8">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {profile.name}
                </h1>
                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="flex items-center text-sm text-gray-600 hover:text-theme-primary transition-colors"
                >
                  <HiPencil className="w-4 h-4 mr-1" />
                  {t.profile.edit}
                </button>
              </div>
              <div className="text-gray-600 mb-4">
                <p>{profile.position}</p>
                <p>{profile.department}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center text-theme-accent">
                  <HiTrophy className="w-5 h-5 mr-1" />
                  <span className="font-medium">
                    {profile.points} {t.profile.points}
                  </span>
                </div>
                <div className="text-gray-600">
                  {t.profile.level} {profile.level}
                </div>
                <div className="text-gray-600">
                  {t.profile.rank} #{profile.rank}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 统计信息 */}
        <div className="border-t border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            <div className="p-6 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {profile.stats.challengesCompleted}
              </div>
              <div className="text-sm text-gray-600">
                {t.profile.challengesCompleted}
              </div>
            </div>
            <div className="p-6 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {profile.stats.badgesEarned}
              </div>
              <div className="text-sm text-gray-600">
                {t.profile.badgesEarned}
              </div>
            </div>
            <div className="p-6 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {profile.stats.totalPoints}
              </div>
              <div className="text-sm text-gray-600">
                {t.profile.totalPoints}
              </div>
            </div>
            <div className="p-6 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {profile.stats.activeChallenges}
              </div>
              <div className="text-sm text-gray-600">
                {t.profile.activeChallenges}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 等级进度 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {t.profile.level} {profile.level}
              </h2>
              <p className="text-sm text-gray-600">
                {profile.points} / {nextLevelPoints} {t.profile.points}
              </p>
            </div>
            <div className="text-sm text-gray-600">
              {Math.round(nextLevelPoints - profile.points)}{" "}
              {t.profile.pointsToNextLevel}
            </div>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-theme-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 成就和活动 */}
        <div className="md:col-span-2 space-y-8">
          {/* 最近成就 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {t.profile.recentAchievements}
              </h2>
              <div className="space-y-4">
                {profile.achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {achievement.description}
                        </p>
                      </div>
                      <div className="text-theme-accent font-medium">
                        +{achievement.points}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(achievement.date).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 最近活动 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {t.profile.recentActivity}
              </h2>
              <div className="space-y-4">
                {profile.recentActivity.map((activity) => (
                  <div key={activity.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {activity.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {activity.description}
                        </p>
                      </div>
                      {activity.points && (
                        <div className="text-theme-accent font-medium">
                          +{activity.points}
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(activity.date).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 徽章展示 */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <HiSparkles className="w-5 h-5 mr-2 text-yellow-500" />
                {t.profile.badges}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {profile.badges.map((badge, index) => (
                  <div
                    key={index}
                    className="group relative bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 mb-2 rounded-full bg-theme-light flex items-center justify-center">
                        <HiTrophy className="w-6 h-6 text-theme-primary" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 统计卡片 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <HiChartBar className="w-5 h-5 mr-2 text-blue-500" />
                {t.profile.statistics}
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {t.profile.winRate}
                  </span>
                  <span className="font-medium text-gray-900">75%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {t.profile.teamContributions}
                  </span>
                  <span className="font-medium text-gray-900">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {t.profile.personalBest}
                  </span>
                  <span className="font-medium text-gray-900">2,100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EditProfileModal
        profile={profile}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={(data) => {
          console.log("Saving profile data:", data);
          // TODO: 实现保存功能
          setIsEditModalOpen(false);
        }}
        lang={lang as string}
      />
    </div>
  );
}
