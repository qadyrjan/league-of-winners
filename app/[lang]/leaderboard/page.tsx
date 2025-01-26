"use client";

import { useParams } from "next/navigation";
import { Locale, locales } from "@/lib/i18n/locales";
import {
  HiTrophy,
  HiChartBar,
  HiArrowTrendingUp,
  HiUserGroup,
} from "react-icons/hi2";
import { mockLeaderboardData } from "@/lib/data/mockLeaderboard";
import {
  TopPerformer,
  Department,
  PointsDistribution,
} from "@/lib/types/leaderboard";

export default function Leaderboard() {
  const { lang } = useParams();
  const t = locales[lang as Locale];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {t.leaderboard.title}
        </h1>
        <p className="text-gray-600 max-w-2xl">{t.leaderboard.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 排行榜 */}
        <div className="lg:col-span-2 space-y-6">
          {/* 前三名 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mockLeaderboardData.topPerformers
              .slice(0, 3)
              .map((user: TopPerformer, index: number) => (
                <div
                  key={user.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div
                    className={`h-2 ${
                      index === 0
                        ? "bg-yellow-400"
                        : index === 1
                        ? "bg-gray-400"
                        : "bg-orange-400"
                    }`}
                  />
                  <div className="p-6">
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                        <div
                          className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white
                          ${
                            index === 0
                              ? "bg-yellow-400"
                              : index === 1
                              ? "bg-gray-400"
                              : "bg-orange-400"
                          }`}
                        >
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="mt-4 font-semibold text-gray-900">
                        {user.name}
                      </h3>
                      <p className="text-sm text-gray-500">{user.department}</p>
                      <div className="mt-2 flex items-center text-theme-accent">
                        <HiTrophy className="w-5 h-5 mr-1" />
                        <span className="font-medium">{user.points}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* 其他排名 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="space-y-4">
                {mockLeaderboardData.topPerformers
                  .slice(3)
                  .map((user: TopPerformer) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <span className="w-8 text-gray-500 font-medium">
                          {user.rank}
                        </span>
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="ml-4">
                          <h3 className="font-medium text-gray-900">
                            {user.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {user.department}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-theme-accent mr-2">
                          {user.points}
                        </span>
                        {user.trend === "up" ? (
                          <HiArrowTrendingUp className="w-5 h-5 text-green-500" />
                        ) : (
                          <HiArrowTrendingUp className="w-5 h-5 text-red-500 rotate-180" />
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* 统计信息 */}
        <div className="space-y-6">
          {/* 部门表现 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <HiUserGroup className="w-5 h-5 mr-2 text-blue-500" />
                {t.leaderboard.charts.departmentPerformance}
              </h2>
              <div className="space-y-4">
                {mockLeaderboardData.departments.map((dept: Department) => (
                  <div key={dept.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{dept.name}</span>
                      <span className="font-medium text-gray-900">
                        {dept.points}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 transition-all duration-300"
                        style={{ width: `${dept.completionRate}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 积分分布 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <HiChartBar className="w-5 h-5 mr-2 text-purple-500" />
                {t.leaderboard.charts.pointsDistribution}
              </h2>
              <div className="space-y-4">
                {mockLeaderboardData.pointsDistribution.map(
                  (dist: PointsDistribution) => (
                    <div key={dist.range} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{dist.range}</span>
                        <span className="font-medium text-gray-900">
                          {dist.count}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-purple-500 transition-all duration-300"
                          style={{
                            width: `${
                              (dist.count /
                                Math.max(
                                  ...mockLeaderboardData.pointsDistribution.map(
                                    (d: PointsDistribution) => d.count
                                  )
                                )) *
                              100
                            }%`,
                          }}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
