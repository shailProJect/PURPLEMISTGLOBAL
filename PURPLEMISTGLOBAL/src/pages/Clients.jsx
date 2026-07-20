import { motion } from 'framer-motion';
import { SectionReveal } from '../components/sections/SectionReveal';
import { Marquee } from '../components/sections/Marquee';
import { clients, marqueeText } from '../mock';
import { MapPin } from 'lucide-react';
import { SEO } from '../components/SEO';


const Clients = () => {
  return (
    <div className="bg-[#0a0a0a] pt-32 pb-24">
      <SEO
      title="Clients"
      description="See the global footprint of businesses that trust Purplemist Global for perfumery, cosmetics, pharma and industrial hardware sourcing."
      path="/clients"
    />
      {/* Hero Section */}
      <section className="px-6 mb-32">
        <div className="max-w-[1440px] mx-auto">
          <SectionReveal>
            <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">
              CLIENTS · GLOBAL FOOTPRINT
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-12 max-w-[900px]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Six markets.
              <br />
              <span className="italic text-[#9d8fd9]">One quiet reputation.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-[800px] leading-relaxed">
              From luxury perfume houses in Dubai to K-beauty innovators in Seoul, independent cosmetics brands in Europe to FMCG distributors across India—our clients share one thing: a need for reliability.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Marquee */}
      <Marquee text={marqueeText} speed={50} />

      {/* Markets Grid */}
      <section className="px-6 py-24">
        <div className="max-w-[1440px] mx-auto">
          <SectionReveal>
            <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-12 text-center">
              WHERE WE SERVE
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <SectionReveal key={index}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group border border-white/10 p-8 hover:border-[#9d8fd9]/30 transition-colors duration-500 h-full bg-gradient-to-br from-white/[0.02] to-transparent"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="w-12 h-12 flex items-center justify-center border border-white/20 group-hover:border-[#9d8fd9]/50 transition-colors duration-500"
                    >
                      <MapPin className="h-6 w-6 text-[#9d8fd9]" />
                    </motion.div>
                  </div>

                  {/* Region */}
                  <h3
                    className="text-2xl md:text-3xl font-light text-white mb-4 group-hover:text-[#9d8fd9] transition-colors duration-300"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {client.region}
                  </h3>

                  {/* Countries */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {client.countries.map((country, idx) => (
                      <span
                        key={idx}
                        className="text-xs tracking-wider text-gray-500 uppercase"
                      >
                        {country}
                        {idx < client.countries.length - 1 && ' ·'}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {client.description}
                  </p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-6 py-24 bg-black/30">
        <div className="max-w-[1000px] mx-auto text-center">
          <SectionReveal>
            <blockquote
              className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-8 leading-relaxed"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              “The best trade houses don't shout. They ship on time, solve problems silently, and earn{' '}
              <span className="italic text-[#9d8fd9]">loyalty through consistency</span>, not campaigns.”
            </blockquote>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <p className="text-sm text-gray-500 tracking-wider uppercase">
                Purplemist Philosophy
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '6', label: 'Global Markets', suffix: '' },
              { number: '100', label: 'Products Sourced', suffix: '+' },
              { number: '24', label: 'Hour Response', suffix: 'h' },
              { number: '50', label: 'Partner Networks', suffix: '+' }
            ].map((stat, index) => (
              <SectionReveal key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="border border-white/10 p-8 hover:border-[#9d8fd9]/30 transition-colors duration-500 text-center"
                >
                  <div
                    className="text-5xl lg:text-6xl font-light text-white mb-2"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {stat.number}
                    <span className="text-[#9d8fd9]">{stat.suffix}</span>
                  </div>
                  <div className="text-xs tracking-[0.15em] text-gray-500 uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;