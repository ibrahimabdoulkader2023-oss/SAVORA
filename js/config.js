// SAVORA Configuration
const SAVORA_BRAND_NAME = "SAVORA";
const SAVORA_SLOGAN = "Toutes les saveurs, une seule adresse.";
// Numéro WhatsApp officiel du restaurant
const SAVORA_WHATSAPP_NUMBER = "237689172822";

function buildWhatsAppUrl(message) {
    if (!SAVORA_WHATSAPP_NUMBER || SAVORA_WHATSAPP_NUMBER === "NUMERO_A_CONFIGURER") {
        alert("Configuration WhatsApp incomplète. Veuillez configurer SAVORA_WHATSAPP_NUMBER dans js/config.js avec le numéro officiel du restaurant.");
        return null;
    }
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${SAVORA_WHATSAPP_NUMBER}?text=${encoded}`;
}
