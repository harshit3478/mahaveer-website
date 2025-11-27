'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import MotionInView from '@/components/MotionInView';
import ScrollCapture from '@/components/ScrollCapture';
import { slideY, slideYUp } from '@/lib/animPresets';
import Clients from './Clients';

const Testimonials = () => {
    const testimonials = [
        { name: 'Mr. Rishank CR', company: 'Balaji Medical Centre', quote: "They hear out the retailer's problems and solve them too. All this happens because of the amazing management. I suggest others try their service to experience the best", avatar: 'https://picsum.photos/seed/avatar1/100/100' },
        { name: 'Mr. Madhu', company: 'Madhu Medicals', quote: "As a business owner, Mahaveer has given us the platform to gain much more confidence and have good stock availability without any worry about supplies.", avatar: 'https://picsum.photos/seed/avatar2/100/100' },
        { name: 'Mr. Shivaraj B C', company: 'Sri Manjunatha Medicals', quote: "We feel much more organized and aware of all products. Mahaveer gives us visibility into our purchases and schemes and reduces our workload to a minimum.", avatar: 'https://picsum.photos/seed/avatar3/100/100' },
        { name: 'Mr. Raviraj Purohit', company: 'Rana Ramdev Group', quote: "Being an owner of multiple stores, accounting becomes critical but Mahaveer Medi Sales enables hassle-free accounting, accurate GST Uploads, and maintenance of Ledgers", avatar: 'https://picsum.photos/seed/avatar4/100/100' },
        { name: 'Mr. Mahaveer Kochar', company: 'Leap Health', quote: "Mahaveer provided us the ability to track and maintain inventory and segregate it with new companies/products introduced.", avatar: 'https://picsum.photos/seed/avatar5/100/100' },
        { name: 'Mr. Uday Kumar', company: 'Janhavi Medicals', quote: "Responsible, Punctual, and Knowledgeable. I have only good things to say about Mahaveer Medi Sales. Huge respect to their delivery team as well for the size of work they can carry out", avatar: 'https://picsum.photos/seed/avatar6/100/100' },
    ];
    return (
        <motion.section 
            id="testimonials" 
            className="py-20 pt-10 px-6 sm:px-10 lg:px-14 bg-white text-gray-900"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
        >
            <div className="max-w-[1600px] mx-auto">
                <div className="text-center mb-8">
                    <MotionInView variantsDown={slideY(20)} variantsUp={slideYUp(20)} once={false}>
                      <motion.p className="text-fluid-lead font-medium text-gray-900 max-w-3xl mx-auto">Our clients' words reflect our commitment to excellence.</motion.p>
                    </MotionInView>
                </div>

                {/* Mobile: horizontal scroll-snap list with subtle animations */}
                                                <ScrollCapture className="md:hidden px-6 overflow-x-auto snap-x snap-mandatory flex gap-4 pb-2 touch-pan-x">
                    {testimonials.map(t => (
                        <article key={t.name} className="snap-center scroll-ml-6 flex-shrink-0 w-[84vw]">
                            <motion.div 
                                initial={{ opacity: 0.6, scale: 0.98, y: 8 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.6 }}
                                transition={{ duration: 0.35, ease: 'easeOut' }}
                                className="bg-[#F5F5F5] p-6 rounded-2xl flex flex-col h-full"
                            >
                                <blockquote className="text-gray-700 mb-6 flex-grow text-base leading-relaxed">{t.quote}</blockquote>
                                <div className="flex items-center mt-auto">
                                    <img src={t.avatar} alt={`${t.name} - ${t.company}`} className="w-12 h-12 rounded-full mr-4 object-cover" loading="lazy"/>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-base">{t.name}</p>
                                        <p className="text-gray-600 text-sm">{t.company}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </article>
                    ))}
                </ScrollCapture>

                {/* Tablet/Desktop grid */}
                <motion.div variants={staggerContainer} className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {testimonials.map(t => (
                        <MotionInView key={t.name} variantsDown={slideY(20)} variantsUp={slideYUp(20)} once={false}>
                          <article className="bg-[#F5F5F5] p-8 rounded-2xl flex flex-col h-full">
                              <blockquote className="text-gray-700 mb-8 flex-grow text-base leading-relaxed">{t.quote}</blockquote>
                              <div className="flex items-center mt-auto">
                                  <img src={t.avatar} alt={`${t.name} - ${t.company}`} className="w-14 h-14 rounded-full mr-4 object-cover" loading="lazy"/>
                                  <div>
                                      <p className="font-semibold text-gray-900 text-base">{t.name}</p>
                                      <p className="text-gray-600 text-sm">{t.company}</p>
                                  </div>
                              </div>
                          </article>
                        </MotionInView>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Testimonials;
