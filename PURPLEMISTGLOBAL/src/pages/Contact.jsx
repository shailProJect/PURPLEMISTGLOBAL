import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionReveal } from '../components/sections/SectionReveal';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';
import { SEO } from '../components/SEO';


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Real API call to backend
      const response = await axios.post(`${API}/enquiries`, formData);
      
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success('Enquiry sent successfully! We\'ll respond within 24 hours.');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      console.error('Error submitting enquiry:', error);
      toast.error('Failed to send enquiry. Please try again or email us directly.');
    }
  };

  return (
    <div className="bg-[#0a0a0a] pt-32 pb-24">
      <SEO
      title="Contact"
      description="Get in touch with Purplemist Global for bulk enquiries, sourcing requests and partnership opportunities. Our team responds within 24 business hours."
      path="/contact"
    />
      {/* Hero Section */}
      <section className="px-6 mb-24">
        <div className="max-w-[1440px] mx-auto">
          <SectionReveal>
            <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">
              CONTACT · GET IN TOUCH
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-12 max-w-[900px]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Tell us what you need
              <br />
              <span className="italic text-[#9d8fd9]">to import.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-[800px] leading-relaxed">
              One of our directors will personally review your enquiry and respond within <strong className="text-white">24 business hours</strong>. No bots, no automated replies—just real conversations.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6">
        <div className="max-w-[900px] mx-auto">
          <SectionReveal>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-8 border border-white/10 p-8 lg:p-12 bg-gradient-to-br from-white/[0.02] to-transparent"
            >
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm tracking-wider text-gray-400 uppercase">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-white/20 text-white focus:border-[#9d8fd9] transition-colors duration-300 rounded-none h-12"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm tracking-wider text-gray-400 uppercase">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-white/20 text-white focus:border-[#9d8fd9] transition-colors duration-300 rounded-none h-12"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm tracking-wider text-gray-400 uppercase">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-transparent border-white/20 text-white focus:border-[#9d8fd9] transition-colors duration-300 rounded-none h-12"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm tracking-wider text-gray-400 uppercase">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-transparent border-white/20 text-white focus:border-[#9d8fd9] transition-colors duration-300 rounded-none h-12"
                    placeholder="Your Company Ltd."
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm tracking-wider text-gray-400 uppercase">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-transparent border-white/20 text-white focus:border-[#9d8fd9] transition-colors duration-300 rounded-none h-12"
                  placeholder="e.g., Bulk enquiry — Oud & Rose compound"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm tracking-wider text-gray-400 uppercase">
                  Your Requirements *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-transparent border-white/20 text-white focus:border-[#9d8fd9] transition-colors duration-300 rounded-none resize-none"
                  placeholder="Please share details: product specifications, quantities, target delivery dates, budget range, or any other relevant information..."
                />
              </div>

              {/* Privacy Notice */}
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="text-gray-400">Privacy Notice:</span> Your data is used only to respond to this enquiry. We never share information with third parties or use it for marketing without consent.
              </p>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`w-full h-14 text-sm tracking-[0.1em] transition-all duration-300 rounded-none ${
                    isSuccess
                      ? 'bg-green-600 hover:bg-green-600'
                      : 'bg-white text-black hover:bg-[#9d8fd9] hover:text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"
                      />
                      SENDING...
                    </span>
                  ) : isSuccess ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      SENT SUCCESSFULLY
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      SEND ENQUIRY
                      <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </motion.div>
            </motion.form>
          </SectionReveal>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="px-6 mt-24">
        <div className="max-w-[900px] mx-auto">
          <SectionReveal>
            <div className="border-t border-white/10 pt-12">
              <p className="text-sm text-gray-500 text-center mb-8">
                Prefer another method? Reach us directly:
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
                <div>
                  <p className="text-xs tracking-wider text-gray-500 uppercase mb-2">Email</p>
                  <a
                    href="mailto:enquiry@purplemist.global"
                    className="text-white hover:text-[#9d8fd9] transition-colors duration-300"
                  >
                    enquiry@purplemist.global
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-wider text-gray-500 uppercase mb-2">Location</p>
                  <p className="text-white">Mumbai, Maharashtra, India</p>
                </div>
                <div>
                  <p className="text-xs tracking-wider text-gray-500 uppercase mb-2">Response Time</p>
                  <p className="text-white">Within 24 business hours</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;