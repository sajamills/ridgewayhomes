import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', location: '', description: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.left}>
            <span className="section-label">Get a Quote</span>
            <h2 className="section-heading">Tell us what you're building.</h2>
            <div className="gold-rule" />
            <p className={styles.body}>Fill out the form and John or a member of our team will be in touch within one business day to talk through your project.</p>
            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Phone</span>
                <a href="tel:6016512854" className={styles.detailValue}>(601) 651-2854</a>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Email</span>
                <a href="mailto:info@ridgewayhms.com" className={styles.detailValue}>info@ridgewayhms.com</a>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Laurel Office</span>
                <span className={styles.detailValue}>852 Ellisville Blvd<br/>Laurel, MS 39440</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Jackson Office</span>
                <span className={styles.detailValue}>1880 Lakeland Drive, Suite C<br/>Jackson, MS</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Hours</span>
                <span className={styles.detailValue}>Mon–Fri 8:00 AM – 5:30 PM<br/>Saturday 9:00 AM – 2:00 PM</span>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h3>We received your project details.</h3>
                <p>Someone from Ridgeway Homes will follow up within one business day.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}><label>Full Name *</label><input name="name" type="text" required placeholder="Your name" value={form.name} onChange={handleChange} /></div>
                  <div className={styles.field}><label>Phone *</label><input name="phone" type="tel" required placeholder="(601) 000-0000" value={form.phone} onChange={handleChange} /></div>
                </div>
                <div className={styles.field}><label>Email</label><input name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handleChange} /></div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label>Service Needed</label>
                    <select name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select...</option>
                      <option>Single-Family Home Construction</option>
                      <option>Manufactured / Modular Home</option>
                      <option>Home Addition or New Room</option>
                      <option>Kitchen or Bathroom Remodel</option>
                      <option>Damage / Disaster Restoration</option>
                      <option>Guest House / ADU Construction</option>
                      <option>Commercial General Contracting</option>
                      <option>Other / Not sure yet</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label>Nearest Location</label>
                    <select name="location" value={form.location} onChange={handleChange}>
                      <option value="">Select...</option>
                      <option>Laurel / Pine Belt Area</option>
                      <option>Jackson Area</option>
                      <option>Other South Mississippi</option>
                    </select>
                  </div>
                </div>
                <div className={styles.field}><label>Tell us about your project</label><textarea name="description" rows={5} placeholder="What are you looking to build or renovate? Any timeline or budget info helps." value={form.description} onChange={handleChange} /></div>
                <button type="submit" className={`btn-primary ${styles.submit}`}>
                  Submit Project Request
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/></svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
