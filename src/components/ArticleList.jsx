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
          <p style={{color: '#4D4D4D', fontSize:'.8rem'}}>In Canada, brothers Jagmeet and Gurratan Singh are redressing the stereotype of “image-conscious” politicians.</p>
          <p style={{color: '#4D4D4D', fontSize:'.4rem', padding:'1rem'}}>READ MORE</p>
          <div className="divider"></div>


        </div>
        <div className='flexArticleList'>
          {articleData.map((article, index) =>
            <Article
              title={article.title}
              description={article.description}
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
          padding-top:2rem;
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
        }

        .underlineRed{
          padding-top: .6rem;
          font-size:.6rem;
          text-decoration: underline;
          text-decoration-color: red;
          color: #4D4D4D;
        }
        .divider{
          position:absolute;
          left:47%;
          top:17%;
          bottom:-180%;
          border-left:1px solid #4D4D4D;
        }



      `}</style>
    </div>

  );
}

export default ArticleList;
