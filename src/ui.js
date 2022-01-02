/*
    This codebase handles all UI functionality, initialized through the loadUI function.
    The page is loaded with a city chosen at random from a small hardcoded list.
    Weather info is displayed in one container, which is removed and reloaded upon a new search.
*/

import {metric, fetchWeather, toggleUnits} from './api.js';

const body = document.querySelector('body');
let initialLocations = ['Los Angeles', 'Tokyo', 'Sydney', 'Moscow', 'Barcelona', 'New Delhi', 'Beijing', 'Johannesburg', 'Cairo', 'Tehran', 'Buenos Aires', 'Havana', 'New York', 'Dallas'];

let currLocation = initialLocations[(Math.floor(Math.random() * initialLocations.length))];

function loadUI () {

    // UI is split into three sections: 
    //Top section with a search form and unit switching.
    //Main section with weather info.
    //Bottom section for decorative animation.

    const topThird = document.createElement('div');
        topThird.classList.add('top');

        const locationForm = document.createElement('div');
            locationForm.classList.add('locationForm');

            const searchbar = document.createElement('input');
                searchbar.setAttribute('type', 'text');

            const searchBtn = document.createElement('button');
                searchBtn.setAttribute('type', 'button');
                searchBtn.innerHTML = 'Search';

            const searchErr = document.createElement('h4');
                searchErr.id = ('searchErr');
                searchErr.classList.add('invisible');
                searchErr.innerHTML = 'City not found.'

            searchBtn.onclick = () => {
                currLocation = searchbar.value;
                displayWeather(currLocation);
            };
            searchbar.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    currLocation = searchbar.value;
                    displayWeather(currLocation);
                }
            });

            locationForm.append(searchbar, searchBtn, searchErr);

        //Toggle switch style unit selector
        
        const unitContainer = document.createElement('div');
            unitContainer.classList.add('unitContainer');

            const unitSwitch = document.createElement('label');
                unitSwitch.classList.add('switch');
                
                const unitCheck = document.createElement('input');
                    unitCheck.setAttribute('type', 'checkbox');
                    unitCheck.onclick = () => {
                        toggleUnits();
                        unitLabel.innerHTML === 'Metric' ? unitLabel.innerHTML = 'Imperial' : unitLabel.innerHTML = 'Metric';
                        displayWeather(currLocation);
                    };

                const span = document.createElement('span');
                    span.classList.add('slider', 'round');
                
                unitSwitch.append(
                    unitCheck,
                    span
                );
            
            const unitLabel = document.createElement('h4');
                    unitLabel.id = 'unitLabel';
                    unitLabel.innerHTML = 'Metric';

            unitContainer.append(unitSwitch, unitLabel);
        
        topThird.append(locationForm, unitContainer)

    const bottomAnimation = document.createElement('div');
            bottomAnimation.classList.add('bottom');
            animateDots(bottomAnimation);

    body.append(topThird, bottomAnimation);
    
    displayWeather(currLocation);
}


async function displayWeather (input) {

    //Create a container for all weather info, based on a custom weather object with data fetched from API.

    //Clean up page for new info

    document.getElementById('searchErr').classList.add('invisible');
    
    let weather = await fetchWeather(input);

    if (!weather) {
        document.getElementById('searchErr').classList.remove('invisible');
        return false
    }

    let oldWeather = document.querySelector('.weather');

    if (oldWeather) {
        body.removeChild(oldWeather);
    }

    //Graphic split into three sections:

    //Topline with name, icon.
    //Second Line with current temp, description.
    //Table with tertiary info.


    const weatherDisplay = document.createElement('div');
        weatherDisplay.classList.add('weather');

        const topline = document.createElement('div');
            topline.classList.add('topline');

            const name = document.createElement('h1');
                name.classList.add('name');
                name.innerHTML = weather.name

            const icon = document.createElement('img');
                icon.src = 'https://openweathermap.org/img/wn/' + weather.icon + '@4x.png';

            topline.append(name, icon);
            

        const secondline = document.createElement('div');
            secondline.classList.add('secondline');

            const description = document.createElement('h2');
                description.classList.add('description');
                description.innerHTML = weather.main;

            const mainTemp = document.createElement('h2');
                mainTemp.classList.add('temp');
                mainTemp.innerHTML = weather.temp + '°';

            secondline.append(mainTemp, description);
        

        const dataTable = document.createElement('table');

            const hiRow = document.createElement('tr');
                
                const hiLabel = document.createElement('td');
                    hiLabel.innerHTML = 'High:';
                const hiTemp = document.createElement('td');
                    hiTemp.innerHTML = weather.max + '°';
                
                hiRow.append(hiLabel, hiTemp);
            
            const loRow = document.createElement('tr');
                
                const loLabel = document.createElement('td');
                    loLabel.innerHTML = 'Low:';
                const loTemp = document.createElement('td');
                    loTemp.innerHTML = weather.min + '°';
                
                loRow.append(loLabel, loTemp);

        
            const feelsRow = document.createElement('tr');
                
                const feelsLabel = document.createElement('td');
                    feelsLabel.innerHTML = 'Feels Like:';
                const feelsTemp = document.createElement('td');
                    feelsTemp.innerHTML = weather.feels + '°';
                
                feelsRow.append(feelsLabel, feelsTemp);


            const humidityRow = document.createElement('tr');

                const humidityLabel = document.createElement('td');
                    humidityLabel.innerHTML = 'Humidity:';
                const humidity = document.createElement('td');
                    humidity.innerHTML = weather.humidity;

                humidityRow.append(humidityLabel, humidity);

            const windRow = document.createElement('tr');

                const windLabel = document.createElement('td');
                    windLabel.innerHTML = 'Wind:';
                const wind = document.createElement('td');
                    wind.innerHTML = weather.wind;
                    metric ? wind.innerHTML += 'kph' : wind.innerHTML += 'mph'

                windRow.append(windLabel, wind);


            const sunriseRow = document.createElement('tr');

                const sunriseLabel = document.createElement('td');
                    sunriseLabel.innerHTML = 'Sunrise:'

                const sunrise = document.createElement('td');                
                    let sunriseDate = new Date(weather.sunrise * 1000);
                    sunrise.innerHTML = sunriseDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                sunriseRow.append(sunriseLabel, sunrise);

            const sunsetRow = document.createElement('tr');

                const sunsetLabel = document.createElement('td');
                    sunsetLabel.innerHTML = 'Sunset:'

                const sunset = document.createElement('td');                
                    let sunsetDate = new Date(weather.sunset * 1000);
                    sunset.innerHTML = sunsetDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                sunsetRow.append(sunsetLabel, sunset);

            dataTable.append(hiRow, loRow, feelsRow, humidityRow, windRow, sunriseRow, sunsetRow);

        weatherDisplay.append(topline, secondline, dataTable);

    body.append(weatherDisplay);
}

function animateDots (el) {

    //Generates, appends, and removes blank div elements with dot class on random interval.
    //All stylization in CSS

    setInterval(() => {

        const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.style.left = (Math.random() * 100).toString() + '%';
            dot.style.bottom = (Math.random() * 100).toString() + '%';

            el.append(dot);

            setTimeout(() => {
                el.removeChild(dot)
            }, 3000)

    }, Math.random() * 200);
}

export {
    loadUI
}