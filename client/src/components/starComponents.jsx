/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class StarComponents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    console.log(this.props.reviewRatings);
    const vals = this.props.reviewRatings.map((o) => {
      let m = 0;
      const values = Object.values(o);
      values.forEach((val) => (typeof val === 'number' && val <= 5 ? m += val : null));
      return m / 6;
    });

    const rating = (vals.reduce((m, i) => m += i, 0) / vals.length);
    console.log(rating.toFixed(1));

    return (
      <div>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Ratings</Typography>
          <Rating name="read-only" value={rating.toFixed(1)} precision={0.5} readOnly />
        </Box>
      </div>
    );
  }
}

export default StarComponents;
