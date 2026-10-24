function handleContact() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Ce formulaire ne transmet pas réellement de message car aucun service d'envoi d'e-mail n'est configuré dans cette version statique. Pour nous contacter, veuillez utiliser le lien WhatsApp si le numéro est configuré, ou les informations affichées sur cette page.");
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleContact);
} else {
    handleContact();
}
