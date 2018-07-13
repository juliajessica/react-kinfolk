import React from 'react';
import PropTypes from 'prop-types';

function ArticleClicked(props){
  return (
    <div>
      <div className="articleBody">
        <div className='flexArticleItems'>
          <div className='singleArticle'>
            <img src={props.viewSelectedArticle.image} className="articleImgResize"/>
            <p className="titleArticleClicked">{props.viewSelectedArticle.title}</p>
            <p className="CopyLighterColor">{props.viewSelectedArticle.fullDescription}</p>
          </div>
        </div>
      </div>
      <hr/>
      <style jsx>{`
        .articleImgResize {
          display:block;
          width: auto;
          height: 600px;
          margin:auto;
        }
        .titleArticleClicked {
          font-weight: bold;
        }
          `}
      </style>
    </div>
  );
}

ArticleClicked.propTypes = {
  viewSelectedArticle: PropTypes.object
};

export default ArticleClicked;
