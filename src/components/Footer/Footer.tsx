// src/components/Footer/Footer.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate('/admin');
  };

  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>&copy; {currentYear} Furkan Fidan. Tüm Hakları Saklıdır.</p>
        {/* Gizli Admin Kutusu */}
        <div className="admin-box" onClick={handleAdminClick} title="Admin Panel">
          <div className="admin-dot"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;