# Furkan Fidan - Kişisel Portföy Sitesi

Bu proje, Furkan Fidan'ın kişisel portföy web sitesidir. React, TypeScript ve Vite kullanılarak geliştirilmiş modern, responsive ve kapsamlı bir web uygulamasıdır.

## 🚀 Özellikler

### 🎨 **Modern Teknoloji Stack**
- **React 19** - En son React sürümü ile modern hooks ve özellikler
- **TypeScript** - Tip güvenliği ve geliştirici deneyimi
- **Vite** - Hızlı build tool ve development server
- **React Router DOM** - Client-side routing
- **React Markdown** - Blog içerikleri için markdown desteği

### 📱 **Responsive Tasarım**
- **Mobile-First** yaklaşım
- **CSS Grid & Flexbox** ile modern layout
- **Tüm cihazlarda** mükemmel görünüm (Desktop, Tablet, Mobile)
- **Touch-friendly** navigasyon

### 📝 **Blog Sistemi**
- **Markdown desteği** ile zengin içerik
- **Kategori ve etiket sistemi**
- **Okuma süresi** hesaplama
- **Arama ve filtreleme** özellikleri
- **Responsive blog layout**

### 💼 **Proje Vitrini**
- **9 farklı proje** kategorisi
- **Detaylı proje açıklamaları**
- **Teknoloji stack'i** gösterimi
- **GitHub ve demo linkleri**
- **Proje görselleri**
- **Kategori filtreleme**

### 📧 **İletişim Sistemi**
- **Modern contact form**
- **Sosyal medya linkleri**
- **Email entegrasyonu**
- **Responsive contact layout**

### 🎯 **Performans Optimizasyonları**
- **Lazy loading** ile hızlı sayfa yükleme
- **Image optimization**
- **Code splitting**
- **Bundle optimization**

## 📁 Proje Yapısı

```
mySite/
├── public/                    # Statik dosyalar
│   ├── assets/               # Görseller ve dosyalar
│   │   ├── img1.jpg         # Proje görselleri
│   │   ├── img2.jpg
│   │   ├── img3.jpg
│   │   ├── img4.jpg
│   │   ├── profile.jpeg     # Profil fotoğrafı
│   │   └── Furkan_Fidan_CV.pdf # CV dosyası
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
│   │   └── ContactPage/    # İletişim - Contact form
│   ├── data/               # Veri dosyaları
│   │   ├── projects.ts     # 9 proje verisi
│   │   └── blogPosts.ts    # 3 blog yazısı
│   ├── styles/             # Global stiller
│   ├── App.tsx             # Ana uygulama bileşeni
│   ├── main.tsx            # Uygulama giriş noktası
│   └── index.css           # Global CSS
├── .github/                # GitHub Actions workflow
├── .gitignore             # Git ignore dosyası
├── package.json           # Proje bağımlılıkları
├── tsconfig.json          # TypeScript konfigürasyonu
├── vite.config.ts         # Vite konfigürasyonu
├── README.md              # Proje dokümantasyonu
├── LICENSE                # MIT lisansı
├── CONTRIBUTING.md        # Katkı rehberi
└── SECURITY.md            # Güvenlik politikası
```

## 🛠️ Kurulum ve Geliştirme

### 📋 Gereksinimler
- **Node.js** 18.0.0 veya üzeri
- **npm** 9.0.0 veya üzeri
- **Git** (versiyon kontrolü için)

### 🚀 Hızlı Başlangıç

```bash
# Repository'yi klonlayın
git clone https://github.com/furblood0/furblood0.github.io.git
cd furblood0.github.io

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda `http://localhost:5173` adresini açın.

### 📦 Mevcut Scriptler

```bash
# Geliştirme sunucusu (hot reload ile)
npm run dev

# Production build
npm run build

# Build önizleme
npm run preview

# Lint kontrolü
npm run lint

# TypeScript tip kontrolü
npm run type-check
```

### 🔧 Geliştirme Ortamı

- **Hot Module Replacement (HMR)** - Kod değişikliklerinde anında güncelleme
- **TypeScript** - Gerçek zamanlı tip kontrolü
- **ESLint** - Kod kalitesi kontrolü
- **Vite DevTools** - Geliştirme araçları

## 📝 Kullanılan Teknolojiler

### 🎯 **Frontend Framework**
- **React 19.1.1** - Modern React hooks ve özellikler
- **TypeScript 5.8.3** - Tip güvenliği ve geliştirici deneyimi
- **React Router DOM 7.7.1** - Client-side routing

