'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.css';

const links = [
  { href: '/spanforge', label: 'SpanForge' },
  { href: '/about',     label: 'About' },
];

export default function Nav() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} aria-label="Main navigation">
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="ainternals home">
          <span className={styles.logoAi}>Ai</span>
          <span className={styles.logoInternals}>nternals</span>
        </Link>

        {/* Desktop links */}
        <ul className={styles.links} role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.link} ${pathname === href ? styles.active : ''}`}
                aria-current={pathname === href ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu} role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <ul role="list">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.mobileLink} ${pathname === href ? styles.mobileLinkActive : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
