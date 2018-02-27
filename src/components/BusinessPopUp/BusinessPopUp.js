import React from 'react';
import './BusinessPopUp.css';

class PopUp extends React.Component {

  renderReviewList() {
    return this.props.reviews.map(review => {
      return <li className="review-list"
                 key={review.id}>

                 <div className="user-container">
                   <div className="user-image-container">
                     <img src={review.image_url} alt=''/>
                   </div>
                   <h3>{review.user.name}</h3>
                 </div>

                 <div className="review-container">
                   <h3>I gave{this.props.business.name}, {review.rating} stars!</h3>
                   <p>{review.text}</p>
                   <p>Check my review <a href={review.url}>here</a></p>
                 </div>

             </li>
    });
  }


  render() {
    return(
      <div className="PopUp">
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
              <h3 className="review-heading">Reviews</p>
              <ul>
                {this.renderReviewList()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
