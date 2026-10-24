const CART_KEY = "savora_cart";

function getCart() {
    try {
        const data = localStorage.getItem(CART_KEY);
        if (!data) return [];
        const parsed = JSON.parse(data);
        if (!Array.isArray(parsed)) return [];
        return parsed;
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    try {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (e) {
        // Ignore storage errors
    }
    updateCartIndicator();
}

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const cart = getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    saveCart(cart);
    alert(product.name + " ajouté au panier");
}

function updateCartQuantity(productId, delta) {
    const cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
        const idx = cart.indexOf(item);
        if (idx >= 0) cart.splice(idx, 1);
    }
    saveCart(cart);
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(i => i.id !== productId);
    saveCart(cart);
}

function clearCart() {
    saveCart([]);
}

function getCartTotal() {
    const cart = getCart();
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}

function updateCartIndicator() {
    const cart = getCart();
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
        count += cart[i].quantity;
    }
    const indicators = document.querySelectorAll('.cart-count');
    indicators.forEach(ind => {
        ind.textContent = count;
    });
}

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCartIndicator);
} else {
    updateCartIndicator();
}
