import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ArticleList from './ArticleList';
import Article from './Article';
import ShoppingList from './ShoppingList';
import ShoppingItem from './ShoppingItem';
import Error404 from './Error404';

function Router(){
  return(
    <div>
      <Switch>
        <Route exact path='/' component={ArticleList} />
        <Route path='/article' component={Article} />
        <Route path='/shoppinglist' component={ShoppingList} />
        <Route path='/shoppingItem' component={ShoppingItem} />
        <Route component={Error404} />
      </Switch>


      <style jsx>{`

      `}</style>
    </div>
  );
}

export default Router;
