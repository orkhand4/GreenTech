import React from 'react';
import './CardSection.scss';

const CardSection = () => {
  const startups = [
    {
      id: 1,
      title: "SolarNova",
      description: "Yeni nəsil günəş enerjisi texnologiyaları",
      image: "/src/assets/images/suntech.jpeg",
      features: ["100% bərpa olunan enerji", "Yüksək səmərəlilik", "İnnovativ dizayn"],
    },
    {
      id: 2,
      title: "GreenTransport",
      description: "Elektrik nəqliyyat həlləri",
      image: "/src/assets/images/grskuter.jpeg",
      features: ["Sıfır emissiya", "Ağıllı naviqasiya", "Batareya texnologiyaları"],
    },
    {
      id: 3,
      title: "EcoWaste",
      description: "Tullantıların təkrar emalı platforması",
      image: "/src/assets/images/recycling.jpg",
      features: ["AI ilə optimallaşdırma", "Şəhər həlləri", "Davamlı ekosistem"],
    }
  ];

  return (
    <section className="card-section">
      <div className="container">
        <div className="section-header">
          <h2>Ən İnnovativ Startaplar</h2>
          <p>Ekoloji texnologiyalar sahəsində gələcəyi formalaşdıran startapları kəşf edin</p>
        </div>
        
        <div className="cards-container">
          {startups.map(startup => (
            <div className="card-item" key={startup.id}>
              <div className="card-image">
                <img src={startup.image} alt={startup.title} />
              </div>
              <div className="card-content">
                <h3>{startup.title}</h3>
                <p>{startup.description}</p>
                <ul className="card-features">
                  {startup.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <a href="#" className="btn-primary">Daha ətraflı</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;