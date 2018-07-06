import React from 'react';
import PropTypes from 'prop-types';

function ArticleClicked(props){
  return (
    <div>
      <hr/>
      <div className="articleBody">
        <div className='flexArticleItems'>
          <div className='singleArticle'>
            <img src={props.viewSelectedArticle.image} className="articleImgResize"/>
            <p>{props.viewSelectedArticle.title}</p>
            <p className="CopyLighterColor">{props.viewSelectedArticle.fullDescription}</p>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
}

ArticleClicked.propTypes = {
  viewSelectedArticle: PropTypes.object
};

export default ArticleClicked;
