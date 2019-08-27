import { videos } from './data.js'

var url = new URL(window.location.href);
var id = url.searchParams.get('id');

var video = videos.filter( vid => vid.id == id )[0];


// Insert main video data
(() => {
    var mainVideo = document.getElementById('main-video');
    var mainVideoDescription = document.getElementById('main-video-description');
    var mainVideoTitle = document.getElementById('main-video-title');

    mainVideo.setAttribute("src", "https://www.youtube.com/embed/" + video.id);
    mainVideoDescription.innerHTML = video.longDescription;
    mainVideoTitle.innerHTML = video.title;
})();

// Insert recomended videos list
(() => {
    var otherVideos = document.getElementById('other-videos-section');
    var recomendedVideos = videos.slice(1, 4);
    var content = '';

    recomendedVideos.forEach(vid => {
        content += '<div class="card mb-3">';
        content += '<div class="row no-gutters">';
        content += '<div class="col-md-5">';
        content += '<img src="https://img.youtube.com/vi/' + vid.id +'/maxresdefault.jpg" class="card-img">';
        content += '</div>';
        content += '<div class="col-md-7">';
        content += '<div class="card-body">';
        content += '<h5 class="card-title">' + vid.title + '</h5>';
        content += '<p class="card-text"> ' + vid.description + ' </p>';
        content += '</div>';
        content += '</div>';
        content += '</div>';
        content += '</div>';
    });

    otherVideos.innerHTML = content;
    
})();
