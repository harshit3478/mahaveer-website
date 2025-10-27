'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const Header = () => {
  return (
    <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 z-50 py-3 px-6 sm:px-10 lg:px-14">
      <div className="flex justify-between items-center max-w-[1600px] mx-auto">
        <div className="flex items-center gap-2">
          <Image src="/mahaveer-logo.avif" alt="Mahaveer Medi Logo" width={40} height={40} className="rounded-md" />
          <span className="text-lg font-medium text-white">Mahaveer Medi</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6 font-satoshi">
          <a href="#about" className="text-white/90 hover:text-white transition-colors font-medium text-[18px]">About</a>
          <a href="#services" className="text-white/90 hover:text-white transition-colors font-medium text-[18px]">Services</a>
          <a href="#testimonials" className="text-white/90 hover:text-white transition-colors font-medium text-[18px]">Testimonials</a>
          <Button href="#get-a-quote" variant="secondary" className="text-[18px] bg-black">
            Get a Quote
          </Button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
