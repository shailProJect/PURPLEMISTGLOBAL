import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-light tracking-tight text-white">
                Purplemist
              </span>
              <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase">
                GLOBAL · EST · 2023
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              A quiet trade house from Mumbai, bridging continents with curated compounds.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Products', 'Clients', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">Categories</h3>
            <ul className="space-y-4">
              {['Perfumery', 'Cosmetics'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  Mumbai, Maharashtra<br />India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <a
                  href="mailto:enquiry@purplemist.global"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  enquiry@purplemist.global
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <a
                  href="tel:+91"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  +91 (Enquiries)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2023 Purplemist Global. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-xs text-gray-500 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-gray-500 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};