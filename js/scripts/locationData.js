 const locationsArray = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "DC",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
]

function appendLocationsToMenu(locationsArray) {
    var $dropdownList = $('#dropdown-list');

    // loop through locationsArray and create dropdown menu element
    for (item in locationsArray) {
        currentState = locationsArray[item];
        // append each location from locations array to the drop down menu
        $dropdownList.append(`
                <li id="${currentState}" class="dropdown-item">${currentState}</li>
        `);
    }
}

// add a new object called nationalParks to the global window object
// this object holds 2 items: 
window.nationalParks = {
    // the array of locations given to us above
    locationsArray: locationsArray,
    // a function that appends the locationsArray items to the drop down menu
    appendLocationsToMenu: appendLocationsToMenu
} 


/*
nationalparks.html
locationData.js
nationalParkData.js

nationalparks.html -- is the "main file/entry point". It holds all the classnames of elements.
        - dropdown menu -> has an ID -> this ID is what makes relations possible between locationData and nationalParkData possible. 
                -locationData.js -> would populate nationalparks.html's dropdown menu
                            - Each menu item = 
                                for (i=0; i < locationArray.length; i++) {
                                    <li class="[css style]" id={locationArray[i]}>
                                        [locationArray[i]]
                                    </li>
                                }
                    

        - locationsArray -> 
            - gives "State" to dropdown menu (populates dropdown menu) -> 
                - We want to grab nationalParksArray item by using "state" as key
                      
                - So, create new object nationalParksObject = {
                                            state1 : {
                                                LocationID: "ABLI",
                                                LocationName: "Abraham Lincoln Birthplace National Historical Park",
                                                ...
                                            },
                                            state1 : {
                                                LocationID: "ABLI",
                                                LocationName: "Abraham Lincoln Birthplace National Historical Park",
                                                ...
                                            },
                                        }
                which will derive from nationalParksArray
                
                pseudo-code:
                    - 


        
        


*/