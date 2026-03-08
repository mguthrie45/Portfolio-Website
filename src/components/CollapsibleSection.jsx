import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import CollapsibleContent from './CollapsibleContent';

/**
 * Reusable collapsible/expandable section.
 * @param {string} title - Section heading
 * @param {React.ReactNode} children - Content when expanded
 * @param {boolean} defaultOpen - Initially expanded (default: false)
 */
function toId(title) {
  return title.split(' ').join('-');
}

export default function CollapsibleSection({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const collapseId = 'collapse-' + toId(title);

  return (
    <section className="collapsible">
      <button
        type="button"
        className="collapsible__trigger"
        onClick={() => setIsOpen((o) => !o)}
        aria-expanded={isOpen}
        aria-controls={collapseId}
      >
        <span className="collapsible__title">{title}</span>
        <motion.span
          className="collapsible__icon"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown size={20} strokeWidth={2}></ChevronDown>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <CollapsibleContent id={collapseId} className="collapsible__content">
            {children}
          </CollapsibleContent>
        )}
      </AnimatePresence>
    </section>
  );
}
