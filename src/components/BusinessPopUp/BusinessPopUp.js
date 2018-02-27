import React from 'react';
import './BusinessPopUp.css';

export default class BusinessPopUp extends React.Component {

  renderReviewList() {

    return this.props.reviews.map(review => {
      console.log("review", review);
      return <li className="review-list"
                 key={review.id}>

                 <div className="user-container">
                   <div className="user-image-container">
                     <img src={review.imageSrc} alt=''/>
                   </div>
                   <h3>{review.name}</h3>
                 </div>

                 <div className="review-container">
                   <h3>I gave{this.props.business.name}, {review.rating} stars!</h3>
                   <p>{review.text}</p>
                   <p>Check my review <a href={review.url}>here</a></p>
                 </div>

             </li>
    });
  }

  resetPopUp() {
    console.log("reset pop up to close this clicked")
    this.props.closePopUp(false)
  }


  render() {
    if(!this.props.reviews || !this.props.business) {
      return null;
    }

    return(
      <div className="PopUp">
        <button onClick={() => this.resetPopUp()}>X</button>
        <div className="PopUp-inner">
          <div className="image-container">
            <img src={this.props.business.imageSrc} alt=''/>
          </div>
          <h2>{this.props.business.name}</h2>

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
              <h3 className="review-heading">Reviews</h3>

            </div>
          </div>
          <ul>
            {this.renderReviewList()}
          </ul>
        </div>
      </div>
    )
  }
}
