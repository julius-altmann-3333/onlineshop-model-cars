import { renderBrands, renderProducts } from './shop.js';
import { cartItems } from './cart.js';
import { renderInstagram } from './instagram.js';

renderBrands();
renderProducts();
renderInstagram();

document.getElementById('cart-count').textContent = cartItems.length;

document.addEventListener('keypress', e => {
    if (e.key >= '1' && e.key <= '9') {
        const idx = parseInt(e.key) - 1;
        if (brands[idx]) filterByBrand(brands[idx].id); // from shop.js
    }
});