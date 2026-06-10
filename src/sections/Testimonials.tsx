import { motion } from 'framer-motion';
import { Handshake, Rocket, MessageSquare, Star, Shield, Clock } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';

const TRUST_CARDS = [
  {
    icon: Rocket,
    title: 'Ready for Our First Clients',
    desc: "We have been building concept projects, learning cutting-edge technologies, and perfecting our craft. Now we are ready to bring that passion to real client projects.",
    highlight: true,
  },
  {
    icon: Handshake,
    title: 'Open to Collaborations',
    desc: "Whether you are a startup, a fellow student, or a local business \u2014 we would love to collaborate. We bring fresh perspectives, modern design skills, and genuine excitement to every project.",
    highlight: true,
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    desc: "We believe in honest, open communication. You will always know where your project stands, what is next, and how we are solving challenges along the way.",
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    desc: 'As a dedicated student team, we move quickly without compromising quality. Most projects are delivered within 1\u20133 weeks depending on scope.',
  },
  {
    icon: Star,
    title: 'Quality Over Quantity',
    desc: 'We take on a limited number of projects at a time so we can give each one our full attention, creativity, and care.',
  },
  {
    icon: Shield,
    title: 'Your Vision, Protected',
    desc: "We listen first, build second. Your ideas and brand identity drive every design decision we make. We are here to execute your vision, not impose ours.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start sm:items-center text-left sm:text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <Eyebrow className="mb-5">WHY WORK WITH US</Eyebrow>
          <h2
            className="text-fade font-semibold tracking-tighter leading-[1.05]"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Fresh talent, real commitment.
          </h2>
          <p className="mt-5 text-white/55 leading-relaxed text-[15px] sm:text-base max-w-lg">
            We may be early in our journey, but we bring passion, modern skills,
            and an unwavering commitment to quality. Here is what makes working
            with us different.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TRUST_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col gap-6 hover:border-white/[0.15] hover:bg-white/[0.025] transition-all duration-300 ${
                  card.highlight
                    ? 'border border-violet-glow/40 bg-gradient-to-b from-violet-glow/[0.06] to-transparent'
                    : 'border-hairline bg-white/[0.015]'
                }`}
                style={
                  card.highlight
                    ? {
                        boxShadow:
                          '0 0 40px -16px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
                      }
                    : undefined
                }
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg border-hairline-bright flex items-center justify-center bg-white/[0.03]">
                    <Icon size={16} strokeWidth={1.6} className="text-violet-soft" />
                  </div>
                  <h3 className="font-semibold text-base tracking-tight text-white">
                    {card.title}
                  </h3>
                </div>

                <p className="text-[14px] sm:text-[15px] leading-relaxed text-white/55">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
