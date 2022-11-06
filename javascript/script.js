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

        // if the thing that is already in there don't psuh
        if (!parsedOldData.includes(city)) {
          parsedOldData.push(city);

          localStorage.setItem("city", JSON.stringify(parsedOldData));
        }

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
  var city = cityNameInputEl.value.trim();
  getCityLatLon(city);
};
//  how do i clear the local storage
// localStorage.clear();

searchFormEl.addEventListener("submit", formSubmitHandler);
