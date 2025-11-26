'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp } from '@/lib/animations';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
    // Images from public/gallery
    const images = Array.from({ length: 11 }).map((_, i) => ({
        id: i + 1,
        src: `/gallery/${i + 1}.webp`,
        alt: `Mahaveer Medi team and facility - Pharmaceutical distribution in Bengaluru ${i + 1}`
    }));

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
                <motion.div 
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-fluid-h2 font-satoshi font-semibold text-[#67B33C] mb-4">Gallery</h2>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative w-full mx-auto">
                    {/* Main Image Display */}
                    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src={images[currentIndex].src}
                                alt={images[currentIndex].alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute -right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    index === currentIndex
                                        ? 'w-8 h-3 bg-[#67B33C]'
                                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
