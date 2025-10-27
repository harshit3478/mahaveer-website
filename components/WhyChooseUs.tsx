'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { LuBookmarkCheck } from "react-icons/lu";
const WhyChooseUs = () => {
    const cards = [
        {
            title: "Our Fleet, Your Peace of Mind",
            description: "With <span class='font-semibold text-gray-900'>150+ dedicated delivery vehicles</span>, we ensure medicines reach you quickly, safely, and on schedule.",
            image: "/whychooseus/card-image1.avif",
            features: [
                "Real Time Tracking",
                "Temperature-controlled Transport",
                "On-time delivery guarantee"
            ]
        },
        {
            title: "Connecting India's Health",
            description: "From metros to remote towns, our robust network connects pharmacies and hospitals across <span class='font-semibold text-gray-900'>all of India</span>",
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
            description: "From life-saving medicines to everyday healthcare essentials, we cover <span class='font-semibold text-gray-900'>all major medical categories</span>.",
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
        <section id="why-choose-us" ref={targetRef} className="relative h-[300vh] bg-white text-gray-900">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="px-6 sm:px-10 lg:px-14 max-w-[1600px] mx-auto">
                    <motion.div 
                      style={{ opacity }}
                      className="text-center mb-12 max-w-3xl mx-auto"
                    >
                        <h2 className="text-[80px] font-medium mb-3 text-[#009ED6] leading-[1.1] font-satoshi ">Why Choose Us?</h2>
                        <p className="text-slate-500 text-[20px] font-normal font-inter ">
                            Because reliable healthcare needs a <span className="font-medium text-slate-800">reliable partner</span>.
                        </p>
                    </motion.div>
                    
                    <motion.div style={{ x, width: `${cards.length * 30}%` }} className="flex gap-8">
                        {cards.map((card) => (
                            <div key={card.title} className="flex-shrink-0 w-[850px]">
                                <div className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-500 border border-gray-100 text-left flex flex-col lg:flex-row gap-6 items-center h-full mx-4">
                                    <div className="flex-shrink-0 w-[300px] h-[260px]  rounded-xl">
                                        <div className="w-full h-full  rounded-lg flex items-center justify-center p-0">
                                            <Image 
                                                src={card.image} 
                                                alt={card.title} 
                                                width={350}
                                                height={350}
                                                className="object-cover overflow-visible w-full h-full rounded-lg"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-[50px] font-bricolage mb-3 text-gray-900 leading-tight">{card.title}</h3>
                                        <p 
                                            className="text-gray-600 text-[16px] font-inter mb-5 leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: card.description }}
                                        />
                                        
                                        <ul className="space-y-2.5 mb-6 flex-grow">
                                            {card.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-gray-900 font-normal text-[16px]">
                                                    <LuBookmarkCheck className="w-8 h-8 text-gray-900 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-900 font-satoshi font-medium">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Button href="#get-a-quote" variant="primary" className="text-[15px] rounded-full w-fit px-3 py-2 pr-2 ">
                                            Learn More
                                        </Button>
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
