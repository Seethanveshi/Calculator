import { products } from './products.js';

export let cart = [
    {
        id: '1',
        quantity: 1
    }
];

display_cart(cart);

export function display_cart() {
    console.log(cart);
    let CartHtmlElement = ``;
    let matched;

    cart.forEach((cart_product) => {
        let productId = cart_product.id;
        products.forEach((product) => {
            if (productId === product.id) {
                matched = product;
            }
        });
        if (matched) {
            CartHtmlElement += `
                <div class="cart-product-information">
                    <div class="cart-product-image">
                        <img class="cart-image" src="${matched.image}">
                    </div>
                    <div class="cart-product-details">
                        <p class="cart-brand">${matched.brand}</p>
                        <p class="cart-name">${matched.name}</p>
                        <div class="cart-price-details">
                            <div class="cart-price">&#x20b9;${matched.price_details.price}</div>
                            <div class="cart-actual-price">&#x20b9;${matched.price_details.actual_price}</div>
                            <div class="cart-discount">${matched.price_details.discount}%</div>
                        </div>
                        <div class="cart-size">Size-${matched.size} <span class="cart-product-qty">Qty:${cart_product.quantity}</span></div>
                    </div>
                </div>
            `;
        }
    });


    let AllCartProducts = document.querySelector('.js-cart-products');
    
    console.log(AllCartProducts);

    if (AllCartProducts) {  // Check if the element exists
        // console.log(CartHtmlElement);
        AllCartProducts.innerHTML = CartHtmlElement;
    }

}