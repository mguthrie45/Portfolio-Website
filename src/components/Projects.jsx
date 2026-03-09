import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';
import CollapsibleSection from './CollapsibleSection';
import CollapsibleContent from './CollapsibleContent';
import P2PPlayerDiagram from './P2PPlayerDiagram';

const PROJECTS = [
  {
    name: 'Triple P Disposal',
    tagline: 'Dumpster rental application for Triple P Disposal',
    tech: 'React, TypeScript, Go, AWS (CDK, Lambda, Postgres)',
    url: 'https://www.triplepdisposalapp.com',
    urlLabel: 'Website',
    icon: ExternalLink,
    overview: 'Full-stack, cloud-deployed application enabling end-to-end dumpster rental operations for Triple P Services. Built with CDK for infrastructure, Go for APIs, and React/TypeScript for the frontend.',
    featuresLabel: 'Capabilities',
    features: [
      'Customer self-service: schedule rentals, dropoffs, and pickups; receive API-generated invoices.',
      'Operational scheduling: automated pickup and dropoff schedules for drivers and field employees.',
      'Admin portal: modify schedules, manage orders, and oversee operations.',
    ],
  },
  {
    name: 'Stock Backtesting Engine',
    tagline: 'Configurable backtesting framework for trading strategies',
    tech: 'Python, JavaScript',
    url: 'https://github.com/mguthrie45/py-backtester/tree/main',
    urlLabel: 'GitHub',
    icon: Github,
    overview: 'A highly configurable backtesting engine for evaluating trading strategies against historical and live data. Strategy logic and metrics are defined declaratively and extended via Python.',
    featuresLabel: 'Features',
    features: [
      'Declarative configuration: tests and strategies defined in YAML; conditions and custom logic via external Python scripts.',
      'Extensible metrics: custom indicators (e.g. RSI, moving averages, Bollinger bands) configurable with optional Python extensions.',
      'Multi-source data: supports multiple datasources including Yahoo Finance and CSV; paginated, generator-based workflow for larger-than-memory datasets.',
      'Structured output: event observer records trading activity and produces JSON reports with ROI, Calmar ratio, Sharpe ratio, Sortino ratio, win rate, and max drawdown.',
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
    overview: 'HLS video player that uses peer-to-peer segment sharing to reduce CDN load. Viewers join swarms and exchange segments over WebRTC data channels, with a custom signaling server coordinating sessions.',
    featuresLabel: 'Architecture',
    features: [
      'P2P layer: swarms and segment exchange via WebRTC data channels; WebSocket signaling server (Golang) for discovery and handshakes, scaled with goroutines for high concurrency.',
      'Playback: HLS reimplemented with the Fetch API and used as fallback when P2P is unavailable, keeping playback uninterrupted.',
    ],
  },
];

function projectSlug(name) {
  return name.split(' ').join('-');
}

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <motion.section
      className="section"
      variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
    >
      <h2 className="section__title">Projects</h2>
      <CollapsibleSection title="Selected projects" defaultOpen={true}>
        <ul className="project-list">
          {PROJECTS.map((proj) => {
            const isExpanded = expandedId === proj.name;
            return (
              <li key={proj.name} className="project-card project-card--expandable">
                <button
                  type="button"
                  className="project-card__trigger"
                  onClick={() => setExpandedId(isExpanded ? null : proj.name)}
                  aria-expanded={isExpanded}
                  aria-controls={`project-details-${projectSlug(proj.name)}`}
                >
                  <div className="project-card__header">
                    <div>
                      <h3 className="project-card__name">
                        {proj.name}
                        {proj.wip && <span className="project-card__wip">WIP</span>}
                      </h3>
                      <p className="project-card__tagline">{proj.tagline}</p>
                    </div>
                    <div className="project-card__trigger-right">
                      {proj.url && proj.icon && (
                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card__link"
                          aria-label={proj.urlLabel}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <proj.icon size={18} strokeWidth={2} />
                        </a>
                      )}
                      <motion.span
                        className="project-card__chevron"
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ChevronDown size={20} strokeWidth={2} />
                      </motion.span>
                    </div>
                  </div>
                  <p className="project-card__tech">{proj.tech}</p>
                </button>
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <CollapsibleContent
                      id={`project-details-${projectSlug(proj.name)}`}
                      className="project-card__expandable"
                    >
                      <div className="project-card__body">
                        {(proj.overview || proj.description) && (
                          <p className="project-card__desc">{proj.overview || proj.description}</p>
                        )}
                        {proj.features && proj.features.length > 0 && (
                          <>
                            {proj.featuresLabel && (
                              <h4 className="project-card__features-title">{proj.featuresLabel}</h4>
                            )}
                            <ul className="project-card__features">
                              {proj.features.map((f, j) => (
                                <li key={j}>{f}</li>
                              ))}
                            </ul>
                          </>
                        )}
                        <div className="project-card__extra" aria-label="Additional project details">
                          {proj.name === 'Peer-to-peer HLS Player' && <P2PPlayerDiagram />}
                        </div>
                      </div>
                    </CollapsibleContent>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </CollapsibleSection>
    </motion.section>
  );
}
