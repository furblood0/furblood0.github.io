document.addEventListener('DOMContentLoaded', function() {
    const blogGrid = document.querySelector('.blog-grid');

    // Tüm blog verileri
    const allBlogs = [
        {
            title: "Samsung A55 İncelemesi",
            image: "images/samsung_a55.jpg",
            category: "Teknoloji",
            date: "15 Mart 2024",
            readTime: "5 dk okuma",
            excerpt: "Samsung'un yeni orta segment telefonu A55'in detaylı incelemesi...",
            link: "posts/samsung-a55-inceleme.html"
        },
        {
            title: "2024'de Web Geliştirme İpuçları",
            image: "images/web_gelistirme.png",
            category: "Geliştirme",
            date: "10 Mart 2024",
            readTime: "7 dk okuma",
            excerpt: "Modern web geliştirme teknikleri, en iyi uygulamalar...",
            link: "posts/web-gelistirme-ipuclari.html"
        },
        {
            title: "Java ile Oyun Geliştirme",
            image: "images/java-game-dev.jpg",
            category: "Geliştirme",
            date: "20 Mart 2024",
            readTime: "8 dk okuma",
            excerpt: "Java ile oyun geliştirmeye başlamak isteyenler için temel kavramlar...",
            link: "posts/java-ile-oyun-gelistirme.html"
        },
        {
            title: "2024 Yazılım Trendleri",
            image: "images/yazilim_trendleri.png",
            category: "Teknoloji",
            date: "5 Mart 2024",
            readTime: "6 dk okuma",
            excerpt: "Yazılım sektöründe en son gelişmeler...",
            link: "posts/yazilim-trendleri-2024.html"
        }
    ];
/*
    // Blog kartı oluşturma fonksiyonu
    function createBlogCard(blog) {
        return `
            <article class="blog-card">
                <div class="blog-image">
                    <img src="${blog.image}" alt="${blog.title}">
                    <div class="blog-category">${blog.category}</div>
                </div>
                <div class="blog-content">
                    <div class="blog-info">
                        <span class="blog-date"><i class="far fa-calendar"></i> ${blog.date}</span>
                        <span class="blog-read-time"><i class="far fa-clock"></i> ${blog.readTime}</span>
                    </div>
                    <h3 class="blog-title">${blog.title}</h3>
                    <p class="blog-excerpt">${blog.excerpt}</p>
                    <a href="${blog.link}" class="read-more">Devamını Oku <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
        `;
    }
*/
    // Blogları göster
    allBlogs.forEach(blog => {
        blogGrid.insertAdjacentHTML('beforeend', createBlogCard(blog));
    });
}); 