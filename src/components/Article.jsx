import React from 'react';
import PropTypes from 'prop-types';

function Article(){
  return(
    <div>
      <div className="seasonalProduceList">
        <h1>Seasonal Produce</h1>
        <hr/>
        <div className='flexItems'>
          {.map((produce, index) =>
            <SeasonalProduce
              month={produce.month}
              selection={produce.selection}
              key={index}/>
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

export default Article;
