import React from 'react';
import StarComponents from './components/starComponents.jsx';
import Cleanliness from './components/ratingBars/cleanliness.jsx';
import Accuracy from './components/ratingBars/accuracy.jsx';
import Communication from './components/ratingBars/communication';
import Location from './components/ratingBars/location';
import CheckIn from './components/ratingBars/checkin';
import Value from './components/ratingBars/value';
import ReviewsModal from './components/reviewsModal.jsx';
import MostRecentReviews from './components/reviews/mostRecentReviews.jsx';
import AddReviewModal from './components/reviews/addReviewModal.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsById: [],
    };
    this.handleNewPost = this.handleNewPost.bind(this);
  }

  componentDidMount() {
    this.getReviewsById(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    console.log('hello');
    if (this.props.location !== prevProps.location) this.getReviewsById(this.props.match.params.id);
  }

  handleNewPost(newReview) {
    console.log(newReview);
    axios.post('/reviews', newReview)
      .then(() => {
        this.getReviewsById(this.props.match.params.id);
      });
  }

  getReviewsById(path) {
    axios.get(`/reviews/${path}`)
      .then((results) => {
        this.setState({
          reviewsById: results.data,
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
        <div className="mostrecentreviews">
          MostRecentReviews
        </div>
        <div>
          <AddReviewModal reviewsById={reviewsById} newPost={this.handleNewPost} />
        </div>
        <div className="flex-container">
          <MostRecentReviews recentReviews={reviewsById} />
        </div>
        <div>
          <ReviewsModal reviewsById={reviewsById} />
        </div>
      </div>
    );
  }
}

export default App;
