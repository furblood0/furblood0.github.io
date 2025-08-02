// src/data/blogPosts.ts

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string; // HTML formatında içerik
  date: string;
  readTime: number; // dakika cinsinden okuma süresi
  tags: string[];
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "React 19'da Yeni Özellikler ve Değişiklikler",
    excerpt: "React 19 ile gelen yeni özellikleri, performans iyileştirmelerini ve geliştirici deneyimini inceliyoruz.",
    content: `
      <p>React 19, React ekosisteminde büyük bir sıçrama olarak karşımıza çıkıyor. Bu yazıda en önemli değişiklikleri ve yeni özellikleri ele alacağız.</p>
      
      <h3>🚀 Yeni Hooks ve API'lar</h3>
      <p>React 19'da <strong>use()</strong> hook'u eklendi. Bu hook ile Promise'ları doğrudan component içinde kullanabiliyoruz. Artık async/await kullanmaya gerek yok!</p>
      
      <h3>⚡ Server Components</h3>
      <p>Server Components artık daha stabil ve performanslı. Bu sayede:</p>
      
      <ul>
        <li><strong>Daha hızlı sayfa yükleme</strong> - İlk yükleme süreleri %50'ye kadar azaldı</li>
        <li><strong>Daha az JavaScript</strong> - Bundle boyutları küçüldü</li>
        <li><strong>SEO dostu yapı</strong> - Arama motorları daha iyi indexliyor</li>
        <li><strong>Gelişmiş caching</strong> - Otomatik cache yönetimi</li>
      </ul>
      
      <h3>🎨 Geliştirici Deneyimi</h3>
      <p>React DevTools artık daha güçlü. Component tree'de Server ve Client component'leri ayrı ayrı görebiliyoruz. Ayrıca yeni error boundary'ler ile hata yönetimi çok daha kolay.</p>
      
      <p>React 19'u projelerinizde kullanmaya başlamak için <strong>npm install react@next</strong> komutunu çalıştırabilirsiniz.</p>
    `,
    date: "2024-01-15",
    readTime: 4,
    tags: ["React", "Frontend", "JavaScript", "Web Development"],
    featured: true
  },
  {
    id: 2,
    title: "TypeScript ile Daha Güvenli Kod Yazma",
    excerpt: "TypeScript'in temel özelliklerini ve günlük geliştirme sürecinde nasıl daha etkili kullanabileceğimizi öğrenelim.",
    content: `
      <p>TypeScript, JavaScript'in tip güvenli versiyonu olarak bilinir. Bu yazıda TypeScript'in temel özelliklerini ve pratik kullanım örneklerini göreceğiz.</p>
      
      <h3>🔍 Tip Tanımlamaları</h3>
      <p>TypeScript'te tip tanımlamaları çok önemli. İşte en çok kullanılan tipler:</p>
      
      <ul>
        <li><strong>string</strong> - Metin değerleri için</li>
        <li><strong>number</strong> - Sayısal değerler için</li>
        <li><strong>boolean</strong> - True/false değerleri için</li>
        <li><strong>array</strong> - Dizi değerleri için</li>
        <li><strong>object</strong> - Nesne değerleri için</li>
      </ul>
      
      <h3>🎯 Interface ve Type</h3>
      <p>Interface'ler ve Type'lar ile kendi tip tanımlarımızı oluşturabiliriz:</p>
      
      <p><strong>Interface örneği:</strong></p>
      <p>interface User {<br>
      &nbsp;&nbsp;id: number;<br>
      &nbsp;&nbsp;name: string;<br>
      &nbsp;&nbsp;email: string;<br>
      &nbsp;&nbsp;isActive: boolean;<br>
      }</p>
      
      <h3>🛡️ Hata Önleme</h3>
      <p>TypeScript sayesinde compile time'da hataları yakalayabiliyoruz. Bu da production'da daha az bug demek!</p>
    `,
    date: "2024-01-10",
    readTime: 6,
    tags: ["TypeScript", "JavaScript", "Programming", "Web Development"],
    featured: false
  },
  {
    id: 3,
    title: "Modern CSS Teknikleri ve Best Practices",
    excerpt: "CSS Grid, Flexbox ve modern CSS özelliklerini kullanarak responsive ve performanslı web siteleri nasıl geliştirilir?",
    content: `
      <p>Modern web geliştirmede CSS çok önemli bir rol oynuyor. Bu yazıda güncel CSS tekniklerini ve best practice'leri inceleyeceğiz.</p>
      
      <h3>📐 CSS Grid vs Flexbox</h3>
      <p>CSS Grid ve Flexbox'ın ne zaman kullanılacağını bilmek çok önemli:</p>
      
      <ul>
        <li><strong>CSS Grid:</strong> İki boyutlu layout'lar için (sayfa düzeni)</li>
        <li><strong>Flexbox:</strong> Tek boyutlu layout'lar için (satır/sütun)</li>
      </ul>
      
      <h3>🎨 CSS Custom Properties</h3>
      <p>CSS değişkenleri ile daha maintainable kod yazabiliriz:</p>
      
      <p>:root {<br>
      &nbsp;&nbsp;--primary-color: #007bff;<br>
      &nbsp;&nbsp;--secondary-color: #6c757d;<br>
      &nbsp;&nbsp;--border-radius: 8px;<br>
      }</p>
      
      <h3>📱 Responsive Design</h3>
      <p>Mobile-first yaklaşım ile responsive tasarım yapmak artık çok kolay. Media query'ler ile farklı ekran boyutlarına uyum sağlayabiliyoruz.</p>
      
      <h3>⚡ Performance</h3>
      <p>CSS performansı için dikkat edilmesi gerekenler:</p>
      
      <ul>
        <li>Gereksiz selector'lardan kaçının</li>
        <li>CSS'i minify edin</li>
        <li>Critical CSS'i inline edin</li>
        <li>CSS'de animasyonlar için transform kullanın</li>
      </ul>
      
      <p>Modern CSS tekniklerini öğrenmek, daha iyi web siteleri geliştirmenin anahtarı!</p>
    `,
    date: "2024-01-05",
    readTime: 7,
    tags: ["CSS", "Frontend", "Web Design", "Responsive Design"],
    featured: false
  }
];

export default blogPosts;