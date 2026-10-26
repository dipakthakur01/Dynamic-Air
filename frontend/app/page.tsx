'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Header,
  Footer,
  HeroSection,
  ExpertiseStrip,
  IntroSection,
  SolutionsSection,
  ServicesSection,
  MarqueeSection,
  AboutSection,
  ProcessSection,
  FaqSection,
  ContactSection,
  ProductModal,
  EnquiryModal,
  MobileBottomNav,
} from '@/components';
import { business, products, services, faqs } from '@/lib/site-content';
import type { Category, Product, HeroSlide } from '@/types';

const slides: HeroSlide[] = [
  {
    overline: 'AUTHORIZED CLIMIX DISTRIBUTOR & PARTNER',
    line1: 'Clean air.',
    line2: 'Total comfort.',
    description:
      'High-velocity Climix Q Series cross-flow air curtains, inverter split air conditioning, and complete HVAC engineering across Kathmandu & Nepal.',
    image: '/images/hero-slide-1.jpg',
    alt: 'Climix Q Series Air Curtain cross-flow barrier in modern setting',
    caption: 'CLIMIX Q SERIES CROSS FLOW AIR CURTAINS',
    tag: 'Up to 3-meter thermal & dust barrier.',
    mini: 'HOSPITALS · HOTELS · RESTAURANTS · FACTORIES',
  },
  {
    overline: 'COMMERCIAL AIRFLOW & HYGIENE BARRIERS',
    line1: 'Save energy.',
    line2: 'Block dust & flies.',
    description:
      'Keep conditioned cool air inside and prevent outdoor heat, exhaust, and insects from entering high-traffic doorways. Cuts AC electricity consumption up to 40%.',
    image: '/images/hero-slide-2.jpg',
    alt: 'Air curtain applications in hospitals, cold storage, supermarkets and hotels',
    caption: 'PROVEN PERFORMANCE ACROSS HIGH-TRAFFIC VENUES',
    tag: 'Heavy-duty copper motor, 8,000 hrs rating.',
    mini: 'DUSTPROOF · THERMAL INSULATION · INSECT BARRIER',
  },
  {
    overline: 'COMPLETE HVAC & COLD ROOM SOLUTIONS',
    line1: 'Engineered cooling.',
    line2: 'Total reliability.',
    description:
      'Residential inverter split ACs, 100% Inverter commercial VRF systems, modular cold rooms, and certified HVAC engineering across Nepal.',
    image: '/images/hero-slide-3-hvac.jpg',
    alt: 'Certified technician performing HVAC inspection and servicing',
    caption: 'EXPERIENCED HVAC & COLD STORAGE SPECIALISTS IN NEPAL',
    tag: 'Here for the long run.',
    mini: 'RESIDENTIAL · VRF COMMERCIAL · COLD ROOMS · AMC',
  },
];

