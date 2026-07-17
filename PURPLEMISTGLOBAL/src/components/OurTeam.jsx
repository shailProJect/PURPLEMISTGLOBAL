import { motion } from 'framer-motion';
import { FaBullhorn, FaSearchDollar, FaFlask } from 'react-icons/fa';
import { teams } from '../data/company';

const icons = [FaBullhorn, FaSearchDollar, FaFlask];

export default function OurTeam() {
  return (
    <section className="section-pad bg-offwhite">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow text-royal mb-4">Behind The Scenes</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">Our Team</h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teams.map((team, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={team.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="card-premium p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl navy-gradient flex items-center justify-center text-2xl text-gold mb-6">
                  <Icon />
                </div>
                <h3 className="font-heading font-semibold text-xl text-navy mb-4">{team.title}</h3>
                <ul className="space-y-2 text-left">
                  {team.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-ink/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {pt}
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
