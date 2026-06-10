import { motion } from 'framer-motion';
import {
  Globe,
  Layout,
  Smartphone,
  ShoppingCart,
  Search,
  Code2,
  Palette,
  RefreshCw,
  Wrench,
  Rocket,
} from 'lucide-react';
import Eyebrow from '../components/Eyebrow';

const SERVICES = [
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'Custom-built websites from the ground up — fast, responsive, and designed to convert visitors into customers.',
    accent: true, // larger card
  },
  {
    icon: Layout,
    title: 'Landing Page Design',
    desc: 'High-impact landing pages that capture attention and drive action. Optimized for conversions from day one.',
  },
  {
    icon: Palette,
    title: 'UI/UX Frontend Development',
    desc: 'Pixel-perfect interfaces with smooth interactions. We turn Figma designs into flawless, production-ready code.',
  },
  {
    icon: Code2,
    title: 'React / Next.js Development',
    desc: 'Modern web apps built with React and Next.js — server-rendered, lightning fast, and ready to scale.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Websites',
    desc: 'Online stores that sell. From Shopify to custom builds, we create seamless shopping experiences.',
  },
  {
    icon: Smartphone,
    title: 'Portfolio Websites',
    desc: 'Stunning personal portfolios that showcase your work, tell your story, and leave a lasting impression.',
  },
  {
    icon: Rocket,
    title: 'Business Websites',
    desc: 'Professional websites for local businesses and brands — building credibility and driving leads online.',
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    desc: 'Outdated site? We modernize your web presence with fresh design, better UX, and improved performance.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    desc: 'On-page SEO, structured data, Core Web Vitals — everything to help your site rank and get found.',
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    desc: 'Ongoing support, updates, and performance monitoring. We keep your site running at peak performance.',
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: typeof SERVICES[number];
  index: number;
}) => {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-2xl border-hairline bg-white/[0.015] p-7 sm:p-8 hover:border-white/[0.15] hover:bg-white/[0.025] transition-all duration-300 ${
        service.accent ? 'md:col-span-2' : ''
      }`}
    >
      {/* Top icon row */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-lg border-hairline-bright flex items-center justify-center bg-white/[0.03] group-hover:bg-violet-glow/10 group-hover:border-violet-glow/40 transition-colors">
          <Icon size={16} strokeWidth={1.6} className="text-white/80 group-hover:text-violet-soft transition-colors" />
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-white mb-2.5">
        {service.title}
      </h3>
      <p className="text-[14px] sm:text-[15px] text-white/55 leading-relaxed">
        {service.desc}
      </p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start sm:items-center text-left sm:text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <Eyebrow className="mb-5">SERVICES</Eyebrow>
          <h2
            className="text-fade font-semibold tracking-tighter leading-[1.05]"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Everything you need to go live.
          </h2>
          <p className="mt-5 text-white/55 leading-relaxed text-[15px] sm:text-base max-w-lg">
            From design to deployment, we handle every aspect of your digital
            presence. Modern tools, clean code, and creative execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
