"use client";

import { HiMagnifyingGlass } from "react-icons/hi2";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
}: SearchInputProps) {
  return (
    <div className={`relative ${className}`}>
      <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg 
                 text-gray-700 font-medium placeholder:text-gray-400 placeholder:font-normal
                 focus:outline-none focus:ring-2 focus:ring-theme-primary/20 focus:border-theme-primary
                 hover:border-theme-primary shadow-sm hover:shadow
                 text-sm transition-all"
      />
    </div>
  );
}
