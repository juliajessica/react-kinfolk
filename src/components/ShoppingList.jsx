import React from 'react';
import ShoppingItem from './ShoppingItem';

import shoppingItemData from './ShoppingItemData';

function ShoppingList(){
  return(
    <div>
      <div className="shopListBody">

        <hr/>
        <div className='flexItems'>
          {shoppingItemData.map((item, index) =>
            // <SeasonalProduce
            //   month={produce.month}
            //   selection={produce.selection}
            //   key={index}/>
          )}
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

export default ShoppingList;
