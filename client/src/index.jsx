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
import Modal from './components/modal.jsx';
import MostRecentReviews from './components/reviews/mostRecentReviews.jsx';

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
    const { reviewsById } = this.state;
    return (
      <div>
        <div>
          <StarComponents reviewRatings={reviewsById} />
        </div>
        <div className="flex-container">
          <Cleanliness reviewCleanliness={reviewsById} />
          <Accuracy reviewAccuracy={reviewsById} />
          <Communication reviewCommunication={reviewsById} />
          <Location reviewLocation={reviewsById} />
          <CheckIn reviewCheckIn={reviewsById} />
          <Value reviewValue={reviewsById} />
        </div>
        <div className="flex-container">
          <MostRecentReviews recentReviews={reviewsById} />
        </div>
        <div>
          <Modal reviewsById={reviewsById} />
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDom.render(<App />, document.getElementById('reviews'));

export default App;
