import type { Metadata } from 'next';
import Link from 'next/link';
import { utilities, NEED_AREAS, NEED_AREA_LABELS, type NeedArea } from '@/lib/utilities-data';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Built for SpanForge',
  description: 'How ainternals.com and SpanForge work together. The two-product model explained.',
};

const LIFECYCLE_PHASES = [
  {
    num: '01', label: 'Discover', colorVar: '--discover',
    needs: ['data-quality', 'developer-productivity'] as NeedArea[],
    desc: 'Assess the current state. Understand your data, your team, and the gap between where you are and production readiness.',
  },
  {
    num: '02', label: 'Design', colorVar: '--design',
    needs: ['performance-reliability', 'rag-pipeline', 'data-quality'] as NeedArea[],
    desc: 'Architect for production. Define performance contracts, retrieval quality benchmarks, and data lineage requirements.',
  },
  {
    num: '03', label: 'Build', colorVar: '--build',
    needs: ['security-trust', 'prompt-engineering', 'rag-pipeline', 'cicd-devops', 'developer-productivity'] as NeedArea[],
    desc: 'Implement with confidence. Every build step is validated by an ainternals gate before it reaches CI.',
  },
  {
    num: '04', label: 'Govern', colorVar: '--govern',
    needs: ['compliance-governance', 'security-trust', 'agent-safety'] as NeedArea[],
    desc: 'Evidence-backed governance. Compliance reports, audit logs, and policy enforcement generated automatically.',
  },
  {
    num: '05', label: 'Scale', colorVar: '--scale',
    needs: ['observability-cost', 'performance-reliability', 'agent-safety'] as NeedArea[],
    desc: 'Scale with visibility. Token budgets, latency contracts, and anomaly detection wired into production.',
  },
];

const TRUST_DIMENSIONS = [
  { letter: 'T', word: 'Transparency',    needs: ['compliance-governance', 'prompt-engineering'] as NeedArea[] },
  { letter: 'R', word: 'Reliability',     needs: ['performance-reliability', 'cicd-devops'] as NeedArea[] },
  { letter: 'U', word: 'Understandability', needs: ['data-quality', 'rag-pipeline'] as NeedArea[] },
  { letter: 'S', word: 'Security',        needs: ['security-trust', 'agent-safety'] as NeedArea[] },
  { letter: 'T', word: 'Traceability',    needs: ['observability-cost', 'developer-productivity'] as NeedArea[] },
];

