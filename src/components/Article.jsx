import React from 'react';
import PropTypes from 'prop-types';

function Article(props){
  return(
    <div>
      <div className="articleBody">
        <hr/>
        <div className='flexArticleItems'>

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

export default Article;
