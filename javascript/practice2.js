import { products } from './products.js';
import { cart , display_cart } from './cart_products.js';


let htmlElement = ``;

products.forEach((value) => {
    htmlElement += `
    <div class="product-details">
        <div class="product-img">
            <img class="image" src="${value.image}">
        </div>
        <div class="product-details">
            <p class="brand">${value.brand}</p>
            <p class="name">${value.name}</p>
            <div class="price-details">
                <div class="price"> &#x20b9;${value.price_details.price}</div>
                <div class="actual-price"> &#x20b9;${value.price_details.actual_price}</div>
                <div class="discount">${value.price_details.discount}% off</div>
            </div>
            <p class="size">Size-${value.size}</p>
        </div>
        <div style="display:flex; width:200px; justify-content: center;">
            <button class="add-button js-add-button" data-product-id="${value.id}">Add to Cart</button>
        </div>
    </div>
    `;
});

let Allproducts = document.querySelector('.js-products');
if (Allproducts) {
    Allproducts.innerHTML = htmlElement;
}

let buttonElement = document.querySelectorAll('.js-add-button');
buttonElement.forEach((button) => {
    button.addEventListener('click', () => {
        let productId = button.dataset.productId;
        let matched;

        cart.forEach((item) => {
            if (item.id === productId) {
                matched = item;
            }
        });

        if (matched) {
            matched.quantity += 1;
        } else {
            cart.push({
                id: productId,
                quantity: 1
            });
        }
        display_cart();
    });
});
