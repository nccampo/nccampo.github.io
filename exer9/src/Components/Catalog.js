
import React from 'react';
import './Catalog.css'; //linked external stylesheet



class Catalog extends React.Component {
  render() {
    const { menus } = this.props;
    //the map allows us to access each element in the menus array
    //then, each object in the array is accessed to get its respective url, and name
    //button is present and when clicked, prints in the console that the item has been added to cart
    return (
      <div className="catalog-container"> 
       
        {menus.map((item, index) => (
          <div key={index} className="catalog-item"> 
            <img src={item.url} alt={item.name} className="item-image"/>
            <div className="item-details">
              <p>{item.name}</p>
              <button onClick={() => this.props.addToCart(item.name)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Catalog;
