import {parseLocation, fetchWeather} from './api.js';
import {loadUI} from './ui.js'

//TESTING

console.log('mic check');

/*

  (async () => {
    let weather = await fetchWeather('New+York');
    console.log(weather);
  })()

*/ 

//TESTING

loadUI();

window.fetchWeather = fetchWeather;
window.parseLocation = parseLocation;
