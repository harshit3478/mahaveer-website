'use client'

import React, { useState } from 'react';
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
    const [viewAll, setViewAll] = useState(false);

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
                                className="flex-shrink-0 mx-4 w-28 h-20 relative"
                            >
                                <div className="w-full h-full relative flex items-center justify-center p-2">
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        fill
                                        className="object-contain"
                                        sizes="112px"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Desktop: marquee or grid */}
                <div className="hidden md:block w-full overflow-hidden">
                    {!viewAll ? (
                        <motion.div
                            className="flex items-center"
                            animate={{
                                x: ["0%", "-50%"],
                            }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 60,
                            }}
                        >
                            {duplicatedLogos.map((logo, index) => (
                                <div 
                                    key={`${logo.id}-${index}`} 
                                    className="flex-shrink-0 mx-6 sm:mx-8 w-36 h-24 sm:w-44 sm:h-28 relative group"
                                >
                                    <div className="w-full h-full relative transition-all duration-300 transform hover:scale-110 flex items-center justify-center p-3">
                                        <Image
                                            src={logo.src}
                                            alt={logo.name}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 640px) 144px, 176px"
                                        />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ) : (
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 py-8">
                            {logos.map((logo) => (
                                <div 
                                    key={logo.id} 
                                    className="w-full h-24 relative group flex items-center justify-center p-3 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="w-full h-full relative transform hover:scale-110 transition-all duration-300">
                                        <Image
                                            src={logo.src}
                                            alt={logo.name}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 640px) 96px, 128px"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    
                    {/* View All / Collapse Button */}
                    <div className="mt-6 flex justify-center">
                        <button
                            onClick={() => setViewAll(!viewAll)}
                            className="px-6 py-3 bg-[#67B33C] text-white rounded-full font-medium hover:bg-[#5a9e33] transition-colors duration-300 shadow-md hover:shadow-lg"
                        >
                            {viewAll ? 'Show Less' : 'View All Logos'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
