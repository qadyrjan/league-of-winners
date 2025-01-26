"use client";

import { useState, useRef } from "react";
import { HiChevronUpDown } from "react-icons/hi2";
import { useClickAway } from "@/hooks/useClickAway";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectProps<T extends string> = {
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: string }[];
  label?: string;
  className?: string;
};

export default function Select<T extends string>({
  value,
  onChange,
  options,
  label,
  className = "",
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((option) => option.value === value);

  useClickAway(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className={`relative ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-600 mb-1">
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-full cursor-pointer rounded-lg bg-white py-2.5 pl-4 pr-10 
          text-left border border-gray-200 hover:border-theme-primary 
          focus:outline-none focus:ring-2 focus:ring-theme-primary/20 
          sm:text-sm transition-all duration-200 
          ${isOpen ? "border-theme-primary ring-2 ring-theme-primary/20" : ""}
          shadow-sm hover:shadow`}
      >
        <span
          className={`block truncate font-medium ${
            selectedOption ? "text-gray-700" : "text-gray-400"
          }`}
        >
          {selectedOption?.label || "Select an option"}
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <HiChevronUpDown
            className={`h-5 w-5 transition-transform duration-200 
              ${isOpen ? "rotate-180 text-theme-primary" : "text-gray-400"}`}
          />
        </span>
      </button>

      {isOpen && (
        <div
          className="absolute z-10 mt-1 w-full rounded-lg bg-white shadow-lg 
          ring-1 ring-black/5 focus:outline-none 
          transform opacity-100 scale-100 transition-all duration-200"
        >
          <div className="max-h-60 overflow-auto py-1">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium
                  hover:bg-theme-light/20 hover:text-theme-primary 
                  transition-colors duration-150 
                  ${
                    option.value === value
                      ? "bg-theme-light/30 text-theme-primary"
                      : "text-gray-600 hover:text-theme-primary"
                  }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
