/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-state */
import React from 'react';
import ReactDom from 'react-dom';
import StarComponents from './components/starComponents.jsx';

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
        <StarComponents reviewRatings={this.state.reviewsById} />
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDom.render(<App />, document.getElementById('reviews'));
