import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LITE_QUERY = '(hover: none) and (pointer: coarse), (prefers-reduced-motion: reduce)';

function useLiteBackground() {
  const [lite, setLite] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia(LITE_QUERY).matches;
  });

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const media = window.matchMedia(LITE_QUERY);
    const update = () => setLite(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return lite;
}

export default function GalaxyParallax() {
  const lite = useLiteBackground();
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacityNebula = useTransform(scrollYProgress, [0, 0.4, 0.8], [0.7, 0.4, 0.2]);

  if (lite) {
    return (
      <div className="galaxy-parallax galaxy-parallax--lite" aria-hidden="true">
        <div className="galaxy galaxy--base" />
        <div className="galaxy galaxy--nebula galaxy--nebula-1" />
      </div>
    );
  }

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
