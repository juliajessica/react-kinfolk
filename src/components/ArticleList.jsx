import React from 'react';
// import Article from './Article';

// import articleData from './articleData';

function ArticleList(){
  return(
    <div>
      <div className='ArticleListBody'>
        <h1>this is article list</h1>
        <hr/>
        <div className='flexArticleList'>

        </div>
      </div>
      <style jsx>{`

        .flexArticleList {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

      `}</style>
    </div>

  );
}

export default ArticleList;

// {articleData.map((item, index) =>
//   // <SeasonalProduce
//   //   month={produce.month}
//   //   selection={produce.selection}
//   //   key={index}/>
// )}