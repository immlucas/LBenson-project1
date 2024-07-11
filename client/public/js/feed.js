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
        imageUrl: 'images/marist3.jpg'
    });

    currentStories.push({
        Title: 'Marist Story 2',
        Body: 'This is the body of the story, it may be longer.',
        linkUrl: ' ',
        imageUrl: 'images/news_picnew.jpg'
    });

    currentStories.push({
        Title: 'Marist Story 3',
        Body: 'This is the body of the story, it may be longer.',
        linkUrl: ' ',
        imageUrl: 'images/hancock.jpeg'
    });

    function displayItem(feedItem) {
        let newsfeedElement = document.getElementById('newsfeed');

        let itemElement = document.createElement('div');
    itemElement.className = 'news-item';

    let titleElement = document.createElement('h2');
    titleElement.textContent = feedItem.Title;
    itemElement.appendChild(titleElement);

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

    });
