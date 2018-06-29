import React from 'react';

function Footer(){
  return(
    <div className="footer">

      <p>©KINFOLK 2018</p>
      <p>TERMS &amp; CONDITIONS</p>

      <style jsx>{`
        .footer{
          width: 100%;
          height:150px;
          display: flex;
          justify-content: center;
        }
        .footer p {
          align-items: center;
          align-self: flex-end;
          font-size: 1.3rem;
        }

      `}</style>
    </div>

  );
}

export default Footer;
