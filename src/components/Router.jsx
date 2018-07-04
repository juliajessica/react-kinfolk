import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ArticleList from './ArticleList';
import Article from './Article';
import ShoppingList from './ShoppingList';
import ShoppingItem from './ShoppingItem';
import Error404 from './Error404';
import Admin from './Admin';

import shoppingItemData from './ShoppingItemData';


class Router extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shoppingItemData
      // changeAdminRoute: {}
    };
    this.handleSingleArticle = this.handleSingleArticle.bind(this);
    console.log(shoppingItemData);
    console.log(this.state.handleSingleArticle);
  }

  handleSingleArticle(selectedArticle){
    let newShoppingItemData = this.state.shoppingItemData.slice();
    this.setState({diplayArticle: selectedArticle});
    console.log(this.state);
  }

  render(){
    return(
      <div className="body">
        <Switch>
          <Route exact path='/' render={()=>
            <ArticleList onSingleArticle={this.handleSingleArticle} />} />//lifted state
          <Route path='/shoppinglist' component={ShoppingList} />
          <Route path='/shoppingItem' component={ShoppingItem} />
          <Route component={Error404} />
        </Switch>


        <style jsx>{`
          .body {
            margin-left:2rem;
            margin-right: 2rem;
            max-width: 1700px;
          }

        `}</style>
      </div>
    );
  }
}

export default Router;
