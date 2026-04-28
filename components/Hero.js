import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.badges}>
          <span>Est. 1960</span>
          <span className={styles.dot}>·</span>
          <span>Laurel & Jackson, MS</span>
          <span className={styles.dot}>·</span>
          <span>Residential & Commercial</span>
        </div>
        <h1 className={styles.heading}>
          Builders of<br />
          <em>the American Dream.</em>
        </h1>
        <div className={styles.rule} />
        <p className={styles.sub}>
          Since 1960, Ridgeway Homes has built homes, additions, and commercial structures
          across South Mississippi — three generations of quality that still stands.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className="btn-primary">
            Request a Quote
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/></svg>
          </a>
          <a href="#services" className="btn-outline">View Our Services</a>
        </div>
      </div>

      <div className={styles.stat}>
        <div className={styles.statItem}><strong>65+ Years</strong><span>In Business</span></div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}><strong>2 Locations</strong><span>Laurel & Jackson</span></div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}><strong>12 Services</strong><span>Verified by Yelp</span></div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}><strong>3 Generations</strong><span>Family Owned</span></div>
      </div>

      <a href="#services" className={styles.scrollCue} aria-label="Scroll down">
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>
      </a>
    </section>
  );
}
