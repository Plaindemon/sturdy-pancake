var city = document.getElementById('search');

var citySearch =
    // when the city search button is clicked it creates an alert
    document.getElementById("city-search-btn");

var weatherContainerEl = document.querySelector("#weather-container");


let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
console.log(searchHistory);




function initSearch(lat, long) {
    var key = 'd1421d1863129a775873c0c766a5d5c6';

    const base = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + '&lon=' + long + '&appid=' + key;
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

            var fahrenheit = Math.round(((parseFloat(data.main.temp) - 273.15) * 1.8) + 32);
            document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
        })
};
async function getWeather(cityName) {

    var key = 'd1421d1863129a775873c0c766a5d5c6';
    var apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key;
    const weather = await fetch(apiURL);
    let response = await weather.json();
    console.log(response);
}
citySearch.addEventListener('click', function () {
    const cityInput = city.value;
    // alert("button clicked");
    getWeather(cityInput);
});
    // //   getWeather();



