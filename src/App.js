import React, { Component } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import Business from './components/Business/Business';
import SearchBar from './components/SearchBar/SearchBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1><img id="nomster" alt="nomster logo" src="/nomster.png" />nom nom</h1>
          <SearchBar />
          <BusinessList />
      </div>
    );
  }
}

export default App;
