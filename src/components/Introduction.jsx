import React from 'react';
import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <motion.section
      className="section introduction"
      variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
    >
      <div className="introduction__layout">
        <div className="introduction__image-wrap">
          <img
            src="headshot.png"
            alt="Max Guthrie headshot"
            width={200}
            height={200}
            className="introduction__headshot"
          />
        </div>
        <div className="introduction__text">
          <h1 className="introduction__name">Max Guthrie</h1>
          <p className="introduction__bio">
            Software engineer with a B.Sc. in Computer Science from Pennsylvania State University and experience building systems that serve users at scale. I care about scalable, resilient systems and making sure they deliver for customers. I learn quickly, enjoy owning work end-to-end, and aim to raise the bar on quality and performance. Driven to deliver impact and to keep improving.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
