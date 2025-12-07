export interface HelpArticle {
  id: string;
  title: string;
  answer: string;
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
      {
        id: 'what-is-faithflow',
        title: 'What is Faithflow?',
        answer: 'Faithflow is a faith-based learning app designed to help you grow spiritually through structured lessons, engaging activities, and community features. The app combines modern learning techniques with spiritual content to create an effective way to deepen your faith.'
      },
      {
        id: 'creating-account',
        title: 'Creating Your Account',
        answer: 'You can create a Faithflow account using Sign in with Apple or email. Simply tap "Continue with Apple" or "Sign Up with Email" on the welcome screen, follow the prompts, and complete the quick setup flow to get started.'
      },
      {
        id: 'first-steps',
        title: 'Getting Started Guide',
        answer: 'After creating your account, start by completing your first lesson in the Lessons tab. As you progress, you\'ll earn XP, build streaks, and unlock new content. Enable notifications to get daily reminders and maintain your learning streak.'
      },
    ],
  },
  {
    id: 'lessons',
    title: 'Lessons',
    description: 'How lessons work and how to make the most of them',
    icon: '📚',
    articles: [
      {
        id: 'how-lessons-work',
        title: 'How Lessons Work',
        answer: 'Each lesson includes an introduction, core content, practice activities, and a review. You earn XP by completing activities and answering questions correctly. Hearts are lost when you make mistakes, but they refill over time. Your progress is automatically saved so you can pick up where you left off.'
      },
    ],
  },
  {
    id: 'hearts-and-xp',
    title: 'Hearts & XP',
    description: 'Understanding the Hearts and XP systems',
    icon: '❤️',
    articles: [
      {
        id: 'xp-and-levels',
        title: 'Understanding XP & Levels',
        answer: 'XP (Experience Points) measures your learning progress. You earn XP by completing lessons, answering questions correctly, and maintaining streaks. As you accumulate XP, you level up, unlocking new content and features. Each level requires progressively more XP.'
      },
      {
        id: 'hearts-system',
        title: 'Hearts System',
        answer: 'Hearts represent your lives in the app. You lose a heart when you answer incorrectly or skip required activities. Hearts automatically refill over time (one every few hours). Premium subscribers get unlimited hearts or faster refill rates.'
      },
    ],
  },
  {
    id: 'streaks',
    title: 'Streaks',
    description: 'Build and maintain your daily streak',
    icon: '🔥',
    articles: [
      {
        id: 'daily-streaks',
        title: 'Daily Streaks',
        answer: 'A streak tracks consecutive days of app usage. To maintain your streak, complete at least one lesson or activity each day before midnight in your timezone. Build longer streaks to earn bonus XP and special achievements. You can purchase or earn streak freezes to protect your streak if you miss a day.'
      },
    ],
  },
  {
    id: 'account',
    title: 'Account & Profile',
    description: 'Manage your account and privacy settings',
    icon: '👤',
    articles: [
      {
        id: 'managing-profile',
        title: 'Managing Your Profile',
        answer: 'Edit your profile by going to Settings → Profile. You can update your display name, profile picture, and bio. Choose your profile visibility (Public, Friends Only, or Private) to control who can see your progress and achievements.'
      },
      {
        id: 'privacy-settings',
        title: 'Privacy Settings',
        answer: 'Control your privacy in Settings → Privacy. You can manage profile visibility, opt in/out of analytics, control communication preferences, and manage app permissions. You have the right to access, correct, or delete your data at any time.'
      },
    ],
  },
  {
    id: 'notifications',
    title: 'Notifications',
    description: 'Configure notification preferences',
    icon: '🔔',
    articles: [
      {
        id: 'notification-preferences',
        title: 'Notification Preferences',
        answer: 'Customize notifications in Settings → Notifications. Enable daily reminders to practice, set your preferred reminder time, and choose which types of notifications you want to receive (streak reminders, achievements, social updates). You can also enable Quiet Hours to pause notifications during specific times.'
      },
    ],
  },
  {
    id: 'subscriptions',
    title: 'Subscriptions',
    description: 'Subscription plans, billing, and premium features',
    icon: '💎',
    articles: [
      {
        id: 'subscription-plans',
        title: 'Subscription Plans',
        answer: 'Faithflow offers Monthly and Annual subscription plans with premium features including unlimited hearts, ad-free experience, exclusive content, priority support, and offline mode. Subscriptions are billed through the Apple App Store and auto-renew unless canceled. You can manage your subscription in iOS Settings → Your Name → Subscriptions.'
      },
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and how to fix them',
    icon: '🔧',
    articles: [
      {
        id: 'common-issues',
        title: 'Common Issues',
        answer: 'For login issues, ensure you\'re using the correct Apple ID or email and check your internet connection. If lessons won\'t load, try closing and reopening the app. For missing XP or hearts, wait a few minutes for sync to complete. If problems persist, update to the latest app version or contact support.'
      },
      {
        id: 'contact-support',
        title: 'Contact Support',
        answer: 'Need help? Contact us through Settings → Support → Send Feedback in the app, or visit our feedback page. Please include your account email, device type, iOS version, and a description of the issue. We typically respond within 24-48 hours for technical issues.'
      },
    ],
  },
];
