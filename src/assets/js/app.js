/**
 * Antigravity Premium Theme JS
 * (C) 2026 Antigravity AI - Salla Theme Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Salla Antigravity Theme Initialized.');

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('header button');
    const nav = document.querySelector('header nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('hidden');
            nav.classList.toggle('flex');
            nav.classList.toggle('flex-col');
            nav.classList.toggle('absolute');
            nav.classList.toggle('top-20');
            nav.classList.toggle('left-0');
            nav.classList.toggle('right-0');
            nav.classList.toggle('bg-white');
            nav.classList.toggle('p-8');
            nav.classList.toggle('border-b');
            nav.classList.toggle('shadow-xl');
        });
    }

    // Add To Cart Button Sparkle
    const addToCartBtns = document.querySelectorAll('form[action*="cart/add"] button[type="submit"]');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Salla handles the actual cart logic, this is just for UI/UX
            console.log('Sending Add to Cart Event...');
        });
    });

    // Handle Quantity Inputs
    const quantityContainers = document.querySelectorAll('div.flex.items-center.gap-2.bg-white, div.flex.items-center.gap-2.bg-gray-100');
    quantityContainers.forEach(container => {
        const input = container.querySelector('input');
        const btns = container.querySelectorAll('button');
        
        if (input && btns.length === 2) {
            btns[0].addEventListener('click', () => { if(input.value > 1) input.value--; });
            btns[1].addEventListener('click', () => { input.value++; });
        }
    });

    // Salla Theme Hooks Example
    // Salla.on('cart::updated', (cart) => {
    //     document.querySelectorAll('.cart-count').forEach(el => el.innerText = cart.count);
    // });
});
