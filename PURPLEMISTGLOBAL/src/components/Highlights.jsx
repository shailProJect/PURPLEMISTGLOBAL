import { motion } from 'framer-motion';
import { highlights } from '../data/company';

export default function Highlights() {
  return (
    <section className="py-16 bg-white border-y border-navy/5">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-center gap-4">
          {highlights.map((h, i) => (
            <motion.span
              key={h}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="px-6 py-3 rounded-full border border-navy/10 text-navy/80 font-medium text-sm hover:border-gold hover:text-navy hover:shadow-lg transition-all cursor-default"
            >
              {h}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
