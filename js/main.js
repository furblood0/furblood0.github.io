// Sayfa yüklendiğinde çalışacak kod
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll için
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typing animation
    const typedTextSpan = document.querySelector(".typed-text");
    const texts = [
        "Web Developer",
        "Mobile App Developer",
        "UI/UX Enthusiast",
        "Network Explorer",
        "Minimalist Designer",
        "Freelancer",
        "Continuous Learner",
        "Creative Coder"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typedTextSpan.textContent = currentText.substring(0, charIndex-1);
            charIndex--;
        } else {
            typedTextSpan.textContent = currentText.substring(0, charIndex+1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Bekle
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500); // Yeni kelimeye geç
        } else {
            setTimeout(type, isDeleting ? 100 : 200);
        }
    }

    // Sayfa yüklendiğinde yazı animasyonunu başlat
    setTimeout(type, 1000);

    // Scroll to Top Functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const progressPath = scrollToTopBtn.querySelector('path');
    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = 'stroke-dashoffset 10ms linear';

    const updateProgress = () => {
        const scroll = window.pageYOffset;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }

    const toggleScrollButton = () => {
        const scrolled = window.pageYOffset;
        if (scrolled > 100) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', () => {
        toggleScrollButton();
        updateProgress();
    });

    scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
