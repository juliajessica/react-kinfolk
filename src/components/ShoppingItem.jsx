import React from 'react';
import PropTypes from 'prop-types';

import shoppingItemData from './ShoppingItemData';


function ShoppingItem(){
  return(
    <div>
      <div className="fullPage">

        <hr/>
        <div className='flexItems'>

        </div>
      </div>
      <style jsx>{`

        .flexItems {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

      `}</style>
    </div>

  );
}

export default ShoppingItem;
