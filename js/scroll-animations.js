// ===== SCROLL ANIMATIONS =====
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for animations
    document.querySelectorAll('.stat__item, .pain-point, .feature__card, .benefit__item, .team__member').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});
