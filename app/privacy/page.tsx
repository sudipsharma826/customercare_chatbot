import AnimatedContent from '@/components/layout/animated-content';
import SectionTitle from '@/components/layout/section-title';
import { ShieldCheckIcon } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-4xl mx-auto border-x border-border px-8 md:px-16 py-20">
        <SectionTitle
          icon={ShieldCheckIcon}
          title="Privacy Policy"
          subtitle="Last updated: January 25, 2026"
          dir="left"
        />

        <div className="mt-16 prose prose-zinc dark:prose-invert max-w-none space-y-12">
          <AnimatedContent delay={0.1}>
            <section>
              <h2 className="text-2xl font-black tracking-tight text-foreground mb-4">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We collect information that you provide directly to us, such as when you create an
                account, use our AI agents, or contact our support team. This may include your name,
                email address, and any data provided to our Samvad AI system to improve your
                experience.
              </p>
            </section>
          </AnimatedContent>

          <AnimatedContent delay={0.2}>
            <section>
              <h2 className="text-2xl font-black tracking-tight text-foreground mb-4">
                2. How We Use Your Data
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Your data is used to provide and maintain our services, including our RAG-powered
                knowledge base and automated scheduling features. We use your information to
                personalize your experience and ensure our AI agents provide accurate and
                context-aware support.
              </p>
            </section>
          </AnimatedContent>

          <AnimatedContent delay={0.3}>
            <section>
              <h2 className="text-2xl font-black tracking-tight text-foreground mb-4">
                3. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We implement industry-standard security measures to protect your information,
                including end-to-end encryption and regular security audits. Your trust is our
                priority, and we ensure SOC2 compliance standards are met.
              </p>
            </section>
          </AnimatedContent>

          <AnimatedContent delay={0.4}>
            <section>
              <h2 className="text-2xl font-black tracking-tight text-foreground mb-4">
                4. Your Privacy Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                You have the right to access, correct, or delete your personal data at any time. If
                you have any questions about your privacy, please contact us at support@samvad.ai.
              </p>
            </section>
          </AnimatedContent>
        </div>

        <div className="mt-20 pt-10 border-t border-border">
          <Link
            href="/"
            className="text-primary font-black uppercase tracking-[0.2em] text-sm hover:underline underline-offset-8"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
