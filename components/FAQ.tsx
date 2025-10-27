'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const PlusIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

const MinusIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
    </svg>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 py-6">
            <motion.button
                className="w-full flex justify-between items-center text-left text-xl font-semibold text-gray-900"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.98 }}
            >
                <span>{question}</span>
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={isOpen ? 'minus' : 'plus'}
                        initial={{ rotate: isOpen ? -90 : 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: isOpen ? 90 : -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isOpen ? <MinusIcon className="w-6 h-6 text-emerald-500" /> : <PlusIcon className="w-6 h-6 text-emerald-500" />}
                    </motion.div>
                </AnimatePresence>
            </motion.button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: '16px' }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-600">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        { q: "Who can purchase products from Mahaveer Medi-Sales Pvt. Ltd.?", a: "We primarily serve chemists, hospitals, and government institutions. Please contact us to see if your organization is eligible." },
        { q: "What geographical areas do you cover for pharmaceutical distribution?", a: "Our distribution network is extensive, with a primary focus on Bengaluru and surrounding regions, but we serve clients across India." },
        { q: "Do you offer free quotes?", a: "Yes, we provide free, no-obligation quotes for all your pharmaceutical supply needs. Contact our sales team to get started." },
        { q: "How quickly can I expect my order to be delivered?", a: "Delivery times vary based on location and order size, but we pride ourselves on having one of the fastest delivery systems in the industry." },
        { q: "Do you provide a guarantee for your work?", a: "We guarantee the authenticity and quality of all our products, adhering to strict quality control standards and certifications." },
        { q: "What is your target fulfillment rate for customer orders?", a: "We consistently maintain a fulfillment rate of 98%, ensuring our customers receive what they need, when they need it." },
        { q: "What is the extent of your product range, and how many companies do you distribute for?", a: "We offer over 25,000 SKUs and partner with more than 280 pharmaceutical companies, providing one of the most comprehensive product ranges available." },
    ];
    return (
        <motion.section 
            className="py-20 px-4 sm:px-10 bg-white text-gray-900"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
        >
            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
                <motion.div variants={fadeInUp}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Answering your questions</h2>
                    <p className="text-lg text-gray-500 mb-6">Got more questions? Send us your enquiry below.</p>
                     <a href="#get-a-quote" className="bg-emerald-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-emerald-600 transition-colors inline-block">
                        Contact Us
                    </a>
                </motion.div>
                <motion.div variants={fadeInUp}>
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.q} answer={faq.a} />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default FAQ;
