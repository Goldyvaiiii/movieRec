import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>Cine<span>Verse</span></h3>
          <p>Your personal movie recommendation platform. Discover the best films tailored to your taste.</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><Link to="/search">Search</Link></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4>Categories</h4>
          <ul>
            <li><Link to="/categories?genre=action">Action</Link></li>
            <li><Link to="/categories?genre=comedy">Comedy</Link></li>
            <li><Link to="/categories?genre=drama">Drama</Link></li>
            <li><Link to="/categories?genre=sci-fi">Sci-Fi</Link></li>
            <li><Link to="/categories?genre=horror">Horror</Link></li>
          </ul>
        </div>
        
        <div className="footer-newsletter">
          <h4>Updates</h4>
          <p>Subscribe to get notifications about new releases and recommendations.</p>
          <form className="newsletter-form">
            <input type="email" className="newsletter-input" placeholder="Your email" aria-label="Email for newsletter" />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-copyright">
          &copy; {currentYear} CineVerse. All rights reserved.
        </div>
        
        <div className="footer-social">
          <a href="#" className="social-icon" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" className="social-icon" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a href="#" className="social-icon" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;