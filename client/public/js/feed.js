document.addEventListener('DOMContentLoaded', function() {
    function goToMaristEdu() {
        goToLocation('http://my.marist.edu');
    }

    document.getElementById('portal_button').addEventListener('click', goToMaristEdu);

    document.getElementById('portal_button_text').addEventListener('click', goToMaristEdu);
});

let currentStories = [];

    currentStories.push({
        Title: 'Marist Story 1',
        Body: 'This is the body of the story, it may be longer.',
        linkUrl: ' ',
        imageUrl: 'images-campus'
    });

    currentStories.push({
        Title: 'Marist Story 2',
        Body: 'This is the body of the story, it may be longer.',
        linkUrl: ' ',
        imageUrl: 'image-news-pic'
    });

    currentStories.push({
        Title: 'Marist Story 3',
        Body: 'This is the body of the story, it may be longer.',
        linkUrl: ' ',
        imageUrl: 'images-hancock'
    });

    function displayItem(feedItem) {
        let newsfeedElement = document.getElementById('newsfeed');

        let itemElement = document.createElement('div');
    itemElement.className = 'news-item';

    // Create and append the title
    let titleElement = document.createElement('h2');
    titleElement.textContent = feedItem.Title;
    itemElement.appendChild(titleElement);

    // Create and append the body
    let bodyElement = document.createElement('p');
    bodyElement.textContent = feedItem.Body;
    itemElement.appendChild(bodyElement);

    if (feedItem.imageUrl) {
        let imageElement = document.createElement('img');
        imageElement.src = feedItem.imageUrl;
        itemElement.appendChild(imageElement);
    }

    if (feedItem.linkUrl.trim()) {
        let linkElement = document.createElement('a');
        linkElement.href = feedItem.linkUrl;
        linkElement.textContent = 'Read more';
        itemElement.appendChild(linkElement);
    }

    newsfeedElement.appendChild(itemElement);
}

document.addEventListener('DOMContentLoaded', function() {
    currentStories.forEach(story => displayItem(story));
        
       // let itemHTML = `
         //   <div class="feed-item">
           //     <h2><a href="${feedItem.linkUrl}" target="_blank">${feedItem.Title}</a></h2>
             //   <p>${feedItem.Body}</p>
              //  <a href="${feedItem.linkUrl}" target="_blank">
               //     <img src="${feedItem.imageUrl}" alt="${feedItem.Title}" style="max-width: 20%; height: 20%;">
             //   </a>
         //   </div>
     //   `;
        
      //  newsfeedElement.innerHTML += itemHTML;
    

 //   currentStories.forEach(function(item) {
    //    displayItem(item);
    });
