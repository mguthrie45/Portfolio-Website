import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

const LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/max-guthrie-57630b194/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/mguthrie45', icon: Github },
  { label: 'Email', href: 'mailto:mguthrie451@gmail.com', icon: Mail },
];

export default function ExternalLinks() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const y = useTransform(scrollYProgress, [0.6, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0.5, 0.75], [0.6, 1]);

  return (
    <motion.section
      className="section external-links"
      style={mounted ? { y, opacity } : undefined}
    >
      <h2 className="section__title">Connect</h2>
      <nav className="link-row" aria-label="External links">
        {LINKS.map(({ label, href, icon: Icon }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className="link-row__item"
            aria-label={label}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
          >
            <Icon size={22} strokeWidth={2} />
          </motion.a>
        ))}
      </nav>
    </motion.section>
  );
}
