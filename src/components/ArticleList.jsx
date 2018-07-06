import React from 'react';
import Article from './Article';

import articleData from './articleData';
import PropTypes from 'prop-types';


//images
import art1 from '../assets/img/art1.jpg';

function ArticleList(props){
  // console.log(props.currentRouterPath);
  // if (this.state.) {
  //
  // }
  // displayArticle(view){
  // // let newShoppingItemData = this.state.shoppingItemData.slice();
  // // for (let i=0; i <= newShoppingItemData.length; i++){
  // for (let i=0; i <= view.length; i++){
  //   // <Article newShoppingItemData[i] />
  //   if ()
  // }

  return(
    <div>
      <div className='articleListBody'>
        <div className="currentArticle">
          <img src={art1} title="The New Democrats" className="currentArticleImg"/>
          <p className="underlineRed">ARTS & CULTURE, ISSUE 28</p>
          <p className="titleCurrentArticle">The New Democrats</p>
          <p style={{color: '#4D4D4D', fontSize:'.8rem'}}>In Canada, brothers Jagmeet and Gurratan Singh are redressing the stereotype of “image-conscious” politicians.</p>
          <p style={{color: '#4D4D4D', fontSize:'.4rem', padding:'1rem'}}>READ MORE</p>

          <div className='flexArticleList' onClick={props.onSingleArticle}>
            {props.liftedShoppingData.map((article, index) =>
              <Article
                title={article.title}
                description={article.description}
                image={article.image}
                fullDescription={article.fullDescription}
                key={index} />
            )}
          </div>


        </div>

      </div>
      <style jsx>{`

        .articleListBody {
          display:flex;
          flex-direction:row;
          padding-top:2rem;
          padding-bottom: 4rem;
          border-bottom: 1px solid #4D4D4D;
          border-color: #4D4D4;

        }
        .currentArticle {
          padding-right:2rem;
          text-align: center;
        }
        .titleCurrentArticle{
          font-size: 2rem;
        }
        .currentArticleImg{
          display: block;
          height: auto;
          width:100%;
        }

        .flexArticleList {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          font-size: .9rem;
          grid-gap: 1rem;
          border-left: 1px solid #4D4D4D;
          padding-left:1rem;
        }

        .underlineRed{
          padding-top: .6rem;
          font-size:.6rem;
          text-decoration: underline;
          text-decoration-color: red;
          color: #4D4D4D;
        }


      `}</style>
    </div>
  );
}

ArticleList.propTypes = {
  liftedShoppingData: PropTypes.func,
};

export default ArticleList;
