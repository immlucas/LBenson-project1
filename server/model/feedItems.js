//function feedItem, same as on controller
function feedItem(title, body, linkUrl, imageUrl) {
    this.Title = title;
    this.Body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}
//creates a new feed
exports.makeFeedItem = function(title, body, linkUrl, imageUrl) {
    return new feedItem(title, body, linkUrl, imageUrl);
};
