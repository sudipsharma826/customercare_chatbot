import AnimatedContent from '@/components/layout/animated-content';
import CustomIcon from '@/components/layout/custom-icon';
import { SparkleIcon, StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.05] -z-10" />
      <div className="absolute inset-0 bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat opacity-40 dark:opacity-10 dark:brightness-50 -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-radial-gradient from-primary/20 via-transparent to-transparent opacity-30 -z-10 blur-3xl invisible dark:visible" />

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen pt-32 pb-20 border-x border-border">
        <AnimatedContent
          reverse
          distance={30}
          className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-primary/20"
        >
          <div className="flex items-center -space-x-2">
            <Image
              className="size-8 rounded-full border-2 border-background"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
              alt="userImage1"
              width={32}
              height={32}
            />
            <Image
              className="size-8 rounded-full border-2 border-background"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
              alt="userImage2"
              width={32}
              height={32}
            />
          </div>

          <span className="font-semibold text-sm">60K+</span>
          <div className="h-4 w-px mx-1 bg-border" />
          <span className="text-sm text-foreground/80">Happy users worldwide</span>
          <div className="h-4 w-px mx-1 bg-border" />
          <div className="flex items-center gap-1 pr-1">
            <StarIcon className="size-4 fill-primary stroke-primary" />
            <span className="font-semibold text-sm">4.9</span>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={30} delay={0.1} className="relative">
          <h1 className="text-center font-urbanist text-5xl/tight md:text-7xl/tight mt-6 font-bold max-w-4xl tracking-tight">
            The Future of <span className="text-primary">Customer Care</span> is Samvad AI.
          </h1>
          <div className="absolute -top-6 -right-12 hidden lg:block">
            <CustomIcon icon={SparkleIcon} dir="right" />
          </div>
        </AnimatedContent>

        <AnimatedContent distance={30} delay={0.2}>
          <p className="text-center text-lg/relaxed text-muted-foreground max-w-2xl mt-6 font-medium">
            Samvad empowers businesses to automate support, schedule meetings with RAG intelligence,
            and deliver world-class customer experiences effortlessly.
          </p>
        </AnimatedContent>

        <AnimatedContent className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto">
          <Link
            href="/"
            className="py-3.5 px-10 w-full sm:w-auto bg-primary text-primary-foreground rounded-full font-semibold shadow-xl shadow-primary/20 hover:scale-105 transition-all text-center"
          >
            Get Started
          </Link>
          <Link
            href="/"
            className="group relative py-3.5 px-10 w-full sm:w-auto glass text-foreground rounded-full font-semibold hover:bg-secondary transition-all text-center flex items-center justify-center gap-2"
          >
            Watch Demo
            <div className="size-2 rounded-full bg-primary animate-pulse" />
            <AnimatedContent
              direction="horizontal"
              className="absolute -right-8 -bottom-8 pointer-events-none hidden sm:block"
            >
              <Image
                src="/assets/mouse-arrow.svg"
                alt="mouse-arrow"
                width={32}
                height={32}
                className="dark:invert"
              />
            </AnimatedContent>
          </Link>
        </AnimatedContent>
      </div>
    </section>
  );
}
