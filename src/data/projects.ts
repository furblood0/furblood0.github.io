// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveDemoLink?: string; // Canlı demo linki isteğe bağlı
  image?: string; // Proje görseli için yol
  category?: string; // Proje kategorisi
  featured?: boolean; // Öne çıkan proje mi?
}

const projects: Project[] = [
  {
    id: 1,
    title: 'MyBlog - Full-Stack Blog Application',
    description: 'Modern, full-stack blog uygulaması. React frontend ve Node.js backend ile geliştirilmiş, kullanıcı kimlik doğrulama, blog yazısı yönetimi ve responsive tasarım özelliklerine sahip. JWT token tabanlı güvenli kimlik doğrulama, taslak sistemi, gerçek zamanlı güncellemeler ve arama fonksiyonu içeriyor.',
    technologies: [
      'React 19',
      'Node.js',
      'Express.js',
      'Microsoft SQL Server',
      'JWT',
      'Bcrypt.js',
      'Axios',
      'React Router DOM',
      'CSS3'
    ],
    githubLink: 'https://github.com/furblood0/MyBlogProject/tree/main',
    liveDemoLink: '#', // Demo linki varsa buraya eklenebilir
    image: `${import.meta.env.BASE_URL}assets/img1.jpg`, // Blog projesi için uygun görsel
    category: 'Full-Stack Web App',
    featured: true // Bu öne çıkan bir proje
  },
  {
    id: 2,
    title: 'YouTube Clone',
    description: 'HTML ve CSS ile geliştirilmiş responsive YouTube klonu. Modern tasarım ve orijinal YouTube arayüzüne benzer özellikler içeriyor. Header bölümü, sidebar navigasyon, video grid sistemi ve mobil uyumlu tasarım ile tam fonksiyonel bir YouTube arayüzü.',
    technologies: [
      'HTML5',
      'CSS3',
      'Flexbox',
      'CSS Grid',
      'Responsive Design',
      'Google Fonts',
      'SVG Icons'
    ],
    githubLink: 'https://github.com/furblood0/Youtube-clone',
    liveDemoLink: '#', // Demo linki varsa buraya eklenebilir
    image: `${import.meta.env.BASE_URL}assets/img2.jpg`, // YouTube clone için uygun görsel
    category: 'Frontend Web App',
    featured: false
  },
  {
    id: 3,
    title: 'Clash of Words - Android Game',
    description: 'Türkçe kelime tabanlı çok oyunculu Android oyunu. Gerçek zamanlı kelime savaşları, kullanıcı profilleri, oyun içi mağaza ve Firebase entegrasyonu ile geliştirilmiş. Farklı kategorilerde sorular, altın sistemi, enerji mekanizması ve liderlik tablosu özellikleri içeriyor.',
    technologies: [
      'Java 11',
      'Android SDK',
      'Firebase',
      'Firestore',
      'Firebase Authentication',
      'Material Design',
      'Android Architecture Components',
      'Glide'
    ],
    githubLink: 'https://github.com/furblood0/ClashOfWords',
    liveDemoLink: '#', // Android uygulaması için demo linki yok
    image: `${import.meta.env.BASE_URL}assets/img3.jpg`, // Android oyun için uygun görsel
    category: 'Mobile App',
    featured: true // Bu da öne çıkan bir proje
  },
  {
    id: 4,
    title: 'MIPS Simulator',
    description: 'MIPS 32-bit mimarisi için kapsamlı simülatör. PyQt5 tabanlı modern GUI ile eğitim amaçlı geliştirilmiş. Fetch-decode-execute döngüsü, register durumu, bellek yönetimi ve program izleme özellikleri içeriyor. R-format, I-format ve J-format komutları destekliyor.',
    technologies: [
      'Python 3.8+',
      'PyQt5',
      'MIPS Assembly',
      'Computer Architecture',
      'GUI Development',
      'Unit Testing'
    ],
    githubLink: 'https://github.com/furblood0/MIPSProject',
    liveDemoLink: '#', // Desktop uygulaması için demo linki yok
    image: `${import.meta.env.BASE_URL}assets/img4.jpg`, // MIPS simulator için uygun görsel
    category: 'Desktop App',
    featured: false
  },
  {
    id: 5,
    title: 'BeQuickChat - UDP Chat Application',
    description: 'Python ve PyQt5 ile geliştirilmiş çok kullanıcılı sohbet uygulaması. UDP soketleri ve özel protokol kullanarak güvenilir mesajlaşma sağlıyor. ACK mekanizması, yeniden iletim, AES şifreleme, gerçek zamanlı kullanıcı listesi ve özel mesajlaşma özellikleri içeriyor.',
    technologies: [
      'Python 3.8+',
      'PyQt5',
      'UDP Sockets',
      'Network Programming',
      'AES Encryption',
      'Multi-threading',
      'GUI Development'
    ],
    githubLink: 'https://github.com/furblood0/network',
    liveDemoLink: '#', // Desktop uygulaması için demo linki yok
    image: `${import.meta.env.BASE_URL}assets/img1.jpg`, // Chat uygulaması için uygun görsel (img1'i tekrar kullanabiliriz)
    category: 'Desktop App',
    featured: true // Bu da öne çıkan bir proje
  },
  {
    id: 6,
    title: 'Platform Adventure Game',
    description: 'Phaser 3 ile geliştirilmiş eğlenceli 2D platform macera oyunu. Fizik tabanlı oynanış, yerçekimi ve çarpışma algılama ile karakter animasyonları içeriyor. Kalp toplama, engelleri aşma ve final hedefe ulaşma mekanikleri ile tam bir platform oyunu deneyimi sunuyor.',
    technologies: [
      'Phaser 3',
      'HTML5 Canvas',
      'JavaScript',
      'CSS3',
      'Game Development',
      '2D Graphics',
      'Physics Engine'
    ],
    githubLink: 'https://github.com/furblood0/MiniGame',
    liveDemoLink: '#', // Demo linki varsa buraya eklenebilir
    image: `${import.meta.env.BASE_URL}assets/img2.jpg`, // Platform oyunu için uygun görsel
    category: 'Web Game',
    featured: false
  },
  {
    id: 7,
    title: 'Not Defteri - Chrome Extension',
    description: 'Modern ve kullanışlı Chrome eklentisi. Çoklu not desteği, otomatik kaydetme, tarih damgası ve responsive tasarım ile notlarınızı kolayca yönetin. Chrome Storage API kullanarak notları güvenli şekilde saklar ve Türkçe arayüz ile kullanıcı dostu deneyim sunar.',
    technologies: [
      'Chrome Extension API',
      'HTML5',
      'CSS3',
      'JavaScript ES6+',
      'Chrome Storage',
      'Manifest V3',
      'Browser Extension'
    ],
    githubLink: 'https://github.com/furblood0/not-defteri-chrome-extension',
    liveDemoLink: '#', // Chrome Web Store linki varsa eklenebilir
    image: `${import.meta.env.BASE_URL}assets/img3.jpg`, // Chrome extension için uygun görsel
    category: 'Browser Extension',
    featured: false
  },
  {
    id: 8,
    title: 'ArtBook - Android Art Gallery',
    description: 'Android platformu için geliştirilmiş sanat galerisi uygulaması. Kullanıcılar sanat eserlerini kaydedebilir, görüntüleyebilir ve yönetebilir. SQLite veritabanı ile yerel depolama, RecyclerView ile liste görünümü ve modern Material Design arayüzü ile kullanıcı dostu deneyim sunar.',
    technologies: [
      'Java',
      'Android SDK',
      'SQLite',
      'RecyclerView',
      'Material Design',
      'AndroidX',
      'Gradle'
    ],
    githubLink: 'https://github.com/furblood0/ArtGallery',
    liveDemoLink: '#', // Android uygulaması için demo linki yok
    image: `${import.meta.env.BASE_URL}assets/img4.jpg`, // ArtBook için uygun görsel
    category: 'Mobile App',
    featured: false
  },
  {
    id: 9,
    title: 'Catch Kenny - Android Game',
    description: 'Basit ve eğlenceli Android oyunu. Kenny\'yi ekranda rastgele belirdiği yerlerde yakalamaya çalışın. 20 saniyelik süre içinde reflekslerinizi test edin ve mümkün olduğunca çok puan kazanın. GridLayout kullanarak 12 farklı pozisyonda rastgele hareket eden karakter ile hızlı tepki oyunu.',
    technologies: [
      'Java',
      'Android SDK',
      'GridLayout',
      'AndroidX',
      'Material Design',
      'Game Development',
      'Timer Logic'
    ],
    githubLink: 'https://github.com/furblood0/CatchKenny',
    liveDemoLink: '#', // Android oyunu için demo linki yok
    image: `${import.meta.env.BASE_URL}assets/img1.jpg`, // Catch Kenny için uygun görsel
    category: 'Mobile App',
    featured: false
  }
  // Diğer projeler buraya eklenecek
];

export default projects;