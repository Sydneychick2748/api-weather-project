// I WANT to see the weather outlook for multiple cities
// SO THAT I can plan a trip accordingly
// Acceptance Criteria
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city -->

// <!-- hint____Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name? -->
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=7e4bd1e951cf0599deed23d6658120ae





// this is the api function that will run the fetch
const apiKey = "7e4bd1e951cf0599deed23d6658120ae";
var getCityName =function (city){
 var url = `http://api.openweathermap.org/2.5/forecast?q=${city}&appid=7e4bd1e951cf0599deed23d6658120ae`;

    fetch(url)
    .then(function(response){
        if (response.ok){
            response.json().then(function(data){
                // displayWeather(data,city)
                console.log(data)
            });
        }else{
            alert("Error:" + response.statusText);
        }
        
    })
console.log (url , "url")
}

    
//      var getCityName =function (city){
//      const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=7e4bd1e951cf0599deed23d6658120ae`;
//     fetch(weatherUrl)
//     .then(response => response.json())
//     .then(data => {
//       const {Temperature , Humidity, WindSpeed, UVIndex } = data;
      
//       const li = document.createElement("li");
//       li.classList.add("city");
//       const markup = `
//         <h2 class="city-name" data-name="${Temperature},${Humidity}, ${WindSpeed}, ${UVIndex}">
//           <span>${Temperature},${Humidity}, ${WindSpeed}, ${UVIndex}</span>
//           <sup>${sys.country}</sup>
//         </h2>
//         <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
//       li.innerHTML = markup;
//       list.appendChild(li);`;
//     })
// }
    


// this is when the button is clicked the info is stored in local storage 
var buttonClickHandler = function(event){
var getCity = event.target.getAttribute("cityName");
console.log(getCity)
    

}










    // form submit handler this is for the input of the city's in the form 
    var mainCityNameEl = document.querySelector('#main-city-name');
    var searchFormEl = document.querySelector('#search-form');
    var cityNameInputEl = document.querySelector('#cityName');
    var searchBtnEl =document.querySelector('#searchBtn');

    var formSubmitHandler = function (event) {
        event.preventDefault();
        // let inputVal = input.value;
        var city = cityNameInputEl.value.trim();
      
        if (city) {
            getCityName(city)
         mainCityNameEl.textContent = '';
          cityNameInputEl.value = '';
        } else {
          alert('Please enter a city');
        }
        console.log(city, "city")
        getCityName(city)
      };








// this will display the weather 
    var displayWeather = function(){


    }


// this will get the 5day weather cards
var fiveDayCard =document.querySelector('#fiveDayCard');
var getFiveWeatherCards = function(){

}




    searchFormEl.addEventListener('submit', formSubmitHandler);
    searchBtnEl.addEventListener("click", buttonClickHandler);
    
