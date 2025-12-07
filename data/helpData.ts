export interface HelpArticle {
  id: string;
  title: string;
  href: string;
}

export interface HelpCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  articles: HelpArticle[];
}

export const helpCategories: HelpCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Learn the basics and get started with Faithflow',
    icon: '🚀',
    articles: [
      { id: 'what-is-faithflow', title: 'What is Faithflow?', href: '/help/getting-started/what-is-faithflow' },
      { id: 'creating-account', title: 'Creating Your Account', href: '/help/getting-started/creating-account' },
      { id: 'first-steps', title: 'Getting Started Guide', href: '/help/getting-started/first-steps' },
    ],
  },
  {
    id: 'lessons',
    title: 'Lessons',
    description: 'How lessons work and how to make the most of them',
    icon: '📚',
    articles: [
      { id: 'how-lessons-work', title: 'How Lessons Work', href: '/help/lessons/how-lessons-work' },
    ],
  },
  {
    id: 'hearts-and-xp',
    title: 'Hearts & XP',
    description: 'Understanding the Hearts and XP systems',
    icon: '❤️',
    articles: [
      { id: 'xp-and-levels', title: 'Understanding XP & Levels', href: '/help/hearts-and-xp/xp-and-levels' },
      { id: 'hearts-system', title: 'Hearts System', href: '/help/hearts-and-xp/hearts-system' },
    ],
  },
  {
    id: 'streaks',
    title: 'Streaks',
    description: 'Build and maintain your daily streak',
    icon: '🔥',
    articles: [
      { id: 'daily-streaks', title: 'Daily Streaks', href: '/help/streaks/daily-streaks' },
    ],
  },
  {
    id: 'account',
    title: 'Account & Profile',
    description: 'Manage your account and privacy settings',
    icon: '👤',
    articles: [
      { id: 'managing-profile', title: 'Managing Your Profile', href: '/help/account/managing-profile' },
      { id: 'privacy-settings', title: 'Privacy Settings', href: '/help/account/privacy-settings' },
    ],
  },
  {
    id: 'notifications',
    title: 'Notifications',
    description: 'Configure notification preferences',
    icon: '🔔',
    articles: [
      { id: 'notification-preferences', title: 'Notification Preferences', href: '/help/notifications/notification-preferences' },
    ],
  },
  {
    id: 'subscriptions',
    title: 'Subscriptions',
    description: 'Subscription plans, billing, and premium features',
    icon: '💎',
    articles: [
      { id: 'subscription-plans', title: 'Subscription Plans', href: '/help/subscriptions/subscription-plans' },
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and how to fix them',
    icon: '🔧',
    articles: [
      { id: 'common-issues', title: 'Common Issues', href: '/help/troubleshooting/common-issues' },
      { id: 'contact-support', title: 'Contact Support', href: '/help/troubleshooting/contact-support' },
    ],
  },
];
