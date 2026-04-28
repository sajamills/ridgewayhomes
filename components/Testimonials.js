import styles from './Testimonials.module.css';

const testimonials = [
  { quote: "J.W. and his company has built homes for three different generations in my family. All three times we were very pleased with the quality of work, the professionalism of the team, and the overall experience.", author: "Multi-Generation Client", location: "South Mississippi" },
  { quote: "Nice houses — I couldn't be more satisfied with my custom build. The staff was responsive to us throughout the entire construction.", author: "Custom Home Client", location: "Laurel, MS" },
  { quote: "They remodeled our kitchen, two bathrooms and added 300 square feet. They handled every aspect professionally, communicated well, and have the highest integrity. I absolutely recommend this company.", author: "Renovation Client", location: "Jackson, MS" },
];

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Testimonials</span>
          <h2 className={styles.heading}>Customers still enjoying<br />their homes today.</h2>
          <div className={styles.rule} />
        </div>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div className={styles.card} key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <strong>{t.author}</strong>
                <span>{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
