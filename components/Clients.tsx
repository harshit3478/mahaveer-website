'use client'

import React from 'react';
import { motion, Variants, useReducedMotion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

const Clients = () => {
    const logos = ["LogoIpsum", "Client Co", "Pharma Inc", "Health Partner", "MediCorp", "Supply Solutions", "Well Group"];
    const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]; 
    
    const prefersReduced = useReducedMotion();
    const marqueeVariants: Variants = {
        animate: prefersReduced
            ? {}
            : {
                x: "-50%",
                transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 50,
                    ease: "linear",
                },
            },
    };

    return (
        <section className="py-0 bg-white text-gray-800 overflow-hidden">
            <div className="max-w-[1600px] mx-auto text-center px-6 sm:px-10 lg:px-14">
                <motion.h2 variants={fadeInUp} className="text-fluid-h2 font-satoshi font-medium mb-6 text-[#67B33C]">Our Clients</motion.h2>

                {/* Mobile: static grid */}
                <div className="block md:hidden pb-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center">
                        {logos.map((logo, index) => (
                            <div key={index} className="w-32 h-16 flex items-center justify-center">
                                <p className="text-xl font-bold text-gray-400 text-center">{logo}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop: marquee */}
                <div className="hidden md:block w-full overflow-hidden">
                    <motion.div
                        className="flex whitespace-nowrap"
                        variants={marqueeVariants}
                        animate="animate"
                    >
                        {duplicatedLogos.map((logo, index) => (
                            <div key={index} className="flex-shrink-0 w-64 flex items-center justify-center mx-4">
                                <p className="text-3xl font-bold text-gray-400">{logo}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
