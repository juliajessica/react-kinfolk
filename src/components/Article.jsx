import React from 'react';
import PropTypes from 'prop-types';

function Article(props){
  return(
    <div>
      <div className="articleBody">
        <div className='flexArticleItems'>
          <img src={props.image} className="articleImgResize"/>
          <p>{props.title}</p>
          <p>{props.description}</p>
        </div>
      </div>
      <style jsx>{`

        .flexArticleItems {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          grid-gap: 1rem;
          padding:1rem;
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
