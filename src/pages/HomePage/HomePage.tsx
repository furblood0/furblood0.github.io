// src/pages/HomePage/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <section className="homepage">
      <div className="hero-section">
        <div className="hero-content">
          {/* Profil resmini en üste taşıdık */}
          <img src={`${import.meta.env.BASE_URL}assets/profile.jpeg`} alt="Furkan Fidan'ın Profil Fotoğrafı" className="profile-picture" />
          
          {/* Metin içeriği */}
          <div className="hero-text-content">
            <h1 className="hero-title">
              <span className="hero-title-line1">Merhaba,</span>
              <span className="hero-title-line2">Ben Furkan Fidan.</span>
            </h1>
            <p className="hero-subtitle">
              Bir Bilgisayar Mühendisi Adayı ve Web Geliştiricisiyim.
            </p>
            <p className="hero-description">
              Yaratıcı ve işlevsel web deneyimleri tasarlamayı ve geliştirmeyi seviyorum. Projelerimi ve ilgi alanlarımı keşfetmek için menüyü kullanabilir veya aşağıdaki butonlara tıklayabilirsiniz.
            </p>
            {/* Butonları hero-text-content içine taşıdık */}
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">Projelerimi Gör</Link>
              <Link to="/contact" className="btn btn-secondary">İletişime Geç</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;