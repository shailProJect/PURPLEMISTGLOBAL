import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// Replace with your EmailJS credentials: https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    setStatus(null);
    try {
      if (EMAILJS_SERVICE_ID.startsWith('YOUR_')) {
        // EmailJS not yet configured — simulate success so the flow can be demoed.
        await new Promise((r) => setTimeout(r, 900));
      } else {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data, EMAILJS_PUBLIC_KEY);
      }
      setStatus('success');
      reset();
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-pad bg-offwhite">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow text-royal mb-4">Get In Touch</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">Contact Us</h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="card-premium p-7 flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl gold-gradient flex items-center justify-center text-navy shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-navy mb-1">Office Address</h4>
                <p className="text-ink/65 text-sm leading-relaxed">
                  Purplemist Global Private Limited, Maharashtra, India
                </p>
              </div>
            </div>
            <div className="card-premium p-7 flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl gold-gradient flex items-center justify-center text-navy shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-navy mb-1">Phone</h4>
                <p className="text-ink/65 text-sm">+91 9004271033 &middot; +91 8788981898</p>
              </div>
            </div>
            <div className="card-premium p-7 flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl gold-gradient flex items-center justify-center text-navy shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-navy mb-1">Email</h4>
                <p className="text-ink/65 text-sm">info@purplemistglobal.com</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-56 border border-navy/10 shadow-inner">
              <iframe
                title="Purplemist Global location"
                className="w-full h-full grayscale-[30%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Maharashtra%2C%20India&output=embed"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-3 card-premium p-8 md:p-10 space-y-5"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-navy mb-1.5 block">Name</label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="w-full rounded-xl border border-navy/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60"
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-navy mb-1.5 block">Email</label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                  })}
                  className="w-full rounded-xl border border-navy/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60"
                  placeholder="you@company.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-navy mb-1.5 block">Phone</label>
              <input
                {...register('phone', { required: 'Phone number is required' })}
                className="w-full rounded-xl border border-navy/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60"
                placeholder="+91 00000 00000"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-navy mb-1.5 block">Message</label>
              <textarea
                rows={5}
                {...register('message', { required: 'Please add a short message' })}
                className="w-full rounded-xl border border-navy/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60 resize-none"
                placeholder="Tell us what you're sourcing..."
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <button type="submit" disabled={isSubmitting} className="btn-primary rounded-full px-8 py-3.5 w-full sm:w-auto disabled:opacity-60">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-sm font-medium">Thank you — we'll be in touch shortly.</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
