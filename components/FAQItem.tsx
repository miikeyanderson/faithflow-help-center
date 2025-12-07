import Link from 'next/link';

interface FAQItemProps {
  title: string;
  href: string;
}

export default function FAQItem({ title, href }: FAQItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between py-4 border-b border-gray-200 hover:bg-gray-50 transition group"
    >
      <span className="text-black group-hover:text-blue-600">
        {title}
      </span>
      <svg
        className="w-5 h-5 text-gray-400 group-hover:text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  );
}
