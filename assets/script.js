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

let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
console.log(searchHistory);
// console.log(city)
// // citysearch used to grab the search button element

// var cityName = document.getElementById('city-name');
// var pastCity = document.getElementById('past-city')

function initSearch() {
    window.addEventListener('load', () => {
        let long;
        let lat;
        // var key = 'd1421d1863129a775873c0c766a5d5c6';
        // Accessing Geolocation of User
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                // Storing Longitude and Latitude in variables
                long = position.coords.longitude;
                lat = position.coords.latitude;
                const base = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + '&lon=' + long + '&appid=d1421d1863129a775873c0c766a5d5c6';
                console.log(base);
                fetch(base)
                    .then((response) => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data)
                        document.getElementById('description').textContent = data.weather[0].description;
                        document.getElementById('wind').innerHTML = data.wind.speed;
                        document.getElementById('humid').innerHTML = data.main.humidity;

                        var fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32);
                        document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
                    })
            });
        }
    });
    //     async function getWeather( cityName ) {




    //             var key = 'd1421d1863129a775873c0c766a5d5c6';
    //             var apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key;
    //             const weather = await fetch(apiURL);
    //             let response = await weather.json();
    //             console.log(response);
    //             weather
    //             .then(function(response) {
    //                 // request was successful
    //                 console.log(response);
    //                 let cityID = response.data.id;
    //                 let queryURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=" + key;
    //                 console.log(queryURL);
    //             });
    //             queryURL
    //             .then(function(response) {
    //                 console.log(response)
    //                 // const viewWeather = document.querySelectorAll("");

    //                 // for (var i = 0; i < viewWeather.length; i++) {

    //                 //     // create span 
    //                 //     var titleEl = document.createElement("span");
    //                 //     titleEl.textContent = viewWeather[i].title;

    //                 //     // append to container
    //                 //     displayEl.appendChild(titleEl);

    //                 //     // create a type element
    //                 //     var typeEl = document.createElement("span");

    //                 //     // append to container
    //                 //     displayEl.appendChild(typeEl);
    //                 //     weatherContainerEl.appendChild(displayEl);
    //                 // }
    //             })
    //         }
    // citySearch.addEventListener('click', function(){
    //     const cityInput = city.value;
    //     // alert("button clicked");
    //     getWeather(cityInput);
    // });
    // //   getWeather();


    // var displayWeather = function(viewWeather) {
    //     // for (var i = 0; i < viewWeather.length; i++) {
    //     //     // create a link element to take users to the issue on github
    //     //     var displayEl = document.createElement("a");
    //     //     displayEl.classList = "list-item flex-row justify-space-between align-center";
    //     //     displayEl.setAttribute("href", viewWeather[i].html_url);
    //     //     displayEl.setAttribute("target", "_blank");
    //     //     // create span to hold issue title
    //     //     var titleEl = document.createElement("span");
    //     //     titleEl.textContent = viewWeather[i].title;

    //     //     // append to container
    //     //     displayEl.appendChild(titleEl);

    //     //     // create a type element
    //     //     var typeEl = document.createElement("span");

    //     //     // check if issue is an actual issue or a pull request
    //     //     if (viewWeather[i].pull_request) {
    //     //     typeEl.textContent = "(Pull request)";
    //     //     } else {
    //     //     typeEl.textContent = "(Issue)";
    //     //     }

    //     //     // append to container
    //     //     displayEl.appendChild(typeEl);
    //     //     weatherContainerEl.appendChild(displayEl);
    //     //   }
    // };

    // 
    //     

}
initSearch();