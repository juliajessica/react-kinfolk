import React from 'react';
import Article from './Article';

import articleData from './articleData';

//images
import art1 from '../assets/img/art1.jpg';

function ArticleList(){
  return(
    <div>
      <div className='articleListBody'>
        <div className="currentArticle">
          <img src={art1} title="The New Democrats" className="currentArticleImg"/>
          <p className="underlineRed">ARTS & CULTURE, ISSUE 28</p>
          <p className="titleCurrentArticle">The New Democrats</p>
          <p>In Canada, brothers Jagmeet and Gurratan Singh are redressing the stereotype of “image-conscious” politicians.</p>
          <p>READ MORE</p>


        </div>
        <div className='flexArticleList'>
          {articleData.map((article, index) =>
            <Article
              title={article.title}
              decription={article.description}
              image={article.image}
              fullDescription={article.fullDescription}
              key={index} />
          )}
        </div>
      </div>
      <style jsx>{`

        .articleListBody {
          display:flex;
          flex-direction:row;
        }
        .currentArticle {
          padding:1rem;
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
        }

        .underlineRed{
          padding-top: .6rem;
          font-size:.6rem;
          text-decoration: underline;
          text-decoration-color: red;
        }



      `}</style>
    </div>

  );
}

export default ArticleList;
