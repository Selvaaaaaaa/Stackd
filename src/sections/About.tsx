import { motion } from 'framer-motion';
import { Users, Sparkles, Zap, Heart } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';

const STRENGTHS = [
  {
    icon: Sparkles,
    title: 'Founder-Led',
    desc: 'You work directly with Selvaa, keeping communication clear and the process simple from kickoff to launch.',
  },
  {
    icon: Zap,
    title: 'Fast & Responsive',
    desc: 'Every site is mobile-first, lightweight, and optimized for performance so it feels smooth on every screen.',
  },
  {
    icon: Heart,
    title: 'Passionate & Dedicated',
    desc: 'As a student team, we bring fresh energy, sharp focus, and a genuine care for the outcome of every build.',
  },
  {
    icon: Users,
    title: 'SEO-Minded',
    desc: 'We structure pages for clarity, speed, and search visibility so your website can support real growth.',
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left side — text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow className="mb-5">ABOUT US</Eyebrow>
            <h2
              className="text-fade font-semibold tracking-tighter leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Built by students,
              <br />
              focused on real business results.
            </h2>
            <div className="space-y-4 text-[15px] sm:text-base text-white/55 leading-relaxed max-w-lg">
              <p>
                <span className="text-white font-medium">Stackd</span> is a freelance web development team founded by{' '}
                <span className="text-violet-soft font-medium">Selvaa</span>, a full stack web developer who loves building clean, premium digital experiences.
              </p>
              <p>
                We work with modern technologies like React, Next.js, TypeScript, Tailwind CSS, and Framer Motion to create polished websites that feel fast and modern.
              </p>
              <p>
                Our mission is simple: deliver responsive, SEO-friendly websites for startups, local businesses, personal brands, creators, and small companies — with a smooth process and startup-friendly pricing.
              </p>
            </div>
          </motion.div>

          {/* Right side — strengths grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STRENGTHS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group rounded-2xl border-hairline bg-white/[0.015] p-6 hover:border-white/[0.15] hover:bg-white/[0.025] transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg border-hairline-bright flex items-center justify-center bg-white/[0.03] group-hover:bg-violet-glow/10 group-hover:border-violet-glow/40 transition-colors mb-4">
                    <Icon size={16} strokeWidth={1.6} className="text-white/80 group-hover:text-violet-soft transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] text-white/55 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
