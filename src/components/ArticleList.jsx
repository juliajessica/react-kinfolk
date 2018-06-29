import React from 'react';
import Article from './Article';

import articleData from './articleData';

function ArticleList(){
  return(
    <div>
      <div className="ArticleListBody">

        <hr/>
        <div className='flexItems'>
          {articleData.map((item, index) =>
            // <SeasonalProduce
            //   month={produce.month}
            //   selection={produce.selection}
            //   key={index}/>
          )}
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

export default ArticleList;
