import { useEffect, useState } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';
import ThemeToggle from './components/ThemeToggle';
import Loader from './components/Loader';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 60 });
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Purplemist Global Private Limited | International Import &amp; Procurement</title>
        <meta
          name="description"
          content="Purplemist Global Private Limited imports premium perfumery compound oils, cosmetics, pharmaceuticals, industrial hardware and software solutions from Hong Kong, Singapore and Asia."
        />
        <meta
          name="keywords"
          content="Purplemist Global, import export India, fragrance oil importer, procurement services, Hong Kong Singapore trading"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Purplemist Global Private Limited" />
        <meta
          property="og:description"
          content="Global importers and procurement specialists sourcing from Hong Kong, Singapore and Asia."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Purplemist Global Private Limited',
            description:
              'International trading company importing perfumery compound oils, cosmetics, pharmaceuticals, industrial hardware and software solutions from Hong Kong, Singapore and Asia.',
            areaServed: 'IN',
          })}
        </script>
      </Helmet>

      <Loader show={loading} />
      <BrowserRouter>
        <ScrollProgress />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <ThemeToggle />
        <BackToTop />
      </BrowserRouter>
    </HelmetProvider>
  );
}
