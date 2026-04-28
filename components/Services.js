import styles from './Services.module.css';

const services = [
  { title: 'Single-Family Home Construction', body: 'Custom homes built to your spec on your land. From foundation to finish, we manage every phase.' },
  { title: 'Manufactured & Modular Homes', body: 'High-quality manufactured and modular home construction — built faster, priced smarter.' },
  { title: 'Home Additions & New Rooms', body: 'Adding square footage? We build additions and new room construction that match your existing home.' },
  { title: 'Kitchen & Bathroom Remodeling', body: 'Full kitchen and bath renovations — design, demo, and build handled by one crew.' },
  { title: 'Damage Restoration', body: 'Fire, flood, or storm damage? We rebuild and restore residential and commercial properties.' },
  { title: 'Guest House & ADU Construction', body: 'Accessory dwelling units, guest houses, and in-law suites — fully permitted and built to last.' },
  { title: 'Building Additions', body: 'Office expansions, garage additions, covered patios — structural additions done right.' },
  { title: 'Commercial General Contracting', body: 'Commercial builds and renovations across South Mississippi. Licensed, bonded, and experienced.' },
  { title: 'Home Development', body: 'From lot acquisition to subdivision development, we work with real estate investors and developers.' },
  { title: 'New Structure Construction', body: 'Barns, workshops, outbuildings, and new commercial structures — any size, any scope.' },
  { title: 'Real Estate Renovation', body: 'Investor or landlord? We renovate and restore properties to maximize value and habitability.' },
  { title: 'Disaster Reconstruction', body: 'Full reconstruction after catastrophic damage. We\'ve helped families rebuild from the ground up.' },
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="section-label">Services</span>
            <h2 className="section-heading">Whatever you need built,<br />we build it.</h2>
            <div className="gold-rule" />
          </div>
          <p className={styles.note}>
            All services verified by Yelp.<br />
            Serving Laurel, Jackson & the entire Pine Belt.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <div className={styles.card} key={s.title} style={{ animationDelay: `${i * 0.05}s` }}>
              <span className={styles.num}>0{i + 1}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardBody}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
