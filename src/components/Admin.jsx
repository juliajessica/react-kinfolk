import React from 'react';
import PropTypes from 'prop-types';

import ShoppingList from './ShoppingList';
import ShoppingItem from './ShoppingItem';
import shoppingItemData from './ShoppingItemData';

function Admin(props){
  // let editShoppingItem = null;
  // if ()

  // handleEditItem(){
  //   console.log('eek');
  // }
  // console.log(props.currentRouterPath);

  return(
    <div>
      <h1>admin is working</h1>
        <div>
          {shoppingItemData.map((item, index) =>
            <ShoppingItem
              image={item.image}
              tag={item.tag}
              title={item.title}
              price={item.price}
              fullTitle={item.fullTitle}
              fullDetails={item.fullDetails}
              key={index} />
          )}
        </div>

      <h1>click me</h1>
    </div>
  );
}
// <ShoppingList shoppingListState={props.shoppingListState} />

Admin.propTypes = {
  shoppingListState: PropTypes.array, //lifted state
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;
