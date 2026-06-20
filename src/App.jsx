import './App.css'

export default function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">✨ Momin Edits</div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>🎬 Professional Editing Services</h1>
          <p>Transform your vision into stunning visuals. Video editing, photo editing, and motion graphics that captivate.</p>
          <button className="cta-button" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎥</div>
              <h3>Video Editing</h3>
              <p>Professional video editing with color grading, transitions, and effects.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📸</div>
              <h3>Photo Editing</h3>
              <p>Enhance your photos with professional retouching and color correction.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">✂️</div>
              <h3>Motion Graphics</h3>
              <p>Eye-catching animations and motion graphics for promotional videos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2>Recent Projects</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-placeholder">📹</div>
              <h3>YouTube Intro</h3>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-placeholder">🎞️</div>
              <h3>Wedding Video</h3>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-placeholder">🎬</div>
              <h3>Product Promo</h3>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-placeholder">✨</div>
              <h3>Photo Editing</h3>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-placeholder">🎨</div>
              <h3>Motion Design</h3>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-placeholder">🎭</div>
              <h3>Social Content</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <form className="contact-form" onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const email = e.target.email.value;
            alert(`Thank you ${name}! We'll contact you at ${email} soon.`);
            e.target.reset();
          }}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Momin Edits. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
