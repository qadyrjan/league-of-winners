"use client";

import Link from "next/link";
import {
  HiTrophy as HiTrophyIcon,
  HiGift as HiGiftIcon,
  HiBolt as HiLightningBoltIcon,
} from "react-icons/hi2";

const icons = {
  trophy: HiTrophyIcon,
  gift: HiGiftIcon,
  lightning: HiLightningBoltIcon,
} as const;

type FeatureCardProps = {
  href: string;
  iconName: keyof typeof icons;
  title: string;
  description: string;
  color: string;
};

export default function FeatureCard({
  href,
  iconName,
  title,
  description,
  color,
}: FeatureCardProps) {
  const Icon = icons[iconName];

  return (
    <Link href={href} className="block h-full">
      <div className="card h-[200px] flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-4 transform transition-transform group-hover:scale-110">
            <Icon className={`w-10 h-10 ${color}`} />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-gray-900">{title}</h2>
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
}