const categories: Category[] = [
  'All solutions',
  'Climix Air Curtains',
  'Residential Air Conditioning',
  'Commercial Air Conditioning',
  'Cold Room Solutions',
  'Air Purifiers',
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState<Category>('All solutions');
  const [serviceOpen, setServiceOpen] = useState<number | null>(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [product, setProduct] = useState<Product | null>(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [interest, setInterest] = useState('Climix Q Series Air Curtain');
  const [draft, setDraft] = useState('');
  const [notice, setNotice] = useState('');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [installPrompt, setInstallPrompt] = useState<any>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const productRef = useRef<HTMLDialogElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Sync initial theme
    const active =
      (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') ||
      'light';
    setTheme(active);

    // Listen for PWA install event
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // PWA Service Worker: only register in production on live domains
    // On localhost / development, proactively unregister and clear stale caches to ensure seamless HMR without hydration mismatches
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const isLocalhost =
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1' ||
        window.location.hostname.endsWith('.local');

      if (process.env.NODE_ENV !== 'production' || isLocalhost) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (const registration of registrations) {
            registration.unregister();
          }
        });
        if ('caches' in window) {
          caches.keys().then((keys) => {
            for (const key of keys) {
              caches.delete(key);
            }
          });
        }
      } else {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js').catch((err) => {
            console.warn('[PWA] SW register warning:', err);
          });
        });
      }
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('dynamic_air_theme', next);
      return next;
    });
  }, []);

  const handleInstallApp = useCallback(async () => {
    if (installPrompt) {
      installPrompt.prompt();
      const choice = await installPrompt.userChoice;
      if (choice?.outcome === 'accepted') {
        setInstallPrompt(null);
      }
    } else {
      alert(
        'To install the Dynamic Air app:\n\n• On Android/Chrome: Tap Chrome menu (⋮) -> "Add to Home screen" or "Install App".\n• On iPhone/Safari: Tap Share (⎋) -> "Add to Home Screen".\n• On Desktop Chrome/Edge: Click the install icon in your address bar.'
      );
    }
  }, [installPrompt]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    document.documentElement.classList.add('js-motion');

    const scroll = () => {
      setScrolled(window.scrollY > 24);
      document.documentElement.style.setProperty(
        '--page-progress',
        `${
          (window.scrollY /
            Math.max(1, document.documentElement.scrollHeight - window.innerHeight)) *
          100
        }%`
      );
    };

    window.addEventListener('scroll', scroll, { passive: true });
    scroll();

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));

    return () => {
      mq.removeEventListener('change', update);
      window.removeEventListener('scroll', scroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (menuOpen || enquiryOpen || product) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setSlide((value) => (value + 1) % slides.length);
    }, 10000);
    return () => window.clearInterval(timer);
  }, [menuOpen, enquiryOpen, product]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (enquiryOpen && dialog && !dialog.open) {
      try {
        dialog.showModal();
      } catch (err) {
        console.warn('[EnquiryModal] showModal error:', err);
      }
    }
    if (!enquiryOpen && dialog?.open) {
      try {
        dialog.close();
      } catch (err) {
        console.warn('[EnquiryModal] close error:', err);
      }
    }
    document.body.style.overflow =
      enquiryOpen || product || menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [enquiryOpen, product, menuOpen]);

  useEffect(() => {
    const el = productRef.current;
    if (product && el && !el.open) {
      try {
        el.showModal();
      } catch (err) {
        console.warn('[ProductModal] showModal error:', err);
      }
    }
    if (!product && el?.open) {
      try {
        el.close();
      } catch (err) {
        console.warn('[ProductModal] close error:', err);
      }
    }
  }, [product]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  const openEnquiry = useCallback((topic?: string | unknown) => {
    lastFocus.current = document.activeElement as HTMLElement;
    setProduct(null);
    const validTopic =
      typeof topic === 'string' && topic.trim().length > 0
        ? topic.trim()
        : 'Climix Q Series Air Curtain';
    setInterest(validTopic);
    setDraft('');
    setNotice('');
    setMenuOpen(false);
    setEnquiryOpen(true);
  }, []);

  // Listen for direct URL hash or query triggers e.g. /#enquire or /?enquire=true
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const checkEnquiryTrigger = () => {
      const hash = window.location.hash.toLowerCase();
      const params = new URLSearchParams(window.location.search);
      if (
        hash === '#enquire' ||
        hash === '#enquiry' ||
        params.get('enquire') === 'true' ||
        params.get('enquiry') === 'true'
      ) {
        openEnquiry();
      }
    };
    checkEnquiryTrigger();
    window.addEventListener('hashchange', checkEnquiryTrigger);
    return () => window.removeEventListener('hashchange', checkEnquiryTrigger);
  }, [openEnquiry]);

  const closeEnquiry = useCallback(() => {
    setEnquiryOpen(false);
    window.setTimeout(() => lastFocus.current?.focus(), 0);
  }, []);

  const changeSlide = (index: number) => {
    setSlide((index + slides.length) % slides.length);
  };

  const visibleProducts = products.filter(
    (item) => category === 'All solutions' || item.category === category
  );

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="reading-progress" aria-hidden="true" />

      <Header
        business={business}
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenEnquiry={openEnquiry}
        installPrompt={installPrompt}
        onInstallApp={handleInstallApp}
      />

      <main id="main" className="home-page">
        <HeroSection
          slides={slides}
          slide={slide}
          onChangeSlide={changeSlide}
        />

        <ExpertiseStrip />

        <IntroSection />

        <SolutionsSection
          categories={categories}
          currentCategory={category}
          onSelectCategory={setCategory}
          products={visibleProducts}
          onSelectProduct={setProduct}
          onOpenEnquiry={openEnquiry}
        />

        <ServicesSection
          services={services}
          serviceOpen={serviceOpen}
          setServiceOpen={setServiceOpen}
          onOpenEnquiry={openEnquiry}
        />

        <MarqueeSection />

        <AboutSection onOpenEnquiry={openEnquiry} />

        <ProcessSection />

        <FaqSection
          faqs={faqs}
          faqOpen={faqOpen}
          setFaqOpen={setFaqOpen}
          onOpenEnquiry={openEnquiry}
        />

        <ContactSection business={business} onOpenEnquiry={() => openEnquiry()} />
      </main>

      <Footer business={business} onOpenEnquiry={() => openEnquiry()} />

      <MobileBottomNav
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((prev) => !prev)}
        onOpenEnquiry={() => openEnquiry()}
      />

      <ProductModal
        product={product}
        onClose={() => setProduct(null)}
        onOpenEnquiry={openEnquiry}
        dialogRef={productRef}
      />

      <EnquiryModal
        dialogRef={dialogRef}
        onClose={closeEnquiry}
        interest={interest}
        setInterest={setInterest}
        draft={draft}
        setDraft={setDraft}
        notice={notice}
        setNotice={setNotice}
        business={business}
      />
    </>
  );
}
