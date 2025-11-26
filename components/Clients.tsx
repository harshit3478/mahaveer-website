'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp } from '@/lib/animations';

const Clients = () => {
    const logoFiles = [
        "Allergan_Logo.png", "Boehringer_Ingelheim.png", "GLAXO SMITHKLINE PHARMACEUTICAL.png",
        "GLENMARK PHARMACEUTICALS LTD.png", "Hindustan_Unilever_Logo.png", "Mankind_Serving_Life.png",
        "abbott.png", "ajanta-pharma.png", "alembic.png", "alkem.png", "anthem.png",
        "aristo-laboratories .webp", "ascensia_logo.webp", "astrazeneca.png", "aventis.png",
        "bharat-serums.png", "biocon.png", "british_biologicals.webp", "cipla.png",
        "eil-lilly.jpg", "emcure.png", "eris.png", "fdc-limited.svg", "ferring-pharma.png",
        "fourrts.jpeg", "franco.png", "galderma.png", "handh.png", "hetero.jpg",
        "himalaya.png", "indoco.jpg", "intas.png", "ipca.png", "jb.png",
        "johnson-and-johnson.png", "larenon.png", "lifescan.png", "lupin.png",
        "macledos.jpeg", "mamaearth.png", "meyer.jpg", "micro labs.jpg",
        "msd.svg", "mylan.svg", "natco.png", "nivya.png", "novartis.webp",
        "novo-nordisk.png", "nutricia.png", "pandg.png", "pfizer.webp", "ranbaxy.png",
        "roche.png", "serdia.webp", "sun-pharma.png", "systopic.png", "torrent.png",
        "usv.png", "vini.png"
    ];

    const logos = logoFiles.map((file, i) => ({
        id: i,
        name: file.split('.')[0].replace(/_/g, ' '),
        src: `/partners/${file}`,
    }));

    // Duplicate logos to ensure seamless loop
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className="py-0 mt-10 bg-white text-gray-800 overflow-hidden">
            <div className="max-w-[1600px] mx-auto text-center px-6 sm:px-10 lg:px-14">
                <motion.h2 variants={fadeInUp} className="text-fluid-h2 font-satoshi font-medium mb-6 text-[#67B33C]">Our Clients</motion.h2>

                {/* Mobile: marquee */}
                <div className="block md:hidden w-full overflow-hidden pb-8">
                    <motion.div
                        className="flex items-center"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40,
                        }}
                    >
                        {duplicatedLogos.map((logo, index) => (
                            <div 
                                key={`${logo.id}-${index}-mobile`} 
                                className="flex-shrink-0 mx-4 w-24 h-16 relative"
                            >
                                <div className="w-full h-full relative grayscale opacity-70">
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        fill
                                        className="object-contain"
                                        sizes="96px"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Desktop: marquee */}
                <div className="hidden md:block w-full overflow-hidden">
                    <motion.div
                        className="flex items-center"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 60, // Slower duration for many logos
                        }}
                    >
                        {duplicatedLogos.map((logo, index) => (
                            <div 
                                key={`${logo.id}-${index}`} 
                                className="flex-shrink-0 mx-6 sm:mx-8 w-32 h-20 sm:w-40 sm:h-24 relative group"
                            >
                                <div className="w-full h-full relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 transform hover:scale-110">
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 640px) 128px, 160px"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
