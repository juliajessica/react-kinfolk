import React from 'react';
import { Link } from 'react-router-dom';

//images
import hamburger from '../assets/img/hamburger.svg';
import logo from '../assets/img/logo.png';
import shoppingBag from '../assets/img/shopping.svg';
import search from '../assets/img/search.svg';
import banner from '../assets/img/banner1600.jpg';


function Nav(){
  return(
    <div>
      <Link to='/'><div className="bannerImg" title="kinfolk magazine 2018"></div></Link>
      <div className="flexNav">
        <img src={hamburger} className="svgResize" />
        <Link to='/'><img src={logo} className="logo" title="Kinfolk" /></Link>
        <div className="rightNav">
          <img src={shoppingBag} className="svgResize" />
          <h5><Link to="/shoppingList" style={{fontFamily: 'Nanum Gothic, sans-serif',
            cursor: 'pointer', color: '#4D4D4D', fontWeight: 'lighter', textDecoration: 'none'}}>SHOP</Link></h5>
          <img src={search} className="svgResize" />
        </div>
      </div>
      <hr style={{color: '#4D4D4D'}}/>


      <style jsx>{`
          @import @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic');

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
          .rightNav{
            display:flex;
            flex-direction: row;
            justify-content: flex-end;
          }
          .bannerImg {
            width: 100%;
            height: 300px;
            background-image: url(${banner});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            margin:0;
          }
      `}</style>
    </div>
  );
}

export default Nav;

// <img src={banner} title="kinfolk magazine 2018" style={{overflow: 'hidden'}}/>
