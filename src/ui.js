import {parseLocation, fetchWeather, toggleUnits, Weather} from './api.js';

const body = document.querySelector('body');

function loadUI () {
    const locationForm = document.createElement('div');

        const searchbar = document.createElement('input');
            searchbar.setAttribute('type', 'text');

        const searchBtn = document.createElement('button');
            searchBtn.setAttribute('type', 'button');
            searchBtn.innerHTML = 'Search';

        searchBtn.onclick = () => logWeather(searchbar.value);
        searchbar.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                logWeather(searchbar.value);
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
                };
            
            unitSwitch.append(
                unitCheck,
                document.createElement('span')
            );
        
        const unitLabel = document.createElement('span');
                unitLabel.innerHTML = 'Metric';

        unitContainer.append(unitSwitch, unitLabel);


    body.append(locationForm, unitContainer);
}

async function logWeather(input) {
    let weather = await fetchWeather(input);
    console.log(weather);
}

export {
    loadUI
}