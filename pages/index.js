import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ridgeway Homes | Builders of the American Dream | Laurel & Jackson, MS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ridgeway Homes — custom home construction, remodeling, additions, and damage restoration serving Laurel, Jackson, and South Mississippi since 1960. Family owned, three generations." />
        <meta property="og:title" content="Ridgeway Homes | Laurel & Jackson, MS" />
        <meta property="og:description" content="Builders of the American Dream since 1960. Custom homes, remodeling, additions, and commercial contracting across South Mississippi." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <Hero />

        {/* Our Work placeholder section */}
        <section id="our-work" style={{ padding: '7rem 2rem', background: 'var(--white)' }}>
          <div className="container">
            <div style={{ marginBottom: '3rem' }}>
              <span className="section-label">Our Work</span>
              <h2 className="section-heading">Projects across South Mississippi</h2>
              <div className="gold-rule" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {[1,2,3,4,5,6].map(n => (
                <div key={n} style={{ aspectRatio: '4/3', background: 'linear-gradient(145deg, #ECE7DC, #DDD6C8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--charcoal)', opacity: 0.4 }}>
                  Add Project Photo
                </div>
              ))}
            </div>
          </div>
        </section>

        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
