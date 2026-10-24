function handleReservation() {
    const form = document.getElementById('reservation-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('res-name').value.trim();
        const phone = document.getElementById('res-phone').value.trim();
        const email = document.getElementById('res-email').value.trim();
        const date = document.getElementById('res-date').value;
        const time = document.getElementById('res-time').value;
        const people = document.getElementById('res-people').value;
        const comment = document.getElementById('res-comment').value.trim();
        
        if (!name) {
            alert("Veuillez renseigner votre nom complet.");
            return;
        }
        if (!phone) {
            alert("Veuillez renseigner votre numéro de téléphone.");
            return;
        }
        if (!date) {
            alert("Veuillez choisir une date.");
            return;
        }
        if (!time) {
            alert("Veuillez choisir une heure.");
            return;
        }
        if (!people || parseInt(people) <= 0) {
            alert("Veuillez indiquer le nombre de personnes.");
            return;
        }
        
        // Check if date is in the past
        const selectedDate = new Date(date + 'T00:00:00');
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
            alert("La date choisie ne peut pas être dans le passé.");
            return;
        }
        
        if (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("L'adresse e-mail n'est pas valide.");
                return;
            }
        }
        
        let message = `*DEMANDE DE RÉSERVATION SAVORA*\n\n`;
        message += `*Nom:* ${name}\n`;
        message += `*Téléphone:* ${phone}\n`;
        if (email) message += `*E-mail:* ${email}\n`;
        message += `*Date souhaitée:* ${date}\n`;
        message += `*Heure souhaitée:* ${time}\n`;
        message += `*Nombre de personnes:* ${people}\n`;
        if (comment) {
            message += `\n*Commentaire:* ${comment}\n`;
        }
        message += `\n---\nDemande de réservation préparée via le site SAVORA.\n`;
        message += `IMPORTANT: Le client doit envoyer ce message dans WhatsApp. La réservation n'est PAS automatiquement confirmée.\n`;
        message += `Le restaurant doit vérifier ses disponibilités et répondre.`;
        
        const url = buildWhatsAppUrl(message);
        if (url) {
            window.open(url, '_blank');
            alert("WhatsApp s'ouvre avec votre demande de réservation préparée. Veuillez vérifier et envoyer le message. La réservation n'est pas confirmée automatiquement - le restaurant devra vérifier ses disponibilités.");
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleReservation);
} else {
    handleReservation();
}
