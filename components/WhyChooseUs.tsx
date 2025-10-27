'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const WhyChooseUs = () => {
    const cards = [
        {
            title: "Our Fleet, Your Peace of Mind",
            description: "With 150+ dedicated delivery vehicles, we ensure medicines reach you quickly, safely, and on schedule.",
            image: "/whychooseus/card-image1.avif",
            features: [
                "Real Time Tracking",
                "Temperature-controlled Transport",
                "On-time delivery guarantee"
            ]
        },
        {
            title: "Connecting India's Health",
            description: "From metros to remote towns, our robust network connects pharmacies and hospitals across all of India",
            image: "/whychooseus/card-image2.avif",
            features: [
                "24×7 supply coverage through our hubs",
                "Extensive reach into rural and urban areas",
                "Seamless distribution backed by technology"
            ]
        },
        {
            title: "Certified Excellence",
            description: "We follow strict quality standards and hold industry certifications, guaranteeing genuine products every time",
            image: "/whychooseus/card-image3.avif",
            features: [
                "100% genuine products, guaranteed",
                "Strict quality & storage standards",
                "Verification by expert pharmacists"
            ]
        },
        {
            title: "Technology-Driven Logistics",
            description: "Real-time tracking and digital inventory management bring transparency and efficiency to every order.",
            image: "/whychooseus/card-image4.avif",
            features: [
                "Real-time GPS delivery tracking",
                "Simple one-click reordering",
                "Smart inventory management"
            ]
        },
        {
            title: "Wide Product Range",
            description: "From life-saving medicines to everyday healthcare essentials, we cover all major medical categories.",
            image: "/whychooseus/card-image5.avif",
            features: [
                "Branded, generic & OTC medicines",
                "Vaccines & critical care drugs",
                "Surgical supplies & medical devices"
            ]
        }
    ];

    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end start']
    });

    const x = useTransform(scrollYProgress, [0.1, 0.9], ['0%', `-${(cards.length - 1) * 50}%`]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-white text-gray-900">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="container mx-auto px-4 sm:px-10">
                    <motion.div 
                      style={{ opacity }}
                      className="text-center mb-12 max-w-3xl mx-auto"
                    >
                        <h2 className="text-[56px] font-bold mb-3 text-[#0EA5E9] leading-[1.1]">Why Choose Us?</h2>
                        <p className="text-gray-600 text-[16px]">
                            Because reliable healthcare needs a <span className="font-semibold text-gray-900">reliable partner</span>.
                        </p>
                    </motion.div>
                    
                    <motion.div style={{ x, width: `${cards.length * 70}%` }} className="flex gap-8">
                        {cards.map((card) => (
                            <div key={card.title} className="flex-shrink-0 " style={{ width: `${100 / cards.length}%` }}>
                                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-lg   hover:bg-red-300 border border-gray-100 text-left flex justify-center items-center flex-col md:flex-row gap-6  h-full mx-4">
                                    <div className="flex-shrink-0 w-1/2 bg-blue-50">
                                        <Image 
                                            src={card.image} 
                                            alt={card.title} 
                                            width={350}
                                            height={300}
                                            className=" object-contain"
                                        />
                                    </div>
                                    <div className="flex flex-col flex-1 bg-green-50">
                                        <h3 className="text-5xl f mb-3 text-gray-900 leading-tight">{card.title}</h3>
                                        <p className="text-gray-600 text-[15px] mb-5 leading-relaxed">{card.description}</p>
                                        
                                        <ul className="space-y-2.5 mb-6 flex-grow">
                                            {card.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-gray-700 text-[15px]">
                                                    <svg 
                                                        className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" 
                                                        fill="none" 
                                                        viewBox="0 0 24 24" 
                                                        stroke="currentColor"
                                                    >
                                                        <path 
                                                            strokeLinecap="round" 
                                                            strokeLinejoin="round" 
                                                            strokeWidth={2} 
                                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
                                                        />
                                                    </svg>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        <a href="#" className="inline-block bg-[#4CAF50] text-white font-medium py-2.5 px-6 rounded-full text-[15px] hover:bg-[#45a049] transition-colors self-start">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
