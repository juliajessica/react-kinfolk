import React from 'react';
import hamburger from '../assets/img/hamburger.svg';
import logo from '../assets/img/logo.png';
import shoppingBag from '../assets/img/shopping.svg';
import search from '../assets/img/search.svg';

function Nav(){
  return(
    <div className="flexNav">
      <img src={hamburger} className="svgResize"/>
      <img src={logo} className="logo" title="Kinfolk"/>
      <img src={shoppingBag} className="svgResize"/>
      <h5>SHOP</h5>
      <img src={search} className="svgResize"/>


      <style jsx>{`
          .flexNav {
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            padding-top:1rem;
          }
          .logo {
            max-height:50px;
            width: auto;
          }
          .svgResize {
            max-height:20px;
            width: auto;
          }
      `}</style>
    </div>
  );
}

export default Nav;
