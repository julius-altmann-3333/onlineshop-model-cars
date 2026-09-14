import { products, brands, currentProduct, renderBrands, renderProducts, openModal, addToCartFromModal } from './products.js';
import { cartItems, showToast } from './cart.js';

export { renderBrands, renderProducts, openModal, addToCartFromModal };

function filterByBrand(brandId) {
    brands.forEach(b => {
        const btn = document.getElementById(`btn-${b.id}`);
        if (btn) btn.classList.toggle('active', b.id === brandId);
    });
    const filtered = brandId === 'all' ? products : products.filter(p => p.brand === brandId);
    renderProducts(filtered);
}

renderBrands();
renderProducts();