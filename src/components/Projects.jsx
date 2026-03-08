import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import CollapsibleSection from './CollapsibleSection';

const PROJECTS = [
  {
    name: 'Triple P Disposal',
    tagline: 'Serverless dumpster rental app',
    tech: 'React, TypeScript, Go, AWS (CDK, Lambda, Postgres)',
    url: 'https://www.triplepdisposalapp.com',
    urlLabel: 'Website',
    icon: ExternalLink,
    description: 'Full-stack cloud-deployed application using CDK for infrastructure, Golang for APIs, and React/TypeScript for the frontend. Built with a friend. My work included API and data integrations on the frontend and backend API development. Provides order management, scheduling, invoicing, and real-time status updates for customers, drivers, and admins.',
  },
  {
    name: 'Stock Backtesting Engine',
    tagline: 'Configurable backtester for trading strategies',
    tech: 'Python, JavaScript',
    url: 'https://github.com/mguthrie45/py-backtester/tree/main',
    urlLabel: 'GitHub',
    icon: Github,
    description: 'A highly configurable backtesting tool built with Python.',
    features: [
      'Tests and trading strategies defined by YAML configs',
      'External Python scripts can define conditions for trading strategies',
      'Custom metrics (RSI, moving averages, Bollinger bands, etc.) in configs with external Python scripts',
      'Adapts to multiple datasources (Yahoo Finance API, CSV datasets)',
      'Workflow handles larger-than-memory datasets via paginated generators',
      'Event observer records trading activity to assemble JSON reports',
      'JSON reports include ROI, Calmar ratio, Sharpe ratio, Sortino ratio, win rate, max drawdown',
    ],
  },
  {
    name: 'Peer-to-peer HLS Player',
    tagline: 'Work in progress',
    tech: 'TypeScript, MediaSource API, Golang',
    url: null,
    urlLabel: null,
    icon: null,
    wip: true,
    description: 'An HLS video player that uses peer-to-peer video segment sharing to reduce CDN calls. Peers join swarms and exchange segments via WebRTC data channels. Swarms are managed and WebRTC handshakes facilitated by a WebSocket signaling server (Golang, high concurrency with goroutines). HLS is used as fallback when P2P is unavailable; this required reimplementing HLS using the Fetch API.',
  },
];

export default function Projects() {
  return (
    <motion.section
      className="section"
      variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
    >
      <h2 className="section__title">Projects</h2>
      <CollapsibleSection title="Selected projects" defaultOpen={true}>
        <ul className="project-list">
          {PROJECTS.map((proj, i) => (
            <li key={proj.name} className="project-card">
              <div className="project-card__header">
                <div>
                  <h3 className="project-card__name">
                    {proj.name}
                    {proj.wip && <span className="project-card__wip">WIP</span>}
                  </h3>
                  <p className="project-card__tagline">{proj.tagline}</p>
                </div>
                {proj.url && proj.icon && (
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                    aria-label={proj.urlLabel}
                  >
                    <proj.icon size={18} strokeWidth={2} />
                  </a>
                )}
              </div>
              <p className="project-card__tech">{proj.tech}</p>
              <p className="project-card__desc">{proj.description}</p>
              {proj.features && (
                <ul className="project-card__features">
                  {proj.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </CollapsibleSection>
    </motion.section>
  );
}
