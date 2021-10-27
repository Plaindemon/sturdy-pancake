//


// variables created for the Weather card/container
var date = document.getElementById('date');
var temperature = document.getElementById('temp');
var wind = document.getElementById('wind');
var humidity = document.getElementById('humid');
var uvIndex = document.getElementById('uv-index');
// citysearch used to grab the search button element
var citySearch = document.getElementById("city-search-btn");
//
var cityName = document.getElementById('city-name');
var pastCity = document.getElementById('past-city')
// variable to create the search form input
// var searchTextBox = document.createElement("p");
// searchTextBox.textContent = "Ohio";
// searchTextBox;

var searchBtn = function() {
    
    // when the city search button is clicked it creates an alert
    citySearch.addEventListener('click', function(){
        alert("button clicked");
    });
    console.log(citySearch);
    //

};

searchBtn();

// var getCity = function() {
//     fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={9f34bc786ad6188d153dff67826d4506}");
// };
