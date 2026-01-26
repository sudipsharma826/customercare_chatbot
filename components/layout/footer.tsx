import { InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedContent from './animated-content';

export default function Footer() {
  return (
    <footer className="px-4 md:px-16 lg:px-24 xl:px-32 bg-background">
      <div className="border-x border-border px-4 md:px-12 max-w-7xl mx-auto pt-24">
        <div className="flex flex-col md:flex-row items-start justify-between relative p-10 md:p-16 overflow-hidden pb-32 md:pb-48 bg-secondary/50 dark:bg-secondary/20 rounded-t-[3rem] border-t border-x border-border">
          <Image
            src="/assets/logo.png"
            alt="Samvad Logo"
            width={135}
            height={35}
            className="h-80 w-auto absolute -bottom-20 left-0 opacity-5 dark:opacity-10 select-none pointer-events-none grayscale brightness-0 dark:brightness-200"
          />
          <AnimatedContent distance={40} className="max-w-md relative z-10">
            <Image
              src="/assets/logo.png"
              alt="Samvad Logo"
              width={180}
              height={40}
              className="h-18 w-auto dark:brightness-200"
            />
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              Samvad is the ultimate AI-powered customer care platform designed to help businesses
              automate support, schedule meetings, and deliver exceptional customer experiences at
              scale.
            </p>
          </AnimatedContent>
          <div className="mt-12 md:mt-0 relative z-10">
            <p className="uppercase font-bold tracking-widest text-primary text-sm">
              Connect with us
            </p>
            <AnimatedContent className="flex flex-col mt-8 gap-4">
              <a
                href="#"
                className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                <div className="p-2 bg-background rounded-lg border border-border">
                  <TwitterIcon size={18} />
                </div>
                <span>Twitter</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                <div className="p-2 bg-background rounded-lg border border-border">
                  <LinkedinIcon size={18} />
                </div>
                <span>LinkedIn</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                <div className="p-2 bg-background rounded-lg border border-border">
                  <InstagramIcon size={18} />
                </div>
                <span>Instagram</span>
              </a>
            </AnimatedContent>
          </div>
        </div>
        <div className="py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground relative z-10 bg-secondary/50 dark:bg-secondary/20 px-10">
          <p>© {new Date().getFullYear()} Samvad AI. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-tight font-semibold">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
