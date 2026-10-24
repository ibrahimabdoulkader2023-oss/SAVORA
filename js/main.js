function initHamburger() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');
    
    if (hamburger) {
        hamburger.onclick = function() {
            if (menu) menu.classList.toggle('active');
            if (overlay) overlay.classList.toggle('active');
            hamburger.classList.toggle('open');
        };
    }
    if (overlay) {
        overlay.onclick = function() {
            if (menu) menu.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            if (hamburger) hamburger.classList.remove('open');
        };
    }
    document.querySelectorAll('.lien a').forEach(link => {
        link.addEventListener('click', function() {
            if (menu) menu.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            if (hamburger) hamburger.classList.remove('open');
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHamburger);
} else {
    initHamburger();
}
