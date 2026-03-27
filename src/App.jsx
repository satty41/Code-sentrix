import { useEffect, useMemo, useState } from 'react';
import BottomNav from './components/BottomNav';
import ContactSection from './components/ContactSection';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';
import FaqSection from './components/FaqSection';
// import Hero from './components/Hero';
import MobileMenu from './components/MobileMenu';
import Navbar from './components/Navbar';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import StatsStrip from './components/StatsStrip';
import TestimonialsSection from './components/TestimonialsSection';
import TrustStrip from './components/TrustStrip';
import VisionSection from './components/VisionSection';
import WhySection from './components/WhySection';
import Hero2 from './components/Hero2';

function getScrollOffset() {
  return window.innerWidth <= 768 ? 64 : 80;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const sections = useMemo(
    () => ['contact', 'faq', 'testimonials', 'portfolio', 'why', 'cv', 'services'],
    [],
  );

  const navigateTo = (id) => {
    setMenuOpen(false);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    window.scrollTo({
      top: target.offsetTop - getScrollOffset(),
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setShowBackTop(window.scrollY > 400);

      const scrollY = window.scrollY + 130;
      let current = '';

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollY) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, [sections]);

  useEffect(() => {
    const nodes = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <FloatingActions
        showBackTop={showBackTop}
        onBackTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      <Navbar
        onNavigate={navigateTo}
        onOpenMenu={handleOpenMenu}
        menuOpen={menuOpen}
      />

      <MobileMenu
        open={menuOpen}
        onClose={handleCloseMenu}
        onNavigate={navigateTo}
      />

      <BottomNav
        activeSection={activeSection}
        onNavigate={navigateTo}
        onOpenMenu={handleOpenMenu}
      />

      <main>
      <Hero2 onNavigate={navigateTo} />
    {/* <Hero onNavigate={navigateTo} />// */}
        <StatsStrip />
        <TrustStrip />
        <ServicesSection onNavigate={navigateTo} />
        <VisionSection />
        <WhySection />
        <PortfolioSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
