'use client';

import { MenuIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeToggle from './theme-toggle';
import { motion, AnimatePresence } from 'framer-motion';
import { links } from '@/data/links';
import { ILink } from '@/types/sites';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-[100] px-4 md:px-16 lg:px-24 xl:px-32 py-4 transition-all duration-300 ${scrolled ? 'glass border-b border-border shadow-sm' : 'bg-transparent font-medium'}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="relative z-[110]">
            <Image
              src="/assets/logo.png"
              alt="Samvad Logo"
              width={135}
              height={36}
              className="dark:brightness-200 transition-all duration-300"
            />
          </Link>

          <div className="hidden md:flex gap-6 items-center">
            {links.map((link: ILink) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-1 px-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors tracking-tight"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/login"
                className="text-sm font-bold text-foreground/80 hover:text-primary transition-all"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="py-3 px-8 bg-primary text-white rounded-full hover:shadow-xl hover:shadow-orange-500/20 transition-all font-black text-xs uppercase tracking-widest active:scale-95 shadow-lg shadow-orange-500/10"
              >
                Get Started
              </Link>
            </div>
            <button
              className="md:hidden p-3 text-foreground relative z-[110] bg-secondary/50 rounded-xl cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[90] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-x-4 top-24 z-[110] md:hidden bg-background border border-border p-8 rounded-[2rem] shadow-2xl"
            >
              <div className="flex flex-col gap-6 text-2xl font-black tracking-tighter">
                {links.map((link: ILink) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="hover:text-primary transition-colors flex items-center justify-between group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                    <div className="size-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
                <div className="h-px bg-border my-2" />
                <Link
                  href="/login"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="py-5 px-8 bg-primary text-white text-center rounded-[1.5rem] shadow-xl shadow-orange-500/20 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
