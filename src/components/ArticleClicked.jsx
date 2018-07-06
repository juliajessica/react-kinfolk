import React from 'react';
import PropTypes from 'prop-types';

function ArticleClicked(props){
  return (
    <div>
      <hr/>
        <div className="articleBody">
          <div className='flexArticleItems'>
            <div className='singleArticle'>
              <img src={props.image} className="articleImgResize"/>
              <p>{props.title}</p>
              <p className="CopyLighterColor">{props.description}</p>
            </div>
          </div>
      </div>
      <hr/>
    </div>
  );
}

TicketDetail.propTypes = {
  selectedTicket: PropTypes.object
};

export default TicketDetail;
