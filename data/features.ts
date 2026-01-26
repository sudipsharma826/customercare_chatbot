import {
  BotIcon,
  CalendarIcon,
  MessageSquareIcon,
  RepeatIcon,
  BarChart3Icon,
  ShieldCheckIcon,
} from 'lucide-react';
import { IFeature } from '../types/sites';

export const features: IFeature[] = [
  {
    title: 'RAG-Powered Knowledge',
    description:
      'Train your agents on your documentation, FAQs, and URLs to provide precise, context-aware customer support.',
    icon: BotIcon,
    cardBg: 'bg-orange-50',
    iconBg: 'bg-orange-500',
  },
  {
    title: 'Automated Scheduling',
    description:
      'Enable customers to book meetings directly through chat with seamless Google and Outlook calendar integrations.',
    icon: CalendarIcon,
    cardBg: 'bg-green-50',
    iconBg: 'bg-green-500',
  },
  {
    title: 'Multi-Channel Support',
    description:
      'Deploy your Samvad agents across Web, WhatsApp, and social media to reach customers wherever they are.',
    icon: MessageSquareIcon,
    cardBg: 'bg-indigo-50',
    iconBg: 'bg-indigo-500',
  },
  {
    title: 'Intelligent Handover',
    description:
      'Seamlessly transition complex queries to human agents with full conversation context and sentiment analysis.',
    icon: RepeatIcon,
    cardBg: 'bg-pink-50',
    iconBg: 'bg-pink-500',
  },
  {
    title: 'Advanced Analytics',
    description:
      'Gain deep insights into conversation trends, resolution rates, and customer satisfaction with built-in dashboards.',
    icon: BarChart3Icon,
    cardBg: 'bg-lime-50',
    iconBg: 'bg-lime-500',
  },
  {
    title: 'Enterprise Data Security',
    description:
      'Ensuring your customer data stays private with SOC2 compliance, end-to-end encryption, and role-based access.',
    icon: ShieldCheckIcon,
    cardBg: 'bg-gray-50',
    iconBg: 'bg-orange-500',
  },
];
