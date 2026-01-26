import CountUp from '@/components/layout/count-number';
import AnimatedContent from '@/components/layout/animated-content';

export default function StatsSection() {
  return (
    <section className="border-y border-border py-24 px-4 md:px-16 lg:px-24 xl:px-32 bg-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.02] -z-10" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-x border-border bg-border">
        <div className="flex flex-col items-center gap-4 text-center py-20 bg-background group relative overflow-hidden transition-all hover:bg-secondary/10">
          <AnimatedContent distance={20} className="relative z-10">
            <h3 className="text-6xl font-black font-urbanist text-foreground tracking-tighter mb-2 group-hover:text-primary transition-colors">
              <CountUp from={0} to={3} />x
            </h3>
            <p className="text-zinc-500 font-black uppercase tracking-[0.2em] text-[10px]">
              Faster development
            </p>
          </AnimatedContent>
        </div>

        <div className="flex flex-col items-center gap-4 text-center py-20 bg-background group relative overflow-hidden transition-all hover:bg-secondary/10">
          <AnimatedContent distance={20} delay={0.1} className="relative z-10">
            <h3 className="text-6xl font-black font-urbanist text-foreground tracking-tighter mb-2 group-hover:text-primary transition-colors">
              <CountUp from={0} to={60} />%
            </h3>
            <p className="text-zinc-500 font-black uppercase tracking-[0.2em] text-[10px]">
              Workflow reduction
            </p>
          </AnimatedContent>
        </div>

        <div className="flex flex-col items-center gap-4 text-center py-20 bg-background group relative overflow-hidden transition-all hover:bg-secondary/10">
          <AnimatedContent distance={20} delay={0.2} className="relative z-10">
            <h3 className="text-6xl font-black font-urbanist text-foreground tracking-tighter mb-2 group-hover:text-primary transition-colors">
              <CountUp from={0} to={99.9} />%
            </h3>
            <p className="text-zinc-500 font-black uppercase tracking-[0.2em] text-[10px]">
              Reliable execution
            </p>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
