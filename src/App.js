import React, { Component } from 'react';
import QuoteBox from './QuoteBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <QuoteBox/>
        </header>
      </div>
    );
  }
}

export default App;
