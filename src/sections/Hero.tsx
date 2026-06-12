import { motion } from 'framer-motion';
import { ArrowRight, Code2, Palette, Gauge, Globe, MessageCircle } from 'lucide-react';
import Button from '../components/Button';

const HIGHLIGHTS = [
  { label: 'Team-Led', value: 'Our Team' },
  { label: 'Mobile-First', value: 'Responsive' },
  { label: 'SEO-Ready', value: 'Built-in' },
  { label: 'Startup Focused', value: 'Conversion' },
];

const TECH_STACK = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js',
  'Figma', 'Framer Motion', 'Vercel', 'Shopify', 'WordPress',
];

const ShowcasePane = () => (
  <div className="flex-1 min-w-0 border-r border-white/[0.06]">
    <div className="px-5 py-3 border-b border-white/[0.06] flex items-center justify-between">
      <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">
        What We Build
      </span>
      <span className="font-mono text-[11px] text-white/30">stackd.dev</span>
    </div>
    <div className="px-5 py-4 space-y-4 font-mono text-[12px] sm:text-[13px] leading-relaxed">
      {[
        { icon: '◆', label: 'SaaS Websites', desc: 'Conversion-focused pages for product launches' },
        { icon: '◆', label: 'Business Websites', desc: 'Polished sites that build trust fast' },
        { icon: '◆', label: 'Portfolio Builds', desc: 'Personal brands with strong visual storytelling' },
        { icon: '◆', label: 'E-commerce Stores', desc: 'Clean storefronts designed to sell' },
        { icon: '◆', label: 'Launch Support', desc: 'Fast updates and ongoing website care' },
      ].map((item, i) => (
        <div key={i} className="flex gap-3">
          <span className="text-violet-soft shrink-0">{item.icon}</span>
          <div className="min-w-0">
            <span className="text-white/85 font-medium">{item.label}</span>
            <span className="text-white/40 mx-1.5">·</span>
            <span className="text-white/50">{item.desc}</span>
          </div>
        </div>
      ))}
      <div className="flex gap-3 text-white/30 items-center">
        <span>→</span>
        <span className="inline-block w-1.5 h-3.5 bg-white/40 animate-pulse" />
      </div>
    </div>
  </div>
);

const CapabilitiesPane = () => (
  <div className="w-full md:w-[44%] shrink-0 bg-white/[0.015]">
    <div className="px-5 py-3 border-b border-white/[0.06] flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Code2 size={12} className="text-violet-soft" strokeWidth={2} />
        <span className="font-mono text-[11px] uppercase tracking-widest text-violet-soft">
          Our Stack
        </span>
      </div>
      <span className="font-mono text-[11px] text-white/30">2026</span>
    </div>

    <div className="px-5 py-4 space-y-5 text-[13px]">
      {/* Tech Stack */}
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2.5">
          Technologies
        </div>
        <div className="flex flex-wrap gap-1.5">
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] font-mono text-[11px] text-white/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Capabilities */}
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2.5">
          Capabilities
        </div>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <Palette size={14} className="text-violet-soft shrink-0 mt-0.5" strokeWidth={1.5} />
            <span className="text-white/85 leading-snug">
              UI/UX Design & Prototyping
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Globe size={14} className="text-violet-soft shrink-0 mt-0.5" strokeWidth={1.5} />
            <span className="text-white/85 leading-snug">
              SEO & Performance Optimization
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Gauge size={14} className="text-violet-soft shrink-0 mt-0.5" strokeWidth={1.5} />
            <span className="text-white/85 leading-snug">
              Responsive & Mobile-First Development
            </span>
          </li>
        </ul>
      </div>

      {/* Status */}
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2.5">
          Status
        </div>
        <p className="text-white/85 leading-snug">
          Open for new projects —{' '}
          <span className="font-mono text-violet-soft">let's collaborate</span> and
          build something amazing together.
        </p>
      </div>
    </div>
  </div>
);

const ProductMockup = () => (
  <div className="relative w-full max-w-5xl mx-auto">
    {/* Glow underlay */}
    <div className="absolute -inset-x-20 -bottom-20 top-10 bg-spotlight pointer-events-none" aria-hidden />

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl border-hairline-bright bg-ink-50 overflow-hidden shadow-2xl"
      style={{
        boxShadow:
          '0 50px 120px -20px rgba(139, 92, 246, 0.25), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
      }}
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-white/[0.015]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-white/40">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
          <span>stackd.dev</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-white/30">
          <span>2026</span>
        </div>
      </div>

      {/* Two-pane content */}
      <div className="flex flex-col md:flex-row min-h-[420px]">
        <ShowcasePane />
        <CapabilitiesPane />
      </div>
    </motion.div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
      {/* Background grid + spotlight */}
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)] pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-spotlight pointer-events-none" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Pill - announcement */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border-hairline bg-white/[0.04] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-violet-glow animate-pulse-dot" />
            Stackd · Student web development team
            <ArrowRight size={12} strokeWidth={2} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-fade text-center font-semibold tracking-tightest leading-[0.95] mb-6"
          style={{ fontSize: 'clamp(2.5rem, 7.5vw, 6rem)' }}
        >
          Premium websites
          <br />
          for modern businesses.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto max-w-xl text-center text-white/55 leading-relaxed mb-10"
          style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)' }}
        >
          Stackd is a passionate student web development team building fast,
          responsive, SEO-friendly websites for startups, local businesses,
          personal brands, creators, and small companies.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14 sm:mb-16"
        >
          <Button variant="primary" size="lg" iconRight={<ArrowRight size={14} strokeWidth={2} />} href="#contact">
            Start Your Project
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href="https://wa.me/917305160896"
            target="_blank"
            rel="noopener noreferrer"
            icon={<MessageCircle size={14} strokeWidth={2} />}
          >
            Chat on WhatsApp
          </Button>
        </motion.div>

        {/* Highlights bar — no fake stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto mb-20 sm:mb-24"
        >
          {HIGHLIGHTS.map((item) => (
            <div key={item.label} className="text-center rounded-xl border-hairline bg-white/[0.015] py-4 px-3 hover:bg-white/[0.03] transition-colors">
              <div className="text-lg sm:text-xl font-semibold tracking-tight text-white mb-1">{item.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Product mockup */}
        <ProductMockup />
      </div>
    </section>
  );
};

export default Hero;
