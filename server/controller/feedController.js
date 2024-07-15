let feedItem = require("../model/feedItems");

exports.feedItem = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(currentStories));
}

let currentStories = [];

currentStories.push(new feedItem("Welcome students", "Welcome to our college!", "http://linkurl1.com", "images/marist3.jpg"));
currentStories.push(new feedItem("New food!", "Our cafe has new food!", "http://linkurl2.com", "images/maristcafe2.jpg"));
currentStories.push(new feedItem("Our Hancock center", "Look how beautiful!", "http://linkurl3.com", "images/hancockcenterfinal.jpg"));
