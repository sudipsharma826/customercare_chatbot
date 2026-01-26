'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon, HomeIcon } from 'lucide-react';
import AnimatedContent from '@/components/layout/animated-content';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background transition-colors flex flex-col pt-24 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="flex-grow max-w-7xl mx-auto w-full border-x border-border flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.05] -z-10" />

        <div className="max-w-2xl w-full text-center px-6 py-20 relative z-10">
          <AnimatedContent distance={40} className="mb-12">
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-primary/20 blur-2xl rounded-full group-hover:bg-primary/30 transition-all duration-500" />
              <Image
                src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                alt="404 animation"
                width={400}
                height={256}
                className="relative w-full max-w-sm h-64 object-cover rounded-[2.5rem] shadow-2xl border-2 border-white dark:border-zinc-800"
              />
              <div className="absolute -bottom-6 -right-6 size-16 bg-background rounded-2xl flex items-center justify-center shadow-xl border border-border rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <span className="text-2xl font-black text-primary italic">404</span>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-6">
              Page <span className="text-primary italic">not found.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-md mx-auto mb-12">
              The page you are looking for doesn&apos;t exist or has been moved. Don&apos;t worry,
              Samvad is here to help.
            </p>
          </AnimatedContent>

          <AnimatedContent
            delay={0.3}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full px-10 py-7 font-bold text-lg shadow-2xl shadow-orange-500/20 hover:scale-105 transition-all"
              >
                <HomeIcon className="mr-2 size-5" />
                Back to Home
              </Button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 rounded-full glass border border-border text-foreground font-bold hover:bg-secondary transition-all active:scale-95"
            >
              <ArrowLeftIcon className="size-5" />
              Go Back
            </button>
          </AnimatedContent>

          <AnimatedContent delay={0.5} className="mt-20 pt-10 border-t border-border/50">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em]">
              Need assistance?{' '}
              <Link href="/contact" className="text-primary hover:underline underline-offset-4">
                Contact Support
              </Link>
            </p>
          </AnimatedContent>
        </div>

        {/* Aesthetic Floating Background Text */}
        <div className="absolute top-[20%] right-[-5%] text-[15rem] font-black text-foreground/[0.02] select-none pointer-events-none tracking-tighter">
          ERROR
        </div>
      </div>
    </div>
  );
}
