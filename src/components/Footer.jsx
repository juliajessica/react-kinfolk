import React from 'react';

function Footer(){
  return(
    <div className="footer">
      <p style={{textAlign: 'center', paddingTop: '3rem', fontSize:'.5rem'}}>CONNECT WITH KINFOLK</p>
      <div className="flexFooter">
        <p>©KINFOLK 2018 <span className="terms">TERMS &amp; CONDITIONS</span></p>
        <p>SITE BY <strong>SIX</strong></p>
      </div>

      <style jsx>{`
        .footer{
          width: 100%;
          height:150px;
        }
        .footer p {
          align-items: center;
          align-self: flex-end;

        }
        .flexFooter{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          font-size:.9rem;
          padding: 0 2rem;
        }
        .flexFooter p{
          font-size: .5rem;
        }
        .terms {
          color: #4D4D4D;
        }


      `}</style>
    </div>

  );
}

export default Footer;
