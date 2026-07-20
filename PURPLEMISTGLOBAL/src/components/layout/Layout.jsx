import { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  useEffect(() => {
    // Simple smooth scrolling
    const smoothScroll = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };
    smoothScroll();

    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};