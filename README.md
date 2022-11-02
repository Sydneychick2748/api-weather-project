# api-weather-project
<!-- AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
Acceptance Criteria
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city -->

<!-- hint____Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name? -->





http://api.openweathermap.org/geo/1.0/direct?q=boulder,colorado,1&limit=5appid=7e4bd1e951cf0599deed23d6658120ae









<!-- function for the form input i think a submit so the imput can be stored 



need a function to get the time and date (maybe the time and date are in the api call ????)




 fetch for the citys api
 store the info so i can have it in my save history 
need to then retrieve the old data that has been saved in the history so on click ???
You will use localStorage to store any persistent data. 



 fetch for the icons  -->