export default function SpanForgePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">The two-product model</span>
          <h1 className={styles.h1}>SpanForge sets the standard.<br /><em className={styles.accent}>ainternals ships the tools.</em></h1>
          <p className={styles.sub}>
            SpanForge is the AI Lifecycle Platform — the framework that tells enterprise teams
            what to do. ainternals.com is the utility repository that gives them the tools to do it.
            Neither product is sufficient without the other.
          </p>
        </div>
      </section>

      {/* ── Relationship ── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.twoCol}>
            <div className={styles.productCard}>
              <span className={styles.productUrl}>getspanforge.com</span>
              <h2 className={styles.productName}>SpanForge</h2>
              <p className={styles.productDesc}>
                The authoritative content layer. Frameworks, standards, assessments, calculators, templates,
                and lifecycle guidance. SpanForge tells enterprise teams what AI production readiness requires —
                the why and the what.
              </p>
            </div>
            <div className={`${styles.productCard} ${styles.productCardAccent}`}>
              <span className={styles.productUrl}>ainternals.com</span>
              <h2 className={styles.productName}>ainternals</h2>
              <p className={styles.productDesc}>
                The utility layer. Compiled tools that make AI production-safe. 85 utilities across
                10 need areas. Rust-native. Zero dependencies. CLI-first. ainternals gives teams
                the how — working tools that drop into any CI/CD pipeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5-Phase Lifecycle ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <span className="eyebrow">SpanForge lifecycle</span>
          <h2 className={styles.h2}>Five phases. ainternals serves every one.</h2>
          <p className={styles.sectionSub}>
            The SpanForge lifecycle maps every stage from discovery to scale. Every phase has
            corresponding ainternals utilities that make each requirement operational.
          </p>

          <div className={styles.phaseGrid}>
            {LIFECYCLE_PHASES.map((phase) => {
              const count = utilities.filter((u) => phase.needs.includes(u.needArea)).length;
              return (
                <div key={phase.num} className={styles.phaseCard} style={{ '--phase-color': `var(${phase.colorVar})` } as React.CSSProperties}>
                  <div className={styles.phaseTop}>
                    <span className={styles.phaseNum} style={{ color: `var(${phase.colorVar})` }}>
                      {phase.num}
                    </span>
                    <span className={styles.phaseLabel}>{phase.label}</span>
                  </div>
                  <p className={styles.phaseDesc}>{phase.desc}</p>
                  <div className={styles.phaseNeeds}>
                    {phase.needs.map((n) => (
                      <span key={n} className={styles.phaseNeedTag}>{NEED_AREA_LABELS[n]}</span>
                    ))}
                  </div>
                  <span className={styles.phaseCount}>{count} utilities</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Phase → Need mapping table ── */}
      <section className={styles.section}>
        <div className="container">
          <span className="eyebrow">Phase mapping</span>
          <h2 className={styles.h2}>SpanForge phase to ainternals need areas.</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table} aria-label="SpanForge phase to ainternals needs mapping">
              <thead>
                <tr>
                  <th>SpanForge Phase</th>
                  <th>ainternals Need Areas</th>
                  <th>Utility Count</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { phase: '01 — Discover', needs: 'Data Quality & Lineage, Developer Productivity & Testing', count: 17 },
                  { phase: '02 — Design',   needs: 'Performance & Reliability, RAG Pipeline Quality, Data Quality & Lineage', count: 17 },
                  { phase: '03 — Build',    needs: 'Security & Trust, Prompt Engineering Discipline, RAG Pipeline Quality, CI/CD Gates & DevOps, Developer Productivity & Testing', count: 42 },
                  { phase: '04 — Govern',   needs: 'Compliance & Governance, Security & Trust, Agent Safety & Control', count: 27 },
                  { phase: '05 — Scale',    needs: 'Observability & Cost Control, Performance & Reliability, Agent Safety & Control', count: 23 },
                ].map((row) => (
                  <tr key={row.phase}>
                    <td className={styles.tdPhase}>{row.phase}</td>
                    <td className={styles.tdNeeds}>{row.needs}</td>
                    <td className={styles.tdCount}>{row.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── T.R.U.S.T. ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <span className="eyebrow">T.R.U.S.T. Framework</span>
          <h2 className={styles.h2}>Five dimensions. ainternals operationalises each one.</h2>
          <p className={styles.sectionSub}>
            The SpanForge T.R.U.S.T. Framework defines what responsible AI production readiness looks like.
            Each dimension has corresponding ainternals need areas that turn the requirement into running tools.
          </p>
          <div className={styles.trustGrid}>
            {TRUST_DIMENSIONS.map(({ letter, word, needs }) => (
              <div key={word} className={styles.trustCard}>
                <div className={styles.trustBadge}>{letter}</div>
                <div>
                  <h3 className={styles.trustWord}>{word}</h3>
                  <div className={styles.trustNeeds}>
                    {needs.map((n) => (
                      <span key={n} className={styles.trustNeedTag}>{NEED_AREA_LABELS[n]}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className="container">
          <h2 className={styles.ctaH2}>Start using ainternals alongside SpanForge.</h2>
          <div className={styles.ctaRow}>
            <a href="https://getspanforge.com" className="btn-primary" target="_blank" rel="noopener noreferrer">
              Explore SpanForge
            </a>
            <Link href="/install" className="btn-ghost">Install ainternals</Link>
          </div>
        </div>
      </section>
    </>
  );
}
