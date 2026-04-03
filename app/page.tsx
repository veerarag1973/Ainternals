import type { Metadata } from 'next';
import Link from 'next/link';
import { utilities, NEED_AREA_LABELS, NEED_AREA_GAP, NEED_AREAS, type NeedArea } from '@/lib/utilities-data';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'ainternals.com — The utility layer. Backend of SpanForge.',
  description:
    '85 production utilities. Rust-native. Zero dependencies. Free. Every tool closes a specific gap between prototype and production.',
};

const NEED_COUNTS: Record<NeedArea, number> = NEED_AREAS.reduce(
  (acc, n) => ({ ...acc, [n]: utilities.filter((u) => u.needArea === n).length }),
  {} as Record<NeedArea, number>,
);

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div>
            <div className={styles.eyebrowRow}>
              <span className={`pulse-red ${styles.pulse}`} aria-hidden="true" />
              <span className="eyebrow">Production utilities for SpanForge teams</span>
            </div>
            <h1 className={styles.h1}>
              The tools that make<br />
              <em className={styles.heroBlue}>SpanForge operational.</em>
            </h1>
            <div className={styles.ctaRow}>
              <Link href="/spanforge" className="btn-primary">Get Started</Link>
              <Link href="/spanforge" className="btn-ghost">What is SpanForge?</Link>
            </div>
          </div>

          <div className={styles.statStrip}>
            {[
              ['85', 'utilities'],
              ['10', 'need areas'],
              ['Rust', 'native'],
              ['Zero', 'dependencies'],
              ['CLI', 'first'],
            ].map(([num, label]) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statNum}>{num}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Relationship ── */}
      <section className={styles.relationship}>
        <div className={`container ${styles.relInner}`}>
          <span className="eyebrow">The two-product model</span>
          <h2 className={styles.h2}>SpanForge sets the standard.<br />ainternals ships the tools.</h2>
          <div className={styles.relCards}>
            <div className={styles.relCard}>
              <span className={styles.relLabel}>getspanforge.com</span>
              <p className={styles.relText}>
                Frameworks, standards, assessments, and lifecycle guidance. Everything an enterprise team
                needs to think clearly about AI production readiness.
              </p>
            </div>
            <div className={`${styles.relCard} ${styles.relCardAccent}`}>
              <span className={styles.relLabel}>ainternals.com</span>
              <p className={styles.relText}>
                Compiled tools that make AI production-safe. 85 utilities across 10 need areas.
                Every tool closes a gap that SpanForge identifies.
              </p>
            </div>
          </div>
          <Link href="/spanforge" className={styles.relLink}>
            See the full relationship →
          </Link>
        </div>
      </section>

      {/* ── The 10 Needs ── */}
      <section className={styles.needsSection}>
        <div className="container">
          <span className="eyebrow">10 need areas</span>
          <h2 className={styles.h2}>Every utility closes a specific gap.</h2>
          <p className={styles.sectionSub}>
            Find the right tool by the problem it solves.
          </p>
          <div className={styles.needsGrid}>
            {NEED_AREAS.map((need, i) => (
              <div
                key={need}
                className={styles.needCard}
              >
                <span className={styles.needNum}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.needName}>{NEED_AREA_LABELS[need]}</h3>
                <p className={styles.needGap}>{NEED_AREA_GAP[need]}</p>
                <span className={styles.needCount}>{NEED_COUNTS[need]} utilities</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gap Statement ── */}
      <section className={styles.gapSection}>
        <div className="container">
          <p className={styles.gapStatement}>
            Most enterprise AI fails not because the model is wrong — but because the
            surrounding system is not production-ready. ainternals closes that gap,
            one utility at a time.
          </p>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className={styles.howSection}>
        <div className="container">
          <span className="eyebrow">How it works</span>
          <h2 className={styles.h2}>Three steps. Fully automated.</h2>
          <div className={styles.steps}>
            {[
              { n: '1', title: 'SpanForge identifies the gap.', desc: 'The framework maps every phase of the AI lifecycle and names every gap between prototype and production.' },
              { n: '2', title: 'ainternals ships the tool.', desc: 'Each utility is purpose-built to close exactly one named gap. CLI-first. Rust-native. Zero dependencies.' },
              { n: '3', title: 'Your CI/CD pipeline runs it.', desc: 'Drop any ainternals utility into a GitHub Actions step. It exits non-zero on failure. Auditable output on every run.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className={styles.step}>
                <span className={styles.stepNum}>{n}</span>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

