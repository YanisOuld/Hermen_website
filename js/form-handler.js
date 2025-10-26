// ===== FORM HANDLING =====
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact__form');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            // Simple validation
            const requiredFields = ['company', 'contact-person', 'email', 'role'];
            let isValid = true;
            
            requiredFields.forEach(field => {
                const input = form.querySelector(`[name="${field}"]`);
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ef4444';
                } else {
                    input.style.borderColor = '#cbd5e1';
                }
            });
            
            if (!isValid) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Send email using EmailJS
            const submitBtn = form.querySelector('.form__submit');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Check if EmailJS is available
            if (typeof window.sendEmail === 'function') {
                window.sendEmail(data)
                    .then(() => {
                        // Success - subtle feedback
                        submitBtn.textContent = '✓ Sent';
                        submitBtn.classList.add('form__submit--success');
                        
                        // Show subtle success message
                        showSubtleMessage(form, 'success');
                        
                        // Reset form after delay
                        setTimeout(() => {
                            submitBtn.textContent = originalText;
                            submitBtn.classList.remove('form__submit--success');
                            submitBtn.disabled = false;
                            form.reset();
                        }, 2500);
                    })
                    .catch((error) => {
                        // Error - subtle feedback
                        console.error('Email sending failed:', error);
                        submitBtn.textContent = 'Retry';
                        submitBtn.classList.add('form__submit--error');
                        
                        setTimeout(() => {
                            submitBtn.textContent = originalText;
                            submitBtn.classList.remove('form__submit--error');
                            submitBtn.disabled = false;
                        }, 2000);
                    });
            } else {
                // Fallback if EmailJS not configured
                console.warn('EmailJS not configured, using fallback');
                submitBtn.textContent = '✓ Done';
                submitBtn.classList.add('form__submit--success');
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.classList.remove('form__submit--success');
                    submitBtn.disabled = false;
                    form.reset();
                }, 2000);
            }
        });
    }
});

// Function to show subtle message
function showSubtleMessage(form, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message--${type}`;
    
    if (type === 'success') {
        messageDiv.innerHTML = `
            <div class="form-message__content">
                <span class="form-message__icon">✓</span>
                <span class="form-message__text">Message envoyé</span>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="form-message__content">
                <span class="form-message__icon">!</span>
                <span class="form-message__text">Erreur, réessayez</span>
            </div>
        `;
    }
    
    form.parentNode.insertBefore(messageDiv, form.nextSibling);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.style.opacity = '0';
            messageDiv.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.parentNode.removeChild(messageDiv);
                }
            }, 300);
        }
    }, 3000);
}
