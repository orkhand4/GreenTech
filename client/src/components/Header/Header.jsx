import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <Link to="/">
              <img src="/src/assets/images/greentechno.svg" alt="EcoTech" />
            </Link>
          </div>

          <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><Link to="/startups">Startaplar</Link></li>
              <li><Link to="/investors">İnvestorlar</Link></li>
              <li><Link to="/grants">Qrantlar</Link></li>
              <li><Link to="/events">Tədbirlər</Link></li>
              <li><Link to="/resources">Resurslar</Link></li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="tel:+994123456789" className="phone-link">+994 12 345 67 89</a>
            <Link to="/register" className="btn-primary">Qeydiyyat</Link>
            <Link to="/login" className="btn-secondary">Daxil ol</Link>
          </div>

          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;