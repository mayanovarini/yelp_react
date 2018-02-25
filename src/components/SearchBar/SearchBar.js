import React from 'react';
import './SearchBar.css';

let sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // two input boxes states
      term: '', // refers to the search term located in the search input,
      location: '', // refers to the location to search near from the location input,

      // 3 filters state
      sortBy: 'best_match'// represents the selected sorting option to use.
    };
  }

  // use the sortBy state to change the styling class
  getSortByClass(sortByOption) {

    if(this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  // filter click will change sortBy state that is used as a sort filter
  setSortBy(sortByOption) {
    this.setState({
      sortBy: sortByOption
    });
  }

  // term state changes when user types a new term on search bar
  handleTermChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  // location state changes when user types a new location on search bar
  handleLocationChange(e) {
    this.setState({
      location: e.target.value
    });
  }

  // run the passed-in function reference prop
  handleSearch(e){
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    e.preventDefault()
  }


  renderSortByOptions() {
    return Object.entries(sortByOptions).map(([sortByOptionName, sortByOptionValue]) => {
      return <li className={this.getSortByClass(sortByOptionValue)}
                 onClick={() => this.setSortBy(sortByOptionValue)}
                 key={sortByOptionValue} >
                     {sortByOptionName}
             </li>;
    });
  }

  render(){
    return(
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={(e) => this.handleTermChange(e)} placeholder="Search Businesses" />
          <input onChange={(e) => this.handleLocationChange(e)} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={(e) => this.handleSearch(e)}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
