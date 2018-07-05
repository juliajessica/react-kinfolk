import React from 'react';
import PropTypes from 'prop-types';

function ShoppingItem(props){
  return(
    <div>
      <div className="shopItemBody">
        <div className='flexShoppingItems'>
          <div className="singleShoppingItem imgoverlay">
            <img src={props.image} className="resizeItemImg"/>
            <p className="shoppingTag">{props.tag}</p>
            <p>{props.title}</p>
            <p style={{paddingBottom: '.6rem'}}>{props.price}</p>
          </div>
        </div>
      </div>
      <style jsx>{`

        .flexShoppingItems {
          height: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          grid-auto-flow: dense;

        }
        .singleShoppingItem{
          align-self: center;
          justify-self: center;
        }

        .flexShoppingItems p {
          margin: .2rem;
          font-family: Encode Sans Condensed, 'sans-serif';
        }

        .shoppingTag {
          padding-top:.4rem;
          padding-bottom: .4rem;
          font-size:.6rem;
          text-decoration: underline;
          text-decoration-color: red;
        }

        .resizeItemImg {
          height: 200px;
          width:auto;
        }

        .resizeItemImg:after{
          transition: background-color 1s;
        }
        .resizeItemImg:hover{
          opacity: .3;
          cursor:pointer;
          position: relative;
          overflow: hidden;
          display: block;
          max-width: 100%;
          text-align: center;
        }




      `}</style>
    </div>

  );
}

ShoppingItem.propTypes = {
  image: PropTypes.string,
  tag: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  fullTitle: PropTypes.string,
  fullDetails: PropTypes.string
};

export default ShoppingItem;
