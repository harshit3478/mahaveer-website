'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setIsLoading(false);
                setShowSuccess(true);
                setFormData({ name: '', email: '', phone: '', message: '' });
                // Auto-hide success modal after 5 seconds
                setTimeout(() => setShowSuccess(false), 5000);
            } else {
                setIsLoading(false);
                alert('Error sending message. Please try again.');
            }
        } catch (error) {
            setIsLoading(false);
            alert('Error sending message. Please try again.');
        }
    };

    return (
        <motion.section 
            id="get-a-quote" 
            className="py-20 px-4 sm:px-10 bg-[#1a1a1a] text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-start">
                {/* Left Side - Contact Info */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="pt-8"
                >
                    <motion.h2 variants={fadeInUp} className="text-[64px] font-bold mb-6 text-[#4CAF50] leading-[1.1]">
                        Get in touch
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-gray-300 text-[16px] mb-12 leading-relaxed max-w-md">
                        For any inquiries or to explore your vision further, we invite you to contact our professional team using the details provided below.
                    </motion.p>
                    
                    {/* Contact Details */}
                    <motion.div variants={fadeInUp} className="space-y-6 mb-12">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-[16px]">Office</span>
                            <span className="text-white text-[16px] text-right max-w-xs">Mahaveer Arcade, Sirsi Rd, Bengaluru</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-[16px]">Email</span>
                            <a href="mailto:info@mahaveersales.com" className="text-white text-[16px] hover:text-[#4CAF50] transition-colors">
                                info@mahaveersales.com
                            </a>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-[16px]">Telephone</span>
                            <a href="tel:08045655000" className="text-white text-[16px] hover:text-[#4CAF50] transition-colors">
                                080-45655000
                            </a>
                        </div>
                    </motion.div>

                    {/* Social Media */}
                    <motion.div variants={fadeInUp}>
                        <p className="text-white font-medium mb-4 text-[16px]">Follow us</p>
                        <div className="flex gap-4">
                            <a href="#" className="text-white hover:text-[#4CAF50] transition-colors" aria-label="Instagram">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-[#4CAF50] transition-colors" aria-label="Twitter/X">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Side - Contact Form */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                >
                    <div className="bg-white rounded-2xl p-8 lg:p-10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <motion.div variants={fadeInUp}>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                                    Name<span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    placeholder="John Smith" 
                                    required 
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent outline-none transition text-[15px]"
                                />
                            </motion.div>
                            
                            <motion.div variants={fadeInUp}>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                                    Email<span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    placeholder="johnsmith@gmail.com" 
                                    required 
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent outline-none transition text-[15px]"
                                />
                            </motion.div>
                            
                            <motion.div variants={fadeInUp}>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                                    Phone Number
                                </label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    value={formData.phone} 
                                    onChange={handleChange} 
                                    placeholder="+44789123456" 
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent outline-none transition text-[15px]"
                                />
                            </motion.div>
                            
                            <motion.div variants={fadeInUp}>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                                    Message<span className="text-red-500">*</span>
                                </label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    rows={5} 
                                    placeholder="Hello, I'd like to enquire about..." 
                                    required 
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent outline-none transition resize-none text-[15px]"
                                ></textarea>
                            </motion.div>
                            
                            <motion.div variants={fadeInUp}>
                                <button 
                                    type="submit" 
                                    disabled={isLoading}
                                    className="w-full bg-[#4a4a4a] text-white font-medium py-3.5 rounded-lg hover:bg-[#3a3a3a] transition-colors text-[15px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isLoading ? (
                                        <>
                                            <motion.div
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        'Send message'
                                    )}
                                </button>
                            </motion.div>
                        </form>
                    </div>
                </motion.div>
            </div>

            {/* Success Modal */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
                        onClick={() => setShowSuccess(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Success Icon */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                className="w-16 h-16 bg-[#4ADE80] rounded-full flex items-center justify-center mx-auto mb-4"
                            >
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </motion.div>

                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-2xl font-bold text-gray-900 text-center mb-2"
                            >
                                Message Sent!
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-gray-600 text-center mb-6"
                            >
                                Thank you for reaching out! We've received your message and will get back to you shortly.
                            </motion.p>

                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                onClick={() => setShowSuccess(false)}
                                className="w-full bg-[#4ADE80] text-white font-medium py-3 rounded-lg hover:bg-[#3FCE73] transition-colors"
                            >
                                Close
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default Contact;
