import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Yaşıl gələcəyə innovativ həllər</h1>
            <p>EcoTech startap ekosistemi ilə ekoloji texnologiyaları inkişaf etdirin, təmiz enerji layihələrinə investisiya qoyun və dünyamızı dəyişin.</p>
            <div className="hero-buttons">
              <a href="#startups" className="btn-primary">Startapları kəşf et</a>
              <a href="#how-it-works" className="btn-secondary">Necə işləyir?</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/src/assets/images/grtech.avif" alt="EcoTech Innovation" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;