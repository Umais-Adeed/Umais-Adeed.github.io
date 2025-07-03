
// Initialize particles.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Typed.js for hero subtitle
    new Typed('#typed-subtitle', {
        strings: ['Android Developer', 'Jetpack Compose', 'KMM'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    // Scroll-to-top button
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Vanilla Tilt for project cards (optional)
    VanillaTilt.init(document.querySelectorAll(".project"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2
    });
});