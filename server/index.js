const express = require('express');
const path = require('path');

// eslint-disable-next-line no-unused-vars
const Review = require('../database/review.js');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is Up on localhost:${PORT}!`);
});
