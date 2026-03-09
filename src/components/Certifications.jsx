import React from 'react';
import { motion } from 'framer-motion';

const CERTIFICATIONS = [
  {
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon',
    date: '2024',
  },
];

export default function Certifications() {
  return (
    <motion.section
      className="section"
      variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
    >
      <h2 className="section__title">Certifications</h2>
      <ul className="certifications-list">
        {CERTIFICATIONS.map((cert) => (
          <li key={cert.name} className="certification-item">
            <span className="certification-item__name">{cert.name}</span>
            {(cert.issuer || cert.date) && (
              <p className="certification-item__meta">
                {[cert.issuer, cert.date].filter(Boolean).join(' · ')}
              </p>
            )}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
