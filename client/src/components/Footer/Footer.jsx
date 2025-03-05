import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="/src/assets/images/ecotech-logo.svg" alt="EcoTech" />
            <p>İnnovativ ekoloji texnologiyalarla gələcəyi dəyişirik</p>
          </div>
          
          <div className="footer-nav">
            <div className="footer-nav-column">
              <h4>Startaplar</h4>
              <ul>
                <li><Link to="/startups">Aktiv Startaplar</Link></li>
                <li><Link to="/apply">Başvuru</Link></li>
                <li><Link to="/success-stories">Uğur Hekayələri</Link></li>
              </ul>
            </div>
            
            <div className="footer-nav-column">
              <h4>İnvestorlar</h4>
              <ul>
                <li><Link to="/investment-opportunities">İmkanlar</Link></li>
                <li><Link to="/become-investor">İnvestor Ol</Link></li>
                <li><Link to="/investor-network">Şəbəkə</Link></li>
              </ul>
            </div>
            
            <div className="footer-nav-column">
              <h4>Resurslar</h4>
              <ul>
                <li><Link to="/blog">Texnoloji Blog</Link></li>
                <li><Link to="/events">Tədbirlər</Link></li>
                <li><Link to="/guides">Bələdçilər</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-contact">
            <h4>Əlaqə</h4>
            <div className="contact-item">
              <span>Telefon:</span>
              <a href="tel:+994123456789">+994 12 345 67 89</a>
            </div>
            <div className="contact-item">
              <span>E-poçt:</span>
              <a href="mailto:info@ecotech.az">info@ecotech.az</a>
            </div>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} EcoTech. Bütün hüquqlar qorunur.
          </div>
          <div className="footer-links">
            <Link to="/privacy">Məxfilik Siyasəti</Link>
            <Link to="/terms">İstifadə Şərtləri</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;