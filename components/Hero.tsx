'use client'

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import { staggerContainer, wordReveal, slideUpFromBottom, slideFromLeft, slideFromRight } from '@/lib/animations';
import MotionInView from '@/components/MotionInView';
import { slideY, slideYUp, textRevealWords } from '@/lib/animPresets';
import { useCountAnimation } from '@/lib/hooks';
import Button from '@/components/ui/Button';

// Star Icon Component
const StarIcon = ({ className }: { className?: string }) => (
  <svg className={`w-5 h-5 ${className}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);

const Hero = () => {
  // Split text into words for word-by-word animation
  const headlineWords = "We are India's Leading".split(' ');
  const titleWords = "Medicine Supplier".split(' ');
  
  return (
    <section className="relative h-[88vh] flex items-end justify-start text-white overflow-hidden  ">
        <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="metadata"
            poster="/aboutUs/side-image4.avif"
            className="absolute z-0 object-cover h-full w-full bg-red-500"
        >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10 "></div>
        <motion.div 
            className="z-20 px-6 py-20 sm:px-10 lg:px-14 max-w-3xl"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
        >
                        {/* Word-by-word reveal for headline with re-trigger */}
                        <MotionInView variantsDown={slideY(24)} variantsUp={slideYUp(24)} once={false} amount={0.4} className="mb-1">
                            <motion.p className="text-fluid-h2 text-white/90 font-normal tracking-normal" variants={textRevealWords().container}>
                                {headlineWords.map((word, index) => (
                                    <motion.span key={index} variants={textRevealWords().item} className="inline-block mr-3">{word}</motion.span>
                                ))}
                            </motion.p>
                        </MotionInView>
            
                        {/* Word-by-word reveal for main title with re-trigger */}
                        <MotionInView variantsDown={slideY(28)} variantsUp={slideYUp(28)} once={false} amount={0.35}>
                            <motion.h1 className="text-fluid-h1 font-bold mb-5 leading-[1.1] tracking-tight" variants={textRevealWords().container}>
                                {titleWords.map((word, index) => (
                                    <motion.span key={index} variants={textRevealWords().item} className="inline-block mr-4">{word}</motion.span>
                                ))}
                            </motion.h1>
                        </MotionInView>
            
            {/* Slide up from bottom */}
                        <MotionInView variantsDown={slideY(20)} variantsUp={slideYUp(20)} once={false}>
                            <motion.p className="text-fluid-lead max-w-lg text-white/90 mb-8 leading-relaxed font-normal">
                                With over 20 years of experience, we have built a reputation for being the leading wholesale medicine supplier in India
                            </motion.p>
                        </MotionInView>
            
            <MotionInView variantsDown={slideY(24)} variantsUp={slideYUp(24)} once={false} className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                {/* Button slides from left */}
                <motion.div variants={slideFromLeft}>
                    <Button href="#get-a-quote" variant="accent">
                        Partner With Us
                    </Button>
                </motion.div>
                
                {/* Reviews slide from right */}
                <motion.div variants={slideFromRight} className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                        <Image src="/review1.avif" alt="Reviewer 1" width={40} height={40} className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"/>
                        <Image src="/review2.avif" alt="Reviewer 2" width={40} height={40} className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"/>
                        <Image src="/review3.avif" alt="Reviewer 3" width={40} height={40} className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"/>
                    </div>
                    <div className="text-left">
                        <div className="flex text-yellow-400 mb-0.5">
                            <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                        </div>
                        <p className="text-[13px] text-white/90 font-medium">From 2000+ ratings</p>
                    </div>
                </motion.div>
            </MotionInView>
        </motion.div>
    </section>
  );
};

export default Hero;
