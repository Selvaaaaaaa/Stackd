import { MessageCircle } from 'lucide-react';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import LogoStrip from './sections/LogoStrip';
import About from './sections/About';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

const WHATSAPP_URL = 'https://wa.me/917305160896';

const App = () => {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <LogoStrip />
        <About />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-4 right-4 z-50 sm:hidden inline-flex items-center gap-2 rounded-full border-hairline-bright bg-black/80 px-4 py-3 text-sm font-medium text-white shadow-2xl shadow-emerald-400/20 backdrop-blur-xl transition-transform duration-200 hover:scale-[1.02]"
      >
        <MessageCircle size={16} className="text-emerald-400" strokeWidth={2} />
        Chat on WhatsApp
      </a>
    </>
  );
};

export default App;
