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
            I'm a software engineer with a B.Sc. in Computer Science from Pennsylvania State University and experience building full-stack and data systems at scale. I'm passionate about building scalable and resilient systems that serve customers reliably. I'm customer-focused and results-focused, and I learn quickly—whether it's OpenTelemetry and distributed tracing, serverless APIs, or data lake workflows. I enjoy owning features end-to-end and improving observability and performance for production systems.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
