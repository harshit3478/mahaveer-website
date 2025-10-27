'use client'

import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="py-12 bg-white text-gray-900 border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-10">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left: Logo and Copyright */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Image src="/mahaveer-logo.avif" alt="Mahaveer Medi Logo" width={40} height={40} className="rounded-lg" />
                            <span className="text-2xl font-semibold text-gray-900 font-satoshi">Mahaveer Medi</span>
                        </div>
                        <p className="text-gray-500 text-sm font-inter">© {new Date().getFullYear()} Mahaveer Medi. All rights reserved.</p>
                    </div>

                    {/* Right: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-6 font-satoshi">Quick links</h3>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-3">
                            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors text-base font-inter">About Us</a>
                            <a href="#testimonials" className="text-gray-700 hover:text-gray-900 transition-colors text-base font-inter">Testimonials</a>
                            <a href="#why-choose-us" className="text-gray-700 hover:text-gray-900 transition-colors text-base font-inter">Why Choose Us</a>
                            <a href="#faq" className="text-gray-700 hover:text-gray-900 transition-colors text-base font-inter">FAQs</a>
                            <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors text-base font-inter">Services</a>
                            <a href="#get-a-quote" className="text-gray-700 hover:text-gray-900 transition-colors text-base font-inter">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
