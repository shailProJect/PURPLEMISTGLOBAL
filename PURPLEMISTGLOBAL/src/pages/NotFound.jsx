import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen navy-gradient flex items-center justify-center text-center px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="font-heading font-extrabold text-gold text-7xl md:text-9xl mb-4">404</p>
        <h1 className="font-heading font-bold text-white text-2xl md:text-3xl mb-4">Page Not Found</h1>
        <p className="text-white/60 max-w-md mx-auto mb-8">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <a href="/" className="btn-primary rounded-full px-8 py-3.5 inline-flex items-center gap-2">
          <FaHome /> Back to Home
        </a>
      </motion.div>
    </div>
  );
}
