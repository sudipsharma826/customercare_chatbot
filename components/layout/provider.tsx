import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { ThemeProvider } from '@/components/next-thems/theme-provider';
import { Toaster } from 'sonner';

interface ProviderProps {
  children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Toaster position="top-right" richColors closeButton />
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
