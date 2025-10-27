'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const Testimonials = () => {
    const testimonials = [
        { name: 'Mr. Rishank CR', company: 'Balaji Medical Centre', quote: "They hear out the retailer's problems and solve them too. All this happens because of the amazing management. I suggest others try their service to experience the best.", avatar: 'https://picsum.photos/seed/avatar1/100/100' },
        { name: 'Mr. Madhu', company: 'Madhu Medicals', quote: "As a business owner, Mahaveer has given us the platform to gain much more confidence and have good stock availability without any worry about supplies.", avatar: 'https://picsum.photos/seed/avatar2/100/100' },
        { name: 'Mr. Shivaraj B C', company: 'Sri Manjunatha Medicals', quote: "We feel much more organized and aware of all products. Mahaveer gives us visibility into our purchases and schemes and reduces our workload to a minimum.", avatar: 'https://picsum.photos/seed/avatar3/100/100' },
        { name: 'Mr. Raviraj Purohit', company: 'Rana Ramdev Group', quote: "Being an owner of multiple stores, accounting becomes critical but Mahaveer Medi Sales enables hassle-free accounting, accurate GST Uploads, and maintenance of Ledgers.", avatar: 'https://picsum.photos/seed/avatar4/100/100' },
        { name: 'Mr. Mahaveer Kochar', company: 'Leap Health', quote: "Mahaveer provided us the ability to track and maintain inventory and segregate it with new companies/products introduced.", avatar: 'https://picsum.photos/seed/avatar5/100/100' },
        { name: 'Mr. Uday Kumar', company: 'Janhavi Medicals', quote: "Responsible, Punctual, and Knowledgeable. I have only good things to say about Mahaveer Medi Sales. Huge respect to their delivery team as well.", avatar: 'https://picsum.photos/seed/avatar6/100/100' },
    ];
    return (
        <motion.section 
            id="testimonials" 
            className="py-20 px-4 sm:px-10 bg-gray-50 text-gray-900"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
        >
            <div className="container mx-auto">
                <div className="text-center">
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">Client Testimonials</motion.h2>
                    <motion.p variants={fadeInUp} className="text-lg text-gray-500 mb-12">Our clients' words reflect our commitment to excellence.</motion.p>
                </div>
                <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map(t => (
                        <motion.div 
                            key={t.name} 
                            variants={fadeInUp} 
                            whileHover={{ y: -8, boxShadow: "0px 10px 30px -5px rgba(16, 185, 129, 0.1)" }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="bg-white border border-gray-200 p-6 rounded-xl flex flex-col h-full shadow-sm"
                        >
                            <p className="text-gray-600 italic mb-6 flex-grow">"{t.quote}"</p>
                            <div className="flex items-center mt-auto">
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <p className="font-bold text-gray-800">{t.name}</p>
                                    <p className="text-gray-500">{t.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Testimonials;
