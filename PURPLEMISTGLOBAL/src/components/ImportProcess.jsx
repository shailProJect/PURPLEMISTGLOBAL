import { motion } from 'framer-motion';
import { importProcess } from '../data/company';

export default function ImportProcess() {
  return (
    <section id="process" className="section-pad bg-offwhite">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow text-royal mb-4">How It Works</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">
            Our Import Process
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

          <div className="grid lg:grid-cols-7 gap-y-10 gap-x-4">
            {importProcess.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex lg:flex-col items-start lg:items-center gap-4 lg:text-center relative"
              >
                <div className="w-9 h-9 shrink-0 rounded-full gold-gradient text-navy font-heading font-bold flex items-center justify-center text-sm relative z-10 shadow-lg">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-navy text-base mb-1">{step.title}</h3>
                  <p className="text-ink/60 text-xs leading-relaxed lg:px-2">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
