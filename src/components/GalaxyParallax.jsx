import React from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

export default function GalaxyParallax() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacityNebula = useTransform(scrollYProgress, [0, 0.4, 0.8], [0.7, 0.4, 0.2]);

  return (
    <div className="galaxy-parallax" aria-hidden="true">
      <div className="galaxy galaxy--base" />
      <motion.div className="galaxy galaxy--stars-wrap" style={{ y: y1 }}>
        <div className="galaxy galaxy--stars-far-a" />
        <div className="galaxy galaxy--stars-far-a-white" />
        <div className="galaxy galaxy--stars-far-b" />
        <div className="galaxy galaxy--stars-far-b-white" />
        <div className="galaxy galaxy--stars-mid-a" />
        <div className="galaxy galaxy--stars-mid-a-white" />
        <div className="galaxy galaxy--stars-mid-b" />
        <div className="galaxy galaxy--stars-mid-b-white" />
        <div className="galaxy galaxy--stars-near-a" />
        <div className="galaxy galaxy--stars-near-a-white" />
        <div className="galaxy galaxy--stars-near-b" />
        <div className="galaxy galaxy--stars-near-b-white" />
      </motion.div>
      <motion.div className="galaxy galaxy--nebula galaxy--nebula-1" style={{ y: y2, opacity: opacityNebula }} />
      <motion.div className="galaxy galaxy--nebula galaxy--nebula-2" style={{ y: y3 }} />
    </div>
  );
}
