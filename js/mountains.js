

window.onload = init;

function init() {
    var mountainsArray = window.mountains.mountainsArray;
    var mountainsObject = window.mountains.createMountainsObject(mountainsArray);

    window.mountains.populateMountainsMenu(mountainsObject);

    console.log(mountainsArray, mountainsObject);

    $('#dropdown-list3').on('click', function(event) {
        var mountainSelectedByUser = event.target.innerText;
        var selectedMountainInfo = mountainsObject[mountainSelectedByUser];
        $('#state-info-card').empty();
        $('#state-info-card').append(`
            <img src='/images/${selectedMountainInfo.img}'>
            <div class="card-body">
                <h5 class="card-title">${selectedMountainInfo.name} | ${selectedMountainInfo.effort}</h5>
                <br>
                <h6 class="card-subtitle mb-2 text-muted">${selectedMountainInfo.desc}</h6>
                <br>
                <h6 class="card-subtitle mb-2 text-muted">Lat: ${selectedMountainInfo.coords.lat}, Lon: ${selectedMountainInfo.coords.lng}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Elevation: ${selectedMountainInfo.elevation}</h6>
                <a href="#" class="card-link">Difficulty: ${selectedMountainInfo.effort}</a>
                <a href="${selectedMountainInfo.Visit}" class="card-link">Official Site</a>
            </div>

        `)

    })
    
}

// {
//     "name": "Bondcliff",
//     "elevation": 4265,
//     "effort": "Strenuous",
//     "img": "Bond-StoryImage_3.jpg",
//     "desc": "Bondcliff (4,265 ft.), along with neighboring Mt. Guyot and Mt. Bond, offers some of the most stunning views in the Whites, with virtually no sign of roads or buildings visible from the summit.",
//     "coords": {
//         "lat": 44.139841,
//         "lng": -71.542068
//     }
// }