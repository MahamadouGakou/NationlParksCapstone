const parkTypesArray = [
    "National Park",
    "National Monument",
    "Recreation Area",
    "Scenic Trail",
    "Battlefield",
    "Historic",
    "Memorial",
    "Preserve",
    "Island",
    "River",
    "Seashore",
    "Trail",
    "Parkway"
]

function appendParkTypesToMenu(parkTypesArray) {
    var $dropdownList2 = $('#dropdown-list2');

     // loop through locationsArray and create dropdown menu element
     for (item in parkTypesArray) {
        currentParkType = parkTypesArray[item];
        // append each location from locations array to the drop down menu
        $dropdownList2.append(`
            <li class="dropdown-item">${currentParkType}</li>
        `);
    }
}

function categorizeByParkType(userSelectedParkType) {
    var parkTypeObjectArr = []; // need to push objects inside of this array 
    var park;
    var nationalParksArray = window.nationalParks.nationalParksArray;
    var locationName;

    for (park in nationalParksArray) {
        // get location name of current park in loop
        locationName = nationalParksArray[park].LocationName;
        if (locationName.includes(userSelectedParkType.toString())) {
            // Push all the parks and their data that fit userSelectedType into 1 array
            parkTypeObjectArr.push(nationalParksArray[park]);
        }
    }
    return parkTypeObjectArr;
}

window.nationalParks.parkTypesArray = parkTypesArray;
window.nationalParks.appendParkTypesToMenu = appendParkTypesToMenu;
window.nationalParks.categorizeByParkType = categorizeByParkType;