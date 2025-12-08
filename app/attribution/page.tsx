import Link from 'next/link';

interface Attribution {
  id: string;
  name: string;
  license: string;
  description: string;
}

const attributions: Attribution[] = [
  {
    id: 'floating-ui',
    name: '@floating-ui/react-dom',
    license: 'MIT License',
    description: 'Floating UI for positioning tooltips and popovers'
  },
  {
    id: 'fullstory',
    name: '@fullstory/browser',
    license: 'Proprietary',
    description: 'Session replay and analytics'
  },
  {
    id: 'googlemaps',
    name: '@googlemaps/react-wrapper',
    license: 'Apache 2.0',
    description: 'Google Maps integration for React'
  },
  {
    id: 'popperjs',
    name: '@popperjs/core',
    license: 'MIT License',
    description: 'Tooltip and popover positioning engine'
  },
  {
    id: 'rive-app-canvas',
    name: '@rive-app/canvas-advanced',
    license: 'MIT License',
    description: 'Advanced Rive animations for canvas'
  },
  {
    id: 'rive-app-react',
    name: '@rive-app/react-canvas',
    license: 'MIT License',
    description: 'Rive animations for React'
  },
  {
    id: 'rollbar',
    name: '@rollbar/react',
    license: 'MIT License',
    description: 'Error tracking and monitoring'
  },
  {
    id: 'sentry',
    name: '@sentry/react',
    license: 'MIT License',
    description: 'Application monitoring and error tracking'
  },
  {
    id: 'stripe-react',
    name: '@stripe/react-stripe-js',
    license: 'MIT License',
    description: 'Stripe payment integration for React'
  },
  {
    id: 'stripe-js',
    name: '@stripe/stripe-js',
    license: 'MIT License',
    description: 'Stripe JavaScript SDK'
  },
  {
    id: 'testing-jest-dom',
    name: '@testing-library/jest-dom',
    license: 'MIT License',
    description: 'Custom jest matchers for DOM testing'
  },
  {
    id: 'testing-react',
    name: '@testing-library/react',
    license: 'MIT License',
    description: 'React testing utilities'
  },
  {
    id: 'testing-user-event',
    name: '@testing-library/user-event',
    license: 'MIT License',
    description: 'User event simulation for testing'
  },
  {
    id: 'types-jest',
    name: '@types/jest',
    license: 'MIT License',
    description: 'TypeScript definitions for Jest'
  }
];

export default function AttributionPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="max-w-3xl mx-auto px-4 pt-6 pl-6">
        <div className="flex items-center gap-2 text-base font-extrabold">
          <Link href="/attribution" className="text-[#4AC1F8] hover:underline uppercase">
            Attribution
          </Link>
          <span className="text-gray-400 text-lg">›</span>
          <Link href="/" className="text-[#4AC1F8] hover:underline uppercase">
            Home
          </Link>
        </div>
      </div>

      {/* Page Title */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#3C3C3C] dark:text-white text-center">
          Open Source Attribution
        </h1>
      </div>

      {/* Attribution Card Container */}
      <div className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-white dark:bg-[#121F25] rounded-2xl overflow-hidden border-2 border-[#D8D8D8] dark:border-[#37454F]">
          {/* Introduction */}
          <div className="px-6 py-6">
            <p className="text-gray-700 dark:text-white leading-relaxed font-medium text-base">
              Faithflow is built with the help of many open-source projects. We are grateful to the developers and contributors who make these tools available.
            </p>
          </div>

          {/* Attribution Items */}
          <div>
            {attributions.map((attribution, index) => (
              <div
                key={attribution.id}
                className="border-t-2 border-[#D8D8D8] dark:border-[#37454F]"
              >
                <div className="px-6 py-6">
                  <h2 className="text-lg font-extrabold text-gray-900 dark:text-white mb-2">
                    {attribution.name}
                  </h2>
                  <p className="text-sm font-semibold text-[#4AC1F8] mb-3">
                    {attribution.license}
                  </p>
                  <p className="text-gray-700 dark:text-white leading-relaxed font-medium text-base">
                    {attribution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="border-t-2 border-[#D8D8D8] dark:border-[#37454F] px-6 py-6">
            <h2 className="text-lg font-extrabold text-[#4AC1F8] mb-3">
              Full License Information
            </h2>
            <p className="text-gray-700 dark:text-white leading-relaxed font-medium text-base">
              For complete license information and attribution details, please refer to the individual project repositories and documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
