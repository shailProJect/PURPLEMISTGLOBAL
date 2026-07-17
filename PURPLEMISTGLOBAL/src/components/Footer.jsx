import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const quickLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70 pt-16 pb-8">
      <div className="container-px mx-auto max-w-7xl grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <h3 className="font-heading font-bold text-xl text-white mb-4">
            PURPLEMIST <span className="text-gold">GLOBAL</span>
          </h3>
          <p className="text-sm leading-relaxed max-w-sm">
            An emerging international trading company importing premium fragrance oils,
            cosmetics, pharmaceuticals, industrial hardware and software solutions from Hong Kong,
            Singapore and Asia.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white mb-4 text-sm tracking-wide uppercase">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-gold transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white mb-4 text-sm tracking-wide uppercase">
            Connect
          </h4>
          <div className="flex gap-3">
            {[FaLinkedin, FaFacebook, FaInstagram, FaTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-gold hover:text-navy hover:border-gold transition-all"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6">
        <div className="container-px mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Purplemist Global Private Limited. All rights reserved.</p>
          <p>
            Made with <span className="text-gold">&#9825;</span> by Purplemist Global
          </p>
        </div>
      </div>
    </footer>
  );
}
