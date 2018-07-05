import React from 'react';
import PropTypes from 'prop-types';

function Admin(props){
  return(
    <div>
      <h1>admin is working</h1>
    </div>
  );
}

Admin.propTypes = {
  shoppingList: PropTypes.array
}

export default Admin;
