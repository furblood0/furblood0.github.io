# Katkıda Bulunma Rehberi

Bu projeye katkıda bulunmak istediğiniz için teşekkürler! Bu rehber, projeye nasıl katkıda bulunabileceğinizi açıklar. Bu **full-stack** proje hem frontend (React/TypeScript) hem de backend (Node.js/Express) bileşenlerini içerir.

## 🚀 Başlangıç

### 📋 Gereksinimler
- **Node.js** 18.0.0 veya üzeri
- **npm** 9.0.0 veya üzeri
- **Git** (versiyon kontrolü için)

### 🔧 Kurulum

1. **Repository'yi fork edin**
2. **Yerel makinenizde klonlayın**:
   ```bash
   git clone https://github.com/furblood0/furblood0.github.io.git
   cd furblood0.github.io
   ```

3. **Frontend bağımlılıklarını yükleyin**:
   ```bash
   npm install
   ```

4. **Backend bağımlılıklarını yükleyin**:
   ```bash
   cd backend
   npm install
   cd ..
   ```

5. **Geliştirme sunucularını başlatın**:

   **Terminal 1 (Frontend)**:
   ```bash
   npm run dev
   ```

   **Terminal 2 (Backend)**:
   ```bash
   cd backend
   npm run dev
   ```

## 📝 Katkıda Bulunma Süreci

### 1. Issue Oluşturma
- Yeni bir özellik veya bug fix için önce bir issue oluşturun
- Issue'da ne yapmak istediğinizi açıkça belirtin
- **Frontend** veya **Backend** etiketini ekleyin

### 2. Branch Oluşturma
- Her katkı için yeni bir branch oluşturun:
  ```bash
  # Frontend özelliği için
  git checkout -b feature/frontend-yeni-ozellik
  
  # Backend özelliği için
  git checkout -b feature/backend-yeni-ozellik
  
  # Bug fix için
  git checkout -b fix/bug-duzeltme
  ```

### 3. Değişiklikleri Yapma

#### 🎨 Frontend Değişiklikleri
- React/TypeScript kodunuzu yazın
- CSS stillerini güncelleyin
- Component'leri test edin
- Responsive tasarımı kontrol edin

#### 🖥️ Backend Değişiklikleri
- Express.js endpoint'lerini ekleyin/düzenleyin
- Veritabanı şemalarını güncelleyin
- API dokümantasyonunu güncelleyin
- Güvenlik önlemlerini kontrol edin

### 4. Test Etme

#### Frontend Testleri
```bash
# Lint kontrolü
npm run lint

# Build test
npm run build

# Preview
npm run preview
```

#### Backend Testleri
```bash
cd backend

# Lint kontrolü (eğer ESLint kuruluysa)
npm run lint

# Server test
npm start
```

### 5. Commit ve Push
- Anlamlı commit mesajları yazın:
  ```bash
  git add .
  git commit -m "feat: yeni özellik eklendi"
  git push origin feature/yeni-ozellik
  ```

### 6. Pull Request Oluşturma
- GitHub'da Pull Request oluşturun
- Açıklayıcı bir başlık ve açıklama yazın
- Hangi değişiklikleri yaptığınızı belirtin
- **Frontend** veya **Backend** etiketini ekleyin

## 📋 Commit Mesaj Formatı

Conventional Commits formatını kullanıyoruz:

- `feat:` Yeni özellik
- `fix:` Bug düzeltmesi
- `docs:` Dokümantasyon değişiklikleri
- `style:` Kod formatı değişiklikleri
- `refactor:` Kod refactoring
- `test:` Test ekleme veya düzenleme
- `chore:` Build süreci veya yardımcı araçlar
- `api:` Backend API değişiklikleri
- `db:` Veritabanı değişiklikleri

## 🎨 Kod Standartları

### 🎯 Frontend Standartları
- **TypeScript** kullanın
- **ESLint** kurallarına uyun
- **Responsive tasarım** prensiplerini takip edin
- **Accessibility** standartlarına uyun
- **Modern React hooks** kullanın
- **Component-based** mimari kullanın

### 🖥️ Backend Standartları
- **Express.js** best practices'lerini takip edin
- **Error handling** ekleyin
- **Input validation** yapın
- **Security** önlemlerini alın
- **RESTful API** standartlarına uyun
- **Database** işlemlerini optimize edin

## 🧪 Test Etme

### Frontend Testleri
```bash
# Lint kontrolü
npm run lint

# Build test
npm run build

# Preview
npm run preview
```

### Backend Testleri
```bash
cd backend

# Server test
npm start

# API endpoint testleri
# Postman veya curl ile test edin
```

## 🔐 Güvenlik

### Frontend Güvenlik
- **XSS** koruması
- **CSRF** koruması
- **Input sanitization**
- **Secure headers**

### Backend Güvenlik
- **SQL injection** koruması
- **CORS** konfigürasyonu
- **Input validation**
- **Authentication** sistemi
- **Rate limiting**

## 📊 Proje Yapısı

```
mySite/
├── backend/                   # Backend API sistemi
│   ├── server.js             # Express.js server
│   ├── package.json          # Backend dependencies
│   └── README.md             # Backend dokümantasyonu
├── src/                      # Frontend kaynak kodları
│   ├── components/           # React component'leri
│   ├── pages/               # Sayfa component'leri
│   └── data/                # Veri dosyaları
├── public/                   # Statik dosyalar
└── docs/                     # Dokümantasyon
```

## 🚀 Deployment

### Frontend Deployment
- **GitHub Pages** ile otomatik deployment
- **GitHub Actions** workflow
- **Build optimization**

### Backend Deployment
- **Render.com** ile cloud hosting
- **Environment variables**
- **Database management**

## 📞 İletişim

Herhangi bir sorunuz varsa:
- **Issue** oluşturun
- **Email** gönderin: furkanfidan.2357@gmail.com
- **GitHub** discussions kullanın

## 🙏 Teşekkürler

Katkılarınız için teşekkürler! Bu **full-stack** proje topluluk katkılarıyla daha da iyi hale geliyor.

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Katkılarınız da aynı lisans altında olacaktır. 