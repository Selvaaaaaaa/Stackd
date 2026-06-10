import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';

interface Project {
  name: string;
  type: string;
  tag: string;
  description: string;
  tech: string[];
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    name: 'NovaPay',
    type: 'SaaS Landing Page',
    tag: 'Concept Project',
    description: 'A concept landing page for a fintech startup — featuring smooth scroll animations, interactive pricing sections, and a dark premium aesthetic designed to maximize conversions.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    name: 'Sakura Kitchen',
    type: 'Restaurant Website UI',
    tag: 'Demo Project',
    description: 'A demo website for a modern Japanese restaurant — showcasing a visual menu, reservation flow, and mobile-first responsive design with rich imagery and warm aesthetics.',
    tech: ['React', 'Styled Components', 'Responsive Design'],
    featured: true,
  },
  {
    name: 'Arjun Mehta',
    type: 'Portfolio Website',
    tag: 'Practice Project',
    description: 'A minimal, elegant portfolio concept for a freelance photographer — featuring a dynamic masonry gallery with lightbox previews and smooth page transitions.',
    tech: ['Next.js', 'Tailwind CSS', 'Cloudinary'],
  },
  {
    name: 'ThreadCraft',
    type: 'E-commerce Store UI',
    tag: 'Concept Project',
    description: 'A concept e-commerce storefront for a sustainable fashion brand — with product filtering, wishlist UI, cart interactions, and a seamless checkout experience.',
    tech: ['React', 'Tailwind CSS', 'Custom Theme'],
  },
  {
    name: 'Launchably',
    type: 'Startup Landing Page',
    tag: 'Demo Project',
    description: 'A bold, conversion-focused demo landing page for a startup accelerator — featuring an animated hero, social proof sections, and waitlist signup integration.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    featured: true,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-2xl p-7 sm:p-8 flex flex-col gap-6 cursor-pointer ${
        project.featured
          ? 'border border-violet-glow/50 bg-gradient-to-b from-violet-glow/[0.08] to-transparent'
          : 'border-hairline bg-white/[0.015]'
      } hover:border-white/[0.15] hover:bg-white/[0.025] transition-all duration-300`}
      style={
        project.featured
          ? {
              boxShadow:
                '0 0 60px -20px rgba(139, 92, 246, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
            }
          : undefined
      }
    >
      {project.featured && (
        <span className="absolute -top-3 left-7 px-2.5 py-1 rounded-full bg-violet-glow text-white font-mono text-[10px] uppercase tracking-widest font-medium">
          Featured
        </span>
      )}

      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg tracking-tight text-white">
            {project.name}
          </h3>
          <ExternalLink size={14} strokeWidth={1.5} className="text-white/30 group-hover:text-violet-soft transition-colors" />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-widest text-violet-soft/80">
            {project.type}
          </span>
          <span className="text-white/20">·</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/35 px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
            {project.tag}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-[13.5px] text-white/55 leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Divider */}
      <div className="h-px bg-white/[0.06]" />

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] font-mono text-[11px] text-white/60"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start sm:items-center text-left sm:text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <Eyebrow className="mb-5">PROJECTS</Eyebrow>
          <h2
            className="text-fade font-semibold tracking-tighter leading-[1.05]"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Concept projects.
            <br />
            Real craftsmanship.
          </h2>
          <p className="mt-5 text-white/55 leading-relaxed text-[15px] sm:text-base max-w-lg">
            These are demo and concept projects we've built to sharpen our skills
            and showcase what we can create for you. Each one reflects our
            approach to clean design and quality code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
