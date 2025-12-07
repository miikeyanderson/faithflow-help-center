import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Faithflow Help Center',
  tagline: 'Support, Documentation, and Resources',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://faithflow-help.pages.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'miikeyanderson',
  projectName: 'faithflow-help-center',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'help',
          editUrl: 'https://github.com/miikeyanderson/faithflow-help-center/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Faithflow',
      logo: {
        alt: 'Faithflow Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'helpSidebar',
          position: 'left',
          label: 'Help Center',
        },
        {to: '/feedback', label: 'Feedback', position: 'left'},
        {to: '/privacy', label: 'Privacy', position: 'right'},
        {to: '/terms', label: 'Terms', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Help & Support',
          items: [
            {
              label: 'Help Center',
              to: '/help/intro',
            },
            {
              label: 'Send Feedback',
              to: '/feedback',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              to: '/privacy',
            },
            {
              label: 'Terms of Use',
              to: '/terms',
            },
            {
              label: 'Acknowledgements',
              to: '/acknowledgements',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Download App',
              href: 'https://apps.apple.com/app/faithflow',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/miikeyanderson/faithflow-help-center',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Asymmetric Labs. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
