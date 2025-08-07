// src/pages/AdminPage/AdminPage.tsx
import React, { useState, useEffect } from 'react';
import './AdminPage.css';

interface Message {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

const AdminPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    // LocalStorage'dan authentication durumunu kontrol et
    const authStatus = localStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      fetchMessages();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://furblood0-github-io.onrender.com/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        localStorage.setItem('adminAuthenticated', 'true');
        setPasswordError('');
        fetchMessages();
      } else {
        setPasswordError('Yanlış şifre!');
        setTimeout(() => {
          setPasswordError('');
        }, 1500);
      }
    } catch (error) {
      setPasswordError('Bağlantı hatası!');
      setTimeout(() => {
        setPasswordError('');
      }, 1500);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
    setMessages([]);
    setSelectedMessage(null);
  };

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://furblood0-github-io.onrender.com/api/messages');
      
      if (!response.ok) {
        throw new Error('Mesajlar getirilemedi');
      }
      
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id: number) => {
    if (!window.confirm('Bu mesajı silmek istediğinizden emin misiniz?')) {
      return;
    }

    try {
      const response = await fetch(`https://furblood0-github-io.onrender.com/api/messages/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Mesaj silinemedi');
      }

      setMessages(messages.filter(msg => msg.id !== id));
      if (selectedMessage?.id === id) {
        setSelectedMessage(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Mesaj silinemedi');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('tr-TR');
  };

  // Giriş sayfası
  if (!isAuthenticated) {
    return (
      <div className="admin-page">
        <div className="admin-container">
          <div className="login-container">
            <div className="login-box">
              <h1>Admin Girişi</h1>
              <p>Mesajları görüntülemek için giriş yapın</p>
              
              <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                  <label htmlFor="password">Şifre</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Şifrenizi girin"
                    required
                  />
                </div>
                
                {passwordError && (
                  <div className="error-message">{passwordError}</div>
                )}
                
                <button type="submit" className="login-button">
                  Giriş Yap
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="admin-page">
        <div className="admin-container">
          <h1>Mesajlar Yükleniyor...</h1>
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-page">
        <div className="admin-container">
          <h1>Hata</h1>
          <p className="error-message">{error}</p>
          <button onClick={fetchMessages} className="retry-button">
            Tekrar Dene
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="admin-header">
          <h1>Gelen Mesajlar</h1>
          <p>Toplam {messages.length} mesaj</p>
          <button onClick={handleLogout} className="logout-button">
            Çıkış Yap
          </button>
        </div>

        <div className="admin-content">
          <div className="messages-list">
            <h2>Mesaj Listesi</h2>
            {messages.length === 0 ? (
              <p className="no-messages">Henüz mesaj yok.</p>
            ) : (
              <div className="messages-grid">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`message-card ${selectedMessage?.id === message.id ? 'selected' : ''}`}
                    onClick={() => setSelectedMessage(message)}
                  >
                    <div className="message-header">
                      <h3>{message.subject}</h3>
                      <span className="message-date">{formatDate(message.created_at)}</span>
                    </div>
                    <div className="message-preview">
                      <p><strong>Gönderen:</strong> {message.name}</p>
                      <p><strong>E-posta:</strong> {message.email}</p>
                      <p className="message-text">
                        {message.message.length > 100 
                          ? `${message.message.substring(0, 100)}...` 
                          : message.message
                        }
                      </p>
                    </div>
                    <button 
                      className="delete-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteMessage(message.id);
                      }}
                    >
                      Sil
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {selectedMessage && (
            <div className="message-detail">
              <div className="message-detail-header">
                <h2>Mesaj Detayı</h2>
                <button 
                  className="close-button"
                  onClick={() => setSelectedMessage(null)}
                >
                  ×
                </button>
              </div>
              
              <div className="message-detail-content">
                <div className="detail-item">
                  <label>Gönderen:</label>
                  <p>{selectedMessage.name}</p>
                </div>
                
                <div className="detail-item">
                  <label>E-posta:</label>
                  <p>{selectedMessage.email}</p>
                </div>
                
                <div className="detail-item">
                  <label>Konu:</label>
                  <p>{selectedMessage.subject}</p>
                </div>
                
                <div className="detail-item">
                  <label>Tarih:</label>
                  <p>{formatDate(selectedMessage.created_at)}</p>
                </div>
                
                <div className="detail-item">
                  <label>Mesaj:</label>
                  <div className="message-text-full">
                    {selectedMessage.message}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
