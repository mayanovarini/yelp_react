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
      term: '', // refers to the search term located in the search input,
      location: '', // refers to the location to search near from the location input,
      sortBy: 'best_match'// represents the selected sorting option to use.
    };
  }

  getSortByClass(sortByOption) {

    if(this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  setSortBy(sortByOption) {
    this.setState({
      sortBy: sortByOption
    });
  }

  handleTermChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  handleSearch(e){
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    e.preventDefault()
  }

  handleLocationChange(e) {
    this.setState({
      location: e.target.value
    });
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOption;

      return <li className={this.getSortByClass(sortByOptionValue)}
                 onClick={() => this.setSortBy(sortByOptionValue)}
                 key={sortByOptionValue} >
                     {sortByOptionValue}
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
