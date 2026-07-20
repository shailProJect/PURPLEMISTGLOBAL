import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Marquee } from '../components/sections/Marquee';
import { SectionReveal } from '../components/sections/SectionReveal';
import { products, marqueeText } from '../mock';
import { SEO } from '../components/SEO';


const Home = () => {
  const [textVisible, setTextVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  useEffect(() => {
    // Trigger text reveal animation after mount
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Text reveal animation variants
  const lineVariants = {
    hidden: { opacity: 0, y: 100, clipPath: 'inset(0 0 100% 0)' },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      clipPath: 'inset(0 0 0% 0)',
      transition: {
        duration: 1.2,
        delay: i * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0a0a0a]">
      <SEO
      title="Home"
      description="Purplemist Global sources perfumery oils, cosmetics ingredients, pharma raw materials, industrial hardware and software from Hong Kong, Singapore and across Asia — a trusted import partner for Indian businesses."
      path="/"
    />
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background with Parallax */}
        <motion.div
          style={{ scale: videoScale, opacity: videoOpacity }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-perfume-bottle-with-pink-petals-4713-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a]" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-[1200px] text-center">
            {/* Main Headline with Line-by-Line Reveal */}
            <div className="mb-8 overflow-hidden">
              <motion.h1
                custom={0}
                initial="hidden"
                animate={textVisible ? 'visible' : 'hidden'}
                variants={lineVariants}
                className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[1.1] tracking-tight text-white"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Perfumery, shipped
              </motion.h1>
            </div>
            <div className="mb-12 overflow-hidden">
              <motion.h1
                custom={1}
                initial="hidden"
                animate={textVisible ? 'visible' : 'hidden'}
                variants={lineVariants}
                className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light italic leading-[1.1] tracking-tight text-[#9d8fd9]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                like poetry.
              </motion.h1>
            </div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-gray-300 max-w-[600px] mx-auto mb-12 leading-relaxed"
            >
              A Mumbai trade house connecting six continents with curated compounds, quiet excellence, and relationships that compound.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact">
                <Button className="bg-white text-black hover:bg-[#9d8fd9] hover:text-white transition-all duration-300 rounded-none h-12 px-8 text-sm tracking-[0.1em] group">
                  SEND ENQUIRY
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/products">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-none h-12 px-8 text-sm tracking-[0.1em] group"
                >
                  VIEW CATALOGUE
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white transition-colors duration-300 cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      </section>

      {/* Marquee Section */}
      <Marquee text={marqueeText} speed={40} />

      {/* Featured Products Preview */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-[1440px] mx-auto">
          <SectionReveal>
            <div className="mb-16">
              <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4">
                PRODUCTS · FEATURED
              </p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                What we bring across the sea.
              </h2>
              <p className="text-lg text-gray-400 max-w-[600px]">
                Curated compounds from six continents. Each ingredient vetted like it's going into our own skin.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product, index) => (
              <SectionReveal key={product.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden mb-4 aspect-[3/4] bg-white/5">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 bg-[#9d8fd9]/20 border border-[#9d8fd9]/30 text-[#9d8fd9] text-xs tracking-wider">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-light text-white mb-2 group-hover:text-[#9d8fd9] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    {product.origin}
                  </p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal>
            <div className="mt-12 text-center">
              <Link to="/products">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-none h-12 px-8 text-sm tracking-[0.1em] group"
                >
                  VIEW ALL PRODUCTS
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 lg:py-32 px-6 bg-black/30">
        <div className="max-w-[1440px] mx-auto">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4">
                  EST · 2023
                </p>
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-8"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Six markets.
                  <br />
                  <span className="italic text-[#9d8fd9]">One quiet reputation.</span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  The best trade houses don't shout. They ship on time, solve problems silently, and earn loyalty through consistency, not campaigns.
                </p>
                <Link to="/clients">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-none h-12 px-8 text-sm tracking-[0.1em] group"
                  >
                    OUR GLOBAL FOOTPRINT
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: '6', label: 'Global Markets' },
                  { number: '100+', label: 'Products' },
                  { number: '24h', label: 'Response Time' },
                  { number: '2023', label: 'Established' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border border-white/10 p-8 hover:border-[#9d8fd9]/30 transition-colors duration-500"
                  >
                    <div
                      className="text-5xl font-light text-white mb-2"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-xs tracking-[0.15em] text-gray-500 uppercase">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;