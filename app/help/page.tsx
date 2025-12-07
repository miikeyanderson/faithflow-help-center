import Link from 'next/link';
import FAQItem from '@/components/FAQItem';
import { helpCategories } from '@/data/helpData';

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 py-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-sm text-gray-600 mb-2">
            <Link href="/" className="hover:underline">Home</Link>
          </div>
          <h1 className="text-3xl font-bold text-black">Help Center</h1>
        </div>
      </div>

      {/* Categories and FAQs */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        {helpCategories.map((category) => (
          <div key={category.id} className="mb-12">
            {/* Category Title */}
            <h2 className="text-xl font-bold text-black mb-4">
              {category.title}
            </h2>

            {/* FAQ Items */}
            <div className="space-y-0">
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

        {/* Feedback Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-black mb-4">
            Still unsure about something?
          </h2>
          <p className="text-gray-700 mb-4">
            <Link href="/feedback" className="text-blue-600 hover:underline">
              Send Feedback
            </Link>
          </p>
          <textarea
            className="w-full border border-gray-300 rounded p-3 text-black"
            rows={6}
            placeholder="Describe your question or issue here..."
          />
        </div>
      </div>
    </div>
  );
}
