'use client';

import { useState } from 'react';

interface FAQItemProps {
  title: string;
  answer: string;
}

export default function FAQItem({ title, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-200 dark:border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-6 py-4 text-left hover:bg-gray-200 dark:hover:bg-gray-800 transition"
      >
        <span className="text-gray-900 dark:text-white font-medium">
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
        <div className="px-6 pb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
