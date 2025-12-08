import Link from 'next/link';

export default function FeedbackPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-gray-200 py-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-sm text-gray-600 mb-2">
            <Link href="/" className="hover:underline">Home</Link>
          </div>
          <h1 className="text-3xl font-bold text-black">Feedback</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <p className="text-gray-700 mb-6">
          We'd love to hear from you! Share your thoughts, suggestions, or report any issues you've encountered.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-900 mb-2">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a category</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
              <option value="improvement">Improvement</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={8}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe your feedback in detail..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
