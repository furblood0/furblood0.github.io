# Furkan Fidan - Kişisel Portföy Sitesi

Modern, responsive ve full-stack özelliklerle donatılmış profesyonel portföy web sitesi. React, TypeScript, Express.js ve SQLite kullanılarak geliştirilmiştir.

## 🚀 Özellikler

### 🎨 **Frontend**
- **React 19** - Modern React hooks ve özellikler
- **TypeScript** - Tip güvenliği ve geliştirici deneyimi
- **Vite** - Hızlı build tool ve development server
- **React Router DOM** - Client-side routing
- **React Markdown** - Blog içerikleri için markdown desteği
- **Responsive Design** - Mobile-first yaklaşım
- **Modern UI/UX** - CSS Grid, Flexbox, animations

### 🖥️ **Backend**
- **Express.js** - Node.js web framework
- **SQLite** - Hafif ve güvenilir veritabanı
- **RESTful API** - Standart HTTP endpoint'leri
- **CORS** - Cross-origin resource sharing
- **Authentication** - Güvenli admin girişi
- **Input Validation** - Kapsamlı veri doğrulama

### 📧 **İletişim Sistemi**
- **Contact Form** - Backend entegreli iletişim formu
- **Message Storage** - SQLite veritabanında mesaj saklama
- **Admin Panel** - Mesaj yönetimi için güvenli panel
- **Real-time Updates** - Anlık mesaj güncellemeleri
- **Form Validation** - Client ve server-side doğrulama

### 📝 **Blog Sistemi**
- **Markdown Support** - Zengin içerik desteği
- **Categories & Tags** - Kategori ve etiket sistemi
- **Reading Time** - Okuma süresi hesaplama
- **Search & Filter** - Arama ve filtreleme özellikleri
- **Responsive Layout** - Mobil uyumlu blog tasarımı

### 💼 **Proje Vitrini**
- **9 Projects** - Farklı kategorilerde projeler
- **Detailed Descriptions** - Detaylı proje açıklamaları
- **Technology Stack** - Teknoloji stack'i gösterimi
- **GitHub Links** - Kaynak kod linkleri
- **Live Demos** - Canlı demo linkleri
- **Category Filtering** - Kategori bazlı filtreleme

### 🎯 **Performans**
- **Lazy Loading** - Hızlı sayfa yükleme
- **Image Optimization** - Görsel optimizasyonu
- **Code Splitting** - Kod bölme
- **Bundle Optimization** - Bundle optimizasyonu
- **Caching** - Önbellekleme stratejileri

## 📁 Proje Yapısı

```
mySite/
├── backend/                   # Backend API sistemi
│   ├── server.js             # Express.js server
│   ├── package.json          # Backend dependencies
│   ├── messages.db           # SQLite veritabanı
│   └── README.md             # Backend dokümantasyonu
├── public/                    # Statik dosyalar
│   ├── assets/               # Görseller ve dosyalar
│   │   ├── img1.jpg         # Proje görselleri
│   │   ├── img2.jpg
│   │   ├── img3.jpg
│   │   ├── img4.jpg
│   │   ├── profile.jpeg     # Profil fotoğrafı
│   │   └── cv.pdf           # CV dosyası
│   └── favicon.ico          # Site ikonu
├── src/
│   ├── components/          # Yeniden kullanılabilir bileşenler
│   │   ├── Navbar/         # Responsive navigasyon menüsü
│   │   ├── Footer/         # Alt bilgi ve sosyal linkler
│   │   └── Icons/          # Özel ikon bileşenleri
│   ├── pages/              # Sayfa bileşenleri
│   │   ├── HomePage/       # Ana sayfa - Hero section
│   │   ├── AboutPage/      # Hakkımda - Deneyim ve eğitim
│   │   ├── ProjectsPage/   # Projeler - 9 farklı proje
│   │   ├── BlogPage/       # Blog listesi - 3 blog yazısı
│   │   ├── BlogPostDetail/ # Blog detay - Markdown render
│   │   ├── ContactPage/    # İletişim - Backend entegreli form
│   │   └── AdminPage/      # Admin panel - Mesaj yönetimi
│   ├── data/               # Veri dosyaları
│   │   ├── projects.ts     # 9 proje verisi
│   │   └── blogPosts.ts    # 3 blog yazısı
│   ├── styles/             # Global stiller
│   ├── App.tsx             # Ana uygulama bileşeni
│   ├── main.tsx            # Uygulama giriş noktası
│   └── index.css           # Global CSS
├── .github/                # GitHub Actions workflow
├── .gitignore             # Git ignore dosyası
├── package.json           # Frontend bağımlılıkları
├── tsconfig.json          # TypeScript konfigürasyonu
├── vite.config.ts         # Vite konfigürasyonu
├── README.md              # Proje dokümantasyonu
├── LICENSE                # MIT lisansı
├── CONTRIBUTING.md        # Katkı rehberi
└── SECURITY.md            # Güvenlik politikası
```

## 🛠️ Kurulum

### 📋 Gereksinimler
- **Node.js** 18.0.0 veya üzeri
- **npm** 9.0.0 veya üzeri
- **Git** (versiyon kontrolü için)

### 🚀 Hızlı Başlangıç

