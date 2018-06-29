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
          <p className="underlineRed">ARTS & CULTURE, ISSUE 28</p>
          <img src={art1} title="The New Democrats" className="currentArticleImg"/>
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
        .titleCurrentArticle{
          font-size: 3rem;
        }
        .currentArticleImg{
          display: block;
          height: auto;
          width:100%;
        }

        .flexArticleList {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gird-gap: 2rem;
        }
        .underlineRed{
          font-size:.4rem;
          text-decoration: underline;
          text-decoration-color: red;
        }



      `}</style>
    </div>

  );
}

export default ArticleList;
