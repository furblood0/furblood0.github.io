# Furkan Fidan - Kişisel Portföy Sitesi

Bu proje, Furkan Fidan'ın kişisel portföy web sitesidir. React, TypeScript ve Vite kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Modern Teknoloji Stack**: React 19 + TypeScript + Vite
- **Responsive Tasarım**: Tüm cihazlarda uyumlu
- **Blog Sistemi**: Markdown desteği ile blog yazıları
- **Proje Vitrini**: GitHub projelerinizi sergileyin
- **İletişim Sayfası**: Ziyaretçilerle iletişim kurun

## 📁 Proje Yapısı

```
src/
├── components/     # Yeniden kullanılabilir bileşenler
│   ├── Navbar/    # Navigasyon menüsü
│   ├── Footer/    # Alt bilgi
│   └── Icons/     # İkon bileşenleri
├── pages/         # Sayfa bileşenleri
│   ├── HomePage/  # Ana sayfa
│   ├── AboutPage/ # Hakkımda
│   ├── ProjectsPage/ # Projeler
│   ├── BlogPage/  # Blog listesi
│   ├── BlogPostDetail/ # Blog detay
│   └── ContactPage/ # İletişim
├── data/          # Veri dosyaları
│   ├── projects.ts # Proje verileri
│   └── blogPosts.ts # Blog yazıları
└── styles/        # Global stiller
```

## 🛠️ Kurulum

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Production build
npm run build

# Lint kontrolü
npm run lint
```

## 📝 Kullanılan Teknolojiler

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS Modules
- **Markdown**: React Markdown
- **Icons**: React Icons

## 🚀 GitHub Pages Deployment

Bu proje GitHub Pages ile otomatik olarak deploy edilir. Her `main` branch'e push yaptığınızda otomatik olarak güncellenir.

### Deployment Adımları:

1. **GitHub'da yeni repository oluşturun** (örn: `mySite`)
2. **Repository'yi klonlayın**:
   ```bash
   git clone https://github.com/kullanici-adi/mySite.git
   ```
3. **Proje dosyalarını kopyalayın**
4. **Repository adını güncelleyin**:
   - `vite.config.ts` dosyasında `base: '/mySite/'` kısmını kendi repository adınızla değiştirin
5. **GitHub Pages'i aktifleştirin**:
   - Repository Settings > Pages
   - Source: "GitHub Actions" seçin
6. **Push yapın**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

## 🔗 Canlı Demo

🌐 **GitHub Pages**: https://furblood0.github.io/

## 📧 İletişim

- **GitHub**: [@furblood0](https://github.com/furblood0)
- **Email**: [Email adresiniz]

---

Bu proje MIT lisansı altında lisanslanmıştır.
