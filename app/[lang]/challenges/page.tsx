"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { Locale, locales } from "@/lib/i18n/locales";
import { mockChallenges } from "@/lib/data/mockChallenges";
import Select from "@/components/ui/Select";
import ChallengeCard from "@/components/challenges/ChallengeCard";

export default function Challenges() {
  const { lang } = useParams();
  const t = locales[lang as Locale];
  const [type, setType] = useState("all");
  const [status, setStatus] = useState("all");
  const [difficulty, setDifficulty] = useState("all");

  const typeOptions = [
    { value: "all", label: t.challenges.filters.all },
    { value: "individual", label: t.challenges.filters.individual },
    { value: "team", label: t.challenges.filters.team },
  ];

  const statusOptions = [
    { value: "all", label: t.challenges.filters.all },
    { value: "active", label: t.challenges.filters.active },
    { value: "completed", label: t.challenges.filters.completed },
    { value: "upcoming", label: t.challenges.filters.upcoming },
  ];

  const difficultyOptions = [
    { value: "all", label: t.challenges.filters.all },
    { value: "easy", label: t.challenges.filters.easy },
    { value: "medium", label: t.challenges.filters.medium },
    { value: "hard", label: t.challenges.filters.hard },
  ];

  const filteredChallenges = mockChallenges.filter((challenge) => {
    if (type !== "all" && challenge.type !== type) return false;
    if (status !== "all" && challenge.status !== status) return false;
    if (difficulty !== "all" && challenge.difficulty !== difficulty)
      return false;
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="page-title">{t.challenges.title}</h1>
        <p className="text-gray-600 max-w-2xl">{t.challenges.description}</p>
      </div>

      {/* 过滤器 */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Select
          value={type}
          onChange={setType}
          options={typeOptions}
          className="w-40"
        />
        <Select
          value={status}
          onChange={setStatus}
          options={statusOptions}
          className="w-40"
        />
        <Select
          value={difficulty}
          onChange={setDifficulty}
          options={difficultyOptions}
          className="w-40"
        />
      </div>

      {/* 挑战列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChallenges.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
            labels={t.challenges}
          />
        ))}
      </div>

      {/* 空状态 */}
      {filteredChallenges.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">{t.challenges.filters.noResults}</p>
        </div>
      )}
    </div>
  );
}
