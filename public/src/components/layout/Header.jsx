import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import SearchBar from '../common/SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchActive(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchActive(!isSearchActive);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">Cine<span>Verse</span></Link>
        
        <nav>
          <ul className="nav-links">
            <li><NavLink to="/" className="nav-link" end>Home</NavLink></li>
            <li><NavLink to="/categories" className="nav-link">Categories</NavLink></li>
            <li><NavLink to="/favorites" className="nav-link">Favorites</NavLink></li>
          </ul>
        </nav>
        
        <div className="header-actions">
          {isSearchActive ? (
            <SearchBar onClose={toggleSearch} />
          ) : (
            <button className="search-button" onClick={toggleSearch} aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          )}
          
          <button className="mobile-menu-button" onClick={toggleMenu} aria-expanded={isMenuOpen} aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
      
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" className="nav-link" end>Home</NavLink>
        <NavLink to="/categories" className="nav-link">Categories</NavLink>
        <NavLink to="/favorites" className="nav-link">Favorites</NavLink>
      </div>
    </header>
  );
};

export default Header;