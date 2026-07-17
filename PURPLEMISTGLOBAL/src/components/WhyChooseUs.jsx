import { motion } from 'framer-motion';
import {
  FaGlobeAsia,
  FaHandshake,
  FaTags,
  FaCertificate,
  FaHeadset,
  FaTruck,
  FaBalanceScale,
  FaSmileBeam,
} from 'react-icons/fa';
import { whyChooseUs } from '../data/company';

const icons = [FaGlobeAsia, FaHandshake, FaTags, FaCertificate, FaHeadset, FaTruck, FaBalanceScale, FaSmileBeam];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad navy-gradient relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-px mx-auto max-w-7xl relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">Our Advantage</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
            Why Choose Us
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((w, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-dark rounded-2xl p-7 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-gold/15 flex items-center justify-center text-gold text-xl mb-4">
                  <Icon />
                </div>
                <h3 className="font-heading font-semibold text-white text-lg mb-2">{w.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
