import React from 'react';
import PropTypes from 'prop-types';


function ShoppingItem(){
  return(
    <div>
      <div className="shopItemBody">

        <hr/>
        <div className='flexShoppingItems'>

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

export default ShoppingItem;
