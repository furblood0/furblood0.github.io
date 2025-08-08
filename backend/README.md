# Backend - İletişim Formu Mesaj Sistemi

Bu backend, kullanıcıların iletişim formundan gönderdiği mesajları SQLite veritabanında saklar ve yönetir. **Full-stack** portföy sitesinin backend API'si olarak çalışır.

## 🚀 Özellikler

### 🔐 **Güvenlik**
- **CORS** desteği ile güvenli cross-origin istekler
- **Input validation** ile veri doğrulama
- **SQL injection** koruması
- **Environment variables** ile güvenli konfigürasyon

### 📧 **Mesaj Yönetimi**
- **Mesaj gönderme** - Contact form entegrasyonu
- **Mesaj listeleme** - Tüm mesajları görüntüleme
- **Mesaj detayı** - Belirli mesajın detaylarını görme
- **Mesaj silme** - Gereksiz mesajları silme

### 🔐 **Admin Sistemi**
- **Şifre tabanlı authentication**
- **Session management** - LocalStorage ile oturum yönetimi
- **Güvenli giriş** - Admin panel erişimi
- **Responsive admin arayüzü**

### 🗄️ **Veritabanı**
- **SQLite** - Hafif ve güvenilir veritabanı
- **Otomatik tablo oluşturma**
- **Tarih damgası** - Mesaj gönderim zamanı
- **Primary key** - Otomatik ID ataması

## 🛠️ Kurulum

### 📋 Gereksinimler
- **Node.js** 18.0.0 veya üzeri
- **npm** 9.0.0 veya üzeri

### 🚀 Hızlı Başlangıç

1. **Backend klasörüne gidin**:
```bash
cd backend
```

2. **Bağımlılıkları yükleyin**:
```bash
npm install
```

3. **Environment variables ayarlayın**:
```bash
# .env dosyası oluşturun
ADMIN_PASSWORD=your_secure_password
PORT=3001
```

4. **Serveri başlatın**:
```bash
# Production modu
npm start

# Geliştirme modu (nodemon ile)
npm run dev
```

## 📡 API Endpoint'leri

### 🔐 **Admin Authentication**
- **POST** `/api/admin/login`
- **Description**: Admin panel girişi
- **Body**:
```json
{
  "password": "your_admin_password"
}
```
- **Response**:
```json
{
  "success": true,
  "message": "Giriş başarılı"
}
```

### 📧 **Mesaj Gönderme**
- **POST** `/api/contact`
- **Description**: İletişim formundan mesaj gönderme
- **Body**:
```json
{
  "name": "Kullanıcı Adı",
  "email": "kullanici@email.com",
  "subject": "Mesaj Konusu",
  "message": "Mesaj içeriği"
}
```
- **Response**:
```json
{
  "success": true,
  "message": "Mesaj başarıyla kaydedildi",
  "id": 1
}
```

### 📋 **Tüm Mesajları Listeleme**
- **GET** `/api/messages`
- **Description**: Tüm mesajları tarih sırasına göre listeleme
- **Response**:
```json
[
  {
    "id": 1,
    "name": "Kullanıcı Adı",
    "email": "kullanici@email.com",
    "subject": "Mesaj Konusu",
    "message": "Mesaj içeriği",
    "created_at": "2024-01-15T10:30:00.000Z"
  }
]
```

### 🔍 **Belirli Mesajı Getirme**
- **GET** `/api/messages/:id`
- **Description**: Belirli bir mesajın detaylarını getirme
- **Response**:
```json
{
  "id": 1,
  "name": "Kullanıcı Adı",
  "email": "kullanici@email.com",
  "subject": "Mesaj Konusu",
  "message": "Mesaj içeriği",
  "created_at": "2024-01-15T10:30:00.000Z"
}
```

### 🗑️ **Mesaj Silme**
- **DELETE** `/api/messages/:id`
- **Description**: Belirli bir mesajı silme
- **Response**:
```json
{
  "success": true,
  "message": "Mesaj başarıyla silindi"
}
```

## 🗄️ Veritabanı

### 📊 **Tablo Yapısı**

SQLite veritabanı otomatik olarak `messages.db` dosyasında oluşturulur.

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

