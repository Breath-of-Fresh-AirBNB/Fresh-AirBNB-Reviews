/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    width: '10%',
  },
});

const Cleanliness = (props) => {
  const vals = props.reviewCleanliness.map((o) => o.cleanliness);
  const rating = (vals.reduce((m, i) => (m += i), 0) / vals.length);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Cleanliness
      <LinearProgress variant="determinate" value={rating.toFixed(1) * 20} />
      <>
        {' '}
        {rating.toFixed(1)}
        {' '}
      </>
    </div>
  );
};
export default Cleanliness;