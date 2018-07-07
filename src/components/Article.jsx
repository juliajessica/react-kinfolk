import React from 'react';
import PropTypes from 'prop-types';

function Article(props){
  //{props.onSingleArticle({title: props.title, image: props.image, fullDescription: props.fullDescription});}}>
  return(
    <div onClick={props.onSingleArticle}>
      <h1>clicked</h1>
      <div className="articleBody">
        <div className='flexArticleItems'>
          <div className='singleArticle'>
            <img src={props.image} className="articleImgResize"/>
            <p>{props.title}</p>
            <p className="CopyLighterColor">{props.description}</p>
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
        .CopyLighterColor {
          color: #4D4D4D;
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
  fullDescription: PropTypes.string,
  onSingleArticle: PropTypes.func
};

export default Article;


// if (props.currentRouterPath === '') {
//   return(
//     <div onClick={() => {alert(hi + props.title); }}>
//       {clickedArticle}
//     </div>
//   );
// } else {
// return(
//   <div>
//     {clickedArticle}
//   </div>
// );
// }
