import React from 'react';
import Header from './Components/Header';
import Catalog from './Components/Catalog';
import ShoppingCart from './Components/ShoppingCart';
import { useState } from "react";


function App() {
  const [cartItems, setCartItems] = useState({}); //state management
// ADD TO CART FUNCTION

  const addToCart = (itemName) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      updatedCartItems[itemName] = (updatedCartItems[itemName] || 0) + 1;
      return updatedCartItems;
    });
  };

  //REMOVE FROM CART FXN
  const removeFromCart = (itemName) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[itemName] > 1) {
        updatedCartItems[itemName] -= 1;
      } else {
        delete updatedCartItems[itemName];
      }
      return updatedCartItems;
    });
  };

  //INITIALIZED ARRAY OF ITEMS, DYNAMIC IMPLEMENTATION
  //note: importing images on the src folder cannot be read 
  // so I opted to use resources from the web instead. 
  const menus = 
  [{name: "Computer", url: "https://cdn.ttgtmedia.com/rms/onlineimages/acer_chromebook-f_mobile.jpg", id: 1},
  {name: "Phone", url: "https://auspost.com.au/shop/static/WFS/AusPost-Shop-Site/-/AusPost-Shop-auspost-B2CWebShop/en_AU/feat-cat/mobile-phones/always-on/category-tiles/MP_UnlockedPhones_3.jpg", id: 2},
  {name: "Kettle", url: "https://www.smappliance.com/cdn/shop/products/10156876-KW-1362-1.7LE.KETTLE.png?v=1620836331", id:3},
  {name: "Case", url: "https://as-images.apple.com/is/MM2C3_AV4?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1645850104771", id:4},]

  return (
    <div className="app">
      <Header />
      {/* parent: main-content, children: catalog and shopping cart*/}
      <div className="main-content">
        {/* catalog component */}
        <Catalog menus={menus} addToCart={addToCart} />

        {/* shoppingCart component */}
        <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;