function feedItem(title, body, linkUrl, imageUrl) {
    this.Title = title;
    this.Body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}

var currentStories = [];

var feedItem1 = new feedItem("Welcome students", "Welcome to our college!", "http://linkurl1.com", "images/marist3.jpg");
var feedItem2 = new feedItem("New food!", "Our cafe has new food!", "http://linkurl2.com", "images/maristcafe2.jpg");
var feedItem3 = new feedItem("Our Hancock center", "Look how beautiful!", "http://linkurl3.com", "images/hancockcenterfinal.jpg");
var feedItem4 = new feedItem("Use FoxChatter", "Use FoxChatter for news!", "http://linkurl4.com", "images/news_picnew.jpg");
currentStories.push(feedItem1);
currentStories.push(feedItem2);
currentStories.push(feedItem3);
currentStories.push(feedItem4);

exports.getFeedItem = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(currentStories);
};

exports.saveFeedItem = function(req, res) {
    let newFeedItem = new feedItem(req.body.Title, req.body.Body, req.body.linkUrl, req.body.imageUrl);
    currentStories.push(newFeedItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(currentStories);
};

exports.getSingleFeedItem = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(currentStories[req.params.feedItemId]);
};

exports.deleteFeedItem = function(req, res) {
    currentStories.splice(req.params.feedItemId, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(currentStories);
};

exports.updateFeedItem = function(req, res) {
    var updatedFeedItem = currentStories[req.params.feedItemId];

    if (req.body.Title)
        updatedFeedItem.Title = req.body.Title;
    if (req.body.Body)
        updatedFeedItem.Body = req.body.Body;
    if (req.body.linkUrl)
        updatedFeedItem.linkUrl = req.body.linkUrl;
    if (req.body.imageUrl)
        updatedFeedItem.imageUrl = req.body.imageUrl;

    currentStories[req.params.feedItemId] = updatedFeedItem;

    res.setHeader('Content-Type', 'application/json');
    res.send(currentStories[req.params.feedItemId]);
};
