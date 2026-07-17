import { motion } from 'framer-motion';
import { products } from '../data/products';

export default function Products() {
  return (
    <section id="products" className="section-pad bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow text-royal mb-4">What We Import</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">
            Our Product Categories
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
                className="card-premium p-8 group"
              >
                <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center text-2xl text-navy mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon />
                </div>
                <h3 className="font-heading font-semibold text-xl text-navy mb-3">{p.title}</h3>
                <p className="text-ink/65 text-sm leading-relaxed mb-5">{p.description}</p>
                <ul className="space-y-2">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-ink/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
