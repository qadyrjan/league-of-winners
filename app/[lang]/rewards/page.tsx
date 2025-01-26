"use client";

import { useParams } from "next/navigation";
import { Locale, locales } from "@/lib/i18n/locales";
import { mockRewardsData } from "@/lib/data/mockRewards";
import { HiTrophy } from "react-icons/hi2";
import RewardCard from "@/components/rewards/RewardCard";
import { Reward } from "@/lib/types/reward";
import { useState } from "react";

export default function Rewards() {
  const { lang } = useParams();
  const t = locales[lang as Locale];
  const [showRedeemModal, setShowRedeemModal] = useState(false);
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);

  const handleRedeem = (reward: Reward) => {
    setSelectedReward(reward);
    setShowRedeemModal(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 用户积分信息 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {t.rewards.yourPoints}
              </h2>
              <div className="flex items-center text-theme-accent">
                <HiTrophy className="w-6 h-6 mr-2" />
                <span className="text-2xl font-bold">
                  {mockRewardsData.userPoints}
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <div>
                {t.rewards.level} {mockRewardsData.userLevel}
              </div>
              <div>
                {t.rewards.availableRewards}:{" "}
                {
                  Object.values(mockRewardsData.categories)
                    .flatMap((cat) => cat.rewards)
                    .filter(
                      (reward) => reward.points <= mockRewardsData.userPoints
                    ).length
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 精选奖励 */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {t.rewards.featured}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockRewardsData.featured.map((reward) => (
            <RewardCard
              key={reward.id}
              reward={reward}
              userPoints={mockRewardsData.userPoints}
              lang={lang as string}
              onRedeem={handleRedeem}
            />
          ))}
        </div>
      </div>

      {/* 奖励类别 */}
      {Object.entries(mockRewardsData.categories).map(([key, category]) => (
        <div key={key} className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {category.title}
          </h2>
          <p className="text-gray-600 mb-6">{category.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.rewards.map((reward) => (
              <RewardCard
                key={reward.id}
                reward={reward}
                userPoints={mockRewardsData.userPoints}
                lang={lang as string}
                onRedeem={handleRedeem}
              />
            ))}
          </div>
        </div>
      ))}

      {/* 最近兑换 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {t.rewards.recentRedemptions}
          </h2>
          <div className="space-y-4">
            {mockRewardsData.recentRewards.map((redemption) => (
              <div
                key={redemption.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center">
                  <img
                    src={redemption.userAvatar}
                    alt={redemption.userName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">
                      {redemption.userName}
                    </div>
                    <div className="text-sm text-gray-500">
                      {redemption.rewardTitle}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(redemption.date).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 兑换确认模态框 */}
      {showRedeemModal && selectedReward && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            <div className="relative w-full max-w-md transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  {t.rewards.confirmRedeem}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t.rewards.confirmRedeemMessage.replace(
                    "{points}",
                    selectedReward.points.toString()
                  )}
                </p>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setShowRedeemModal(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
                  >
                    {t.rewards.cancel}
                  </button>
                  <button
                    onClick={() => {
                      // TODO: 实现兑换逻辑
                      setShowRedeemModal(false);
                    }}
                    className="btn-primary"
                  >
                    {t.rewards.confirm}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
