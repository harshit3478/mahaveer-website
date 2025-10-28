'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import MotionInView from '@/components/MotionInView';
import { slideY, slideYUp } from '@/lib/animPresets';
import Button from '@/components/ui/Button';

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
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-4">
            <motion.button
                className="w-full flex justify-between items-center text-left text-lg md:text-xl font-satoshi font-medium text-gray-900"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.98 }}
            >
                <span className="pr-4">{question}</span>
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={isOpen ? 'minus' : 'plus'}
                        initial={{ rotate: isOpen ? -90 : 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: isOpen ? 90 : -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                    >
                        {isOpen ? <MinusIcon className="w-6 h-6 text-gray-900" /> : <PlusIcon className="w-6 h-6 text-gray-900" />}
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
                        <p className="text-gray-600 text-base font-satoshi leading-relaxed">{answer}</p>
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
            id="faq" 
            className="py-20 px-6 sm:px-10 lg:px-14 bg-white text-gray-900"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
        >
            <div className="max-w-[1600px] mx-auto">
                {/* Desktop: 2 columns with sticky right side, Mobile: FAQ items first, then centered heading */}
                <div className="flex flex-col-reverse lg:flex-row lg:grid lg:grid-cols-12 gap-12 items-start">
                    {/* FAQ Items - Left side on desktop, top on mobile */}
                    <motion.div variants={fadeInUp} className="lg:col-span-7">
                        {faqs.map((faq, index) => (
                            <MotionInView key={index} variantsDown={slideY(16)} variantsUp={slideYUp(16)} once={false}>
                              <FAQItem question={faq.q} answer={faq.a} />
                            </MotionInView>
                        ))}
                    </motion.div>
                    
                    {/* Sticky Heading - Right side on desktop, bottom centered on mobile */}
                    <motion.div 
                        variants={fadeInUp} 
                        className="lg:col-span-5 lg:sticky lg:top-24 text-center lg:text-left"
                    >
                                                <MotionInView variantsDown={slideY(24)} variantsUp={slideYUp(24)} once={false}>
                                                    <h2 className="text-fluid-h2 font-bold mb-4 text-[#67B33C]">Answering your questions</h2>
                                                </MotionInView>
                                                <MotionInView variantsDown={slideY(16)} variantsUp={slideYUp(16)} once={false}>
                                                    <p className="text-fluid-lead text-gray-500 mb-6">Got more questions? Send us your enquiry below</p>
                                                </MotionInView>
                        <div className="flex justify-center lg:justify-start">
                            <Button href="#get-a-quote" variant="secondary">Contact us</Button>
                        </div>
                        {/* FAQPage JSON-LD for SEO */}
                        <script
                          type="application/ld+json"
                          dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                              '@context': 'https://schema.org',
                              '@type': 'FAQPage',
                              mainEntity: faqs.map(({ q, a }) => ({
                                '@type': 'Question',
                                name: q,
                                acceptedAnswer: { '@type': 'Answer', text: a },
                              })),
                            }),
                          }}
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default FAQ;
