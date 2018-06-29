import React from 'react';
import Nav from './Nav';
import Router from './Router';
import Footer from './Footer';

function App(){
  return (
    <div className="body">
      <Nav />
      <Router />
      <Footer />

      <style jsx>{`
        .body {
          margin-left:2rem;
          margin-right: 2rem;
        }
      `}</style>
    </div>
  );
}

export default App;