#### 1. Repository'yi Klonlayın
```bash
git clone https://github.com/furblood0/furblood0.github.io.git
cd furblood0.github.io
```

#### 2. Frontend Kurulumu
```bash
# Frontend bağımlılıklarını yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

#### 3. Backend Kurulumu
```bash
# Backend klasörüne gidin
cd backend

# Backend bağımlılıklarını yükleyin
npm install

# Environment variables ayarlayın
# .env dosyası oluşturun ve ADMIN_PASSWORD ekleyin
echo "ADMIN_PASSWORD=your_secure_password" > .env

# Backend sunucusunu başlatın
npm start
```

#### 4. Tarayıcıda Açın
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3001

## 📦 Scriptler

### Frontend Scriptler
```bash
# Geliştirme sunucusu (hot reload ile)
npm run dev

# Production build
npm run build

# Build önizleme
npm run preview

# Lint kontrolü
npm run lint
```

### Backend Scriptler
```bash
# Production sunucusu
npm start

# Geliştirme sunucusu (nodemon ile)
npm run dev
```

## 🗄️ Veritabanı

### SQLite Yapısı
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

### Veritabanı Özellikleri
- **Otomatik oluşturma** - İlk çalıştırmada tablo oluşturulur
- **Primary key** - Otomatik artan ID
- **Tarih damgası** - Mesaj gönderim zamanı
- **Veri bütünlüğü** - NOT NULL kısıtlamaları

## 🔐 Güvenlik

### Frontend Güvenlik
- **XSS Koruması** - Input sanitization
- **CSRF Koruması** - Token tabanlı koruma
- **Input Validation** - Client-side doğrulama
- **Secure Headers** - Güvenli HTTP header'ları

### Backend Güvenlik
- **SQL Injection Koruması** - Parameterized queries
- **Input Validation** - Server-side doğrulama
- **Authentication** - Şifre tabanlı giriş
- **CORS Configuration** - Cross-origin resource sharing
- **Environment Variables** - Güvenli konfigürasyon

## 🚀 Deployment

### Frontend - GitHub Pages
- **Otomatik Deployment** - Her commit'te otomatik build
- **GitHub Actions** - CI/CD pipeline
- **HTTPS** - Güvenli bağlantı
- **Custom Domain** - furblood0.github.io

### Backend - Render.com
- **Cloud Hosting** - Render.com üzerinde hosting
- **Automatic Deployments** - Git push ile otomatik deploy
- **HTTPS** - SSL sertifikası
- **Environment Variables** - Güvenli konfigürasyon
- **Logs & Monitoring** - Performans izleme

## 📡 API Endpoints

### 🔐 Admin Authentication
- **POST** `/api/admin/login` - Admin panel girişi

### 📧 Mesaj Yönetimi
- **POST** `/api/contact` - Mesaj gönderme
- **GET** `/api/messages` - Tüm mesajları listeleme
- **GET** `/api/messages/:id` - Belirli mesajı getirme
- **DELETE** `/api/messages/:id` - Mesaj silme

## 📊 Proje İstatistikleri

### 💼 Projeler
- **Toplam Proje**: 9 adet
- **Kategoriler**: Full-Stack, Frontend, Mobile, Desktop, Web Game, Browser Extension
- **Öne Çıkan Projeler**: 3 adet
- **Teknolojiler**: React, Node.js, Android, Python, Java, JavaScript

### 📝 Blog Yazıları
- **Toplam Yazı**: 3 adet
- **Kategoriler**: React, TypeScript, CSS
- **Ortalama Okuma Süresi**: 5-7 dakika
- **Markdown Desteği**: ✅

### 🎯 Teknik Özellikler
- **Sayfa Sayısı**: 7 adet (Admin panel dahil)
- **Component Sayısı**: 20+ adet
- **Responsive Breakpoint**: 3 adet
- **Build Time**: ~2-3 dakika
- **API Endpoint'leri**: 4 adet

## 🔗 Canlı Demo

🌐 **Frontend (GitHub Pages)**: https://furblood0.github.io/

🖥️ **Backend API (Render.com)**: https://furblood0-github-io.onrender.com/

## 📧 İletişim

- **GitHub**: [@furblood0](https://github.com/furblood0)
- **Email**: furkanfidan.2357@gmail.com
- **LinkedIn**: [Furkan Fidan](https://linkedin.com/in/furkanfidan)
- **Portfolio**: https://furblood0.github.io/

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🤝 Katkıda Bulunma

Bu projeye katkıda bulunmak istiyorsanız, lütfen [CONTRIBUTING.md](CONTRIBUTING.md) dosyasını okuyun.

## 🛡️ Güvenlik

Güvenlik açıkları için [SECURITY.md](SECURITY.md) dosyasına bakın.

## 🚀 Gelecek Planları

- [ ] **Dark Mode** desteği
- [ ] **PWA** (Progressive Web App) özellikleri
- [ ] **Blog arama** fonksiyonu
- [ ] **Proje filtreleme** geliştirmeleri
- [ ] **SEO optimizasyonları**
- [ ] **Analytics** entegrasyonu
- [ ] **Email notifications** sistemi
- [ ] **File upload** özelliği

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
