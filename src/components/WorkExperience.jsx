import React from 'react';
import { motion } from 'framer-motion';
import CollapsibleSection from './CollapsibleSection';

const EXPERIENCE = [
  {
    role: 'Senior Associate Engineer',
    company: 'Capital One',
    period: 'Aug 2024 – Present',
    stack: 'Full Stack — React, TypeScript, AWS Lambda, ECS Fargate, DynamoDB, CloudFormation',
    bullets: [
      'Led OpenTelemetry integration to implement distributed tracing and custom metrics, improving observability across 15 services.',
      'Architected and developed a modular transaction history workflow using DynamoDB Streams and data lake integration, enabling customer-driven, on-demand audits.',
      'Built cross-environment sync feature, scheduled workflow to align QA/Prod environments, reducing drift and customer effort.',
      'Delivered multiple end-to-end integrations (ServiceNow, Active Directory), owning E2E test coverage.',
    ],
  },
  {
    role: 'Associate Engineer',
    company: 'Capital One',
    period: 'Aug 2023 – Aug 2024',
    stack: 'Full Stack — React, TypeScript, AWS Lambda, ECS Fargate, DynamoDB, CloudFormation',
    bullets: [
      'Developed serverless REST APIs and frontend integrations, supporting 1,000+ users.',
      'Led development of ETL job, loaded 100,000+ daily records into data lake, supported 30+ downstream consumers.',
      'Implemented lazy caching strategy for externally facing API, doubling max throughput to 200 TPS.',
      'Integrated K6 load tests into CI/CD pipeline, establishing performance regression gates pre-deployment.',
    ],
  },
  {
    role: 'Associate Engineer (Intern)',
    company: 'Capital One',
    period: 'June 2022 – Aug 2022',
    stack: 'Data Engineering — Apache Presto, Apache Superset, Cassandra, Postgres, AWS EMR',
    bullets: [
      'Deployed/configured Apache Presto EMR cluster as cross-database, ANSI-SQL-compliant query engine, eliminating data duplication and reducing query latency by 36%.',
      'Apache Superset deployed to ECS cluster with Presto connector, enabling self-serve analytics and reducing manual data preprocessing.',
    ],
  },
];

export default function WorkExperience() {
  return (
    <motion.section
      className="section"
      variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
    >
      <h2 className="section__title">Work Experience</h2>
      <CollapsibleSection title="Professional experience" defaultOpen={true}>
        <ul className="work-list">
          {EXPERIENCE.map((job, i) => (
            <li key={`${job.company}-${job.period}`} className="work-item">
              <div className="work-item__header">
                <span className="work-item__role">{job.role}</span>
                <span className="work-item__company">{job.company}</span>
                <span className="work-item__period">{job.period}</span>
              </div>
              <p className="work-item__stack">{job.stack}</p>
              <ul className="work-item__bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </CollapsibleSection>
    </motion.section>
  );
}
