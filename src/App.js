import React, { Component } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import Business from './components/Business/Business';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp.js';

/* Project 1 - 3 have these constants, but on project 4, these are replaced with real data

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italiane',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses : []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy){
      Yelp.search(term, location, sortBy).then(businesses => {
        console.log('businesses:', businesses)
        this.setState({
          businesses: businesses
        })
      });
  }

  render() {
    return (
      <div className="App">
        <h1><img id="nomster" alt="nomster logo" src="/nomster.png" />nom nom</h1>
          <SearchBar searchYelp={this.searchYelp} />
          <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
