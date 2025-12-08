import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-gray-200 py-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-sm text-gray-600 mb-2">
            <Link href="/" className="hover:underline">Home</Link>
          </div>
          <h1 className="text-3xl font-bold text-black">Privacy Policy</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us when you create an account, use our services, or communicate with us.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Account information (name, email address)</li>
              <li>Profile information you choose to provide</li>
              <li>Usage data and analytics</li>
              <li>Device and connection information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not share your personal information with third parties except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist in our operations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">5. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your information for as long as your account is active or as needed to provide you services. You may request deletion of your account at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">7. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">9. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us through the <Link href="/feedback" className="text-blue-600 hover:underline">Feedback</Link> page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
