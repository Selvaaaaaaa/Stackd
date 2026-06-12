const COLUMNS = [
  {
    title: 'Services',
    links: [
      { label: 'Website Development', href: '#services' },
      { label: 'Landing Pages', href: '#services' },
      { label: 'E-commerce', href: '#services' },
      { label: 'UI/UX Design', href: '#services' },
      { label: 'SEO Optimization', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Process', href: '#process' },
      { label: 'Why Us', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Tech Stack', href: '#' },
      { label: 'React / Next.js', href: '#' },
      { label: 'Tailwind CSS', href: '#' },
      { label: 'Framer Motion', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  },
  {
    title: 'Connect',
    links: [
      {
        label: 'stackdbuild@gmail.com',
        href: 'https://mail.google.com/mail/?view=cm&fs=1&to=stackdbuild%40gmail.com&su=Project%20enquiry%20from%20Stackd%20website&body=Hi%20Stackd%2C%20I%20would%20like%20to%20discuss%20a%20project.',
      },
      { label: '+91 7305160896', href: 'https://wa.me/917305160896' },
      { label: 'LinkedIn', href: '#' },
      { label: 'GitHub', href: '#' },
      { label: 'Instagram', href: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] pt-16 sm:pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Top section: logo + columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 sm:gap-10 mb-14 sm:mb-20">
          {/* Logo + tagline */}
          <div className="col-span-2 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                <rect x="2" y="2" width="18" height="4" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
                <rect x="2" y="9" width="18" height="4" rx="1" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
                <rect x="2" y="16" width="18" height="4" rx="1" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" />
              </svg>
              <span className="font-semibold tracking-tight">Stackd</span>
            </div>
            <p className="text-[13.5px] text-white/45 leading-relaxed max-w-xs">
              A passionate student web development team led by Selvaa. We build
              modern, responsive websites for startups, local businesses,
              personal brands, creators, and small companies.
            </p>

            {/* Status pill */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-4 w-fit rounded-full border-hairline bg-white/[0.02] px-3 py-1.5 font-mono text-[11px] text-white/55 hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
              Open for new projects
            </a>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13.5px] text-white/65 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <p className="font-mono text-[11px] text-white/35">
            © 2026 Stackd. All rights reserved. · Founded by Selvaa.
          </p>
          <p className="font-mono text-[11px] text-white/35">
            Designed & built with{' '}
            <span className="text-violet-soft">♥</span>
            {' '}using React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
