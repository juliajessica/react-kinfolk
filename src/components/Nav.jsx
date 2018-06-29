import React from 'react';
import hamburger from '../assets/img/hamburger.svg';
import logo from '../assets/img/logo.png';
import shoppingBag from '../assets/img/shopping.svg';
import search from '../assets/img/search.svg';

function Nav(){
  return(
    <div>
      <div className="flexNav">
        <img src={hamburger} className="svgResize"/>
        <img src={logo} className="logo" title="Kinfolk"/>
        <div className="rightNav">
          <img src={shoppingBag} className="svgResize"/>
          <h5>SHOP</h5>
          <img src={search} className="svgResize"/>
        </div>
      </div>
    <hr/>


      <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Encode+Sans+Condensed');



          .flexNav {
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            padding-bottom: -1rem;
          }
          .logo {
            max-height:50px;
            width: auto;
          }
          .svgResize {
            max-height:20px;
            width: auto;
            padding:1rem;
          }
          h5 {
            font-family: 'Encode Sans Condensed', sans-serif;
            
          }
          .rightNav{
            display:flex;
            flex-direction: row;
            justify-content: flex-end;
          }
      `}</style>
    </div>
  );
}

export default Nav;
