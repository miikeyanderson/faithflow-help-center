'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Attribution {
  id: string;
  packageName: string;
  version: string;
  url: string;
  license: string;
  category: string;
}

const attributions: Attribution[] = [
  // Swift Package Dependencies
  {
    id: 'supabase-swift',
    packageName: 'supabase/supabase-swift',
    version: 'v2.33.0',
    url: 'https://github.com/supabase/supabase-swift',
    license: 'MIT License',
    category: 'Swift Package Dependencies'
  },
  {
    id: 'firebase-ios',
    packageName: 'firebase/firebase-ios-sdk',
    version: 'v11.12.0',
    url: 'https://github.com/firebase/firebase-ios-sdk',
    license: 'Apache 2.0 License',
    category: 'Swift Package Dependencies'
  },
  {
    id: 'google-mobile-ads',
    packageName: 'googleads/swift-package-manager-google-mobile-ads',
    version: 'v12.12.0',
    url: 'https://github.com/googleads/swift-package-manager-google-mobile-ads',
    license: 'Apache 2.0 License',
    category: 'Swift Package Dependencies'
  },
  {
    id: 'google-ump',
    packageName: 'googleads/swift-package-manager-google-user-messaging-platform',
    version: 'v3.1.0',
    url: 'https://github.com/googleads/swift-package-manager-google-user-messaging-platform',
    license: 'Apache 2.0 License',
    category: 'Swift Package Dependencies'
  },
  {
    id: 'markdown-ui',
    packageName: 'gonzalezreal/MarkdownUI',
    version: 'v2.4.1',
    url: 'https://github.com/gonzalezreal/MarkdownUI',
    license: 'MIT License',
    category: 'Swift Package Dependencies'
  },
  {
    id: 'network-image',
    packageName: 'gonzalezreal/NetworkImage',
    version: 'v6.0.1',
    url: 'https://github.com/gonzalezreal/NetworkImage',
    license: 'MIT License',
    category: 'Swift Package Dependencies'
  },
  {
    id: 'view-inspector',
    packageName: 'nalexn/ViewInspector',
    version: 'v0.10.3',
    url: 'https://github.com/nalexn/ViewInspector',
    license: 'MIT License',
    category: 'Swift Package Dependencies'
  },
  {
    id: 'eventsource',
    packageName: 'loopwork-ai/eventsource',
    version: 'v1.1.1',
    url: 'https://github.com/loopwork-ai/eventsource',
    license: 'MIT License',
    category: 'Swift Package Dependencies'
  },
  {
    id: 'mcp-swift',
    packageName: 'modelcontextprotocol/swift-sdk',
    version: 'v0.9.0',
    url: 'https://github.com/modelcontextprotocol/swift-sdk',
    license: 'MIT License',
    category: 'Swift Package Dependencies'
  },
  // Apple Open Source
  {
    id: 'swift-syntax',
    packageName: 'swiftlang/swift-syntax',
    version: 'v600.0.1',
    url: 'https://github.com/swiftlang/swift-syntax',
    license: 'Apache 2.0 License',
    category: 'Apple Open Source'
  },
  {
    id: 'swift-crypto',
    packageName: 'apple/swift-crypto',
    version: 'v3.12.3',
    url: 'https://github.com/apple/swift-crypto',
    license: 'Apache 2.0 License',
    category: 'Apple Open Source'
  },
  {
    id: 'swift-log',
    packageName: 'apple/swift-log',
    version: 'v1.6.3',
    url: 'https://github.com/apple/swift-log',
    license: 'Apache 2.0 License',
    category: 'Apple Open Source'
  },
  {
    id: 'swift-protobuf',
    packageName: 'apple/swift-protobuf',
    version: 'v1.30.0',
    url: 'https://github.com/apple/swift-protobuf',
    license: 'Apache 2.0 License',
    category: 'Apple Open Source'
  },
  {
    id: 'swift-http-types',
    packageName: 'apple/swift-http-types',
    version: 'v1.5.1',
    url: 'https://github.com/apple/swift-http-types',
    license: 'Apache 2.0 License',
    category: 'Apple Open Source'
  },
  {
    id: 'swift-asn1',
    packageName: 'apple/swift-asn1',
    version: 'v1.4.0',
    url: 'https://github.com/apple/swift-asn1',
    license: 'Apache 2.0 License',
    category: 'Apple Open Source'
  },
  {
    id: 'swift-system',
    packageName: 'apple/swift-system',
    version: 'v1.5.0',
    url: 'https://github.com/apple/swift-system',
    license: 'Apache 2.0 License',
    category: 'Apple Open Source'
  },
  {
    id: 'swift-cmark',
    packageName: 'swiftlang/swift-cmark',
    version: 'v0.6.0',
    url: 'https://github.com/swiftlang/swift-cmark',
    license: 'BSD 2-Clause License',
    category: 'Apple Open Source'
  },
  // Point-Free Libraries
  {
    id: 'swift-clocks',
    packageName: 'pointfreeco/swift-clocks',
    version: 'v1.0.6',
    url: 'https://github.com/pointfreeco/swift-clocks',
    license: 'MIT License',
    category: 'Point-Free Libraries'
  },
  {
    id: 'swift-concurrency-extras',
    packageName: 'pointfreeco/swift-concurrency-extras',
    version: 'v1.3.1',
    url: 'https://github.com/pointfreeco/swift-concurrency-extras',
    license: 'MIT License',
    category: 'Point-Free Libraries'
  },
  {
    id: 'xctest-dynamic-overlay',
    packageName: 'pointfreeco/xctest-dynamic-overlay',
    version: 'v1.8.0',
    url: 'https://github.com/pointfreeco/xctest-dynamic-overlay',
    license: 'MIT License',
    category: 'Point-Free Libraries'
  },
  // Google Infrastructure
  {
    id: 'abseil-cpp',
    packageName: 'google/abseil-cpp-binary',
    version: 'v1.2024072200.0',
    url: 'https://github.com/google/abseil-cpp-binary',
    license: 'Apache 2.0 License',
    category: 'Google Infrastructure'
  },
  {
    id: 'google-app-check',
    packageName: 'google/app-check',
    version: 'v11.2.0',
    url: 'https://github.com/google/app-check',
    license: 'Apache 2.0 License',
    category: 'Google Infrastructure'
  },
  {
    id: 'google-app-measurement',
    packageName: 'google/GoogleAppMeasurement',
    version: 'v11.12.0',
    url: 'https://github.com/google/GoogleAppMeasurement',
    license: 'Apache 2.0 License',
    category: 'Google Infrastructure'
  },
  {
    id: 'google-data-transport',
    packageName: 'google/GoogleDataTransport',
    version: 'v10.1.0',
    url: 'https://github.com/google/GoogleDataTransport',
    license: 'Apache 2.0 License',
    category: 'Google Infrastructure'
  },
  {
    id: 'google-utilities',
    packageName: 'google/GoogleUtilities',
    version: 'v8.1.0',
    url: 'https://github.com/google/GoogleUtilities',
    license: 'Apache 2.0 License',
    category: 'Google Infrastructure'
  },
  {
    id: 'grpc-binary',
    packageName: 'google/grpc-binary',
    version: 'v1.69.0',
    url: 'https://github.com/google/grpc-binary',
    license: 'Apache 2.0 License',
    category: 'Google Infrastructure'
  },
  {
    id: 'gtm-session-fetcher',
    packageName: 'google/gtm-session-fetcher',
    version: 'v4.5.0',
    url: 'https://github.com/google/gtm-session-fetcher',
    license: 'Apache 2.0 License',
    category: 'Google Infrastructure'
  },
  {
    id: 'interop-ios',
    packageName: 'google/interop-ios-for-google-sdks',
    version: 'v101.0.0',
    url: 'https://github.com/google/interop-ios-for-google-sdks',
    license: 'Apache 2.0 License',
    category: 'Google Infrastructure'
  },
  {
    id: 'google-promises',
    packageName: 'google/promises',
    version: 'v2.4.0',
    url: 'https://github.com/google/promises',
    license: 'Apache 2.0 License',
    category: 'Google Infrastructure'
  },
  // Firebase Infrastructure
  {
    id: 'leveldb',
    packageName: 'firebase/leveldb',
    version: 'v1.22.5',
    url: 'https://github.com/firebase/leveldb',
    license: 'BSD 3-Clause License',
    category: 'Firebase Infrastructure'
  },
  {
    id: 'nanopb',
    packageName: 'firebase/nanopb',
    version: 'v2.30910.0',
    url: 'https://github.com/firebase/nanopb',
    license: 'Zlib License',
    category: 'Firebase Infrastructure'
  },
  // Fonts
  {
    id: 'nunito-font',
    packageName: 'Nunito Font Family',
    version: 'by Vernon Adams',
    url: 'https://fonts.google.com/specimen/Nunito',
    license: 'Open Font License (OFL)',
    category: 'Fonts'
  }
];

