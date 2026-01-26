import AnimatedContent from '@/components/layout/animated-content';
import SectionTitle from '@/components/layout/section-title';
import { team } from '@/data/team';
import { HandshakeIcon } from 'lucide-react';
import Image from 'next/image';

export default function OurTeamSection() {
  return (
    <section
      id="team"
      className="border-b border-border bg-background px-4 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="pt-32 pb-48 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-border relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

        <SectionTitle
          icon={HandshakeIcon}
          title="Meet Our Team"
          subtitle="A passionate team of builders, designers and engineers shaping the future of AI-powered products."
        />

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-8 mt-32">
          {team.map((member, index) => (
            <AnimatedContent
              delay={index * 0.1}
              key={index}
              className="flex flex-col group items-center text-center"
            >
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90" />
                <Image
                  src={member.image}
                  alt={member.name}
                  width={224}
                  height={288}
                  className="relative z-10 w-56 h-72 object-cover rounded-[2.5rem] shadow-2xl transition-all duration-700 group-hover:-translate-y-4 border-2 border-transparent group-hover:border-primary/20"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  Member
                </div>
              </div>
              <h3 className="text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mt-2">
                {member.role}
              </p>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
