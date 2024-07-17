const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('client/public'));
app.use(bodyParser.json({ type: 'application/json' }));

const currentStories = require('./controller/feedController');

app.route('/api/feedItem')
    .get(currentStories.getFeedItem)
    .post(currentStories.saveFeedItem);

app.route('/api/feedItem/:feedItemId')
    .get(currentStories.getSingleFeedItem)
    .delete(currentStories.deleteFeedItem)
    .patch(currentStories.updateFeedItem);

app.listen(1337, function () {
    console.log('Listening on port 1337!');
});
