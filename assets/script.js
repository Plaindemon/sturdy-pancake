var city = document.getElementById('city-input');

var citySearch = 
// when the city search button is clicked it creates an alert
    document.getElementById("city-search-btn");

var weatherContainerEl = document.querySelector("#weather-container");
// // variables created for the Weather card/container
// // var date = document.getElementById('date');
// // var temperature = document.getElementById('temp');
// // var wind = document.getElementById('wind');
// // var humidity = document.getElementById('humid');
// // var uvIndex = document.getElementById('uv-index');


// console.log(city)
// // citysearch used to grab the search button element


// //
// var cityName = document.getElementById('city-name');
// var pastCity = document.getElementById('past-city')



  
// https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&appid={yourkey}
  var fiveDay = function getWeather( cityName ) {
        citySearch.addEventListener('click', function(){
            const cityInput = city.value;
            // alert("button clicked");
            getWeather(cityInput);
        });
        // console.log(citySearch);
        // replace api key later
        var key = 'd1421d1863129a775873c0c766a5d5c6';
        var apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key;
        console.log(apiURL);
        fetch(apiURL).then(function(response) {
            // request was successful
            if (response.ok) {
              response.json().then(function(data) {
                console.log(data);
                displayWeather(data);
              });
            }
            else {
              alert("There was a problem with your request!");
            }
          });
      }
      fiveDay();
    //   window.onload = function() {
    //     getWeather( 6167865 );
    //   }
    
    var displayWeather = function(viewWeather) {
        for (var i = 0; i < viewWeather.length; i++) {
            // create a link element to take users to the issue on github
            var displayEl = document.createElement("a");
            displayEl.classList = "list-item flex-row justify-space-between align-center";
            displayEl.setAttribute("href", viewWeather[i].html_url);
            displayEl.setAttribute("target", "_blank");
            // create span to hold issue title
            var titleEl = document.createElement("span");
            titleEl.textContent = viewWeather[i].title;

            // append to container
            displayEl.appendChild(titleEl);

            // create a type element
            var typeEl = document.createElement("span");

            // check if issue is an actual issue or a pull request
            if (viewWeather[i].pull_request) {
            typeEl.textContent = "(Pull request)";
            } else {
            typeEl.textContent = "(Issue)";
            }

            // append to container
            displayEl.appendChild(typeEl);
            weatherContainerEl.appendChild(displayEl);
          }
    };

// function initSearch() {
//     let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
//     console.log(searchHistory);

// }