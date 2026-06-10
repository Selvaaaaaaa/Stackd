import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Mail, Send } from 'lucide-react';
import Button from '../components/Button';

const FinalCTA = () => {
  return (
    <section id="contact" className="relative py-28 sm:py-40 border-t border-white/[0.06] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] pointer-events-none" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(139, 92, 246, 0.22), transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-3xl text-center px-5 sm:px-8"
      >
        <h2
          className="text-fade font-semibold tracking-tightest leading-[0.95] mb-6"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
        >
          Let's build
          <br />
          something great.
        </h2>

        <p className="text-white/55 leading-relaxed max-w-md mx-auto mb-10 text-[15px] sm:text-base">
          Have a project in mind? We'd love to hear about it. Reach out and
          let's discuss how we can bring your vision to life — no pressure,
          just a friendly conversation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <Button
            variant="primary"
            size="lg"
            iconRight={<ArrowRight size={14} strokeWidth={2} />}
            href="https://wa.me/919876543210"
          >
            Start Your Project
          </Button>
          <Button variant="ghost" size="lg" href="mailto:hello@stackd.dev" icon={<Mail size={14} strokeWidth={2} />}>
            hello@stackd.dev
          </Button>
        </div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto mb-10"
        >
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border-hairline bg-white/[0.015] px-4 py-3 hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300"
          >
            <MessageCircle size={14} className="text-emerald-400" strokeWidth={1.5} />
            <span className="font-mono text-[12px] text-white/60">WhatsApp</span>
          </a>
          <a
            href="mailto:hello@stackd.dev"
            className="flex items-center justify-center gap-2 rounded-xl border-hairline bg-white/[0.015] px-4 py-3 hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300"
          >
            <Mail size={14} className="text-violet-soft" strokeWidth={1.5} />
            <span className="font-mono text-[12px] text-white/60">Email</span>
          </a>
          <a
            href="https://t.me/selvaa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border-hairline bg-white/[0.015] px-4 py-3 hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300"
          >
            <Send size={14} className="text-blue-400" strokeWidth={1.5} />
            <span className="font-mono text-[12px] text-white/60">Telegram</span>
          </a>
        </motion.div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {[
            { label: 'Twitter', href: '#' },
            { label: 'LinkedIn', href: '#' },
            { label: 'GitHub', href: '#' },
            { label: 'Instagram', href: '#' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="font-mono text-[11px] uppercase tracking-widest text-white/35 hover:text-white transition-colors"
            >
              {social.label}
            </a>
          ))}
        </div>

        <div className="mt-6 font-mono text-[11px] uppercase tracking-widest text-white/30">
          ⚡ Typically responds within 2 hours
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
