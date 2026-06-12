import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../components/Button';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Why Stackd', href: '#why-stackd' },
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
  const [mobileOpen, setMobileOpen] = useState(false);

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

        <div className="hidden md:flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-block text-[13px] font-medium text-white/60 hover:text-white transition-colors px-2"
          >
            Contact
          </a>
          <Button variant="primary" size="sm" href="#contact">
            Start Project
          </Button>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          className="md:hidden inline-flex items-center justify-center rounded-full border-hairline-bright bg-white/[0.02] p-2 text-white/75 hover:text-white hover:bg-white/[0.05] transition-colors"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 py-4 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[13px] font-medium text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="text-[13px] font-medium text-white/60 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-full border-hairline-bright bg-white text-black px-4 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Start Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
