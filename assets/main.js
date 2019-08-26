var videos = [
    { id: 'biyvpvx9I7E', title: 'Progress en BT', description: 'Barras de progreso utilizando componente de bootstrap. Uso y detalles extra.'},
    { id: 'aFlRn1vEMQI', title: 'Progress en 2', description: 'Jjajaja de progreso utilizando componente de bootstrap. Uso y detalles extra.'},
    { id: 'MjB1Nyx6hns', title: 'Progress en 3', description: 'Loolras de progreso utilizando componente de bootstrap. Uso y detalles extra.'},
    { id: 'biyvpvx9I7E', title: 'Progress en yossu', description: 'Barras de progreso utilizando componente de bootstrap. Uso y detalles extra.'},
];

/**
 * Insert each video into videos section
 */
(() => {
    var section = document.getElementById('videos-section'); //$("#videos-section");
    var content = '';

    videos.forEach((video) => {
        content += '<div class="col-md-3 mb-2">';
        content += '<div class="card">';
        content += '<div class="embed-responsive embed-responsive-16by9">';
        content += '<img src="https://img.youtube.com/vi/' + video.id + '/maxresdefault.jpg" alt="" class="embed-responsive-item">';
        content += '</div>';
        content += '<div class="card-body">';
        content += '<h5 class="card-title">' + video.title + '</h5>';
        content += '<p class="card-text">' + video.description + '</p>';
        content += '</div>';
        content += '</div>';
        content += '</div>';
    });

    section.innerHTML = content;
})()

