import React from 'react';
import PropTypes from 'prop-types';

function Article(props){
  return(
    <div>
      <div className="articleBody">
        <div className='flexArticleItems'>
          <div className='singleArticle'>
            <img src={props.image} className="articleImgResize"/>
            <p>{props.title}</p>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .flexArticleItems {
          height: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gird-gap: 2rem;
          grid-auto-flow: dense;
        }
        .singleArticle{
          align-self: center;
          justify-self: center;
        }
        .articleImgResize {
          display:block;
          width: 100%;
          height:auto;
          margin:auto;
        }

      `}</style>
    </div>

  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
  fullDescription: PropTypes.string.isRequired
};

export default Article;
