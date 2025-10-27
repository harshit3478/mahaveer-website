'use client'

import React from 'react';
import { motion, Variants } from 'framer-motion';

const Clients = () => {
    const logos = ["LogoIpsum", "Client Co", "Pharma Inc", "Health Partner", "MediCorp", "Supply Solutions", "Well Group"];
    const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]; 
    
    const marqueeVariants: Variants = {
        animate: {
            x: "-50%",
            transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
            },
        },
    };

    return (
        <section className="py-20 bg-white text-gray-800 overflow-hidden">
            <div className="container mx-auto text-center">
                 <motion.h2 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-12"
                >
                    Our Clients
                </motion.h2>
                 <div className="w-full overflow-hidden">
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
