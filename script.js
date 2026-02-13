document.addEventListener('DOMContentLoaded', () => {

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null, // viewport
        threshold: 0.1, // trigger when 10% valid
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // Dynamic Header Background (Optional polish)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(11, 16, 26, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
            navbar.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
        } else {
            navbar.style.background = 'rgba(11, 16, 26, 0.9)';
            navbar.style.boxShadow = 'none';
            navbar.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        }
    });

});
