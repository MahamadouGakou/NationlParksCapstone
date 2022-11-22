// entry point for nationalparks.html

window.onload = init;

function init() {
    // getting locationsArray inside the window.nationalParks object (defined in locationsData.js)
    var locationsArray = window.nationalParks.locationsArray;
    // loop through locationsArray and append states to dropdown menu
    window.nationalParks.appendLocationsToMenu(locationsArray);

    // getting nationalParksArray inside the window.nationalParks object (defined in nationalParksData.js)
    var nationalParksArray = window.nationalParks.nationalParksArray;
        // create a new array of objects from nationalParksArray that makes:
        // key = State  and value = values associated to that state
        // visual example:
            /* 
                [
                    Kentucky: {
                        LocationID: "ABLI",
                        LocationName: "Abraham Lincoln Birthplace National Historical Park",
                        ...
                    },

                    New York: {
                        LocationID: "NYCL",
                        LocationName: "Central Park",
                        ...
                    }
                ]
            */
    var nationalParksObject = window.nationalParks.createNationalParksObject(nationalParksArray);

    var $dropdownList = $('#dropdown-list');

    $dropdownList.on('click', function(event) {
        // event.target identifies the element that fired an event
        // in this case, if a user selects a state in dropdown. the event.target = state selected by user
        // Then we get that specific items 'id' (which we made equal to the state)
        var stateSelectedByUser = event.target.id; 

        // get the park information for the state selected by user
        var selectedParkInfo = nationalParksObject[stateSelectedByUser];

        // append/display user selected state information to Card
        $('#state-info-card').empty(); // first clear the card of any content (makes it so only 1 state can be appended at a time)
        $('#state-info-card').append(`
            <div class="card-body">
                <h5 class="card-title">${selectedParkInfo.LocationName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${selectedParkInfo.Address}</h6>
                <h6 class="card-subtitle mb-2 text-muted">${selectedParkInfo.City}, ${selectedParkInfo.State} ${selectedParkInfo.ZipCode}</h6>
                <h6 class="card-subtitle mb-2 text-muted">${selectedParkInfo.Location.coordinates}</h6>
                <a href="#" class="card-link">${selectedParkInfo.Phone}</a>
                <a href="${selectedParkInfo.Visit}" class="card-link">Official Site</a>
            </div>
        `)
        console.log("CURRENTLY SELECTED STATE INFO:", selectedParkInfo);
    });

    console.log(window.nationalParks)

    var parkTypesArray = window.nationalParks.parkTypesArray;
    window.nationalParks.appendParkTypesToMenu(parkTypesArray);

    $('#dropdown-list2').on('click', function(event) {
        var userSelectedParkType = event.target.innerText;
        var parkTypeObjectArr = window.nationalParks.categorizeByParkType(userSelectedParkType);

        // first clear any existing cards before displaying new set of cards
        $('#state-info-card').empty();

        // loop through array of parks that meet parkType and display their cards.
        for (i in parkTypeObjectArr) {
            $('#state-info-card').append(`
                <div class="card-body">
                    <h5 class="card-title">${parkTypeObjectArr[i].LocationName}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${parkTypeObjectArr[i].Address}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">${parkTypeObjectArr[i].City}, ${parkTypeObjectArr[i].State} ${parkTypeObjectArr[i].ZipCode}</h6>
                    <a href="#" class="card-link">${parkTypeObjectArr[i].Phone}</a>
                    <a href="${parkTypeObjectArr[i].Visit}" class="card-link">Official Site</a>
                </div>
            `);
        }
    });

    

    

}