const getLicenseText = (license: string, name: string, url: string) => {
  if (license === 'MIT License') {
    return `MIT License

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  } else if (license === 'Apache 2.0 License') {
    return `Apache License 2.0

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

For the full license text, please visit: ${url}/blob/main/LICENSE`;
  } else if (license === 'BSD 2-Clause License') {
    return `BSD 2-Clause License

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
  } else if (license === 'BSD 3-Clause License') {
    return `BSD 3-Clause License

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
  } else if (license === 'Open Font License (OFL)') {
    return `SIL Open Font License 1.1

This Font Software is licensed under the SIL Open Font License, Version 1.1.

This license allows the licensed fonts to be used, studied, modified and redistributed freely as long as they are not sold by themselves. The fonts, including any derivative works, can be bundled, embedded, redistributed and/or sold with any software provided that any reserved names are not used by derivative works.

For the full license text, please visit: https://scripts.sil.org/OFL`;
  } else if (license === 'Zlib License') {
    return `Zlib License

This software is provided 'as-is', without any express or implied warranty. In no event will the authors be held liable for any damages arising from the use of this software.

Permission is granted to anyone to use this software for any purpose, including commercial applications, and to alter it and redistribute it freely, subject to the following restrictions:

1. The origin of this software must not be misrepresented; you must not claim that you wrote the original software. If you use this software in a product, an acknowledgment in the product documentation would be appreciated but is not required.

2. Altered source versions must be plainly marked as such, and must not be misrepresented as being the original software.

3. This notice may not be removed or altered from any source distribution.`;
  }
  return `For full license information, please visit: ${url}`;
};

