import { motion } from 'framer-motion';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';
import { GiCargoShip } from 'react-icons/gi';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[640px] w-full overflow-hidden navy-gradient flex items-center"
    >
      {/* Optional background video: drop a file at public/hero-video.mp4 to enable */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Layered overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy/95" />

      {/* Signature: animated trade-route constellation */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: '22%', left: '12%' },
          { top: '68%', left: '22%' },
          { top: '35%', left: '85%' },
          { top: '78%', left: '78%' },
          { top: '15%', left: '60%' },
        ].map((pos, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_12px_3px_rgba(212,175,55,0.6)]"
            style={pos}
            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
          />
        ))}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M 12 22 Q 40 5 60 15 T 85 35"
            fill="none"
            stroke="url(#goldline)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2.5, ease: 'easeOut', delay: 0.6 }}
          />
          <defs>
            <linearGradient id="goldline" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[6%] bottom-[18%] text-gold/25 text-[10rem] hidden md:block pointer-events-none"
      >
        <GiCargoShip />
      </motion.div>

      <div className="relative z-10 container-px mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow text-gold mb-5"
        >
          Global Importers &amp; Procurement Specialists
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-heading font-extrabold text-white leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
        >
          PURPLEMIST GLOBAL <span className="text-gold">PRIVATE LIMITED</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed"
        >
          Importing Premium Perfumery Compound Oils, Cosmetics, Pharmaceuticals, Industrial
          Hardware, Software Solutions and Global Procurement Services from Hong Kong, Singapore
          and Asian Countries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a href="#products" className="btn-primary rounded-full px-8 py-3.5 inline-flex items-center gap-2 justify-center">
            Explore Products <FaArrowRight />
          </a>
          <a href="#contact" className="btn-outline rounded-full px-8 py-3.5 inline-flex items-center justify-center">
            Contact Us
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-gold text-2xl z-10"
      >
        <FaChevronDown />
      </motion.a>
    </section>
  );
}
