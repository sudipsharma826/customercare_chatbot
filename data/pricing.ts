import { IPricingPlan } from '@/types/sites';
import { RocketIcon } from 'lucide-react';

export const pricing: IPricingPlan[] = [
  {
    icon: RocketIcon,
    name: 'Free',
    description: 'Explore Samvad and create your first AI agents.',
    price: 0,
    linkText: 'Start Free',
    linkUrl: '#',
    features: [
      'Up to 3 AI agents',
      'Basic workflow builder',
      'Community support',
      'Limited execution runs',
      'Starter integrations',
    ],
  },
  // {
  //     icon: UserIcon,
  //     name: "Starter",
  //     description: "For individuals building and testing AI-powered ideas.",
  //     price: 19,
  //     linkText: "Get Started",
  //     linkUrl: "#",
  //     features: [
  //         "Up to 10 AI agents",
  //         "Advanced workflows",
  //         "API & webhook access",
  //         "Execution logs",
  //         "Email support",
  //     ],
  // },
  // {
  //     icon: UsersIcon,
  //     name: "Pro",
  //     type: "popular",
  //     description: "Best for startups and growing product teams.",
  //     price: 49,
  //     linkText: "Upgrade to Pro",
  //     linkUrl: "#",
  //     features: [
  //         "Unlimited AI agents",
  //         "Priority execution",
  //         "Real-time monitoring",
  //         "Team collaboration",
  //         "Priority support",
  //     ],
  // },
];
