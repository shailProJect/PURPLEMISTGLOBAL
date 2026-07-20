import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SectionReveal } from '../components/sections/SectionReveal';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { LogIn } from 'lucide-react';
import { toast } from 'sonner';
import { SEO } from '../components/SEO';


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock authentication - will be replaced with real backend
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Check if admin login
      if (formData.email === 'admin@purplemist.global') {
        toast.success('Admin login successful!');
        navigate('/admin');
      } else {
        toast.success('Login successful! Welcome back.');
        // For now, show a success message
        // In full implementation, redirect to dashboard
      }
    }, 1000);
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
      <SEO title="Login" noindex path="/login" />
      <div className="max-w-[500px] w-full">
        <SectionReveal>
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 border border-white/20 flex items-center justify-center">
                <LogIn className="h-8 w-8 text-[#9d8fd9]" />
              </div>
            </motion.div>
            <h1
              className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Client Portal
            </h1>
            <p className="text-gray-400">
              Access your orders, enquiries, and account information
            </p>
          </div>

          {/* Login Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 border border-white/10 p-8 bg-gradient-to-br from-white/[0.02] to-transparent"
          >
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm tracking-wider text-gray-400 uppercase">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-transparent border-white/20 text-white focus:border-[#9d8fd9] transition-colors duration-300 rounded-none h-12"
                placeholder="your@email.com"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm tracking-wider text-gray-400 uppercase">
                  Password
                </Label>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-[#9d8fd9] transition-colors duration-300"
                >
                  Forgot password?
                </a>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="bg-transparent border-white/20 text-white focus:border-[#9d8fd9] transition-colors duration-300 rounded-none h-12"
                placeholder="••••••••"
              />
            </div>

            {/* Submit Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-white text-black hover:bg-[#9d8fd9] hover:text-white transition-all duration-300 rounded-none text-sm tracking-[0.1em]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"
                    />
                    LOGGING IN...
                  </span>
                ) : (
                  'LOGIN'
                )}
              </Button>
            </motion.div>

            {/* Info Text */}
            <p className="text-xs text-gray-500 text-center leading-relaxed pt-4">
              Don't have an account? Contact us at{' '}
              <a
                href="mailto:enquiry@purplemist.global"
                className="text-[#9d8fd9] hover:underline"
              >
                enquiry@purplemist.global
              </a>{' '}
              to set up your client portal.
            </p>
          </motion.form>

          {/* Demo Credentials */}
          <div className="mt-8 p-4 border border-white/10 bg-white/[0.02]">
            <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Demo Credentials:</p>
            <p className="text-sm text-gray-400">
              <strong className="text-white">Admin:</strong> admin@purplemist.global / any password
            </p>
            <p className="text-sm text-gray-400">
              <strong className="text-white">Client:</strong> any email / any password
            </p>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
};

export default Login;