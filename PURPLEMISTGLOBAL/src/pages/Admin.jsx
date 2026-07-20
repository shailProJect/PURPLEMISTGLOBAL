import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionReveal } from '../components/sections/SectionReveal';
import { Button } from '../components/ui/button';
import { Mail, Phone, Building, Calendar, MessageSquare, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';


const Admin = () => {
  const navigate = useNavigate();
  
  // Mock enquiries data - will be fetched from backend
  const [enquiries] = useState([
    {
      id: 1,
      fullName: 'Rajesh Kumar',
      email: 'rajesh@luxeperfumes.ae',
      phone: '+971 50 123 4567',
      company: 'Luxe Perfumes LLC',
      subject: 'Bulk enquiry — Oud & Rose compound',
      message: 'Looking to import 500kg of premium Oud & Rose compound for our new product line. Need quotation and delivery timeline to Dubai.',
      date: '2024-01-15T10:30:00',
      status: 'new'
    },
    {
      id: 2,
      fullName: 'Sarah Thompson',
      email: 'sarah@glowinnovations.com',
      company: 'Glow Innovations',
      subject: 'Retinol Serum Base inquiry',
      message: 'Interested in pharmaceutical-grade retinol base for our new anti-aging line. What certifications do you provide?',
      date: '2024-01-14T14:20:00',
      status: 'replied'
    },
    {
      id: 3,
      fullName: 'Amit Patel',
      email: 'amit@mumbaicosmetics.in',
      phone: '+91 98765 43210',
      company: 'Mumbai Cosmetics Pvt Ltd',
      subject: 'Partnership opportunity',
      message: 'We are a leading FMCG distributor in Western India. Would like to discuss exclusive partnership for cosmetic actives.',
      date: '2024-01-13T09:15:00',
      status: 'new'
    }
  ]);

  const handleLogout = () => {
    navigate('/login');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new':
        return 'bg-[#9d8fd9]/20 border-[#9d8fd9]/30 text-[#9d8fd9]';
      case 'replied':
        return 'bg-green-500/20 border-green-500/30 text-green-400';
      default:
        return 'bg-gray-500/20 border-gray-500/30 text-gray-400';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-32 pb-24">
      <SEO title="Admin" noindex path="/admin" />
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Header */}
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4">
                ADMIN DASHBOARD
              </p>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Enquiry Management
              </h1>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-none h-10 px-6 text-xs tracking-[0.1em] mt-6 md:mt-0"
            >
              <LogOut className="mr-2 h-4 w-4" />
              LOGOUT
            </Button>
          </div>
        </SectionReveal>

        {/* Stats */}
        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="border border-white/10 p-6 bg-gradient-to-br from-white/[0.02] to-transparent">
              <div className="text-3xl font-light text-white mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {enquiries.length}
              </div>
              <div className="text-xs tracking-[0.15em] text-gray-500 uppercase">
                Total Enquiries
              </div>
            </div>
            <div className="border border-white/10 p-6 bg-gradient-to-br from-white/[0.02] to-transparent">
              <div className="text-3xl font-light text-[#9d8fd9] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {enquiries.filter(e => e.status === 'new').length}
              </div>
              <div className="text-xs tracking-[0.15em] text-gray-500 uppercase">
                New / Pending
              </div>
            </div>
            <div className="border border-white/10 p-6 bg-gradient-to-br from-white/[0.02] to-transparent">
              <div className="text-3xl font-light text-green-400 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {enquiries.filter(e => e.status === 'replied').length}
              </div>
              <div className="text-xs tracking-[0.15em] text-gray-500 uppercase">
                Replied
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Enquiries List */}
        <div className="space-y-6">
          {enquiries.map((enquiry, index) => (
            <SectionReveal key={enquiry.id}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="border border-white/10 p-6 lg:p-8 bg-gradient-to-br from-white/[0.02] to-transparent hover:border-[#9d8fd9]/30 transition-colors duration-500"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-light text-white">
                        {enquiry.fullName}
                      </h3>
                      <span
                        className={`inline-block px-3 py-1 text-xs tracking-wider uppercase ${
                          getStatusColor(enquiry.status)
                        } border`}
                      >
                        {enquiry.status}
                      </span>
                    </div>
                    <p className="text-lg text-gray-400 mb-4">{enquiry.subject}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="h-4 w-4" />
                    {formatDate(enquiry.date)}
                  </div>
                </div>

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <a
                      href={`mailto:${enquiry.email}`}
                      className="hover:text-[#9d8fd9] transition-colors duration-300"
                    >
                      {enquiry.email}
                    </a>
                  </div>
                  {enquiry.phone && (
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <a
                        href={`tel:${enquiry.phone}`}
                        className="hover:text-[#9d8fd9] transition-colors duration-300"
                      >
                        {enquiry.phone}
                      </a>
                    </div>
                  )}
                  {enquiry.company && (
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Building className="h-4 w-4 text-gray-500" />
                      {enquiry.company}
                    </div>
                  )}
                </div>

                {/* Message */}
                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-start gap-2 mb-3">
                    <MessageSquare className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                    <p className="text-xs tracking-wider text-gray-500 uppercase">Message</p>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {enquiry.message}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-6 pt-6 border-t border-white/10">
                  <Button
                    className="bg-[#9d8fd9] text-white hover:bg-[#8b7fce] transition-all duration-300 rounded-none h-10 px-6 text-xs tracking-[0.1em]"
                  >
                    REPLY
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-none h-10 px-6 text-xs tracking-[0.1em]"
                  >
                    MARK AS REPLIED
                  </Button>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;