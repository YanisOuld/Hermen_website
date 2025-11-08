// ===== EMAILJS CONFIGURATION =====
// Configuration pour EmailJS avec les vraies clés

const EMAILJS_CONFIG = {
    // Votre Public Key EmailJS
    PUBLIC_KEY: 'PLSIPnltfGzi9O5b1',
    
    // Votre Service ID EmailJS
    SERVICE_ID: 'service_0znukgc',
    
    // Votre Template ID EmailJS
    TEMPLATE_ID: 'template_i1wd6mn',
    
    // Email de destination
    TO_EMAIL: 'pilot@chronhr.com'
};

// Initialiser EmailJS
document.addEventListener('DOMContentLoaded', function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        console.log('EmailJS initialized successfully! 📧');
    } else {
        console.error('EmailJS SDK not loaded!');
    }
});

// Fonction pour envoyer l'email
function sendEmail(formData) {
    return new Promise((resolve, reject) => {
        const templateParams = {
            to_email: EMAILJS_CONFIG.TO_EMAIL,
            company_name: formData.company,
            contact_person: formData['contact-person'],
            email: formData.email,
            role: formData.role,
            company_size: formData['company-size'],
            message: formData.message,
            subject: `Pilote Potentiel - ${formData.company}`,
            date: new Date().toLocaleDateString('fr-FR'),
            time: new Date().toLocaleTimeString('fr-FR')
        };

        emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            templateParams
        )
        .then((response) => {
            console.log('Email sent successfully!', response);
            resolve(response);
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            reject(error);
        });
    });
}

// Exporter la fonction pour utilisation dans form-handler.js
window.sendEmail = sendEmail;
