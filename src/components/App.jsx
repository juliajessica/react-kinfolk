import React from 'react';
import Nav from './Nav';
import Router from './Router';
import Footer from './Footer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state {
      selectedArticle: null
      // changeAdminRoute: {}
    }
  }

  render(){
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <Nav />
        <Router onClick={this.handleClickArticle}/>
        <Footer />


      <style jsx>{`

          `}
      </ style>

      </div>
    );
  }

}

export default App;
