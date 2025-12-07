'use client';

import { useState } from 'react';

interface FAQItemProps {
  title: string;
  answer: string;
}

export default function FAQItem({ title, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 text-left hover:bg-gray-50 transition"
      >
        <span className="text-black font-medium">
          {title}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${
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
        <div className="pb-4 px-0 text-gray-700 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