### 🛠️ **Build Tools & Development**
- **Vite 7.0.6** - Hızlı build tool ve dev server
- **SWC** - Hızlı JavaScript/TypeScript compiler
- **ESLint 9.30.1** - Kod kalitesi kontrolü

### 📚 **Content & Styling**
- **React Markdown 10.1.0** - Markdown render etme
- **Remark GFM 4.0.1** - GitHub Flavored Markdown
- **React Icons 5.5.0** - İkon kütüphanesi
- **CSS3** - Modern styling ve animations

### 🔧 **Development Tools**
- **TypeScript ESLint** - TypeScript linting
- **React Hooks ESLint Plugin** - Hooks kuralları
- **React Refresh Plugin** - Hot reload

### 📦 **Package Management**
- **npm** - Package manager
- **Node.js 18+** - Runtime environment

## 🚀 GitHub Pages Deployment

Bu proje GitHub Pages ile otomatik olarak deploy edilir. Her `main` branch'e push yaptığınızda otomatik olarak güncellenir.

### 🎯 **Deployment Özellikleri**
- **Otomatik Build** - Her commit'te otomatik build
- **GitHub Actions** - CI/CD pipeline
- **Cache Optimization** - Hızlı build süreleri
- **HTTPS** - Güvenli bağlantı
- **Custom Domain** - furblood0.github.io

### 📋 **Deployment Adımları**

1. **GitHub'da repository oluşturun** (örn: `furblood0.github.io`)
2. **Repository'yi klonlayın**:
   ```bash
   git clone https://github.com/furblood0/furblood0.github.io.git
   ```
3. **Proje dosyalarını kopyalayın**
4. **GitHub Pages'i aktifleştirin**:
   - Repository Settings > Pages
   - Source: "GitHub Actions" seçin
5. **Push yapın**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

### 🔧 **GitHub Actions Workflow**

`.github/workflows/deploy.yml` dosyası şunları yapar:
- **Node.js 18** kullanır
- **npm ci** ile hızlı dependency yükleme
- **Build optimization** ile küçük bundle
- **Artifact upload** ile GitHub Pages'e deploy
- **Concurrent deployment** koruması

### 📊 **Build Performansı**
- **Build Time**: ~2-3 dakika
- **Bundle Size**: Optimized
- **Cache Hit Rate**: %95+
- **Deployment Time**: ~1 dakika

## 🔗 Canlı Demo

🌐 **GitHub Pages**: https://furblood0.github.io/

## 📊 **Proje İstatistikleri**

### 💼 **Projeler**
- **Toplam Proje**: 9 adet
- **Kategoriler**: Full-Stack, Frontend, Mobile, Desktop, Web Game, Browser Extension
- **Öne Çıkan Projeler**: 3 adet
- **Teknolojiler**: React, Node.js, Android, Python, Java, JavaScript

### 📝 **Blog Yazıları**
- **Toplam Yazı**: 3 adet
- **Kategoriler**: React, TypeScript, CSS
- **Ortalama Okuma Süresi**: 5-7 dakika
- **Markdown Desteği**: ✅

### 🎯 **Teknik Özellikler**
- **Sayfa Sayısı**: 6 adet
- **Component Sayısı**: 15+ adet
- **Responsive Breakpoint**: 3 adet
- **Build Time**: ~2-3 dakika

## 📧 **İletişim**

- **GitHub**: [@furblood0](https://github.com/furblood0)
- **Email**: furkanfidan.2357@gmail.com
- **LinkedIn**: [Furkan Fidan](https://linkedin.com/in/furkanfidan)
- **Portfolio**: https://furblood0.github.io/

## 📄 **Lisans**

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🤝 **Katkıda Bulunma**

Bu projeye katkıda bulunmak istiyorsanız, lütfen [CONTRIBUTING.md](CONTRIBUTING.md) dosyasını okuyun.

## 🛡️ **Güvenlik**

Güvenlik açıkları için [SECURITY.md](SECURITY.md) dosyasına bakın.

## 🚀 **Gelecek Planları**

- [ ] **Dark Mode** desteği
- [ ] **PWA** (Progressive Web App) özellikleri
- [ ] **Blog arama** fonksiyonu
- [ ] **Proje filtreleme** geliştirmeleri
- [ ] **SEO optimizasyonları**
- [ ] **Analytics** entegrasyonu

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
