import Link from 'next/link';
import FAQItem from '@/components/FAQItem';
import { helpCategories } from '@/data/helpData';

export default function HelpPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="max-w-3xl mx-auto px-4 pt-6">
        <div className="flex items-center gap-2 text-sm font-extrabold">
          <Link href="/help" className="text-[#1CB0F6] hover:underline uppercase">
            Help Center
          </Link>
          <span className="text-gray-400 text-lg">›</span>
          <Link href="/" className="text-[#1CB0F6] hover:underline uppercase">
            Home
          </Link>
        </div>
      </div>

      {/* Page Title */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#3C3C3C] dark:text-white text-center">
          Frequently Asked Questions
        </h1>
      </div>

      {/* FAQ Card Container */}
      <div className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-white dark:bg-[#121F25] rounded-2xl overflow-hidden border-2 border-[#D8D8D8] dark:border-[#37454F]">
          {helpCategories.map((category, categoryIndex) => (
            <div key={category.id}>
              {/* Category Header */}
              <div className={`px-6 py-6 ${categoryIndex > 0 ? 'border-t-2 border-[#D8D8D8] dark:border-[#37454F]' : ''}`}>
                <h2 className="text-lg font-extrabold text-[#1CB0F6]">
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
