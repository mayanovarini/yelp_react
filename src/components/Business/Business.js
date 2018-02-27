import React from 'react';
import './Business.css';
import BusinessPopUp from '../BusinessPopUp/BusinessPopUp';
import Yelp from '../../util/Yelp.js';


// this component calls searchReview

class Business extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      reviews: [],
      showPopUp: false
    }

    this.togglePopUp = this.togglePopUp.bind(this);
    this.showPopUp = this.showPopUp.bind(this);
  }

  togglePopUp(value){
    this.setState({
      showPopUp: value
    })
  }

  showPopUp(id) {
    console.log("reviews shows up");
    Yelp.searchReview(this.props.business.id).then(reviews =>
      this.setState({
        reviews: reviews,
        showPopUp: true
      })
    )
  }

  render(){
    return(
      <div className="Business">
        <div className="image-container">
          <img src={this.props.business.imageSrc} alt=''/>
        </div>
        <h2 onClick={() => this.showPopUp(this.props.business.id)}>{this.props.business.name}</h2>

          {this.state.showPopUp ?
            <BusinessPopUp text="Close PopUp"
                           reviews={this.state.reviews}
                           closePopUp={this.togglePopUp}
                           business={this.props.business} />
            : null
          }

        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{this.props.business.state} {this.props.business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">{this.props.business.rating} stars</h3>
            <p>{this.props.business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
