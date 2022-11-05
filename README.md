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


 #Description
tThis project is a daily planner for people with busy schedules to keep up with all their tasks for the hours of the day. With a busy schedule, I want to add important events to a daily planner so I can manage my time effectively. You can see the live site here https://sydneychick2748.github.io/Third-Party-API-Work-Day-Scheduler/ The planner has the date and day displayed when you visit your planner. The times 9 am to 5 pm are displayed on the side of the planner, and there is an input field and store button to put the task you want in accordance with that time. So when you leave your planner, come back to check the following tasks. The tasks should still be there for you as a user to see. There is also a clear button to clear the planner for the next day. This project was a little tricky. First, I had some challenges as it had to be in jquery. I started making a for loop and arrays and using document get element by id and a few other vanilla js code. I needed help understanding the jquery methods and how to apply them. With some help, I got it worked out. Jquery takes fewer lines of code than vanilla js, which is more manageable if you know the library. I did enjoy the project after I got threw my challenges.

#Table of Contents
Description
Installation
Usage
Support
Credits
License
Installation
To set up the development environment and run it, I made a folder in my finder and named it. Then I went to GitHub and created a new repository using the same name I called my folder. Then I dropped the file in vs. and made my coding environment. First, I set up my HTML file: index. html, I set up the CSS file: styles.css and my JavaScript file: script.js. Then went back to GitHub, copied the ssh key, and made a clone. Then pushed my code to GitHub.

#Usage
GIVEN I am using a daily planner to create a schedule Here is a video to show the functionality of the planner

<iframe src="https://drive.google.com/file/d/1jRQ36voriEM0r8PsfHMDTY8heZV2E5nv/preview" width="640" height="480"></iframe>
WHEN I open the planner THEN the current day is displayed at the top of the calendar

image

WHEN I scroll down THEN I am presented with time blocks for standard business hours WHEN I view the time blocks for that day THEN each time block is color-coded to indicate whether it is in the past, present, or future

image

WHEN I click into a time block THEN I can enter an event

image

WHEN I click the save button for that time block THEN the text for that event is saved in local storage

image

WHEN I refresh the page THEN the saved events persist

image

when i click the clear button all the inputs that were saved are no longer saved

image

#Support
you can email me for extra support at anabennett77@gmail.com

#License
please refer to the repo at https://github.com/Sydneychick2748/Third-Party-API-Work-Day-Scheduler

#Features
A speacial feature of this project is you can clear the stored inputs when you chose








