import { motion } from 'framer-motion';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight, MessageCircle, Mail, Send, CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const CONTACT_EMAIL = 'stackdbuild@gmail.com';
const WHATSAPP_URL = 'https://wa.me/917305160896';

const buildEmailHref = (subject: string, body: string) => {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const FinalCTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const project = String(formData.get('project') ?? '').trim();

    if (!name || !email || !project) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, project }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        const responseBody = await response.json().catch(() => null);
        console.error('Email send failed:', responseBody);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <h2 className="text-fade font-semibold tracking-tightest leading-[0.95] mb-6" style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}>
          Let's build
          <br />
          your next launch.
        </h2>

        <p className="text-white/55 leading-relaxed max-w-md mx-auto mb-10 text-[15px] sm:text-base">
          If you're ready to create a website that feels premium, loads fast, and makes the right first impression, Stackd is ready to help.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <Button
            variant="primary"
            size="lg"
            iconRight={<ArrowRight size={14} strokeWidth={2} />}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </Button>
          <Button variant="ghost" size="lg" href={buildEmailHref('Project enquiry from Stackd website', 'Hi Stackd, I would like to discuss a project.')} icon={<Mail size={14} strokeWidth={2} />}>
            Send Email
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border-hairline bg-white/[0.015] p-5 sm:p-6 mb-10 text-left"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="block mb-2 font-mono text-[11px] uppercase tracking-widest text-white/40">Name</span>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/[0.08] bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-colors focus:border-violet-glow/60"
                required
              />
            </label>
            <label className="block">
              <span className="block mb-2 font-mono text-[11px] uppercase tracking-widest text-white/40">Email</span>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/[0.08] bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-colors focus:border-violet-glow/60"
                required
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="block mb-2 font-mono text-[11px] uppercase tracking-widest text-white/40">Project details</span>
              <textarea
                name="project"
                rows={4}
                placeholder="Tell us about your website, timeline, and goals"
                className="w-full rounded-xl border border-white/[0.08] bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-colors focus:border-violet-glow/60 resize-none"
                required
              />
            </label>
            <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-[13px] text-white/45 leading-relaxed max-w-md">
                {submitStatus === 'success' 
                  ? <span className="text-emerald-400">Thanks for reaching out! We'll get back to you shortly.</span>
                  : submitStatus === 'error'
                  ? <span className="text-red-400">Email sent failed. Resend testing mode can only deliver to the account owner inbox until a domain is verified.</span>
                  : "Prefer a quick reply? Use WhatsApp for instant chat or send the form and we'll follow up by email."
                }
              </p>
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black hover:bg-white/90 glow-violet font-medium px-5 py-3 text-sm transition-all duration-200 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {submitStatus === 'success' ? (
                  <>
                    <CheckCircle size={14} strokeWidth={2} className="text-emerald-500" />
                    Sent Successfully
                  </>
                ) : isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={14} strokeWidth={2} />
                    Send Inquiry
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl mx-auto mb-10"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border-hairline bg-white/[0.015] px-4 py-3 hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300"
          >
            <MessageCircle size={14} className="text-emerald-400" strokeWidth={1.5} />
            <span className="font-mono text-[12px] text-white/60">Chat on WhatsApp</span>
          </a>
          <a
            href={buildEmailHref('Project enquiry from Stackd website', 'Hi Stackd, I would like to discuss a project.')}
            className="flex items-center justify-center gap-2 rounded-xl border-hairline bg-white/[0.015] px-4 py-3 hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300"
          >
            <Mail size={14} className="text-violet-soft" strokeWidth={1.5} />
            <span className="font-mono text-[12px] text-white/60">stackdbuild@gmail.com</span>
          </a>
        </motion.div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {[
            { label: 'LinkedIn', href: '#' },
            { label: 'Instagram', href: '#' },
            { label: 'X', href: '#' },
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
          ⚡ Stackd responds quickly through WhatsApp or email
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
