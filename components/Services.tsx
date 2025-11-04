'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import MotionInView from '@/components/MotionInView';
import { slideY, slideYUp } from '@/lib/animPresets';
import { SealCheck, House, Package, Cpu, Truck, ThumbsUp, ArrowRight } from '@phosphor-icons/react';

const ServiceIcons: { [key: string]: any } = {
    FulfillmentRate: SealCheck,
    CustomerSupport: House,
    Transparency: Package,
    Seamlessness: Cpu,
    FastestDelivery: Truck,
    OnePlatform: ThumbsUp,
};

const ServiceCard = ({ service }: { service: { name: string; description: string } }) => {
    const [isHovered, setIsHovered] = useState(false);
    const iconKey = service.name.replace(/\s/g, '');
    const IconComponent = ServiceIcons[iconKey];

    return (
        <motion.div 
            variants={fadeInUp}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="bg-white border border-gray-100 p-8 rounded-2xl text-left transition-all duration-300 shadow-lg"
        >
            {/* Icon Container - No circle background */}
            <div className="mb-6 relative w-12 h-12">
                <AnimatePresence mode="wait">
                    {!isHovered ? (
                        <motion.div
                            key="icon"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.1, ease: "easeInOut" }}
                            className="text-[#67B33C] absolute"
                        >
                            <IconComponent size={48} weight="regular" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="arrow"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.1, ease: "anticipate" }}
                            className="text-gray-900 absolute"
                        >
                            <ArrowRight size={48} weight="regular" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.name}</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">{service.description}</p>
        </motion.div>
    );
};

const Services = () => {
    const services = [
        { name: "Fulfillment Rate", description: "We aim to constantly fulfill all orders of our customers with our fill rate being 98%." },
        { name: "Customer Support", description: "Developing a relationship with our customers is what we strive at." },
        { name: "Transparency", description: "We believe in complete transparency across all processes for our customers." },
        { name: "Seamlessness", description: "Experience effortless procurement. Our digital approach makes orders and payments seamless and hassle-free." },
        { name: "Fastest Delivery", description: "We utilize a variety of delivery methods to streamline the process, ensuring we reach our customers as quickly as possible." },
        { name: "One Platform", description: "Our app allows you to easily place orders, check their status, and complete transactions all in one place." },
    ];
    return (
        <motion.section 
            id="services" 
            className="py-20 px-6 sm:px-10 lg:px-14 bg-white text-gray-900"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
        >
            <div className="max-w-[1600px] mx-auto text-center">
                <MotionInView variantsDown={slideY(28)} variantsUp={slideYUp(28)} once={false}>
                    <motion.h2 className="text-fluid-h2 font-medium mb-6 text-[#009ED6] leading-[1.1] font-satoshi ">Our Services</motion.h2>
                </MotionInView>
                <MotionInView variantsDown={slideY(16)} variantsUp={slideYUp(16)} once={false}>
                    <motion.p className="text-slate-500 text-fluid-lead font-normal font-inter mb-10 ">More than just services, this is our promise of partnership and excellence.</motion.p>
                </MotionInView>
                <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {services.map(service => (
                        <MotionInView key={service.name} variantsDown={slideY(20)} variantsUp={slideYUp(20)} once={false}>
                            <ServiceCard service={service} />
                        </MotionInView>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Services;
