# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

# Aim of the project

The task was to develop a single page webapp which displays temperature, humidity and chance of rain in 5 different cities.

# How to install and run this project

1.  Install node latest version on your machine
2.  Download or clone this project from GIT repository
3.  Go to folder location in cmd prompt and run npm install.
4.  Once the npm modules installs successfully run using npm start or ng serve.
5.  Go to browser and type https://localhost:4200

# Folder structure

- src
	- app
		- main
		  - home
		  - weatherservice
		- shared
		  - card
		  - decimalpipe
		- app.component.ts
		- app.component.scss
		- app.component.html
		- app.module.ts

# Brief description

- The project routes to /home on loading which displays the header and the 5 cities along with the weather details.
- Home component has the project view, and also responsible for getting the cities weather data.
- We have Weather Service which gives http calls to the OpenWeatherAPI and get the weather details for each cities.
- The shared component card is reusable component which can display a header and multiple lines in a card structure, we use this component to display weather details.
- The decimal pipe is used to convert the temperature returned from BE to floor value.

# What went well

- The page looks simple and load very fast.
- All the data fetched is displayed together and looks user friendly in a simple UI.
- A reusable card component is used which can be further used in different pages.
- App is responsive for multiple devices and screen widths.

# What can be improved

- We could write unit test cases.
- The app can have functionality to add more cities which user can select from dropdown or type.
