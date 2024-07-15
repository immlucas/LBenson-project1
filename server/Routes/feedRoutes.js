const express = require('express');
const router = express.Router( );

let feedController = require("../controller/feedController");
let feedItem = require("../model/feedItems");

router.route("/")
    .get(feedItem.getcurrentStories)
    


module.exports = router;

    