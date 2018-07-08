import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ArticleList from './ArticleList';
// import Article from './Article';
import ShoppingList from './ShoppingList';
import ShoppingItem from './ShoppingItem';
import Error404 from './Error404';
// import Admin from './Admin';
//import shoppingItemData from './ShoppingItemData';
import articleListData from './ArticleData';


class Router extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      articleListData,
      viewSelectedArticle: null
    };
    this.handleSingleArticle = this.handleSingleArticle.bind(this);
    console.log(this.state.handleSingleArticle);
    // console.log(this.state.handleSingleArticle);
  }

  handleSingleArticle(article){
    this.setState({viewSelectedArticle: article});
    alert('This is the article that you want to see' + this.state.viewSelectedArticle.title);
    console.log(this.state.viewSelectedArticle.title);
    // console.log(viewSelectedArticle);
  }

  render(){
    return(
      <div className="body">
        <Switch>
          <Route exact path='/' render={()=>
            <ArticleList
              onSingleArticle={this.handleSingleArticle}
              liftedShoppingData={this.state.articleListData}
              viewSelectedArticle={this.state.viewSelectedArticle} />} />//lifted state
          <Route path='/shoppingList' component={ShoppingList} />
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

//<Route path='/admin' render={(props)=><Admin shoppingListState={this.state.shoppingItemData} currentRouterPath={props.location.pathname}/> }/>
