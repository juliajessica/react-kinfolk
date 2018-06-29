import React from 'react';
import PropTypes from 'prop-types';


function ShoppingItem(props){
  return(
    <div>
      <div className="shopItemBody">
        <div className='flexShoppingItems'>
          <img src={props.image} className="resizeItemImg"/>
          <p className="shoppingTag">{props.tag}</p>
          <p>{props.title}</p>
          <p>{props.price}</p>
        </div>
      </div>
      <style jsx>{`

        .flexShoppingItems {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .flexShoppingItems p {
          margin: .2rem;
          font-family: Encode Sans Condensed, 'sans-serif';
        }

        .shoppingTag {
          font-size:.4rem;
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
          background-color: rgba(0,0,0,0.6);
          opacity: .5;
          cursor:pointer;
        }

      `}</style>
    </div>

  );
}

ShoppingItem.propTypes = {
  image: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  fullTitle: PropTypes.string.isRequired,
  fullDetails: PropTypes.string.isRequired
};

export default ShoppingItem;
