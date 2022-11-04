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

var lat;
var lon;
var apiKey = "7e4bd1e951cf0599deed23d6658120ae";

// this is the api function that will run the fetch
var getCityLatLon = function (city) {
  var url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

  fetch(url).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        lon = data[0].lon;
        lat = data[0].lat;

        getCityWeather(lat, lon, city);
      });
    } else {
      alert("Error:" + response.statusText);
    }
  });
};

var cardDivEl = document.querySelector(".card-title");
var cardBodyEl = document.querySelector(".card-body");
var fiveDayEl = document.getElementById("fiveDayCard");

var getCityWeather = function (lat, lon, city) {
  const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  fetch(weatherUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        var name = data.city.name;

        let template = "";
        let templateCurrent = "";
        // i think i have to have moments and then make a variable to the time of today and then pull the weather for the time that the user comes to the page ???????
        templateCurrent += `
        <div class="card-body">
        <h3>${name}</h3>
        <img src=" http://openweathermap.org/img/w/${
          data.list[1].weather[0].icon
        }.png"/>
          <p>

        <strong>Date:</strong> ${new Date().toLocaleDateString()}
        <br>
        
          <p>
           <strong>Temperature:</strong> ${data.list[1].main.temp}
            <br>
            <strong>Humidity:</strong> ${data.list[1].main.humidity}
            <br>
            <strong>Wind Speed:</strong> ${data.list[1].wind.speed}
          </p>
         
        </div>
        `;
        cardBodyEl.innerHTML = templateCurrent;

        console.log(data.results);

        //loop through each item in the data.list array. for each item, check to see if item.dt_txt.split(' ')[1]

        var timeOnly = "";

        data.list.forEach(function (item) {
          timeOnly = item.dt_txt.split(" ")[1];

          if (timeOnly === "12:00:00") {
            console.log(item, "item");
            template += `
                <div class="fiveDay">
                  <div class="card-title" >
                  <h3>${name}</h3>
                  <img src=" http://openweathermap.org/img/w/${item.weather[0].icon}.png"/>
                   
                 
                  <p>
                  <strong>Date:</strong> ${item.dt_txt}
                  <br>
                  
                    <p>
                     <strong>Temperature:</strong> ${item.main.temp}
                      <br>
                      <strong>Humidity:</strong> ${item.main.humidity}
                      <br>
                      <strong>Wind Speed:</strong> ${item.wind.speed}
                    </p>
                   
                  </div>
                </div>
              `;
          }
        });

        //show data
        fiveDayEl.innerHTML = template;

        console.log("city??", city);

        // store in local storage
        var oldData = localStorage.getItem("city") || [];

        var parsedOldData = oldData.length === 0 ? [] : JSON.parse(oldData);

        parsedOldData.push(city);

        localStorage.setItem("city", JSON.stringify(parsedOldData));

        createAllButton();
      });
    } else {
      alert("Error:" + response.statusText);
    }
  });
};

var createAllButton = function () {
  var data = localStorage.getItem("city") || [];
  var parsedOldData = data.length === 0 ? [] : JSON.parse(data);

  var template = "";
  if (parsedOldData.length > 0) {
    parsedOldData.forEach(function (cityName) {
      template += `
                <button class="city-btn">${cityName}</button>
            `;
    });
  }

  document.querySelector("#history").innerHTML = template;
};

createAllButton();

document.querySelector("#history").addEventListener("click", function (event) {
  // get the name from element
  var cityName = event.target.textContent;
  // func the
  getCityLatLon(cityName);
});

// form submit handler this is for the input of the city's in the form
var mainCityNameEl = document.querySelector("#main-city-name");
var searchFormEl = document.querySelector("#search-form");
var cityNameInputEl = document.querySelector("#cityName");
var saveBtnEl = document.querySelector("#searchBtn");

var formSubmitHandler = function (event) {
  event.preventDefault();
  // let inputVal = input.value;
 var city = cityNameInputEl.value.trim();

//   if (city) {
//     getCityLatLon(city);
//     mainCityNameEl.textContent = "";
//     cityNameInputEl.value = "";
//   } else {
//     alert("Please enter a city");
//   }
//   console.log(city, "city");
  getCityLatLon(city);
};

// this is when the button is clicked the info is stored in local storage
// var saveBtnEl = document.querySelector("#searchBtn");
// var saveBtnClickHandler = function (event) {
//   var getCity = event.target.getAttribute("cityName");
//   console.log(getCity, "nameCity");
//   dateTime = localStorage.getItem("cityName").val();
//   humidity = localStorage.getItem("loseCount").val();

//  date.textContent = dateTime;
//  console.log(date, "date")

// document.querySelector(".reset-button").addEventListener("click", function () {
//   // set the storage to 0
//   localStorage.setItem("date");

//   // show
//   date.textContent = dateTime;

// });
// };

// // this will be the saved searches and then when you click them they will display the weather again
// var storeBtnEl = document.querySelector("#storeBtn");
// var storedHistoryBtnClickHandler = function (event) {
//     var getCity = event.target.getAttribute("cityName");
//     console.log(getCity);

//   };

searchFormEl.addEventListener("submit", formSubmitHandler);
// // saveBtnEl.addEventListener("click", saveBtnClickHandler);
//  storeBtnEl.addEventListener("click", storedHistoryBtnClickHandler);

// // so you need 2  functions you will creat a nutton and  save it to localstore it in array .taht button will have an event listenr taht will grab that name .athen another fucntion that will loop threw the localstrage and then create a button out of them .
// // give the eventl istener for the button click on the parent container and distribute the rest to the children and they should be all buttons
