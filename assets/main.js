// Import videos data
import { videos } from "./data.js";

// Insert each video into videos section
(() => {
    var section = document.getElementById('videos-section'); //$("#videos-section");
    var content = '';

    videos.forEach((video) => {
        content += '<div class="col-md-3 mb-3">';
        content += '<div class="card">';
        content += '<div class="embed-responsive embed-responsive-16by9">';
        content += '<img src="https://img.youtube.com/vi/' + video.id + '/maxresdefault.jpg" alt="" class="embed-responsive-item">';
        content += '</div>';
        content += '<div class="card-body">';
        content += '<h4 class="card-title">' + video.title + '</h4>';
        content += '<p class="card-text">' + video.description + '</p>';
        content += '</div>';
        content += '</div>';
        content += '</div>';
    });

    section.innerHTML = content;
})()

