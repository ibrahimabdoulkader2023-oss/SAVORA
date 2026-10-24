function renderCartPage() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    const emptyMsg = document.getElementById('cart-empty');
    const checkoutBtn = document.getElementById('btn-checkout');
    if (!container) return;
    
    function display() {
        const cart = getCart();
        container.innerHTML = '';
        if (cart.length === 0) {
            if (emptyMsg) emptyMsg.style.display = 'block';
            if (totalEl) totalEl.textContent = '0 FCFA';
            if (checkoutBtn) checkoutBtn.style.display = 'none';
            return;
        }
        if (emptyMsg) emptyMsg.style.display = 'none';
        if (checkoutBtn) checkoutBtn.style.display = 'inline-block';
        
        cart.forEach(item => {
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${escapeHtml(item.name)}</h4>
                    <p>${item.price.toLocaleString()} FCFA</p>
                    <div class="cart-item-actions">
                        <button onclick="changeQty('${item.id}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQty('${item.id}', 1)">+</button>
                        <button onclick="removeItem('${item.id}')" class="btn-remove">Supprimer</button>
                    </div>
                </div>
                <div class="cart-item-subtotal">
                    ${(item.price * item.quantity).toLocaleString()} FCFA
                </div>
            `;
            container.appendChild(div);
        });
        if (totalEl) totalEl.textContent = getCartTotal().toLocaleString() + ' FCFA';
    }
    
    window.changeQty = function(id, delta) {
        updateCartQuantity(id, delta);
        display();
        updateCartIndicator();
    };
    window.removeItem = function(id) {
        removeFromCart(id);
        display();
        updateCartIndicator();
    };
    
    display();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderCartPage);
} else {
    renderCartPage();
}
