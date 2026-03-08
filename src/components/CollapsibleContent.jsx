import React from 'react';
import { motion } from 'framer-motion';

export default function CollapsibleContent({ id, className, children }) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
