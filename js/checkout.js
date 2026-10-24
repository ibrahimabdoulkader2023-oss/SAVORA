function handleCheckout() {
    const form = document.getElementById('checkout-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const cart = getCart();
        if (cart.length === 0) {
            alert("Votre panier est vide.");
            return;
        }
        
        const name = document.getElementById('customer-name').value.trim();
        const phone = document.getElementById('customer-phone').value.trim();
        const mode = document.querySelector('input[name="delivery-mode"]:checked');
        const address = document.getElementById('delivery-address').value.trim();
        const comment = document.getElementById('order-comment').value.trim();
        
        if (!name) {
            alert("Veuillez renseigner votre nom complet.");
            return;
        }
        if (!phone) {
            alert("Veuillez renseigner votre numéro de téléphone.");
            return;
        }
        if (!mode) {
            alert("Veuillez choisir le mode de réception (Livraison ou Retrait).");
            return;
        }
        if (mode.value === 'livraison' && !address) {
            alert("Veuillez renseigner l'adresse de livraison.");
            return;
        }
        
        let message = `*COMMANDE SAVORA*\n\n`;
        message += `*Client:* ${name}\n`;
        message += `*Téléphone:* ${phone}\n`;
        message += `*Mode de réception:* ${mode.value === 'livraison' ? 'Livraison' : 'Retrait sur place'}\n`;
        if (mode.value === 'livraison') {
            message += `*Adresse:* ${address}\n`;
        }
        message += `\n*DÉTAILS DE LA COMMANDE:*\n`;
        cart.forEach(item => {
            message += `- ${item.name} x${item.quantity} = ${(item.price * item.quantity).toLocaleString()} FCFA\n`;
        });
        message += `\n*TOTAL:* ${getCartTotal().toLocaleString()} FCFA\n`;
        if (comment) {
            message += `\n*Commentaire:* ${comment}\n`;
        }
        message += `\n---\nCommande préparée via le site SAVORA. Le client doit vérifier et envoyer ce message dans WhatsApp.`;
        
        const url = buildWhatsAppUrl(message);
        if (url) {
            window.open(url, '_blank');
            alert("WhatsApp s'ouvre avec votre commande préparée. Veuillez vérifier le message et appuyer sur Envoyer. Le panier est conservé pour vous permettre de le vérifier.");
        }
    });
    
    // Toggle address field
    const radios = document.querySelectorAll('input[name="delivery-mode"]');
    radios.forEach(r => {
        r.addEventListener('change', function() {
            const addrDiv = document.getElementById('address-group');
            if (addrDiv) {
                if (this.value === 'livraison') {
                    addrDiv.style.display = 'block';
                } else {
                    addrDiv.style.display = 'none';
                }
            }
        });
    });
}

function renderCheckoutSummary() {
    const summary = document.getElementById('checkout-summary');
    if (!summary) return;
    const cart = getCart();
    summary.innerHTML = '<h3>Récapitulatif</h3>';
    if (cart.length === 0) {
        summary.innerHTML += '<p>Panier vide</p>';
        return;
    }
    cart.forEach(item => {
        summary.innerHTML += `<p>${escapeHtml(item.name)} x${item.quantity} - ${(item.price * item.quantity).toLocaleString()} FCFA</p>`;
    });
    summary.innerHTML += `<hr><p><strong>Total: ${getCartTotal().toLocaleString()} FCFA</strong></p>`;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        handleCheckout();
        renderCheckoutSummary();
    });
} else {
    handleCheckout();
    renderCheckoutSummary();
}
