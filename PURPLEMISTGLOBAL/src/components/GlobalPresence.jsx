import { useState } from 'react';
import { motion } from 'framer-motion';
import { countries } from '../data/company';

// Stylised wireframe-globe network rather than literal cartography —
// plots our sourcing hubs as nodes on a latitude/longitude grid and
// animates trade routes radiating from India, our home base.
export default function GlobalPresence() {
  const [active, setActive] = useState(null);
  const hub = countries.find((c) => c.name === 'India');
  const others = countries.filter((c) => c.name !== 'India');

  return (
    <section className="section-pad bg-navy relative overflow-hidden">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="eyebrow mb-4">Our Reach</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
            Global Presence
          </h2>
          <div className="divider-gold mb-6" />
          <p className="text-white/65 leading-relaxed mb-8">
            Our sourcing network spans India&rsquo;s key trading corridors across Hong Kong,
            Singapore, China, Malaysia, Thailand and Vietnam &mdash; connecting verified
            manufacturers to Indian and international buyers.
          </p>
          <div className="flex flex-wrap gap-3">
            {countries.map((c) => (
              <button
                key={c.name}
                onMouseEnter={() => setActive(c.name)}
                onMouseLeave={() => setActive(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  active === c.name
                    ? 'bg-gold text-navy border-gold'
                    : 'border-white/20 text-white/70 hover:border-gold/60 hover:text-white'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        <div className="relative aspect-square max-w-md mx-auto w-full">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Wireframe globe */}
            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(212,175,55,0.25)" strokeWidth="0.5" />
            {[15, 28].map((ry, i) => (
              <ellipse key={i} cx="50" cy="50" rx="42" ry={ry} fill="none" stroke="rgba(212,175,55,0.15)" strokeWidth="0.4" />
            ))}
            {[0, 45, 90, 135].map((rot) => (
              <ellipse
                key={rot}
                cx="50"
                cy="50"
                rx="42"
                ry="42"
                fill="none"
                stroke="rgba(212,175,55,0.1)"
                strokeWidth="0.3"
                transform={`rotate(${rot} 50 50) scale(0.35 1)`}
                style={{ transformOrigin: '50px 50px' }}
              />
            ))}

            {/* Animated arcs from India hub to each partner country */}
            {others.map((c, i) => (
              <motion.path
                key={c.name}
                d={`M ${hub.x} ${hub.y} Q ${(hub.x + c.x) / 2} ${Math.min(hub.y, c.y) - 12} ${c.x} ${c.y}`}
                fill="none"
                stroke={active === null || active === c.name ? '#D4AF37' : 'rgba(212,175,55,0.15)'}
                strokeWidth={active === c.name ? 0.9 : 0.5}
                strokeDasharray="2 2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: i * 0.15 }}
              />
            ))}

            {/* Hub node */}
            <circle cx={hub.x} cy={hub.y} r="2.2" fill="#D4AF37" />
            <circle cx={hub.x} cy={hub.y} r="4" fill="none" stroke="#D4AF37" strokeWidth="0.4">
              <animate attributeName="r" values="2.5;6;2.5" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" />
            </circle>

            {/* Partner nodes */}
            {others.map((c) => (
              <g key={c.name} onMouseEnter={() => setActive(c.name)} onMouseLeave={() => setActive(null)}>
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={active === c.name ? 2 : 1.4}
                  fill={active === c.name ? '#F1D98B' : '#F7F8FC'}
                  className="cursor-pointer transition-all"
                />
              </g>
            ))}
          </svg>

          {active && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 glass-dark text-white text-xs px-3 py-1.5 rounded-full font-medium">
              {active}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
