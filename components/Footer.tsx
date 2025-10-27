'use client'

import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="py-12 pb-2 bg-white text-gray-900 border-t border-gray-200">
            <div className="px-6 sm:px-10 lg:px-8 ">
                <div className="grid md:grid-cols-2 gap-8 items-center justify-end ">
                    {/* Left: Logo and Copyright */}
                    <div>
                        <div className="flex items-center gap-3 mb-6 ">
                            <Image src="/mahaveer-logo.avif" alt="Mahaveer Medi Logo" width={40} height={40} className="rounded-lg" />
                            <span className="text-3xl font-medium text-gray-900 font-satoshi">Mahaveer Medi</span>
                        </div>
                    </div>

                    {/* Right: Quick Links */}
                    <div className="font-satoshi font-light w-1/2 ml-80 mb-2">
                        <h3 className="text-2xl font-medium text-gray-900 mb-4">Quick links</h3>
                        <div className="grid grid-cols-2 gap-x-3 gap-y-2 font-light font-satoshi text-lg">
                            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors  ">About Us</a>
                            <a href="#testimonials" className="text-gray-700 hover:text-gray-900 transition-colors  ">Testimonials</a>
                            <a href="#why-choose-us" className="text-gray-700 hover:text-gray-900 transition-colors  ">Why Choose Us</a>
                            <a href="#faq" className="text-gray-700 hover:text-gray-900 transition-colors  ">FAQs</a>
                            <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors  ">Services</a>
                            <a href="#get-a-quote" className="text-gray-700 hover:text-gray-900 transition-colors  ">Contact</a>
                        </div>
                    </div>
                </div>

            <div className='border-b border-slate-300 my-3 w-full' ></div>
            <p className="text-gray-500 text-[16px] font-satoshi">© {new Date().getFullYear()} Mahaveer Medi. All rights reserved.</p>
            </div>
    
        </footer>
    );
};

export default Footer;
