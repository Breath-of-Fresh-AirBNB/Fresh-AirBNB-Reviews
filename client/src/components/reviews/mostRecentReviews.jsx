/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';

const moment = require('moment');

const MostRecentReviews = (props) => {
  console.log('Most Recent: ', props.recentReviews);
  let fourMostRecent = [];
  if (props.recentReviews.length > 4) {
    fourMostRecent = [props.recentReviews[0], props.recentReviews[1], props.recentReviews[2], props.recentReviews[3]];
  } else {
    fourMostRecent = props.recentReviews;
  }
  console.log(fourMostRecent);
  return (
    <div>
      {fourMostRecent.map((reviews) => (

        <ul>
          <p className="user">{reviews.user}</p>
          <p className="date">{moment(reviews.createdAt).format('MMM YYYY')}</p>
          <p className="paragraphs">{reviews.post}</p>
          <br />
          <br />
        </ul>

      ))}
    </div>
  );
};

export default MostRecentReviews;
