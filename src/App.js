import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import Business from './components/Business/Business';
import SearchBar from './components/SearchBar/SearchBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>nom nom</h1>
          <SearchBar />
          <BusinessList />
      </div>
    );
  }
}

export default App;
