import SectionCard from '@/components/SectionCard';
import { helpCategories } from '@/data/helpData';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How can we help you?
          </h1>
          <p className="text-lg md:text-xl text-primary-100">
            Search for answers or browse our help categories below
          </p>
        </div>
      </div>

      {/* Help Categories */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {helpCategories.map((category) => (
            <SectionCard key={category.id} category={category} />
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Still need help?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/feedback"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition"
            >
              Send Feedback
            </a>
            <a
              href="/help/troubleshooting/contact-support"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
