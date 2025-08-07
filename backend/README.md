# Backend - İletişim Formu Mesaj Sistemi

Bu backend, kullanıcıların iletişim formundan gönderdiği mesajları SQLite veritabanında saklar ve yönetir.

## Kurulum

1. Backend klasörüne gidin:
```bash
cd backend
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Serveri başlatın:
```bash
npm start
```

Geliştirme modunda çalıştırmak için:
```bash
npm run dev
```

## API Endpoint'leri

### Mesaj Gönderme
- **POST** `/api/contact`
- **Body:**
```json
{
  "name": "Kullanıcı Adı",
  "email": "kullanici@email.com",
  "subject": "Mesaj Konusu",
  "message": "Mesaj içeriği"
}
```

### Tüm Mesajları Listeleme
- **GET** `/api/messages`
- Tüm mesajları tarih sırasına göre döndürür

### Belirli Mesajı Getirme
- **GET** `/api/messages/:id`
- Belirli bir mesajın detaylarını döndürür

### Mesaj Silme
- **DELETE** `/api/messages/:id`
- Belirli bir mesajı siler

## Veritabanı

SQLite veritabanı otomatik olarak `messages.db` dosyasında oluşturulur.

### Tablo Yapısı
```sql
CREATE TABLE messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Frontend Entegrasyonu

1. ContactPage'de mesaj gönderme işlemi backend'e bağlandı
2. Admin sayfası `/admin` route'unda erişilebilir
3. Mesajları görüntüleme ve silme işlemleri mevcut

## Kullanım

1. Backend'i başlatın: `npm start`
2. Frontend'i başlatın: `npm run dev`
3. İletişim sayfasından mesaj gönderin
4. `/admin` sayfasından mesajları görüntüleyin

## Port

Backend varsayılan olarak `3001` portunda çalışır.
