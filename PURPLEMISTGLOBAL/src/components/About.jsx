import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { value: 50, suffix: '+', label: 'Global Suppliers' },
  { value: 6, suffix: '+', label: 'Business Categories' },
  { value: 100, suffix: '%', label: 'Quality Commitment' },
  { value: 24, suffix: 'x7', label: 'Customer Support' },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-offwhite relative overflow-hidden">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow mb-4 text-royal">Who We Are</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">
            About Purplemist
          </h2>
          <div className="divider-gold mb-6" />
          <p className="text-ink/75 leading-relaxed mb-5">
            Purplemist Global Private Limited is an emerging International Trading Company
            engaged in importing Premium Perfumery Compound Oils, Cosmetics, Pharmaceuticals,
            Industrial Hardware, Software Solutions and Specialized Products from Hong Kong,
            Singapore and other Asian countries.
          </p>
          <p className="text-ink/75 leading-relaxed">
            We provide reliable procurement solutions, supplier sourcing, international trade
            support and quality products with long-term business relationships.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-5"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="card-premium p-8 text-center">
              <div className="font-heading font-extrabold text-4xl md:text-5xl text-navy">
                <CountUp end={s.value} duration={2.4} enableScrollSpy scrollSpyOnce />
                <span className="text-gold">{s.suffix}</span>
              </div>
              <p className="mt-2 text-sm text-ink/60 font-medium tracking-wide">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
