import { motion } from 'framer-motion';
import { SectionReveal } from '../components/sections/SectionReveal';
import { manifesto, leadership } from '../mock';
import { GraduationCap, Phone } from 'lucide-react';
import { SEO } from '../components/SEO';


const About = () => {
  return (
    <div className="bg-[#0a0a0a] pt-32 pb-24">
      <SEO
      title="About Us"
      description="Learn about Purplemist Global Private Limited — our story, leadership, and approach to international trading and procurement across perfumery, cosmetics, pharma and industrial hardware."
      path="/about"
    />
      {/* Hero Section */}
      <section className="px-6 mb-32">
        <div className="max-w-[1440px] mx-auto">
          <SectionReveal>
            <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">
              ABOUT · PURPLEMIST GLOBAL
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-12 max-w-[900px]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              A quiet trade house
              <br />
              <span className="italic text-[#9d8fd9]">from Mumbai.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-[800px] leading-relaxed">
              In 2023, we built Purplemist to solve a simple problem: the cosmetics import ecosystem needed clarity, not chaos. Today, we bridge six continents with curated compounds and quiet excellence.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Manifesto - Numbered Chapters */}
      <section className="px-6 mb-32">
        <div className="max-w-[1200px] mx-auto">
          <div className="space-y-24">
            {manifesto.map((chapter, index) => (
              <SectionReveal key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                  {/* Number */}
                  <div className="lg:col-span-2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      viewport={{ once: true }}
                      className="text-8xl lg:text-9xl font-light text-[#9d8fd9]/20"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {chapter.number}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10">
                    <h2
                      className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {chapter.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-[700px]">
                      {chapter.content}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                {index < manifesto.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mt-24 origin-left"
                  />
                )}
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 mb-32">
        <div className="max-w-[1200px] mx-auto">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">
                  THE STORY
                </p>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-8"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  How it started
                </h2>
                <div className="space-y-6 text-gray-400 leading-relaxed">
                  <p>
                    Mumbai has always been a port city—where cultures converge, goods flow, and relationships matter more than transactions. In 2023, our founders saw an opportunity to modernize the cosmetics and perfumery import space without losing its soul.
                  </p>
                  <p>
                    They noticed that most importers operated like brokers—transactional, impersonal, chasing volume over value. Manufacturers struggled to find reliable partners who understood both the science of compounds and the art of relationships.
                  </p>
                  <p>
                    Purplemist was born from a simple belief: <strong className="text-white">quality compounds deserve quality partnerships</strong>. We curate every ingredient like it's going into our own formulations. We respond to enquiries within 24 hours because your time compounds into opportunity.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">
                  TODAY
                </p>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-8"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Where we are now
                </h2>
                <div className="space-y-6 text-gray-400 leading-relaxed">
                  <p>
                    Today, Purplemist serves six markets across the Middle East, Europe, Asia, and beyond. Our portfolio spans perfumery compounds and cosmetic actives sourced from the world's finest manufacturers.
                  </p>
                  <p>
                    But growth hasn't changed our approach. We're still selective about partnerships. We still vet every compound personally. We still believe that <strong className="text-white">quiet excellence</strong> beats loud marketing every time.
                  </p>
                  <p>
                    Our clients range from luxury perfume houses in Dubai to K-beauty innovators in Seoul, from independent cosmetics brands in Europe to FMCG distributors across India. What they all share: a need for reliability, quality, and a partner who moves like they have skin in the game.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Values Grid */}
      <section className="px-6 mb-32">
        <div className="max-w-[1440px] mx-auto">
          <SectionReveal>
            <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-12 text-center">
              CORE VALUES
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Quality First',
                description: 'Every compound vetted like it\'s going into our own formulations'
              },
              {
                title: 'Relationship-Driven',
                description: 'Partners, not vendors. Your success compounds our reputation'
              },
              {
                title: 'Responsive',
                description: '24-hour response time. Your enquiry reaches a director, not a bot'
              },
              {
                title: 'Transparent',
                description: 'Clear pricing, honest timelines, no hidden fees or surprises'
              }
            ].map((value, index) => (
              <SectionReveal key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="border border-white/10 p-8 hover:border-[#9d8fd9]/30 transition-colors duration-500 h-full"
                >
                  <h3 className="text-xl font-light text-white mb-4">{value.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="px-6 py-24 bg-gradient-to-br from-[#1a1d2e] to-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto">
          <SectionReveal>
            <p className="text-xs tracking-[0.2em] text-[#d4a574] uppercase mb-6">
              LEADERSHIP
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              The people behind
              <br />
              <span className="italic text-[#9d8fd9]">every shipment</span>
            </h2>
            <p className="text-lg text-gray-400 mb-16 max-w-[700px]">
              Decades of combined experience in procurement, vendor development and corporate operations.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <SectionReveal key={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#1e2236] border border-white/10 p-8 lg:p-10 hover:border-[#d4a574]/30 transition-colors duration-500"
                >
                  {/* Profile Header */}
                  <div className="flex items-start gap-6 mb-8">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-[#d4a574]/30">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Name and Role */}
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-light text-white mb-2">
                        {leader.name}
                      </h3>
                      <p className="text-[#d4a574] font-medium mb-4 tracking-wide">
                        {leader.role}
                      </p>

                      {/* Qualification and Mobile */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <GraduationCap className="h-4 w-4 text-gray-500" />
                          <span>{leader.qualification}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <a
                            href={`tel:${leader.mobile}`}
                            className="hover:text-[#d4a574] transition-colors duration-300"
                          >
                            {leader.mobile}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expertise Points */}
                  <ul className="space-y-3">
                    {leader.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed"
                      >
                        <span className="text-[#d4a574] mt-1.5 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;