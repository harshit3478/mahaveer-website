'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, cardHover } from '@/lib/animations';

const ServiceIcons: { [key: string]: React.ReactNode } = {
    FulfillmentRate: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-emerald-500"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
    CustomerSupport: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-emerald-500"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>,
    Transparency: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-emerald-500"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639l4.25-8.5a1.012 1.012 0 0 1 .93-.611h11.584c.473 0 .88.322.994.767l4.25 8.5a1.012 1.012 0 0 1 0 .639l-4.25 8.5a1.012 1.012 0 0 1-.994.767H7.216a1.012 1.012 0 0 1-.93-.611l-4.25-8.5Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>,
    Seamlessness: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-emerald-500"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
    FastestDelivery: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-emerald-500"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 1 3.375-3.375h9.75a3.375 3.375 0 0 1 3.375 3.375v1.875" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5v-7.5m3 7.5v-7.5m3 7.5v-7.5m-12-3H3.375c-.621 0-1.125.504-1.125 1.125V12.75" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 3h.375c.621 0 1.125.504 1.125 1.125V12.75" /></svg>,
    OnePlatform: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-emerald-500"><path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>,
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
            className="py-20 px-4 sm:px-10 bg-white text-gray-900"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
        >
            <div className="container mx-auto text-center">
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">Our Services</motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-gray-500 mb-12">More than just services, this is our promise of partnership and excellence.</motion.p>
                <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map(service => (
                        <motion.div 
                            key={service.name} 
                            variants={fadeInUp}
                            whileHover="hover"
                            className="bg-white border border-gray-200 p-8 rounded-xl text-left hover:border-emerald-500 transition-colors shadow-sm"
                        >
                            <motion.div variants={cardHover}>
                                <div className="mb-4">{ServiceIcons[service.name.replace(/\s/g, '')]}</div>
                                <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Services;
