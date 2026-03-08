import React from 'react';
import { motion } from 'framer-motion';

const EDUCATION = [
  {
    school: 'Pennsylvania State University',
    degree: 'B.Sc. Computer Science',
    minor: 'Economics',
    gpa: '3.96',
  },
];

export default function Education() {
  return (
    <motion.section
      className="section"
      variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
    >
      <h2 className="section__title">Education</h2>
      <ul className="education-list">
        {EDUCATION.map((item) => (
          <li key={item.school} className="education-item">
            <span className="education-item__school">{item.school}</span>
            <p className="education-item__degree">
              {item.degree}
              {item.minor && (
                <span className="education-item__minor"> (minor: {item.minor})</span>
              )}
            </p>
            {item.gpa && (
              <p className="education-item__gpa">GPA: {item.gpa}</p>
            )}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
