import React from 'react'
import './Header.css';

//the following is the header component
//it returns an html of a header implementation with a logo and a navigation bar
class Header extends React.Component{

    render(){
        return(
            <div class="header">
            <a href="#default" class="logo">Lazado</a>
            <div class="header-right">
                <a href="#app">Appliances</a>
                <a href="#gadget">Gadgets</a>
                <a href="#acc">Accessories</a>
  </div>
</div>

        )
    }
}

export default Header