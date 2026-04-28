import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logoMark}>RH</span>
            <div>
              <strong>Ridgeway Homes</strong>
              <em>Builders of the American Dream</em>
              <p>John W. Ridgeway Contractors, LLC</p>
            </div>
          </div>
          <div className={styles.links}>
            <span>Services</span>
            <a href="#services">Home Construction</a>
            <a href="#services">Remodeling</a>
            <a href="#services">Additions</a>
            <a href="#services">Damage Restoration</a>
            <a href="#services">Commercial GC</a>
          </div>
          <div className={styles.links}>
            <span>Laurel Office</span>
            <a href="tel:6016512854">(601) 651-2854</a>
            <p style={{fontSize:'12px',color:'rgba(245,241,234,0.35)',lineHeight:'1.6',marginTop:'4px'}}>852 Ellisville Blvd<br/>Laurel, MS 39440<br/>Mon–Fri 8AM–5:30PM<br/>Sat 9AM–2PM</p>
          </div>
          <div className={styles.links}>
            <span>Jackson Office</span>
            <a href="mailto:info@ridgewayhms.com">info@ridgewayhms.com</a>
            <p style={{fontSize:'12px',color:'rgba(245,241,234,0.35)',lineHeight:'1.6',marginTop:'4px'}}>1880 Lakeland Drive, Suite C<br/>Jackson, MS</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} John W. Ridgeway Contractors, LLC · Ridgeway Homes. All rights reserved.</p>
          <p>Licensed General Contractor · State of Mississippi · Est. 1960</p>
        </div>
      </div>
    </footer>
  );
}
