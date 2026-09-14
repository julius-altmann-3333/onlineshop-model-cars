// ============== CART ==============
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

export function addToCart(id, name, price) {
    const existing = cartItems.find(i => i.id === id);
    if (existing) existing.quantity += 1;
    else cartItems.push({ id, name, price, image: products.find(p => p.id === id).image, quantity: 1 });

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    document.getElementById('cart-count').textContent = cartItems.length;
    showToast('Added to cart!', 'success');
}

export function showToast(message, type = 'success') {
    const toastHTML = `
        <div class="toast align-items-center text-bg-${type} border-0" role="alert">
            <div class="d-flex">
                <div class="toast-body">${message}</div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
            </div>
        </div>`;
    const container = document.createElement('div');
    container.className = 'position-fixed bottom-0 end-0 p-3';
    container.innerHTML = toastHTML;
    document.body.appendChild(container);
    const toast = new bootstrap.Toast(container.querySelector('.toast'));
    toast.show();
    setTimeout(() => container.remove(), 4000);
}

export { cartItems };