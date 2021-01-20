/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-state */
import React from 'react';
import ReactDom from 'react-dom';
import StarComponents from './components/starComponents.jsx';
import Cleanliness from './components/ratingBars/cleanliness.jsx';
import Accuracy from './components/ratingBars/accuracy.jsx';
import Communication from './components/ratingBars/communication';
import Location from './components/ratingBars/location';
import CheckIn from './components/ratingBars/checkin';
import Value from './components/ratingBars/value';
import MostRecentReviews from './components/reviews/mostRecentReviews.jsx';
// font imports
// import './fonts/AirbnbCerealBlack.ttf';
// import './fonts/AirbnbCerealBold.ttf';
// import './fonts/AirbnbCerealBook.ttf';
// import './fonts/AirbnbCerealExtraBold.ttf';
// import './fonts/AirbnbCerealLight.ttf';
// import './fonts/AirbnbCerealMedium.ttf';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      reviewsById: [],
    };
  }

  componentDidMount() {
    this.getAllReviews();
    this.getReviewsById();
  }

  getReviewsById() {
    axios.get(`http://localhost:3001/reviews/${(Math.floor(Math.random() * 100) + 1)}`)
      .then((results) => {
        this.setState({
          reviewsById: results.data,
        });
      });
  }

  getAllReviews() {
    axios.get('http://localhost:3001/reviews')
      .then((results) => {
        this.setState({
          reviews: results.data,
        });
      });
  }

  render() {
    return (
      <div>
        <div>
          <StarComponents reviewRatings={this.state.reviewsById} />
        </div>
        <div>
          <Cleanliness reviewCleanliness={this.state.reviewsById} />
          <Accuracy reviewAccuracy={this.state.reviewsById} />
          <Communication reviewCommunication={this.state.reviewsById} />
          <Location reviewLocation={this.state.reviewsById} />
          <CheckIn reviewCheckIn={this.state.reviewsById} />
          <Value reviewValue={this.state.reviewsById} />
        </div>
        <div>
          <MostRecentReviews recentReviews={this.state.reviewsById} />
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDom.render(<App />, document.getElementById('reviews'));
