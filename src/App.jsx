import React from 'react';
import { motion } from 'framer-motion';
import GalaxyParallax from './components/GalaxyParallax';
import Introduction from './components/Introduction';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import ExternalLinks from './components/ExternalLinks';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export default function App() {
  return (
    <motion.main
      className="app"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <GalaxyParallax />
      <div className="app__content">
        <Introduction />
        <Education />
        <WorkExperience />
        <Projects />
        <ExternalLinks />
      </div>
    </motion.main>
  );
}
