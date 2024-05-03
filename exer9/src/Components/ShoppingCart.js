// ShoppingCart.js component

import React from 'react';
import './ShoppingCart.css';  //css stylesheet

class ShoppingCart extends React.Component {
  render() {
    const { cartItems, removeFromCart } = this.props;
    const totalItems = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);
    //the following component allows for the implementation of the shopping
    // when add to cart is clicked, cartitems will be appended which is accessed in this 
    //component using mapping
    return (
      <div className="shopping-cart">
        <h2>Shopping Cart (Total Items: {totalItems})</h2>
        <div className="cart-items">
          {Object.entries(cartItems).map(([itemName, quantity], index) => (
            <div key={index} className="cart-item">
              {itemName} Quantity: {quantity}
              <button onClick={() => removeFromCart(itemName)}>Delete</button>
            </div> 
          ))}
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
