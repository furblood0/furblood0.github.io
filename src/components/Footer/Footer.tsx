// src/components/Footer/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>&copy; {currentYear} Furkan Fidan. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;