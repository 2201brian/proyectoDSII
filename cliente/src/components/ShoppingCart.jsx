import React from 'react';
 
const ShoppingCart = () => {
    return (
        <aside class="product-detail">     
            <div class="title-container">
                <img src="./icons/flechita.svg" alt="menu"/>
                <p>Shopping cart</p>
            </div>

            <div  class="my-order-content">
                    <div class="shopping-cart">
                        <figure>
                            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike"/>
                        </figure>
                        <p>Bike</p>
                        <p>$30,00</p>
                        <img src="./icons/icon_close.png" alt="close"/>
                    </div>
                    
                    <div class="order-checkout">
                        <div class="order">
                            <p>Total:</p>
                            <p>$560.00</p>
                        </div>
                        <button class="primary-button">Checkout</button> 
                    </div>
            </div>
        </aside>
    );
}

export default ShoppingCart;