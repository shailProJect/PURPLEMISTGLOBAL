import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';
import { leadership } from '../data/company';

function initials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');
}

export default function Leadership() {
  return (
    <section id="leadership" className="section-pad bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow text-royal mb-4">Meet The Board</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">Leadership</h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {leadership.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-premium p-8 md:p-10"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 rounded-2xl gold-gradient flex items-center justify-center font-heading font-bold text-2xl text-navy shrink-0">
                  {person.image ? (
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    initials(person.name)
                  )}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-navy">{person.name}</h3>
                  <p className="text-gold text-sm font-semibold tracking-wide">{person.role}</p>
                  <p className="text-ink/50 text-xs mt-0.5">{person.qualification}</p>
                </div>
              </div>
              <ul className="space-y-2.5 mb-6">
                {person.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-sm text-ink/70 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`tel:+91${person.mobile}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors"
              >
                <FaPhoneAlt className="text-gold" /> +91 {person.mobile}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
