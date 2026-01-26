import SectionTitle from '@/components/layout/section-title';
import { ArrowUpRightIcon, SparkleIcon } from 'lucide-react';
import { features } from '@/data/features';
import AnimatedContent from '@/components/layout/animated-content';

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="px-4 md:px-16 lg:px-24 xl:px-32 relative z-10 py-24 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto border-x border-border">
        <div className="p-4 pt-16 md:p-16 flex flex-col items-center">
          <SectionTitle
            dir="center"
            icon={SparkleIcon}
            title="Core features"
            subtitle="Everything you need to build, deploy and scale AI agents - designed for speed, reliability and real-world production use."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 px-4 md:px-16 pb-24">
          {features.map((feature, index) => (
            <AnimatedContent
              key={index}
              delay={index * 0.1}
              className={`flex flex-col items-start p-8 rounded-3xl border border-border bg-secondary/20 hover:bg-secondary/40 transition-all duration-300 group`}
            >
              <div
                className={`${feature.iconBg} p-4 text-white rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                {feature.description}
              </p>
            </AnimatedContent>
          ))}
        </div>

        <div className="px-4 md:px-16 pb-24">
          <AnimatedContent className="p-8 md:p-12 bg-primary rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-orange-500/20">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl font-black tracking-tight mb-4">
                Ready to automate your customer care?
              </h2>
              <p className="text-white/80 text-lg font-medium">
                Join the teams building high-performance AI agents with Samvad. Secure, scalable,
                and production-ready.
              </p>
            </div>
            <a
              href="#"
              className="bg-white text-primary px-10 py-4 rounded-full flex items-center gap-2 group font-black uppercase text-xs tracking-[0.2em] shadow-xl hover:scale-105 transition-all shrink-0"
            >
              Explore use cases
              <ArrowUpRightIcon
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
