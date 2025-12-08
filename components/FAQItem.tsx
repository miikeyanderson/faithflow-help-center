'use client';

import { useState } from 'react';

interface FAQItemProps {
  title: string;
  answer: string;
}

export default function FAQItem({ title, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t-2 border-[#D8D8D8] dark:border-[#37454F]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-6 py-6 text-left transition"
      >
        <span className={`text-gray-900 dark:text-white text-lg ${isOpen ? 'font-extrabold' : 'font-semibold'}`}>
          {title}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ml-4 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 text-[#3C3C3C] dark:text-white leading-relaxed font-medium text-base">
          {answer}
        </div>
      )}
    </div>
  );
}
