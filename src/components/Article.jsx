import React from 'react';
import PropTypes from 'prop-types';

function Article(props){
  return(
    <div>
      <div className="articleBody">
        <hr/>
        <div className='flexArticleItems'>
          <img src={props.image} />
          <p>{props.title}</p>
          <p>{props.description}</p>
        </div>
      </div>
      <style jsx>{`

        .flexArticleItems {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

      `}</style>
    </div>

  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fullDescription: PropTypes.string.isRequired
};

export default Article;
