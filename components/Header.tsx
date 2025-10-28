'use client'

import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Detect scroll to switch header theme
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <header 
          className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 lg:px-14 transition-colors duration-300 ${scrolled ? 'bg-white/85 backdrop-blur border-b border-black/5 shadow-sm' : 'bg-transparent'} py-3`}
      >
        <div className="flex justify-between items-center max-w-[1600px] mx-auto">
          <div className="flex items-center gap-2">
            <Image src="/mahaveer-logo.avif" alt="Mahaveer Medi Logo" width={40} height={40} className="rounded-md" priority />
            <span className={`text-lg font-medium transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>Mahaveer Medi</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 font-satoshi">
            <a href="#about" className={`${scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'} transition-colors font-medium text-[18px]`}>About</a>
            <a href="#services" className={`${scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'} transition-colors font-medium text-[18px]`}>Services</a>
            <a href="#testimonials" className={`${scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'} transition-colors font-medium text-[18px]`}>Testimonials</a>
            <Button href="#get-a-quote" variant="secondary" className="text-[18px] bg-black">
              Get a Quote
            </Button>
          </nav>
          {/* Mobile burger */}
          <button
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 bg-gray-900 text-white hover:bg-gray-800 shadow-lg transition-colors"
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer - rendered outside header to avoid transparency inheritance */}
      {open && (
        <div className="md:hidden">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
          {/* Panel */}
          <motion.nav
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="fixed right-0 top-0 bottom-0 z-[100] w-[78%] max-w-[360px] bg-white text-gray-900 shadow-2xl p-6 flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'tween', duration: 0.25 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Image src="/mahaveer-logo.avif" alt="Mahaveer Medi Logo" width={36} height={36} className="rounded-md" />
                <span className="text-base font-medium">Mahaveer Medi</span>
              </div>
              <button
                aria-label="Close menu"
                onClick={close}
                className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col gap-4 text-[17px] font-satoshi">
              <a onClick={close} href="#about" className="py-2 px-1 rounded-md hover:bg-gray-50">About</a>
              <a onClick={close} href="#services" className="py-2 px-1 rounded-md hover:bg-gray-50">Services</a>
              <a onClick={close} href="#testimonials" className="py-2 px-1 rounded-md hover:bg-gray-50">Testimonials</a>
            </div>
            <div className="pt-4">
              <Button href="#get-a-quote" variant="secondary" className="w-full justify-center text-[16px]">
                Get a Quote
              </Button>
            </div>
          </motion.nav>
        </div>
      )}
    </>
  );
};

export default Header;
