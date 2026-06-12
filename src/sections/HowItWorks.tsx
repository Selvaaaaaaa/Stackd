import { motion } from 'framer-motion';
import Eyebrow from '../components/Eyebrow';

const STEPS = [
  {
    n: '01',
    title: 'Discovery',
    desc: 'We start with a focused conversation about your goals, audience, offer, and the result you want the site to achieve.',
    code: '→ goals · audience · offer · scope',
  },
  {
    n: '02',
    title: 'Design',
    desc: 'We shape the visual direction, layout flow, and content hierarchy so the website feels premium and easy to use.',
    code: '→ wireframes · layout · visual direction',
  },
  {
    n: '03',
    title: 'Development',
    desc: 'We bring everything to life with clean React, Next.js, and Tailwind code that is responsive, fast, and SEO-friendly.',
    code: '→ react · next.js · tailwind · performance',
  },
  {
    n: '04',
    title: 'Launch',
    desc: 'We run final checks, optimize the last details, and get your site live with everything ready for growth.',
    code: '✓ deploy · test · launch · grow',
  },
];

const HowItWorks = () => {
  return (
    <section id="process" className="relative py-24 sm:py-32 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start sm:items-center text-left sm:text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <Eyebrow className="mb-5">OUR PROCESS</Eyebrow>
          <h2
            className="text-fade font-semibold tracking-tighter leading-[1.05]"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            From discovery to launch,
            <br />
            in four clear steps.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border-hairline">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-black p-6 sm:p-8 flex flex-col gap-4 min-h-[280px]"
            >
              <span
                className="font-mono text-[11px] uppercase tracking-widest text-white/30"
              >
                STEP {step.n}
              </span>

              <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-white leading-tight">
                {step.title}
              </h3>

              <p className="text-[13px] sm:text-[14px] text-white/55 leading-relaxed flex-1">
                {step.desc}
              </p>

              {/* Code annotation */}
              <div className="rounded-lg border-hairline bg-white/[0.02] px-3 py-2 font-mono text-[11px] text-violet-soft/80 truncate">
                {step.code}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
