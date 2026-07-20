import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'CLIENTS', path: '/clients' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="group">
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-light tracking-tight text-white group-hover:text-[#9d8fd9] transition-colors duration-300">
                Purplemist
              </span>
              <span className="text-[10px] tracking-[0.2em] text-gray-400 uppercase">
                GLOBAL · EST · 2023
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs tracking-[0.15em] font-medium transition-all duration-300 relative group ${
                  location.pathname === link.path ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-[#9d8fd9] transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/login"
              className="text-xs tracking-[0.15em] font-medium text-gray-400 hover:text-white transition-colors duration-300"
            >
              LOGIN
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-none text-xs tracking-[0.1em] h-10 px-6"
              >
                SEND ENQUIRY
                <Send className="ml-2 h-3 w-3" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:text-[#9d8fd9] transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/5"
          >
            <nav className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm tracking-[0.15em] font-medium transition-colors duration-300 ${
                      location.pathname === link.path ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-sm tracking-[0.15em] font-medium text-gray-400"
                >
                  LOGIN
                </Link>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-none text-xs tracking-[0.1em] h-10"
                  >
                    SEND ENQUIRY
                    <Send className="ml-2 h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};