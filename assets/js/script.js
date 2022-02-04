

var city = document.getElementById('search');

var citySearch =
    // when the city search button is clicked it creates an alert
    document.getElementById("city-search-btn");

var weatherContainerEl = document.querySelector("#weather-container");


// let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
// console.log(searchHistory);
var searches = [];
var cities = document.getElementById("search").value;
// create function to get the submission from local storage
function storeSearch() {
    // get the local storage
    var getLocal = JSON.parse(localStorage.getItem("search"));
    // gets the value of the city from the input field - cities

    // puts current city search into searches array 
    var current = { "searches": cities };
    // pushes searches
    searches.push(getLocal);
    console.log(searches)
    //pushed back up to local storage
    searches.push(current)
    localStorage.setItem('searches', JSON.stringify(searches));
}

// display cities in HTML after the new city is submitted
function searchDisplay() {
    var listDiv = document
        .getElementById('past-city');
    for (let i = 0; i < searches.length; i++) {
        listDiv.textContent = "History List" + searches[i].cities;
    }

}

console.log(searchDisplay())
searchDisplay();

function initSearch(lat, long) {
    var key = 'd1421d1863129a775873c0c766a5d5c6';

    const base = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + '&lon=' + long + '&appid=' + key + '&units=imperial';
    // const base = `https://api.openweathermap.org/data/2.5/onecall?lat=$(lat)&lon=$(lon)&appid=$(key)`;
    console.log(base);
    fetch(base)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            // get date 
            const dateTime = new Date();
            document.getElementById("date").textContent = dateTime;
            document.getElementById('description').textContent = data.current.weather[0].description;
            document.getElementById('wind').innerHTML = data.current.wind_speed;
            document.getElementById('humid').innerHTML = data.current.humidity;
            // document.getElementById('weather-icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`);
            document.getElementById('temp').innerHTML = data.current.temp + '&deg;';
            document.getElementById('uvi').innerHTML = data.current.uvi;
            var htmlContent = "";
            for (let i = 1; i < data.daily.length; i++) {
                htmlContent += ` <div id="${i}" class="container card-body">

                 <h4 class="card-title date" class="date"><strong>Day: ${dateTime}</strong></h4>
                 <img  class="img" src="https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png">
                 
                 <p class="card-text temp-card" class="temp">Temperature: ${data.daily[i].temp.day}<p>
                 <p class="card-text wind-card" class="wind">Wind Speed: ${data.daily[i].wind_speed}</p>
                 <p class="card-text humid-card" class="humid">Humidity Level: ${data.daily[i].humidity} </p>
                 <p class="card-text uv-index-card" class="uv-index">UV Index: ${data.daily[i].uvi}</p>
                 
             </div>`
            }
            document.getElementById('daily').innerHTML = htmlContent;

        })
};
async function getWeather(cityName) {

    var key = 'd1421d1863129a775873c0c766a5d5c6';
    var apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key;
    const weather = await fetch(apiURL);
    let response = await weather.json();
    console.log(response);
    var lat = response.coord.lat;
    var lon = response.coord.lon;
    initSearch(lat, lon);
}
citySearch.addEventListener('click', function () {
    const cityInput = city.value;
    // alert("button clicked");
    getWeather(cityInput);
});
    // //   getWeather();

