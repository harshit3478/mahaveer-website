import { useState, useEffect } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

// Custom Hook for Counter Animation
export const useCountAnimation = (end: number, duration: number = 2) => {
  const count = useMotionValue(0);
  const rounded = useSpring(count, { duration: duration * 1000, bounce: 0 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return () => unsubscribe();
  }, [rounded]);

  const startCount = () => {
    count.set(end);
  };

  return { displayValue, startCount };
};
