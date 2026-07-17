import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] navy-gradient flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
              className="w-14 h-14 rounded-full border-2 border-gold/30 border-t-gold mx-auto mb-6"
            />
            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="font-heading font-semibold tracking-[0.3em] text-white/80 text-sm"
            >
              PURPLEMIST GLOBAL
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
