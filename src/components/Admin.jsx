import React from 'react';
import PropTypes from 'prop-types';
import ShoppingList from './ShoppingList';

function Admin(props){
  console.log(props.currentRouterPath);
  return(
    <div>
      <h1>admin is working</h1>
      <ShoppingList shoppingListState={props.shoppingListState} />
    </div>
  );
}

Admin.propTypes = {
  shoppingListState: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;