### 🔍 **Veritabanı Özellikleri**
- **Otomatik oluşturma** - İlk çalıştırmada tablo oluşturulur
- **Primary key** - Otomatik artan ID
- **Tarih damgası** - Mesaj gönderim zamanı
- **Veri bütünlüğü** - NOT NULL kısıtlamaları

## 🔐 **Güvenlik**

### 🛡️ **CORS Konfigürasyonu**
```javascript
app.use(cors({
  origin: ['https://furblood0.github.io', 'http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
```

### 🔑 **Admin Authentication**
- **Environment variable** ile şifre yönetimi
- **Güvenli şifre** önerisi: En az 8 karakter, karmaşık
- **Şifre hashleme** - Gelecekte bcrypt entegrasyonu

### 📝 **Input Validation**
- **Required fields** kontrolü
- **Email format** doğrulama
- **SQL injection** koruması
- **XSS** koruması

## 🚀 **Deployment**

### 🌐 **Render.com Deployment**

Backend API'si Render.com üzerinde host edilmektedir.

#### 📋 **Deployment Adımları**

1. **Render.com'da hesap oluşturun**
2. **New Web Service** seçin
3. **GitHub repository'yi bağlayın**
4. **Build Command**: `npm install`
5. **Start Command**: `npm start`
6. **Environment Variables** ekleyin:
   - `ADMIN_PASSWORD`: Admin panel şifresi
   - `PORT`: Port numarası (opsiyonel)

#### 🎯 **Deployment Özellikleri**
- **Automatic Deployments** - Git push ile otomatik deploy
- **HTTPS** - SSL sertifikası
- **Environment Variables** - Güvenli konfigürasyon
- **Logs & Monitoring** - Performans izleme
- **Custom Domain** - furblood0-github-io.onrender.com

### 🔧 **Local Development**

```bash
# Geliştirme sunucusu (nodemon ile)
npm run dev

# Production sunucusu
npm start
```

## 📊 **Performans**

### ⚡ **Optimizasyonlar**
- **Connection pooling** - Veritabanı bağlantı yönetimi
- **Error handling** - Kapsamlı hata yönetimi
- **Logging** - Detaylı log sistemi
- **Caching** - Response caching (gelecek)

### 📈 **Monitoring**
- **Request logging** - Tüm isteklerin loglanması
- **Error tracking** - Hata izleme
- **Performance metrics** - Performans metrikleri
- **Uptime monitoring** - Çalışma süresi izleme

## 🔗 **Frontend Entegrasyonu**

### 📧 **Contact Form Integration**
1. **ContactPage**'de mesaj gönderme işlemi backend'e bağlandı
2. **Form validation** ile kullanıcı deneyimi
3. **Loading states** ile kullanıcı geri bildirimi
4. **Error handling** ile hata yönetimi

### 🔐 **Admin Panel Integration**
1. **AdminPage** `/admin` route'unda erişilebilir
2. **Authentication** ile güvenli giriş
3. **Mesaj yönetimi** ile görüntüleme ve silme
4. **Responsive design** ile mobil uyumluluk

## 🛠️ **Geliştirme**

### 📦 **Scriptler**
```bash
# Production sunucusu
npm start

# Geliştirme sunucusu (nodemon ile)
npm run dev

# Build (opsiyonel)
npm run build
```

### 🔧 **Environment Variables**
```bash
# .env dosyası (gerekli)
ADMIN_PASSWORD=your_secure_password
PORT=3001
NODE_ENV=production
```

### 📝 **Dependencies**
```json
{
  "express": "^4.18.2",
  "cors": "^2.8.5",
  "sqlite3": "^5.1.6",
  "body-parser": "^1.20.2"
}
```

## 🚀 **Gelecek Planları**

- [x] **Basic API** endpoints ✅
- [x] **Admin authentication** ✅
- [x] **Database integration** ✅
- [x] **CORS support** ✅
- [ ] **Email notifications** sistemi
- [ ] **File upload** özelliği
- [ ] **Rate limiting** koruması
- [ ] **JWT authentication** sistemi
- [ ] **API documentation** (Swagger)
- [ ] **Database backup** sistemi

## 📧 **İletişim**

- **GitHub**: [@furblood0](https://github.com/furblood0)
- **Email**: furkanfidan.2357@gmail.com
- **Backend URL**: https://furblood0-github-io.onrender.com/

## 📄 **Lisans**

Bu proje MIT lisansı altında lisanslanmıştır.
