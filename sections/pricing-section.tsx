'use client';

import AnimatedContent from '@/components/layout/animated-content';
import SectionTitle from '@/components/layout/section-title';
import { pricing } from '@/data/pricing';
import NumberFlow from '@number-flow/react';
import { CheckIcon, CircleDollarSignIcon } from 'lucide-react';
import { useState } from 'react';

export default function PricingSection() {
  const [planType, setPlanType] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section
      id="pricing"
      className="border-b border-border bg-background px-4 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="p-4 pt-24 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-border pb-40">
        <SectionTitle
          icon={CircleDollarSignIcon}
          title="Simple, transparent pricing"
          subtitle="Choose a plan that fits your team - scale as you build, launch and grow with AI agents."
        />

        {/* Premium Billing Toggle */}
        <AnimatedContent className="p-1 mt-10 border border-border bg-secondary/50 rounded-full flex items-center">
          <button
            className={`px-10 py-2.5 rounded-full cursor-pointer transition-all font-bold text-xs uppercase tracking-widest ${planType === 'monthly' ? 'bg-primary text-white shadow-lg shadow-orange-500/20' : 'text-muted-foreground'}`}
            onClick={() => setPlanType('monthly')}
          >
            Monthly
          </button>
          <button
            className={`relative px-10 py-2.5 rounded-full cursor-pointer transition-all font-bold text-xs uppercase tracking-widest ${planType === 'yearly' ? 'bg-primary text-white shadow-lg shadow-orange-500/20' : 'text-muted-foreground'}`}
            onClick={() => setPlanType('yearly')}
          >
            Yearly
            <span className="absolute -top-8 -right-8 rotate-15 bg-green-500 text-white rounded-full px-3 py-1 text-[10px] font-black shadow-lg shadow-green-500/20">
              -20%
            </span>
          </button>
        </AnimatedContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24 w-full max-w-6xl px-4">
          {pricing.map((plan, index) => {
            const isPopular = plan.type === 'popular';

            return (
              <AnimatedContent
                delay={index * 0.1}
                key={index}
                className={`flex flex-col p-10 rounded-[3rem] border transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 group relative
                                    ${
                                      isPopular
                                        ? 'bg-background dark:bg-zinc-950 border-primary ring-4 ring-primary/10 scale-105 z-10 shadow-xl shadow-primary/5'
                                        : 'bg-background dark:bg-zinc-900 border-border dark:border-white/5 hover:border-primary/40'
                                    }`}
              >
                {isPopular && (
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl shadow-orange-500/30 z-20">
                    Popular Plan
                  </span>
                )}

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 mb-8 shadow-sm ${isPopular ? 'bg-primary/20 text-primary' : 'bg-secondary dark:bg-white/5 text-primary'}`}
                >
                  <plan.icon size={26} />
                </div>

                <h3 className="text-2xl font-black tracking-tight mb-3 text-foreground dark:text-white">
                  {plan.name}
                </h3>
                <p className="text-sm font-medium leading-relaxed mb-10 min-h-[40px] text-muted-foreground dark:text-zinc-400">
                  {plan.description}
                </p>

                <div className="mb-10 flex items-baseline gap-1 whitespace-nowrap overflow-hidden">
                  <span className="text-xl font-bold text-muted-foreground dark:text-zinc-500">
                    $
                  </span>
                  <NumberFlow
                    value={
                      planType === 'monthly'
                        ? plan.price
                        : Math.floor(plan.price - plan.price * 0.2)
                    }
                    className="text-5xl font-black tracking-tighter text-foreground dark:text-white"
                  />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground dark:text-zinc-500">
                    /mo
                  </span>
                </div>

                <button
                  className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 shadow-xl mb-12
                                    ${
                                      isPopular
                                        ? 'bg-primary text-white shadow-orange-500/30 hover:brightness-110'
                                        : 'bg-secondary dark:bg-white text-foreground dark:text-zinc-900 hover:brightness-105'
                                    }`}
                >
                  {plan.linkText}
                </button>

                <div className="space-y-4 flex-grow">
                  {plan.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0">
                        <CheckIcon className="size-4 text-primary stroke-[3]" />
                      </div>
                      <p className="text-sm font-bold leading-snug text-foreground/80 dark:text-zinc-300">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
