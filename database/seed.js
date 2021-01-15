const { LoremIpsum } = require('lorem-ipsum');
const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const db = require('./index.js');
const Review = require('./review.js');

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const randomReviewGenerator = () => {
  const sampleReviews = [];
  const users = ['Adam', 'Amanda', 'Alex', 'Aaron', 'Ashley', 'Ben', 'Beverly', 'Carl',
    'Christina', 'Dan', 'David', 'Diana', 'Edward', 'Fred', 'Frank', 'George', 'Hal', 'Haelie', 'Hank', 'Heater', 'Ike', 'John', 'Jack', 'Joe', 'Javan', 'Julie', 'Jennifer', 'Kyle', 'Larry', 'Linda', 'Megan', 'Melissa', 'Melinda', 'Monte', 'Matthew', 'Mark', 'Nathan', 'Natalie', 'Otto', 'Olivia', 'Paula', 'Peter', 'Roger', 'Randal', 'Sarah', 'Steve', 'Theresa', 'Thomas', 'Tim', 'Ty', 'Victor', 'Vicki', 'Walter'];
  const year = [2017, 2018, 2019, 2020];
  const counter = 0;

  // eslint-disable-next-line no-shadow
  const generator = (counter) => {
    if (counter < 10) {
      const review = {
        homeId: Math.floor(Math.random() * 100) + 1,
        user: users[Math.floor(Math.random() * (0.999) * (users.length))],
        cleanliness: Math.floor(Math.random() * 5) + 1,
        communication: Math.floor(Math.random() * 5) + 1,
        checkIn: Math.floor(Math.random() * 5) + 1,
        accuracy: Math.floor(Math.random() * 5) + 1,
        location: Math.floor(Math.random() * 5) + 1,
        value: Math.floor(Math.random() * 5) + 1,
        post: lorem.generateParagraphs(1),
        createdAt: `${year[Math.floor(Math.random() * (0.999) * (year.length))]}-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 27) + 1}T05:05:26.037z`,
      };

      sampleReviews.push(review);
      generator(counter + 1);
    }
  };

  generator(counter);
  return sampleReviews;
};

const insertSampleReviews = () => {
  Review.create(randomReviewGenerator())
    .then(() => mongoose.disconnect());
};

insertSampleReviews();
