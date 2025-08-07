// src/pages/ContactPage/ContactPage.tsx
import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Mesaj gönderilemedi');
      }

      await response.json(); // Response'u okumak için gerekli
      alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Bir hata oluştu');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h1>İletişime Geçin</h1>
          <p className="contact-subtitle">
            Projeleriniz, iş fırsatları veya sadece merhaba demek için benimle iletişime geçmekten çekinmeyin!
          </p>
        </div>

        <div className="contact-content-wrapper">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Mesaj Gönder</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Adınız Soyadınız *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Adınızı ve soyadınızı girin"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-posta Adresiniz *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Mesajınızın konusunu belirtin"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <button 
                type="submit" 
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Gönderiliyor...
                  </>
                ) : (
                  'Mesajı Gönder'
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-section">
            <h2>İletişim Bilgileri</h2>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>E-posta</h3>
                <p>furkanfidan.2357@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h3>Konum</h3>
                <p>Konya, Türkiye</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="contact-details">
                <h3>Yanıt Süresi</h3>
                <p>24 saat içinde</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;