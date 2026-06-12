// Tech stack wordmarks rendered for the marquee strip
const TECHNOLOGIES = [
  { name: 'REACT', style: 'font-bold tracking-tighter' },
  { name: 'next.js', style: 'font-light italic tracking-tight' },
  { name: 'TypeScript', style: 'font-mono font-semibold tracking-tight' },
  { name: 'tailwind', style: 'font-bold tracking-[-0.05em]' },
  { name: 'node.js', style: 'font-light tracking-tight' },
  { name: 'FIGMA', style: 'font-black tracking-widest' },
  { name: 'vercel', style: 'font-medium italic tracking-tighter' },
  { name: 'SHOPIFY', style: 'font-semibold tracking-tight' },
];

const LogoStrip = () => {
  const items = [...TECHNOLOGIES, ...TECHNOLOGIES]; // duplicate for seamless marquee
  const reverseItems = [...TECHNOLOGIES].reverse();
  const reverseMarqueeItems = [...reverseItems, ...reverseItems];

  return (
    <section className="border-y border-white/[0.06] py-12 sm:py-16 overflow-hidden">
      <div className="text-center mb-8 sm:mb-10">
        <span className="font-mono text-[11px] uppercase tracking-widest text-white/35">
          Trusted technologies behind every Stackd build
        </span>
      </div>

      <div className="relative">
        {/* fade masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((company, i) => (
            <span
              key={i}
              className={`mx-10 sm:mx-14 text-white/40 hover:text-white/70 transition-colors text-xl sm:text-2xl ${company.style}`}
            >
              {company.name}
            </span>
          ))}
        </div>

        <div className="flex animate-marquee whitespace-nowrap" style={{ animationDirection: 'reverse' }}>
          {reverseMarqueeItems.map((company, i) => (
            <span
              key={i}
              className={`mx-10 sm:mx-14 text-white/40 hover:text-white/70 transition-colors text-xl sm:text-2xl ${company.style}`}
            >
              {company.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
