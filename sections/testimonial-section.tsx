import AnimatedContent from '@/components/layout/animated-content';
import SectionTitle from '@/components/layout/section-title';
import { testimonials } from '@/data/testimonials';
import { ShieldCheckIcon, StarIcon } from 'lucide-react';
import Image from 'next/image';

export default function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="px-4 md:px-16 lg:px-24 xl:px-32 border-b border-border bg-background"
    >
      <div className="py-32 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-border">
        <SectionTitle
          icon={ShieldCheckIcon}
          title="What our users say"
          subtitle="Teams trust Samvad to build, deploy and scale reliable AI agents in real-world production."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24 px-6 w-full max-w-7xl">
          {testimonials.map((testimonial, index) => {
            const isMain = index === 1;
            return (
              <AnimatedContent
                delay={index * 0.15}
                key={index}
                className={`flex flex-col p-10 rounded-[2.5rem] border transition-all duration-500 
                                    ${
                                      isMain
                                        ? 'bg-primary text-white shadow-[0_32px_64px_-16px_rgba(249,115,22,0.3)] scale-105 z-10 border-primary'
                                        : 'bg-secondary/30 border-border hover:border-primary/50 text-foreground group'
                                    }`}
              >
                <div className="flex items-center gap-1.5 mb-8">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`size-4 ${isMain ? 'fill-white text-white' : 'fill-primary text-primary group-hover:scale-125 transition-transform'}`}
                      />
                    ))}
                </div>

                <blockquote
                  className={`text-xl font-bold leading-relaxed italic ${isMain ? 'text-white' : 'text-foreground/90'}`}
                >
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                <div
                  className={`flex items-center gap-4 mt-10 pt-8 border-t ${isMain ? 'border-white/20' : 'border-border'}`}
                >
                  <Image
                    className={`size-14 rounded-full object-cover border-2 ${isMain ? 'border-primary-foreground/30' : 'border-background shadow-md'}`}
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                  />

                  <div>
                    <p
                      className={`font-black text-lg leading-tight ${isMain ? 'text-white' : 'text-foreground'}`}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className={`text-xs mt-1.5 font-black uppercase tracking-widest ${isMain ? 'text-white/60' : 'text-muted-foreground'}`}
                    >
                      {testimonial.handle}
                    </p>
                  </div>
                </div>
              </AnimatedContent>
            );
          })}
        </div>

        <div className="mt-24 flex flex-col items-center gap-8">
          <p className="text-primary font-black uppercase tracking-[0.3em] text-xs">
            Join 500+ world-class companies
          </p>
          <a
            href="/testimonials"
            className="group flex items-center gap-4 px-12 py-5 rounded-full glass border border-border text-foreground font-black uppercase text-xs tracking-[0.2em] hover:bg-secondary/80 transition-all shadow-2xl shadow-black/5 active:scale-95"
          >
            Read success stories
            <div className="w-8 h-[2px] bg-primary group-hover:w-12 transition-all duration-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
