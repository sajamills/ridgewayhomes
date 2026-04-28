import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.imgCol}>
            <div className={styles.imgPlaceholder}>
              {/* Replace with actual photo of J.W. Sr. or job site */}
              Add Photo Here
            </div>
            <div className={styles.founded}>
              <strong>Est.</strong>
              <span>1960</span>
            </div>
          </div>

          <div className={styles.content}>
            <span className="section-label">Our Story</span>
            <h2 className="section-heading">
              Three generations.<br />
              <em style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--gold)' }}>One standard of work.</em>
            </h2>
            <div className="gold-rule" />
            <p className={styles.body}>
              Ridgeway Homes was founded by J.W. Ridgeway Sr. in 1960 as J.W. Ridgeway Contractors in Butler, Alabama. 
              When he traveled to Laurel, Mississippi, he saw an unmet need for quality construction and residential 
              housing across South Mississippi — so he relocated and built a company around it.
            </p>
            <p className={styles.body}>
              In 2005, the family created Ridgeway Homes as a dedicated single-family home building operation, 
              allowing them to give prospective homeowners the focused attention they deserved. Since 1960, 
              the company has left nothing behind but a ledger full of satisfied customers still enjoying 
              their homes today.
            </p>

            <div className={styles.team}>
              <div className={styles.teamCard}>
                <div className={styles.avatar}>JR</div>
                <div>
                  <strong>John Ridgeway Jr.</strong>
                  <span>Vice President of Operations</span>
                  <p>John has been a lifelong employee — from fetching water on job sites to directing project management, estimation, purchasing, and company-wide strategy. He works with every client personally.</p>
                </div>
              </div>
            </div>

            <div className={styles.locations}>
              <div className={styles.loc}>
                <span className={styles.locLabel}>Laurel Office</span>
                <span>852 Ellisville Blvd, Laurel, MS 39440</span>
                <span>Mon–Fri 8AM–5:30PM · Sat 9AM–2PM</span>
              </div>
              <div className={styles.loc}>
                <span className={styles.locLabel}>Jackson Office</span>
                <span>1880 Lakeland Drive, Suite C</span>
                <span>Jackson, MS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
