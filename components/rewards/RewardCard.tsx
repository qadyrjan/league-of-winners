import { Reward } from "@/lib/types/reward";
import { Locale, locales } from "@/lib/i18n/locales";
import { HiClock, HiSparkles } from "react-icons/hi2";

type RewardCardProps = {
  reward: Reward;
  userPoints: number;
  lang: string;
  onRedeem: (reward: Reward) => void;
};

export default function RewardCard({
  reward,
  userPoints,
  lang,
  onRedeem,
}: RewardCardProps) {
  const t = locales[lang as Locale];
  const canRedeem = reward.points <= userPoints;
  const hasRequirements =
    reward.requirements &&
    (reward.requirements.minLevel ||
      reward.requirements.badges?.length ||
      reward.requirements.challenges?.length);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={reward.image}
          alt={reward.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-theme-accent text-white px-3 py-1 rounded-full text-sm font-medium">
          {reward.points} {t.rewards.points}
        </div>
        {reward.expiresAt && (
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <HiClock className="w-4 h-4 mr-1" />
            {new Date(reward.expiresAt).toLocaleDateString()}
          </div>
        )}
        {reward.featured && (
          <div className="absolute top-2 left-2 text-yellow-400">
            <HiSparkles className="w-6 h-6" />
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {reward.title}
        </h3>
        <p className="text-gray-600 mb-4">{reward.description}</p>
        {hasRequirements && (
          <div className="mb-4 text-sm text-gray-500">
            {reward.requirements?.minLevel && (
              <div>Минимальный уровень: {reward.requirements.minLevel}</div>
            )}
            {reward.requirements?.badges?.length && (
              <div>
                Требуются значки: {reward.requirements.badges.join(", ")}
              </div>
            )}
          </div>
        )}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {reward.available > 0
              ? `${reward.available} ${t.rewards.available}`
              : t.rewards.unlimited}
          </span>
          <button
            onClick={() => canRedeem && onRedeem(reward)}
            className={`btn-primary ${
              !canRedeem ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!canRedeem}
          >
            {canRedeem ? t.rewards.redeem : t.rewards.needMorePoints}
          </button>
        </div>
      </div>
    </div>
  );
}
