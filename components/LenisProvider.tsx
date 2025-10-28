'use client'

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    // Expose Lenis for hooks (read-only usage)
    ;(window as any).__LENIS__ = lenis;

    // Measure header height for dynamic anchor offset
    let headerHeight = 0;
    const measureHeader = () => {
      const header = document.querySelector('header');
      headerHeight = header ? (header as HTMLElement).offsetHeight : 0;
      document.documentElement.style.setProperty('--header-h', `${headerHeight}px`);
    };
    measureHeader();
    const resizeObserver = new ResizeObserver(measureHeader);
    const headerEl = document.querySelector('header');
    if (headerEl) resizeObserver.observe(headerEl as Element);
    window.addEventListener('resize', measureHeader);

    // Handle anchor link clicks for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            lenis.scrollTo(targetElement, {
              offset: -(headerHeight + 8),
              duration: 1.0,
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      ;(window as any).__LENIS__ = undefined;
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('resize', measureHeader);
      try { resizeObserver.disconnect(); } catch {}
    };
  }, []);

  return <>{children}</>;
}
