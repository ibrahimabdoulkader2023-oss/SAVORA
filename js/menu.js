function renderMenu() {
    const grid = document.getElementById('menu-grid');
    const searchInput = document.getElementById('menu-search');
    const filterSelect = document.getElementById('menu-filter');
    if (!grid) return;
    
    function display() {
        const search = searchInput ? searchInput.value.toLowerCase() : '';
        const filter = filterSelect ? filterSelect.value : 'all';
        grid.innerHTML = '';
        PRODUCTS.forEach(product => {
            if (filter !== 'all' && product.category !== filter) return;
            if (search && product.name.toLowerCase().indexOf(search) === -1 && product.description.toLowerCase().indexOf(search) === -1) {
                return;
            }
            const card = document.createElement('div');
            card.className = 'menu-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${escapeHtml(product.name)}</h3>
                <p>${escapeHtml(product.description)}</p>
                <div class="menu-card-footer">
                    <span class="price">${product.price.toLocaleString()} FCFA</span>
                    <button onclick="addToCart('${product.id}')" class="btn-add">Ajouter</button>
                </div>
            `;
            grid.appendChild(card);
        });
    }
    
    if (searchInput) searchInput.addEventListener('input', display);
    if (filterSelect) filterSelect.addEventListener('change', display);
    display();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderMenu);
} else {
    renderMenu();
}
