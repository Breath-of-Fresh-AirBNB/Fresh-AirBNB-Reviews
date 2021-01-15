/* eslint-disable no-console */
const axios = require('axios');

describe('Server API connection tests', () => {
  test('Should Post Review to database', async () => {
    const results = await axios.post('localhost:3001/reviews', {
      homeId: 102, user: 'Paula', cleanliness: 4, communication: 3, checkIn: 2, accuracy: 5, location: 3, value: 4, post: 'string', createdAt: '2018-7-16T05:05:26.037z',
    });
    console.log(results);
    expect(results).not.toBeNull();
  });
});
