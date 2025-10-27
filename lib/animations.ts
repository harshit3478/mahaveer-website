// Animation Variants
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeInUpSubtle = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
};

export const textReveal = {
  initial: { opacity: 0, y: 0 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.6, 0.05, 0.01, 0.9],
    } 
  },
};

// Word-by-word reveal animation for headlines
export const wordReveal = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.6, 0.05, 0.01, 0.9],
    } 
  },
};

// Slide up from bottom animation
export const slideUpFromBottom = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.7, 
      ease: "easeOut",
    } 
  },
};

// Slide from left animation (for button)
export const slideFromLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
    } 
  },
};

// Slide from right animation (for images/reviews)
export const slideFromRight = {
  initial: { opacity: 0, x: 60 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
    } 
  },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const cardHover = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
};
