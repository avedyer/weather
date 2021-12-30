import {metric, parseLocation, fetchWeather, toggleUnits, Weather} from './api.js';

const body = document.querySelector('body');
let currLocation = 'Los Angeles';

function loadUI () {
    const locationForm = document.createElement('div');

        const searchbar = document.createElement('input');
            searchbar.setAttribute('type', 'text');

        const searchBtn = document.createElement('button');
            searchBtn.setAttribute('type', 'button');
            searchBtn.innerHTML = 'Search';

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

        locationForm.append(searchbar, searchBtn);
    
    const unitContainer = document.createElement('div');
        const unitSwitch = document.createElement('label');
            unitSwitch.id = 'unitSwitch';
            
            const unitCheck = document.createElement('input');
                unitCheck.setAttribute('type', 'checkbox');
                unitCheck.onclick = () => {
                    toggleUnits();
                    unitLabel.innerHTML === 'Metric' ? unitLabel.innerHTML = 'Imperial' : unitLabel.innerHTML = 'Metric';
                    displayWeather(currLocation);
                };
            
            unitSwitch.append(
                unitCheck,
                document.createElement('span')
            );
        
        const unitLabel = document.createElement('span');
                unitLabel.innerHTML = 'Metric';

        unitContainer.append(unitSwitch, unitLabel);


    body.append(locationForm, unitContainer);
    displayWeather(currLocation);
}


async function displayWeather (input) {
    
    let weather = await fetchWeather(input)

    let oldWeather = document.getElementById('weather');

    if (oldWeather) {
        body.removeChild(oldWeather);
    }

    const weatherDisplay = document.createElement('div');
        weatherDisplay.id = 'weather'

        const name = document.createElement('h1');
            name.classList.add('name');
            name.innerHTML = weather.name

        const description = document.createElement('h2');
            description.classList.add('description');
            description.innerHTML = weather.main;

        const mainTemp = document.createElement('h3');
            mainTemp.classList.add('temp');
            mainTemp.innerHTML = weather.temp + '°';

        const feelsTemp = document.createElement('h4');

        const tempRangeContainer = document.createElement('div');

            const hiTemp = document.createElement('h4');
                hiTemp.innerHTML = 'High:' + weather.max + '°';
            const loTemp = document.createElement('h4');
                loTemp.innerHTML = 'Low: ' + weather.min + '°';

            tempRangeContainer.append(hiTemp, loTemp);

        const humidity = document.createElement('h4');
            humidity.classList.add('humidity');
            humidity.innerHTML = 'Humidity: ' + weather.humidity + '%';

        const wind = document.createElement('h4');
            wind.classList.add('wind');
            wind.innerHTML = 'Wind: ' + weather.wind;
            metric ? wind.innerHTML += 'kph' : wind.innerHTML += 'mph'

        weatherDisplay.append(name, description, mainTemp, feelsTemp, tempRangeContainer, humidity, wind);

    body.append(weatherDisplay);
}


async function logWeather(input) {
    let weather = await fetchWeather(input);
    console.log(weather);
}

export {
    loadUI
}