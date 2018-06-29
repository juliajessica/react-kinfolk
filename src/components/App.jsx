import React from 'react';

function App(){
  return (
    <div>
      <Header />
      <Switch>
        <Nav />
        <Route exact path='/' component={} />
        <Footer />
      </Switch>
    </div>
  );
}

export default App;
