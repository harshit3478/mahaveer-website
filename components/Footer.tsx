'use client'

import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-gray-200 bg-white text-gray-500">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left px-4 sm:px-10">
                <div className="flex items-center gap-3">
                    <Image src="/mahaveer-logo.avif" alt="Mahaveer Medi Logo" width={40} height={40} className="rounded-lg" />
                    <span className="text-lg font-bold text-gray-900">Mahaveer Medi</span>
                </div>
                <p className="mt-4 md:mt-0">&copy; {new Date().getFullYear()} Mahaveer Medi-Sales. All rights reserved.</p>
                 <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
