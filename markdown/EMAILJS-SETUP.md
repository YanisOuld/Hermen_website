# 📧 Configuration EmailJS pour Hermèn

## 🚀 Étapes de configuration

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit (200 emails/mois)
3. Connectez votre compte Gmail (ouldmayanis@gmail.com)

### 2. Configurer le service email
1. Dans le dashboard EmailJS, allez dans **"Email Services"**
2. Cliquez **"Add New Service"**
3. Sélectionnez **"Gmail"**
4. Connectez votre compte Gmail
5. Notez le **Service ID** généré

### 3. Créer un template d'email
1. Allez dans **"Email Templates"**
2. Cliquez **"Create New Template"**
3. Utilisez ce template :

**Subject:** `Pilote Potentiel - {{company_name}}`

**Content:**
```
Nouvelle demande de programme pilote Hermèn

Entreprise: {{company_name}}
Contact: {{contact_person}}
Email: {{email}}
Rôle: {{role}}
Taille de l'entreprise: {{company_size}}

Message:
{{message}}

---
Date: {{date}} à {{time}}
Envoyé depuis le site web Hermèn
```

4. Notez le **Template ID** généré

### 4. Obtenir la clé publique
1. Allez dans **"Account"** > **"General"**
2. Copiez votre **Public Key**

### 5. Mettre à jour la configuration
Ouvrez le fichier `js/emailjs-config.js` et remplacez :

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'VOTRE_PUBLIC_KEY_ICI',
    SERVICE_ID: 'VOTRE_SERVICE_ID_ICI', 
    TEMPLATE_ID: 'VOTRE_TEMPLATE_ID_ICI',
    TO_EMAIL: 'ouldmayanis@gmail.com'
};
```

## ✅ Test
1. Ouvrez `index.html` dans votre navigateur
2. Remplissez le formulaire de contact
3. Vérifiez que l'email arrive sur ouldmayanis@gmail.com

## 🔧 Dépannage
- Vérifiez la console du navigateur pour les erreurs
- Assurez-vous que tous les IDs sont corrects
- Testez avec un email simple d'abord

## 📊 Fonctionnalités
- ✅ Envoi automatique d'emails
- ✅ Objet personnalisé avec nom de compagnie
- ✅ Validation des champs requis
- ✅ Messages de succès/erreur
- ✅ Fallback si EmailJS n'est pas configuré
