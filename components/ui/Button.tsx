'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  href, 
  onClick, 
  variant = 'secondary',
  className = '',
  type = 'button'
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const baseClasses = "relative overflow-hidden font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center gap-2 group";
  
  const variantClasses = {
    primary: "bg-[#4ADE80] text-white hover:bg-[#3FCE73]",
    secondary: "bg-gray-900 text-white hover:bg-[#4ADE80]",
    accent: "bg-[#00A3E0] text-white hover:bg-[#4ADE80]",
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick, type };

  return (
    <Component
      {...props}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Arrow Icon - Slides in from right on hover */}
      <motion.svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={2} 
        stroke="currentColor" 
        className="w-5 h-5 relative z-10"
        initial={{ x: -10, opacity: 0 }}
        animate={{ 
          x: isHovered ? 0 : -10, 
          opacity: isHovered ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </motion.svg>

      {/* Green background sweep animation */}
      <motion.div
        className="absolute inset-0 bg-[#4ADE80]"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "0%" : "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ zIndex: 0 }}
      />
    </Component>
  );
};

export default Button;
