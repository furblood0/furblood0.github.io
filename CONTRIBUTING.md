# Katkıda Bulunma Rehberi

Bu projeye katkıda bulunmak istediğiniz için teşekkürler! Bu rehber, projeye nasıl katkıda bulunabileceğinizi açıklar.

## 🚀 Başlangıç

1. Bu repository'yi fork edin
2. Yerel makinenizde klonlayın:
   ```bash
   git clone https://github.com/furblood0/furblood0.github.io.git
   cd furblood0.github.io
   ```
3. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
4. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```

## 📝 Katkıda Bulunma Süreci

### 1. Issue Oluşturma
- Yeni bir özellik veya bug fix için önce bir issue oluşturun
- Issue'da ne yapmak istediğinizi açıkça belirtin

### 2. Branch Oluşturma
- Her katkı için yeni bir branch oluşturun:
  ```bash
  git checkout -b feature/yeni-ozellik
  # veya
  git checkout -b fix/bug-duzeltme
  ```

### 3. Değişiklikleri Yapma
- Kodunuzu yazın
- Test edin: `npm run lint`
- Build edin: `npm run build`

### 4. Commit ve Push
- Anlamlı commit mesajları yazın:
  ```bash
  git add .
  git commit -m "feat: yeni özellik eklendi"
  git push origin feature/yeni-ozellik
  ```

### 5. Pull Request Oluşturma
- GitHub'da Pull Request oluşturun
- Açıklayıcı bir başlık ve açıklama yazın
- Hangi değişiklikleri yaptığınızı belirtin

## 📋 Commit Mesaj Formatı

Conventional Commits formatını kullanıyoruz:

- `feat:` Yeni özellik
- `fix:` Bug düzeltmesi
- `docs:` Dokümantasyon değişiklikleri
- `style:` Kod formatı değişiklikleri
- `refactor:` Kod refactoring
- `test:` Test ekleme veya düzenleme
- `chore:` Build süreci veya yardımcı araçlar

## 🎨 Kod Standartları

- TypeScript kullanın
- ESLint kurallarına uyun
- Responsive tasarım prensiplerini takip edin
- Accessibility standartlarına uyun
- Modern React hooks kullanın

## 🧪 Test Etme

Değişikliklerinizi test etmek için:

```bash
# Lint kontrolü
npm run lint

# Build test
npm run build

# Preview
npm run preview
```

## 📞 İletişim

Herhangi bir sorunuz varsa:
- Issue oluşturun
- Email gönderin: furkanfidan.2357@gmail.com

## 🙏 Teşekkürler

Katkılarınız için teşekkürler! Bu proje topluluk katkılarıyla daha da iyi hale geliyor. 