import React from 'react';
import PropTypes from 'prop-types';


function ShoppingItem(props){
  return(
    <div>
      <div className="shopItemBody">

        <hr/>
        <div className='flexShoppingItems'>
          <img src {props.image}>
          <h2>{props.fullTitle}</h2>
          <p>{props.fullDetails}</p>
        </div>
      </div>
      <style jsx>{`

        .flexShoppingItems {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
