import { videos } from './data.js'

var url = new URL(window.location.href);
var id = url.searchParams.get('id');

var video = videos.filter( vid => vid.id == id )[0];

// Check if video exists
!video ? location.href = '/bootstrap' : null;

// Shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Insert main video data
(() => {
    var mainVideo = document.getElementById('main-video');
    var mainVideoDescription = document.getElementById('main-video-description');
    var mainVideoTitle = document.getElementById('main-video-title');
    var mainVideoOwner = document.getElementById('main-video-owner');

    mainVideo.setAttribute("src", "https://www.youtube.com/embed/" + video.id);
    mainVideoDescription.innerHTML = video.longDescription;
    mainVideoTitle.innerHTML = video.title;
    mainVideoOwner.innerHTML = video.owner;
})();

// Insert recomended videos list
(() => {
    // Delete actual video from the list and shuffle
    var recomendedVideos = videos.filter(element =>  element.id != video.id );
    shuffle(recomendedVideos);
    recomendedVideos = recomendedVideos.slice(1, 4);

    var otherVideosSection = document.getElementById('other-videos-section');
    var content = '';

    recomendedVideos.forEach(vid => {
        content += '<div class="card mb-3">';
        content += '<div class="row no-gutters">';
        content += '<div class="col-5">';
        content += '<img src="https://img.youtube.com/vi/' + vid.id +'/maxresdefault.jpg" class="card-img">';
        content += '</div>';
        content += '<div class="col-7">';
        content += '<div class="card-body">';
        content += '<h5 class="card-title">' + vid.title + '</h5>';
        content += '<p class="card-text"> ' + vid.description + ' </p>';
        content += '</div>';
        content += '</div>';
        content += '</div>';
        content += '<a href="video.html?id=' + vid.id + '" class="stretched-link"></a>';
        content += '</div>';
    });

    otherVideosSection.innerHTML = content;
})();