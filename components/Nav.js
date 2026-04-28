import { useState, useEffect } from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Services', 'Our Work', 'About', 'Testimonials', 'Contact'];

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#home" className={styles.logo}>
          <span className={styles.logoMark}>RH</span>
          <span className={styles.logoText}>
            <strong>Ridgeway Homes</strong>
            <em>Builders of the American Dream</em>
          </span>
        </a>
        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setOpen(false)}>{l}</a>
            </li>
          ))}
          <li><a href="#contact" className={styles.navCta} onClick={() => setOpen(false)}>Get a Quote</a></li>
        </ul>
        <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={open ? styles.x1 : ''} />
          <span className={open ? styles.x2 : ''} />
          <span className={open ? styles.x3 : ''} />
        </button>
      </div>
    </nav>
  );
}
