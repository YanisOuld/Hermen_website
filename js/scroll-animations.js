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

    // ===== COUNTER ANIMATION =====
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat__number').forEach(counter => {
        counterObserver.observe(counter);
    });

    function animateCounter(element) {
        const originalText = element.textContent;
        const target = parseInt(originalText.replace(/\D/g, ''));
        
        // Skip animation for asterisk values
        if (originalText.includes('*')) {
            return;
        }
        
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Preserve original formatting (+ symbol, % symbol, etc.)
            let formatted;
            if (originalText.includes('%')) {
                formatted = Math.floor(current) + '%';
            } else if (originalText.includes('+')) {
                formatted = Math.floor(current) + '+';
            } else {
                formatted = Math.floor(current);
            }
            
            element.textContent = formatted;
        }, 16);
    }
});
