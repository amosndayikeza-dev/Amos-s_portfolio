import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds. Use small steps (0.05) to stagger items in a grid. */
  delay?: number;
}

/**
 * Fades and lifts content in once as it scrolls into view.
 * <MotionConfig reducedMotion="user"> in App.tsx removes the movement for people who prefer reduced motion.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
