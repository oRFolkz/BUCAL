import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark';
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, background = 'white' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bgColors = {
    white: 'bg-white',
    light: 'bg-secondary-bg', 
    dark: 'bg-primary-green text-white',
  };

  return (
    <section 
      id={id}
      ref={ref}
      className={`py-16 lg:py-24 overflow-hidden ${bgColors[background]} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1300px] mx-auto px-6 md:px-12"
      >
        {children}
      </motion.div>
    </section>
  );
};