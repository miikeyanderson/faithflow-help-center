import Link from 'next/link';
import { HelpCategory } from '@/data/helpData';

export default function SectionCard({ category }: { category: HelpCategory }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition">
      <div className="flex items-start gap-4">
        <div className="text-4xl">{category.icon}</div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {category.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            {category.description}
          </p>
          <ul className="space-y-2">
            {category.articles.map((article) => (
              <li key={article.id}>
                <Link
                  href="/help"
                  className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
