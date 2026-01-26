'use client';
import AnimatedContent from '@/components/layout/animated-content';
import SectionTitle from '@/components/layout/section-title';
import { MailIcon, SendHorizontalIcon, MessageCircleIcon } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 md:px-16 lg:px-24 xl:px-32 bg-background">
      <div className="max-w-7xl mx-auto border-x border-border py-32 flex flex-col items-center">
        <SectionTitle
          icon={MessageCircleIcon}
          title="Get in touch"
          subtitle="Have questions about Samvad? Our team is here to help you automate your customer care."
        />

        <div className="mt-20 w-full max-w-4xl px-4 md:px-12">
          <AnimatedContent className="bg-secondary/20 border border-border rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-black/5 relative overflow-hidden backdrop-blur-sm">
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 size-64 bg-primary/5 rounded-full blur-[80px]" />

            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest text-foreground/70 ml-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-background border border-border rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest text-foreground/70 ml-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-background border border-border rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black uppercase tracking-widest text-foreground/70 ml-2">
                  How can we help?
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-background border border-border rounded-3xl px-6 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-medium resize-none"
                />
              </div>

              <button className="w-full md:w-max bg-primary text-white px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] shadow-2xl shadow-orange-500/30 hover:scale-105 transition-all flex items-center justify-center gap-3 group active:scale-95">
                Send Message
                <SendHorizontalIcon className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </AnimatedContent>

          <AnimatedContent
            delay={0.2}
            className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left"
          >
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-3 text-primary">
                <MailIcon className="size-5" />
                <span className="font-black uppercase tracking-widest text-xs">Email us</span>
              </div>
              <p className="font-bold text-lg">support@samvad.ai</p>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-3 text-primary">
                <MessageCircleIcon className="size-5" />
                <span className="font-black uppercase tracking-widest text-xs">Live Chat</span>
              </div>
              <p className="font-bold text-lg">Available 24/7</p>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
