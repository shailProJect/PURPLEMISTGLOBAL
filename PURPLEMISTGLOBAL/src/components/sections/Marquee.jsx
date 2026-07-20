import { motion } from 'framer-motion';

export const Marquee = ({ text, speed = 50 }) => {
  const repeatedText = Array(20).fill(text).join('');

  return (
    <div className="relative overflow-hidden py-8 border-y border-white/5">
      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear'
          }
        }}
        className="flex whitespace-nowrap"
      >
        <span className="text-6xl lg:text-8xl font-light tracking-tight text-white/5">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
};