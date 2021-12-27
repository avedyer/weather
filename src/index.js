import {fetchWeather, translateData, Weather} from './api.js';

//TESTING

console.log('mic check');

const key = 'ef5127c2d2f14fe834463003fb26ca93';
const body = document.querySelector('body');
const tempEl = document.createElement('h1');
    tempEl.id = 'temp';
    body.append(tempEl);

/*
fetch(`http://api.openweathermap.org/data/2.5/weather?q=New+York&appid=${key}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        body.innerHTML = response.main.temp
    });

*/


  (async () => {
    let weather = await fetchWeather('New+York');
    console.log(weather);
  })()


  let testvar;



//TESTING

window.fetchWeather = fetchWeather;
