document.addEventListener('DOMContentLoaded', function() {
    function goToMaristEdu() {
        goToLocation('http://my.marist.edu');
    }

    document.getElementById('portal_button').addEventListener('click', goToMaristEdu);

    document.getElementById('portal_button_text').addEventListener('click', goToMaristEdu);
});

//for mouse trail 
var dots = [],
    mouse = {
      x: 0,
      y: 0
    };

var Dot = function() {
  this.x = 0;
  this.y = 0;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "MouseTrail";
    document.body.appendChild(n);
    return n;
  }());
};

Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

for (var i = 0; i < 12; i++) {
  var d = new Dot();
  dots.push(d);
}


function draw() {

  var x = mouse.x,
      y = mouse.y;
      
  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];
    
    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .6;
    y += (nextDot.y - dot.y) * .6;

  });
}

addEventListener("mousemove", function(event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

function animate() {
  draw();
  requestAnimationFrame(animate);
}

animate();

function feedItem(title, body, linkUrl, imageUrl) {
    this.Title = title;
    this.Body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}

let currentStories = [];

currentStories.push(new feedItem("Welcome students", "Welcome to our college!", "http://linkurl1.com", "images/marist3.jpg"));
currentStories.push(new feedItem("New food!", "Our cafe has new food!", "http://linkurl2.com", "images/maristcafe2.jpg"));
currentStories.push(new feedItem("Our Hancock center", "Look how beautiful!", "http://linkurl3.com", "images/hancockcenterfinal.jpg"));

displayItem();

function displayItem(feedItem) {
    let newsFeed = document.getElementById("newsFeed");

    for (let i = 0; i < currentStories.length; i++) {

        newsFeed.innerHTML += `
        <h2>${currentStories[i].Title}</h2>
        <p>${currentStories[i].Body}</p>
        <img id="photo" src="${currentStories[i].imageUrl}" alt="${currentStories[i].Title}">
        <p></p>
        <a href="${currentStories[i].linkUrl}">Read more</a>
    `;
    }
}






    










 //   currentStories.push({
   //     Title: 'A photo from our photography class today!',
     //   Body: 'This displays the beauty of our campus.',
    //    linkUrl: ' ',
    //    imageUrl: 'images/marist3.jpg'
 //   });

 //   currentStories.push({
   //     Title: 'Have you heard about our new cafeteria?',
     //   Body: 'Recently, the cafe has been renevated, have you visited yet?',
    //    linkUrl: ' ',
    //    imageUrl: 'images/news_picnew.jpg'
  //  });

 //   currentStories.push({
   //     Title: 'Tells your friends about our wonderful college!',
     //   Body: 'We are always looking for new members and experiences within our school. We love diversity.',
       // linkUrl: ' ',
    //    imageUrl: 'images/hancock.jpeg'
  //  });

 //   function displayItem(feedItem) {
   //     let newsfeedElement = document.getElementById('newsfeed');

     //   let itemElement = document.createElement('div');
  //  itemElement.className = 'news-item';

 //   let titleElement = document.createElement('h2');
   // titleElement.textContent = feedItem.Title;
  //  itemElement.appendChild(titleElement);

    //let bodyElement = document.createElement('p');
  //  bodyElement.textContent = feedItem.Body;
  //  itemElement.appendChild(bodyElement);

  //  if (feedItem.imageUrl) {
   //     let imageElement = document.createElement('img');
     //   imageElement.src = feedItem.imageUrl;
       // itemElement.appendChild(imageElement);
  //  }

  //  if (feedItem.linkUrl.trim()) {
   //     let linkElement = document.createElement('a');
    //    linkElement.href = feedItem.linkUrl;
     //   linkElement.textContent = 'Read more';
      //  itemElement.appendChild(linkElement);
  //  }

   // newsfeedElement.appendChild(itemElement);
//}

//document.addEventListener('DOMContentLoaded', function() {
  //  currentStories.forEach(story => displayItem(story));


// })
