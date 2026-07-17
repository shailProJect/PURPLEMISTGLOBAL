import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#process' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_10px_40px_-15px_rgba(11,30,59,0.25)] py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span
            className={`font-heading font-extrabold text-xl md:text-2xl tracking-tight transition-colors ${
              scrolled ? 'text-navy' : 'text-white'
            }`}
          >
            PURPLEMIST <span className="text-gold">GLOBAL</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-medium tracking-wide relative group transition-colors ${
                scrolled ? 'text-navy/80 hover:text-navy' : 'text-white/85 hover:text-white'
              }`}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex btn-primary rounded-full px-6 py-2.5 text-sm"
        >
          Get Quote
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className={`lg:hidden text-2xl ${scrolled ? 'text-navy' : 'text-white'}`}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-white/98 backdrop-blur-md shadow-xl"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-navy font-medium border-b border-navy/5 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary rounded-full px-6 py-3 text-center mt-3"
              >
                Get Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
