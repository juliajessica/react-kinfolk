import React from 'react';
import PropTypes from 'prop-types';
//<img src={props.viewSelectedArticle.image} className="articleImgResize"/>
function ArticleClicked(props){
  return (
    <div>
      <hr/>
      <h1>article info</h1>
      <div className="articleBody">
        <div className='flexArticleItems'>
          <div className='singleArticle'>

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
