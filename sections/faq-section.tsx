'use client';

import AnimatedContent from '@/components/layout/animated-content';
import SectionTitle from '@/components/layout/section-title';
import { faqs } from '@/data/faqs';
import { ChevronDownIcon, FileQuestionIcon, MailIcon } from 'lucide-react';

export default function FaqSection() {
  return (
    <section id="faq" className="border-y border-border bg-background">
      <div className="px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="p-12 md:p-24 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-border">
          <SectionTitle
            icon={FileQuestionIcon}
            title="Got questions?"
            subtitle="Everything you need to know about Samvad, AI agents and how to get started."
          />
        </div>
      </div>
      <div className="px-4 md:px-16 lg:px-24 xl:px-32 border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border border-x border-border max-w-7xl mx-auto">
          <div className="p-8 md:p-16 space-y-8">
            {faqs.map((faq, index) => (
              <AnimatedContent key={index} delay={index * 0.05}>
                <details
                  className="group border-b border-border transition-all duration-300 open:pb-8"
                  open={index === 0}
                >
                  <summary className="flex items-center justify-between py-6 cursor-pointer list-none group">
                    <h3 className="font-black text-2xl text-foreground tracking-tight group-hover:text-primary transition-colors pr-8">
                      {faq.question}
                    </h3>
                    <div className="size-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                      <ChevronDownIcon
                        size={20}
                        className="text-muted-foreground transition-transform duration-500 group-open:rotate-180 group-open:text-primary"
                      />
                    </div>
                  </summary>
                  <div className="pr-12 animate-in fade-in slide-in-from-top-4 duration-500">
                    <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </AnimatedContent>
            ))}
          </div>
          <div className="p-8 md:p-16 flex items-start justify-center">
            <AnimatedContent className="lg:sticky lg:top-40 flex flex-col items-start gap-8 p-12 bg-primary text-white w-full rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(249,115,22,0.3)] relative overflow-hidden group">
              {/* Decorative background circle */}
              <div className="absolute -top-24 -right-24 size-64 bg-white/10 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-1000" />

              <div className="p-5 bg-white/20 rounded-2xl backdrop-blur-md shadow-xl">
                <MailIcon className="size-10" />
              </div>
              <h3 className="text-4xl font-black text-white leading-tight tracking-tighter">
                Still have questions? Our team is here to help you get started.
              </h3>
              <p className="text-xl text-white/80 font-medium">
                We&apos;re available 24/7 to answer your queries and help you build the best AI
                agents for your business.
              </p>

              <a
                href="/contact"
                className="bg-white text-primary w-full sm:w-max px-12 py-5 rounded-full font-black uppercase text-sm tracking-[0.2em] hover:bg-zinc-100 transition-all text-center shadow-xl active:scale-95"
              >
                Contact support
              </a>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
}
