// Enable ISR (Incremental Static Regeneration)
export const revalidate = 60; // Regenerate the page every 60 seconds

import HomePage from '@/components/pages/HomePage';

export default function Page() {
  return <HomePage />;
}
