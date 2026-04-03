import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoAi}>Ai</span>
            <span className={styles.logoInternals}>nternals</span>
          </Link>
          <p className={styles.tagline}>Close the gap. Ship the tool.</p>
          <p className={styles.sub}>The production utility layer for SpanForge teams.</p>
          <a
            href="https://getspanforge.com"
            className={styles.sfLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            getspanforge.com →
          </a>
        </div>

        <div className={styles.col}>
          <span className={styles.colHead}>Product</span>
          <Link href="/spanforge" className={styles.colLink}>SpanForge Relationship</Link>
          <Link href="/about" className={styles.colLink}>About</Link>
        </div>

        <div className={styles.col}>
          <span className={styles.colHead}>Ecosystem</span>
          <a href="https://getspanforge.com" className={styles.colLink} target="_blank" rel="noopener noreferrer">SpanForge</a>
        </div>

      </div>

      <div className={`container ${styles.bottom}`}>
        <span className={styles.copyright}>© 2026 ainternals.com · The utility layer. Backend of SpanForge.</span>
      </div>
    </footer>
  );
}