interface AttributionItemProps {
  attribution: Attribution;
}

function AttributionItem({ attribution }: AttributionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t-2 border-[#D8D8D8] dark:border-[#37454F]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-6 py-6 text-left transition"
      >
        <div className="flex-1">
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">
            @{attribution.packageName}
          </h2>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ml-4 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="px-6 pb-6">
          <div className="bg-gray-50 dark:bg-[#0a1419] p-4 rounded-lg">
            <pre className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono leading-relaxed">
              {getLicenseText(attribution.license, attribution.packageName, attribution.url)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AttributionPage() {
  const categories = Array.from(new Set(attributions.map(a => a.category)));

  return (
    <div className="min-h-screen">
      {/* Page Title */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#3C3C3C] dark:text-white">
          Open Source Attribution for Faithflow
        </h1>
      </div>

      {/* Attribution Card Container */}
      <div className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-white dark:bg-[#121F25] rounded-2xl overflow-hidden border-2 border-[#D8D8D8] dark:border-[#37454F]">
          {/* Attribution Items */}
          {attributions.map((attribution) => (
            <AttributionItem key={attribution.id} attribution={attribution} />
          ))}

          {/* Footer Note */}
          <div className="border-t-2 border-[#D8D8D8] dark:border-[#37454F] px-6 py-6">
            <h2 className="text-lg font-extrabold text-[#4AC1F8] mb-3">
              Full License Information
            </h2>
            <p className="text-gray-700 dark:text-white leading-relaxed font-medium text-base">
              For complete license information and attribution details, please refer to the individual project repositories and documentation linked above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
