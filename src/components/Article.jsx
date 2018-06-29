import React from 'react';
import PropTypes from 'prop-types';

function Article(props){
  return(
    <div>
      <div className="articleBody">
        <hr/>
        <div className='flexItems'>

        </div>
      </div>
      <style jsx>{`

        .flexItems {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

      `}</style>
    </div>

  );
}

export default Article;
