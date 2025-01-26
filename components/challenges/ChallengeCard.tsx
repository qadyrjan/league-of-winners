import { Challenge } from "@/lib/types/challenge";
import { LocaleContent } from "@/lib/i18n/locales";

type ChallengeCardProps = {
  challenge: Challenge;
  labels: LocaleContent["challenges"];
};

export default function ChallengeCard({
  challenge,
  labels,
}: ChallengeCardProps) {
  return (
    <div className="card p-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {challenge.title}
        </h3>
        <p className="text-gray-600">{challenge.description}</p>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-sm">
            <span className="text-gray-500">{labels.details.daysLeft}: </span>
            <span className="font-medium">{challenge.daysLeft}</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500">
              {labels.details.participants}:{" "}
            </span>
            <span className="font-medium">{challenge.participants}</span>
          </div>
          {challenge.progress !== undefined && (
            <div className="text-sm">
              <span className="text-gray-500">{labels.details.progress}: </span>
              <span className="font-medium">{challenge.progress}%</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
