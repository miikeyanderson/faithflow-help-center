import Link from 'next/link';
import FAQItem from '@/components/FAQItem';
import { helpCategories } from '@/data/helpData';

export default function HelpPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="max-w-3xl mx-auto px-4 pt-6">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Link href="/help" className="text-accent hover:underline uppercase">
            Help Center
          </Link>
          <span className="text-gray-400">&gt;</span>
          <Link href="/" className="text-accent hover:underline uppercase">
            Home
          </Link>
        </div>
      </div>

      {/* Page Title */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
          Frequently Asked Questions
        </h1>
      </div>

      {/* FAQ Card Container */}
      <div className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-gray-100 dark:bg-[#1a2533] rounded-2xl overflow-hidden">
          {helpCategories.map((category, categoryIndex) => (
            <div key={category.id}>
              {/* Category Header */}
              <div className={`px-6 py-4 ${categoryIndex > 0 ? 'border-t border-gray-200 dark:border-gray-700' : ''}`}>
                <h2 className="text-lg font-bold text-accent">
                  {category.title}
                </h2>
              </div>

              {/* FAQ Items */}
              <div>
                {category.articles.map((article) => (
                  <FAQItem
                    key={article.id}
                    title={article.title}
                    answer={article.answer}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
