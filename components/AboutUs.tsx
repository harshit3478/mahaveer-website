'use client'

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { useCountAnimation } from '@/lib/hooks';

// Counter component with animation
const StatCounter = ({ end, label, icon }: { end: number; label: string; icon: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [hasStarted, setHasStarted] = useState(false);
    const { displayValue, startCount } = useCountAnimation(end, 2);

    useEffect(() => {
        if (isInView && !hasStarted) {
            setHasStarted(true);
            startCount();
        }
    }, [isInView, hasStarted, startCount]);

    const formatValue = (val: number) => {
        if (end >= 10000) return `${(val / 1000).toFixed(0)}k+`;
        if (end >= 1000) return `${(val / 1000).toFixed(0)}k+`;
        if (end >= 100) return `${val}+`;
        return `${val}+`;
    };

    return (
        <div ref={ref} className="flex flex-col items-center">
            <Image src={icon} alt={label} width={48} height={48} className="mb-3" />
            <p className="text-[40px] font-bold text-gray-900 leading-none">{formatValue(displayValue)}</p>
            <p className="text-gray-600 text-[14px] mt-2 text-center">{label}</p>
        </div>
    );
};

const AboutUs = () => {
    const stats = [
        { value: 20, label: 'Years of Experience', icon: '/aboutUs/icon1.svg' },
        { value: 25000, label: 'SKUs', icon: '/aboutUs/icon2.svg' },
        { value: 600, label: 'Employees', icon: '/aboutUs/icon3.svg' },
        { value: 10000, label: 'Happy Customers', icon: '/aboutUs/icon4.svg' },
    ];
    
    const images = [
        '/aboutUs/side-image1.avif',
        '/aboutUs/side-image2.webp',
        '/aboutUs/side-image3.avif',
        '/aboutUs/side-image4.avif',
        '/aboutUs/side-image5.avif',
    ];

    return (
        <motion.section 
            id="about" 
            className="py-20 px-6 mt-6 sm:px-10 lg:px-14 bg-white text-gray-900"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
        >
        <div>
        <motion.h2 variants={fadeInUp} className="text-5xl md:text-[80px]  font-medium mb-6 text-[#4CAF50] leading-[1.1]">About Us</motion.h2>
        </div>
            <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <div className="">
                    <motion.p variants={fadeInUp} className="text-gray-600 text-md  md:text-[20px] mb-4 leading-relaxed font-normal">
                        <span className="font-semibold text-gray-900">Mahaveer Medi-Sales Pvt. Ltd. (MMSPL)</span> has been a leading pharma distributor in Bengaluru for over two decades. With a robust network, we partner with <span className="font-semibold text-gray-900">280+</span> pharmaceutical companies and <span className="font-semibold text-gray-900">1500</span> divisions, serving <span className="font-semibold text-gray-900">10,000</span> chemists, hospitals, and government institutions daily.
                    </motion.p>
                    <motion.p variants={fadeInUp} className="text-gray-600 text-md  md:text-[20px] mb-12 leading-relaxed font-normal">
                        We take pride in being the <span className="font-semibold text-gray-900">first digitalized distributor</span> in the pharma industry, driving innovation and excellence in pharmaceutical trade.
                    </motion.p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <StatCounter
                                key={stat.label}
                                end={stat.value}
                                label={stat.label}
                                icon={stat.icon}
                            />
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[500px]">
                    <div className="col-span-1 row-span-2 rounded-xl overflow-hidden">
                        <Image src={images[0]} alt="About 1" width={300} height={600} className="w-full h-full object-cover" />
                    </div>
                    <div className="col-span-2 row-span-1 rounded-xl overflow-hidden">
                        <Image src={images[1]} alt="About 2" width={600} height={300} className="w-full h-full object-cover" />
                    </div>
                    <div className="col-span-1 row-span-1 rounded-xl overflow-hidden">
                        <Image src={images[2]} alt="About 3" width={300} height={300} className="w-full h-full object-cover" />
                    </div>
                    <div className="col-span-1 row-span-2 rounded-xl overflow-hidden">
                        <Image src={images[3]} alt="About 4" width={300} height={600} className="w-full h-full object-cover" />
                    </div>
                    <div className="col-span-1 row-span-1 rounded-xl overflow-hidden">
                        <Image src={images[4]} alt="About 5" width={300} height={300} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutUs;