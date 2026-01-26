export const revalidate = 60; // ISR
import AnimatedContent from '@/components/layout/animated-content';
import SectionTitle from '@/components/layout/section-title';
import { FileTextIcon } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  // SSG
  return [{}];
}
export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-4xl mx-auto border-x border-border px-8 md:px-16 py-20">
        <SectionTitle
          icon={FileTextIcon}
          title="Terms of Service"
          subtitle="Last updated: January 25, 2026"
          dir="left"
        />

        <div className="mt-16 prose prose-zinc dark:prose-invert max-w-none space-y-12">
          <AnimatedContent delay={0.1}>
            <section>
              <h2 className="text-2xl font-black tracking-tight text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                By accessing or using Samvad, you agree to be bound by these Terms of Service. If
                you do not agree to these terms, please do not use our services.
              </p>
            </section>
          </AnimatedContent>

          <AnimatedContent delay={0.2}>
            <section>
              <h2 className="text-2xl font-black tracking-tight text-foreground mb-4">
                2. Use of AI Agents
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our platform allows you to create and deploy AI agents for customer care. You are
                responsible for the content and actions of your agents, ensuring they comply with
                applicable laws and ethical standards.
              </p>
            </section>
          </AnimatedContent>

          <AnimatedContent delay={0.3}>
            <section>
              <h2 className="text-2xl font-black tracking-tight text-foreground mb-4">
                3. Scaling & Infrastructure
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We provide scalable infrastructure for your AI agents. However, service availability
                is subject to our uptime guarantees and may be affected by maintenance or technical
                limitations.
              </p>
            </section>
          </AnimatedContent>

          <AnimatedContent delay={0.4}>
            <section>
              <h2 className="text-2xl font-black tracking-tight text-foreground mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                All intellectual property rights related to the Samvad platform are owned by us. You
                retain ownership of the data you provide to train your agents, but grant us the
                necessary rights to use it to provide our services.
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
