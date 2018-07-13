import React from 'react';
import PropTypes from 'prop-types';

function Article(props){
  return(
    <div onClick={()=> {props.onSingleArticle(props.id);}}>
      <div className="articleBody">
        <div className='flexArticleItems'>
          <div className='singleArticle'>
            <img src={props.image} className="articleImgResize"/>
            <p className="articleTitle">{props.title}</p>
            <p className="CopyLighterColor">{props.description}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .flexArticleItems {
          height: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gird-gap: 2rem;
          grid-auto-flow: dense;
        }
        .singleArticle {
          align-self: center;
          justify-self: center;
        }

        .articleImgResize {
          display:block;
          width: 100%;
          height:auto;
          margin:auto;
          cursor: pointer;
        }

        .CopyLighterColor {
          color: #4D4D4D;
        }

        .articleTitle {
          padding-top: 1rem;
          padding-bottom: 1rem;
          font-weight: bold;
        }

        * {
          margin: 0;
          padding: 0;
        }
        body {
          margin: 0;
        }

      `}</style>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
  fullDescription: PropTypes.string,
  onSingleArticle: PropTypes.func
};

export default Article;
