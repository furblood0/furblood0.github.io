document.addEventListener('DOMContentLoaded', function() {
    // Arama fonksiyonu
    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        // Burada arama mantığını implement edin
        console.log('Arama terimi:', searchTerm);
    });

    // Kategori filtresi
    const categorySelect = document.getElementById('categorySelect');
    categorySelect.addEventListener('change', function(e) {
        const selectedCategory = e.target.value;
        // Burada kategori filtreleme mantığını implement edin
        console.log('Seçilen kategori:', selectedCategory);
    });

    // Sayfalama
    const pageButtons = document.querySelectorAll('.page-btn');
    pageButtons.forEach(button => {
        if (!button.disabled) {
            button.addEventListener('click', function() {
                // Aktif sayfayı güncelle
                document.querySelector('.page-btn.active')?.classList.remove('active');
                if (!this.children.length) { // Ok butonları değilse
                    this.classList.add('active');
                }
                // Burada sayfa değiştirme mantığını implement edin
                console.log('Seçilen sayfa:', this.textContent);
            });
        }
    });
}); 