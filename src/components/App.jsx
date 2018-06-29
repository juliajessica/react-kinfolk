import React from 'react';
import Nav from './Nav';
import Router from './Router';

function App(){
  return (
    <div>
      <Header />
      <Switch>
        <Nav />
        <Router />
        <Footer />
      </Switch>
    </div>
  );
}

export default App;
