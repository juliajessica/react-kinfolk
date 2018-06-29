import React from 'react';
import PropTypes from 'prop-types';


function ShoppingItem(props){
  return(
    <div>
      <div className="shopItemBody">
        <div className='flexShoppingItems'>
          <div className="singleShoppingItem">
            <img src={props.image} className="resizeItemImg"/>
            <p className="shoppingTag">{props.tag}</p>
            <p>{props.title}</p>
            <p style={{paddingBottom: '.6rem'}}>{props.price}</p>
          </div>
        </div>
      </div>
      <style jsx>{`

        .flexShoppingItems {
          height: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          grid-auto-flow: dense;

        }
        .singleShoppingItem{
          align-self: center;
          justify-self: center;
        }

        .flexShoppingItems p {
          margin: .2rem;
          font-family: Encode Sans Condensed, 'sans-serif';
        }

        .shoppingTag {
          padding-top:.4rem;
          padding-bottom: .4rem;
          font-size:.6rem;
          text-decoration: underline;
          text-decoration-color: red;
        }

        .resizeItemImg {
          height: 200px;
          width:auto;
        }
        .resizeItemImg:after{
          transition: background-color 1s;
        }
        .resizeItemImg:hover{
          cursor:pointer;

      position: relative;
      overflow: hidden;
      display: block;
      max-width: 100%;
      text-align: center;
                }

  .resizeItemImg:after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffffff;
    z-index: 1;
    -webkit-transition: 0.4s ease;
    -moz-transition: 0.4s ease;
    -ms-transition: 0.4s ease;
    -o-transition: 0.4s ease;
    transition: 0.4s ease;
    opacity: 0;

  }


      `}</style>
    </div>

  );
}

ShoppingItem.propTypes = {
  image: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  fullTitle: PropTypes.string.isRequired,
  fullDetails: PropTypes.string.isRequired
};

export default ShoppingItem;
