import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';
import BusinessPopUp from '../BusinessPopUp/BusinessPopUp';

class BusinessList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      reviews: [],
      showPopUp: false,
      business: null
    }

    this.updateReviews = this.updateReviews.bind(this);
    this.togglePopUp = this.togglePopUp.bind(this);
  }

  updateReviews(new_reviews){
    this.setState({
      reviews: new_reviews
    })
  }

  togglePopUp(business){
    this.setState({
      showPopUp: !this.state.showPopUp,
      business: business
    })
  }

  render() {
    return(
      <div className="BusinessList">
        {
          this.props.businesses.map(business => {
            return <Business key={business.id}
                             business={business}
                             updateReviews={this.updateReviews}
                             togglePopUp={this.togglePopUp}
                             popUpStatus={this.state.showPopUp}

            />;
          })
        }

        {this.state.showPopUp ?
          <BusinessPopUp text="Close PopUp"
                         reviews={this.state.reviews}
                         closePopUp={this.togglePopUp}
                         business={this.state.business}
                         popUpStatus={this.state.showPopUp} />
          : null
        }



      </div>

    );
  }
}

export default BusinessList;
