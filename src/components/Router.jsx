import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ArticleList from './ArticleList';
// import Article from './Article';
import ShoppingList from './ShoppingList';
import ShoppingItem from './ShoppingItem';
import Error404 from './Error404';
import Admin from './Admin';

import shoppingItemData from './ShoppingItemData';


class Router extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shoppingItemData,
      viewSelectedArticle: false
    };
    // this.handleSingleArticle = this.handleSingleArticle.bind(this);
    // console.log(shoppingItemData);
    // console.log(this.state.handleSingleArticle);
  }

  handleSingleArticle(selectedArticle){
    let newShoppingItemData = this.state.shoppingItemData.slice();
    console.log(newShoppingItemData);
    newShoppingItemData.push(selectedArticle);
    this.setState({shoppingItemData: newShoppingItemData});
    console.log(shoppingItemData);

  }

  // <Route exact path='/' component={ArticleList} />
  //<Route exact path='/' render={()=>
  //   <ArticleList onSingleArticle={this.handleSingleArticle} />} />//lifted state
  render(){
    return(
      <div className="body">
        <Switch>
          <Route exact path='/' render={(props)=>
            <ArticleList liftedShoppingData={this.state.shoppingItemData} currentRouterPath={props.location.pathname} />} />//lifted state
          <Route path='/shoppingList' component={ShoppingList} />
          <Route path='/shoppingItem' component={ShoppingItem} />
          <Route path='/admin' render={(props)=><Admin shoppingListState={this.state.shoppingItemData} currentRouterPath={props.location.pathname}/> }/>
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
