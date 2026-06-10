import { useEffect, useState } from 'react';
import Button from '../components/Button';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
];

const Logo = () => (
  <a href="#" className="flex items-center gap-2 group">
    {/* Mark - stacked layers */}
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform group-hover:rotate-90 duration-500"
    >
      <rect x="2" y="2" width="18" height="4" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
      <rect x="2" y="9" width="18" height="4" rx="1" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
      <rect x="2" y="16" width="18" height="4" rx="1" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" />
    </svg>
    <span className="font-semibold text-base tracking-tight text-white">Stackd</span>
  </a>
);

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-black/70 border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-5 sm:px-8 h-14 sm:h-16">
        <Logo />

        <ul className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[13px] font-medium text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-block text-[13px] font-medium text-white/60 hover:text-white transition-colors px-2"
          >
            Contact
          </a>
          <Button variant="primary" size="sm" href="#contact">
            Get a Quote
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
