import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About',
  description: 'ainternals.com — origin, principles, roadmap, and the SpanForge relationship.',
};

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">The project</span>
          <h1 className={styles.h1}>About ainternals.</h1>
          <p className={styles.sub}>
            Built in public. Built for production. No upsell. No freemium. No paid tier.
          </p>
        </div>
      </section>

      <div className={styles.content}>
        <div className={`container ${styles.inner}`}>

          {/* Origin */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Origin</h2>
            <p className={styles.body}>
              ainternals.com exists because SpanForge identified gaps and needed a companion tool
              repository to close them. As the SpanForge framework mapped the AI production lifecycle —
              phase by phase, gap by gap — it became clear that frameworks alone are insufficient.
              Teams need working tools, not just guidance.
            </p>
            <p className={styles.body}>
              ainternals is built in public alongside SpanForge. Every utility closes exactly one
              named gap from the SpanForge framework. The two projects are complementary by design.
            </p>
          </section>

          {/* Principles */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Principles</h2>
            <div className={styles.principles}>
              {[
                {
                  n: '1',
                  title: 'Every utility closes a named gap.',
                  desc: 'ainternals does not ship tools in search of problems. Each utility exists because SpanForge identified a specific gap between prototype and production readiness.',
                },
                {
                  n: '2',
                  title: 'CLI-first. Always.',
                  desc: 'Every utility is invocable from a terminal. No web UI, no dashboard, no account required. The CLI is the product.',
                },
                {
                  n: '3',
                  title: 'Zero dependencies. The binary is the product.',
                  desc: 'ainternals utilities are compiled to self-contained binaries. No runtime environment to configure. Drop it in; it works.',
                },
                {
                  n: '4',
                  title: 'Free. No upsell, no freemium, no paid tier.',
                  desc: 'All 85 utilities are free. There is no premium version. There is no consulting offer attached. The tools do the work they claim to do.',
                },
              ].map(({ n, title, desc }) => (
                <div key={n} className={styles.principle}>
                  <span className={styles.principleNum}>{n}</span>
                  <div>
                    <h3 className={styles.principleTitle}>{title}</h3>
                    <p className={styles.principleDesc}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Roadmap */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Roadmap</h2>
            <p className={styles.body}>
              85 utilities are planned across 10 need areas. Build status is public on GitHub.
              The release schedule tracks the SpanForge content roadmap — new utilities ship
              when the corresponding SpanForge gap documentation is complete.
            </p>
            <div className={styles.roadmapStrip}>
              {[
                { label: 'Phase 1', status: 'In progress', desc: 'Core utilities across all 10 need areas' },
                { label: 'Phase 2', status: 'Planned',     desc: 'Full utility detail pages and MDX content' },
                { label: 'Phase 3', status: 'Planned',     desc: 'Accessibility audit, Lighthouse optimisation' },
              ].map(({ label, status, desc }) => (
                <div key={label} className={styles.roadmapItem}>
                  <span className={styles.roadmapLabel}>{label}</span>
                  <span className={`${styles.roadmapStatus} ${status === 'In progress' ? styles.statusActive : styles.statusPlanned}`}>
                    {status}
                  </span>
                  <span className={styles.roadmapDesc}>{desc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Relationship */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Relationship to SpanForge</h2>
            <p className={styles.body}>
              ainternals is the backend of SpanForge. getspanforge.com handles everything above
              the tool layer: the frameworks, the standards, the assessments, the lifecycle guidance.
              ainternals handles everything at the tool layer: the utilities that make those
              frameworks operational.
            </p>
            <p className={styles.body}>
              The two sites are designed to work in concert. SpanForge identifies the gap.
              ainternals ships the tool that closes it.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/spanforge" className="btn-primary">See the full relationship</Link>
              <a href="https://getspanforge.com" className="btn-ghost" target="_blank" rel="noopener noreferrer">
                Visit SpanForge →
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
