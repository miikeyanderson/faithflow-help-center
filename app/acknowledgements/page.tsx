import Link from 'next/link';

export default function AcknowledgementsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-gray-200 py-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-sm text-gray-600 mb-2">
            <Link href="/" className="hover:underline">Home</Link>
          </div>
          <h1 className="text-3xl font-bold text-black">Acknowledgements</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 mb-8">
            Faithflow is built with the help of many open-source projects and third-party services. We are grateful to the developers and contributors who make these tools available.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Open Source Libraries</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900">React & Next.js</h3>
                <p className="text-gray-600 text-sm">MIT License</p>
                <p className="text-gray-700 mt-2">
                  Core framework powering the Faithflow application.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900">Tailwind CSS</h3>
                <p className="text-gray-600 text-sm">MIT License</p>
                <p className="text-gray-700 mt-2">
                  Utility-first CSS framework for styling.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900">TypeScript</h3>
                <p className="text-gray-600 text-sm">Apache 2.0 License</p>
                <p className="text-gray-700 mt-2">
                  Typed superset of JavaScript for enhanced development.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Third-Party Services</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">Hosting & Infrastructure</h3>
                <p className="text-gray-700 mt-2">
                  Cloudflare Pages for reliable and fast hosting.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Icons & Assets</h2>
            <p className="text-gray-700 mb-4">
              We use various icon libraries and design assets that are freely available under open licenses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Special Thanks</h2>
            <p className="text-gray-700 mb-4">
              A special thank you to the open-source community for their continuous contributions and support in making development accessible to everyone.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Full License Information</h2>
            <p className="text-gray-700 mb-4">
              For complete license information and attribution details, please refer to the individual project repositories and documentation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
