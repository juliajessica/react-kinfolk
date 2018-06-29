import React from 'react';
import ShoppingItem from './ShoppingItem';
import shoppingItemData from './ShoppingItemData';
//images
import bannerShop from '../assets/img/bannerShop.jpg'

function ShoppingList(){
  return(
    <div>
      <div className="shopListBody">
        <p className="sectionalSearch">SHOP: <span className="underlineRed">ALL</span>  MAGAZINE SUBSCRIPTIONS BOOKS ARTWORK NOTECARDS</p>
        <div className="flexBanner">
          <img src={bannerShop} className="bannerShop"/>

          <p>
          <p className="underlineRed" style={{fontSize:'.5rem'}}>ARTWORK</p>
          <p className="bannerTitle">The Kinfolk Artwork Series</p>
          <p className="bannerCopy">An exciting extension of <em>Kinfolk</em>’s ethos of fostering community and celebrating the many talents of our collaborators, <em>The Kinfolk Artwork Series</em> consists of three limited edition prints selected by the <em>Kinfolk</em> team.</p>
          </p>
        </div>
        <div className='flexShoppingList'>
          {shoppingItemData.map((item, index) =>
            <ShoppingItem
              image={item.image}
              tag={item.tag}
              title={item.title}
              price={item.price}
              fullTitle={item.fullTitle}
              fullDetails={item.fullDetails}
              key={index}/>
          )}
        </div>
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Lora');

        .bannerShop {
          display: block;
          height: auto;
          width:100%;
        }
        .flexBanner {
          align-items: center;
          text-align: center;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 1rem;
          padding:3rem;
        }
        .bannerTitle {
          font-family: 'Lora', serif;
          font-size: 2rem;
        }
        .bannerCopy {
          font-family: 'Lora', serif;
          font-size: .8rem;
          font-weight: lighter;
        }
        .flexShoppingList {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          font-size: .9rem;
        }
        .sectionalSearch {
          font-family: 'Nanum Gothic', sans-serif;
          font-size: .6rem;
          line-space: 1rem;
          letter-spacing: .2rem;
          text-align:center;
          padding-top:3rem;
        }
        .underlineRed{
          text-decoration: underline;
          text-decoration-color: red;
        }

      `}</style>
    </div>

  );
}

export default ShoppingList;
