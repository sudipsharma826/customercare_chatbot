'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mounting
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-12 h-12 rounded-2xl bg-secondary/50 border border-border animate-pulse" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-12 h-12 flex items-center justify-center rounded-2xl bg-secondary hover:bg-secondary/80 border border-border transition-all active:scale-90 cursor-pointer z-[100] group shadow-sm overflow-hidden"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${isDark ? 'bg-orange-500' : 'bg-blue-600'}`}
      />

      {isDark ? (
        <SunIcon className="size-5.5 text-orange-400 fill-orange-400/20 group-hover:rotate-90 transition-transform duration-500" />
      ) : (
        <MoonIcon className="size-5.5 text-primary fill-primary/10 group-hover:-rotate-12 transition-transform duration-500" />
      )}
    </button>
  );
}
