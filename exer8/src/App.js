import React from 'react';
import Header from './Components/Header';
import Catalog from './Components/Catalog';

//initialized item objects
//note that this is a dynamic implementation 
//url are image address available online for easier implementation
const menus = 
  [{name: "Computer", url: "https://cdn.ttgtmedia.com/rms/onlineimages/acer_chromebook-f_mobile.jpg", id: 1},
  {name: "Phone", url: "https://auspost.com.au/shop/static/WFS/AusPost-Shop-Site/-/AusPost-Shop-auspost-B2CWebShop/en_AU/feat-cat/mobile-phones/always-on/category-tiles/MP_UnlockedPhones_3.jpg", id: 2},
  {name: "Kettle", url: "https://www.smappliance.com/cdn/shop/products/10156876-KW-1362-1.7LE.KETTLE.png?v=1620836331", id:3},
  {name: "Case", url: "https://as-images.apple.com/is/MM2C3_AV4?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1645850104771", id:4},]
;
function App() {
  return (
    //parent node: div
    // children: header and menu items catalog
    <div className='app'>
      <Header/>
      <Catalog menus={menus} /> 
      
    </div>
  );
}

export default App;
