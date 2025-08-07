import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// SQLite veritabanı oluşturma
const db = new sqlite3.Database(join(__dirname, 'messages.db'), (err) => {
  if (err) {
    console.error('Veritabanı bağlantı hatası:', err);
  } else {
    console.log('SQLite veritabanına bağlandı');
    createTable();
  }
});

// Tablo oluşturma
function createTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  db.run(sql, (err) => {
    if (err) {
      console.error('Tablo oluşturma hatası:', err);
    } else {
      console.log('Messages tablosu oluşturuldu');
    }
  });
}

// Admin şifresi (gerçek uygulamada environment variable kullanılmalı)
const ADMIN_PASSWORD = 'admin1642';

// Admin authentication endpoint'i
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  
  if (!password) {
    return res.status(400).json({ error: 'Şifre gerekli' });
  }
  
  if (password === ADMIN_PASSWORD) {
    res.json({ success: true, message: 'Giriş başarılı' });
  } else {
    res.status(401).json({ error: 'Yanlış şifre' });
  }
});

// Mesaj gönderme endpoint'i
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Tüm alanlar zorunludur' });
  }
  
  const sql = 'INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)';
  const params = [name, email, subject, message];
  
  db.run(sql, params, function(err) {
    if (err) {
      console.error('Mesaj kaydetme hatası:', err);
      return res.status(500).json({ error: 'Mesaj kaydedilemedi' });
    }
    
    res.json({ 
      success: true, 
      message: 'Mesaj başarıyla kaydedildi',
      id: this.lastID 
    });
  });
});

// Tüm mesajları getirme endpoint'i
app.get('/api/messages', (req, res) => {
  const sql = 'SELECT * FROM messages ORDER BY created_at DESC';
  
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Mesajları getirme hatası:', err);
      return res.status(500).json({ error: 'Mesajlar getirilemedi' });
    }
    
    res.json(rows);
  });
});

// Belirli bir mesajı getirme endpoint'i
app.get('/api/messages/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM messages WHERE id = ?';
  
  db.get(sql, [id], (err, row) => {
    if (err) {
      console.error('Mesaj getirme hatası:', err);
      return res.status(500).json({ error: 'Mesaj getirilemedi' });
    }
    
    if (!row) {
      return res.status(404).json({ error: 'Mesaj bulunamadı' });
    }
    
    res.json(row);
  });
});

// Mesaj silme endpoint'i
app.delete('/api/messages/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM messages WHERE id = ?';
  
  db.run(sql, [id], function(err) {
    if (err) {
      console.error('Mesaj silme hatası:', err);
      return res.status(500).json({ error: 'Mesaj silinemedi' });
    }
    
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Mesaj bulunamadı' });
    }
    
    res.json({ success: true, message: 'Mesaj başarıyla silindi' });
  });
});

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} adresinde çalışıyor`);
});
