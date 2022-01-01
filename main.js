/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseLocation": () => (/* binding */ parseLocation),
/* harmony export */   "translateData": () => (/* binding */ translateData),
/* harmony export */   "fetchWeather": () => (/* binding */ fetchWeather),
/* harmony export */   "toggleUnits": () => (/* binding */ toggleUnits),
/* harmony export */   "metric": () => (/* binding */ metric),
/* harmony export */   "Weather": () => (/* binding */ Weather)
/* harmony export */ });
const key = 'ef5127c2d2f14fe834463003fb26ca93';
let metric = true;


function parseLocation (input) {
    //TODO parse form input into format useable for API
    let location = input.trim();
    location = input.replace(' ', '+')

    let firstFive = location.substring(0, 5);
     if (/^\d+$/.test(firstFive)) {
         return 'zip=' + firstFive               //zip code return
    }

    return 'q=' + location                        //formatted string return
}

async function fetchWeather(input) {
    //TODO return current data

    let location = parseLocation(input);

    const url = `http://api.openweathermap.org/data/2.5/weather?${location}&appid=${key}`
    const response = await fetch(url, {mode: 'cors'});
    const data = await response.json();

    return translateData(data);
}

function translateData(data) {

    let name = data.name + ', ' + data.sys.country;
    let main = capitalize(data.weather[0].description);
    let icon = data.weather[0].icon;
    let humidity = data.main.humidity;
    let timezone = data.timezone;
        let today = new Date;
        let offset = today.getTimezoneOffset() * 60;
    let sunrise = data.sys.sunrise + timezone + offset;
    let sunset = data.sys.sunset + timezone + offset;
    let temp, min, max, feels, wind;

    if (metric) {
        temp = cTemp(data.main.temp);
        min = cTemp(data.main.temp_min);
        max = cTemp(data.main.temp_max);
        feels = cTemp(data.main.feels_like)
        wind = toKph(data.wind.speed);
    }
    else {
        temp = fTemp(data.main.temp);
        min = fTemp(data.main.temp_min);
        max = fTemp(data.main.temp_max);
        feels = fTemp(data.main.feels_like)
        wind = toMph(data.wind.speed);
    }
    
    
    return new Weather(name, main, icon, temp, min, max, feels, humidity, wind, sunrise, sunset, timezone);
}

function Weather(name, main, icon, temp, min, max, feels, humidity, wind, sunrise, sunset, timezone) {
    this.name = name;
    this.main = main;
    this.icon = icon;
    this.temp = temp;
    this.min = min;
    this.max = max;
    this.feels = feels;
    this.humidity = humidity;
    this.wind = wind;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.timezone = timezone;
}

function fTemp(kTemp) {
    let fTemp = 9 / 5 * (kTemp - 273) + 32 
    return Math.round(fTemp);
}

function cTemp(kTemp) {
    return Math.round(kTemp - 273.15);
}

function toMph(speed) {
    return Math.round(speed * 2.236936);
}

function toKph(speed) {
    return Math.round(speed * 3.6)
}

function toggleUnits() {
    metric = !metric
}

function capitalize(str) {

    str = str.trim();

    let capitalized = str.charAt(0).toUpperCase();

    for (let i=1; i<str.length; ++i){
        capitalized += str.charAt(i);
        if (str.charAt(i) === ' ') {
            capitalized += str.charAt(i+1).toUpperCase();
            ++i       
        }
    }

    return capitalized;
}




/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadUI": () => (/* binding */ loadUI)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/api.js");


const body = document.querySelector('body');
let initialLocations = ['Los Angeles', 'Tokyo', 'Sydney', 'Moscow', 'Barcelona', 'New Delhi', 'Beijing', 'Johannesburg', 'Cairo', 'Tehran', 'Buenos Aires', 'Havana', 'New York', 'Dallas'];

let currLocation = initialLocations[(Math.floor(Math.random() * initialLocations.length))];


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
                    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.toggleUnits)();
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
    
    let weather = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeather)(input)

    let oldWeather = document.getElementById('weather');

    if (oldWeather) {
        body.removeChild(oldWeather);
    }

    const weatherDisplay = document.createElement('div');
        weatherDisplay.id = 'weather'

        const header = document.createElement('div');

            const name = document.createElement('h1');
                name.classList.add('name');
                name.innerHTML = weather.name

            const icon = document.createElement('img');
                icon.src = 'http://openweathermap.org/img/wn/' + weather.icon + '@2x.png';

            header.append(name, icon);

        const description = document.createElement('h2');
            description.classList.add('description');
            description.innerHTML = weather.main;

        const mainTemp = document.createElement('h3');
            mainTemp.classList.add('temp');
            mainTemp.innerHTML = weather.temp + '°';

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
                    _api_js__WEBPACK_IMPORTED_MODULE_0__.metric ? wind.innerHTML += 'kph' : wind.innerHTML += 'mph'

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

        weatherDisplay.append(header, description, mainTemp, dataTable);

    body.append(weatherDisplay);
}


async function logWeather(input) {
    let weather = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeather)(input);
    console.log(weather);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/api.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");



//TESTING

console.log('mic check');

/*

  (async () => {
    let weather = await fetchWeather('New+York');
    console.log(weather);
  })()

*/ 

//TESTING

(0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.loadUI)();

window.fetchWeather = _api_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeather;
window.parseLocation = _api_js__WEBPACK_IMPORTED_MODULE_0__.parseLocation;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VhdGhlci8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBrZXkgPSAnZWY1MTI3YzJkMmYxNGZlODM0NDYzMDAzZmIyNmNhOTMnO1xubGV0IG1ldHJpYyA9IHRydWU7XG5cblxuZnVuY3Rpb24gcGFyc2VMb2NhdGlvbiAoaW5wdXQpIHtcbiAgICAvL1RPRE8gcGFyc2UgZm9ybSBpbnB1dCBpbnRvIGZvcm1hdCB1c2VhYmxlIGZvciBBUElcbiAgICBsZXQgbG9jYXRpb24gPSBpbnB1dC50cmltKCk7XG4gICAgbG9jYXRpb24gPSBpbnB1dC5yZXBsYWNlKCcgJywgJysnKVxuXG4gICAgbGV0IGZpcnN0Rml2ZSA9IGxvY2F0aW9uLnN1YnN0cmluZygwLCA1KTtcbiAgICAgaWYgKC9eXFxkKyQvLnRlc3QoZmlyc3RGaXZlKSkge1xuICAgICAgICAgcmV0dXJuICd6aXA9JyArIGZpcnN0Rml2ZSAgICAgICAgICAgICAgIC8vemlwIGNvZGUgcmV0dXJuXG4gICAgfVxuXG4gICAgcmV0dXJuICdxPScgKyBsb2NhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9ybWF0dGVkIHN0cmluZyByZXR1cm5cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKGlucHV0KSB7XG4gICAgLy9UT0RPIHJldHVybiBjdXJyZW50IGRhdGFcblxuICAgIGxldCBsb2NhdGlvbiA9IHBhcnNlTG9jYXRpb24oaW5wdXQpO1xuXG4gICAgY29uc3QgdXJsID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/JHtsb2NhdGlvbn0mYXBwaWQ9JHtrZXl9YFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGVEYXRhKGRhdGEpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVEYXRhKGRhdGEpIHtcblxuICAgIGxldCBuYW1lID0gZGF0YS5uYW1lICsgJywgJyArIGRhdGEuc3lzLmNvdW50cnk7XG4gICAgbGV0IG1haW4gPSBjYXBpdGFsaXplKGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XG4gICAgbGV0IGljb24gPSBkYXRhLndlYXRoZXJbMF0uaWNvbjtcbiAgICBsZXQgaHVtaWRpdHkgPSBkYXRhLm1haW4uaHVtaWRpdHk7XG4gICAgbGV0IHRpbWV6b25lID0gZGF0YS50aW1lem9uZTtcbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGU7XG4gICAgICAgIGxldCBvZmZzZXQgPSB0b2RheS5nZXRUaW1lem9uZU9mZnNldCgpICogNjA7XG4gICAgbGV0IHN1bnJpc2UgPSBkYXRhLnN5cy5zdW5yaXNlICsgdGltZXpvbmUgKyBvZmZzZXQ7XG4gICAgbGV0IHN1bnNldCA9IGRhdGEuc3lzLnN1bnNldCArIHRpbWV6b25lICsgb2Zmc2V0O1xuICAgIGxldCB0ZW1wLCBtaW4sIG1heCwgZmVlbHMsIHdpbmQ7XG5cbiAgICBpZiAobWV0cmljKSB7XG4gICAgICAgIHRlbXAgPSBjVGVtcChkYXRhLm1haW4udGVtcCk7XG4gICAgICAgIG1pbiA9IGNUZW1wKGRhdGEubWFpbi50ZW1wX21pbik7XG4gICAgICAgIG1heCA9IGNUZW1wKGRhdGEubWFpbi50ZW1wX21heCk7XG4gICAgICAgIGZlZWxzID0gY1RlbXAoZGF0YS5tYWluLmZlZWxzX2xpa2UpXG4gICAgICAgIHdpbmQgPSB0b0twaChkYXRhLndpbmQuc3BlZWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGVtcCA9IGZUZW1wKGRhdGEubWFpbi50ZW1wKTtcbiAgICAgICAgbWluID0gZlRlbXAoZGF0YS5tYWluLnRlbXBfbWluKTtcbiAgICAgICAgbWF4ID0gZlRlbXAoZGF0YS5tYWluLnRlbXBfbWF4KTtcbiAgICAgICAgZmVlbHMgPSBmVGVtcChkYXRhLm1haW4uZmVlbHNfbGlrZSlcbiAgICAgICAgd2luZCA9IHRvTXBoKGRhdGEud2luZC5zcGVlZCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHJldHVybiBuZXcgV2VhdGhlcihuYW1lLCBtYWluLCBpY29uLCB0ZW1wLCBtaW4sIG1heCwgZmVlbHMsIGh1bWlkaXR5LCB3aW5kLCBzdW5yaXNlLCBzdW5zZXQsIHRpbWV6b25lKTtcbn1cblxuZnVuY3Rpb24gV2VhdGhlcihuYW1lLCBtYWluLCBpY29uLCB0ZW1wLCBtaW4sIG1heCwgZmVlbHMsIGh1bWlkaXR5LCB3aW5kLCBzdW5yaXNlLCBzdW5zZXQsIHRpbWV6b25lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgdGhpcy50ZW1wID0gdGVtcDtcbiAgICB0aGlzLm1pbiA9IG1pbjtcbiAgICB0aGlzLm1heCA9IG1heDtcbiAgICB0aGlzLmZlZWxzID0gZmVlbHM7XG4gICAgdGhpcy5odW1pZGl0eSA9IGh1bWlkaXR5O1xuICAgIHRoaXMud2luZCA9IHdpbmQ7XG4gICAgdGhpcy5zdW5yaXNlID0gc3VucmlzZTtcbiAgICB0aGlzLnN1bnNldCA9IHN1bnNldDtcbiAgICB0aGlzLnRpbWV6b25lID0gdGltZXpvbmU7XG59XG5cbmZ1bmN0aW9uIGZUZW1wKGtUZW1wKSB7XG4gICAgbGV0IGZUZW1wID0gOSAvIDUgKiAoa1RlbXAgLSAyNzMpICsgMzIgXG4gICAgcmV0dXJuIE1hdGgucm91bmQoZlRlbXApO1xufVxuXG5mdW5jdGlvbiBjVGVtcChrVGVtcCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGtUZW1wIC0gMjczLjE1KTtcbn1cblxuZnVuY3Rpb24gdG9NcGgoc3BlZWQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChzcGVlZCAqIDIuMjM2OTM2KTtcbn1cblxuZnVuY3Rpb24gdG9LcGgoc3BlZWQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChzcGVlZCAqIDMuNilcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVW5pdHMoKSB7XG4gICAgbWV0cmljID0gIW1ldHJpY1xufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cikge1xuXG4gICAgc3RyID0gc3RyLnRyaW0oKTtcblxuICAgIGxldCBjYXBpdGFsaXplZCA9IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcblxuICAgIGZvciAobGV0IGk9MTsgaTxzdHIubGVuZ3RoOyArK2kpe1xuICAgICAgICBjYXBpdGFsaXplZCArPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICBpZiAoc3RyLmNoYXJBdChpKSA9PT0gJyAnKSB7XG4gICAgICAgICAgICBjYXBpdGFsaXplZCArPSBzdHIuY2hhckF0KGkrMSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICsraSAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYXBpdGFsaXplZDtcbn1cblxuXG5leHBvcnQge1xuICAgIHBhcnNlTG9jYXRpb24sXG4gICAgdHJhbnNsYXRlRGF0YSxcbiAgICBmZXRjaFdlYXRoZXIsXG4gICAgdG9nZ2xlVW5pdHMsXG4gICAgbWV0cmljLFxuICAgIFdlYXRoZXJcbn07IiwiaW1wb3J0IHttZXRyaWMsIHBhcnNlTG9jYXRpb24sIGZldGNoV2VhdGhlciwgdG9nZ2xlVW5pdHMsIFdlYXRoZXJ9IGZyb20gJy4vYXBpLmpzJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmxldCBpbml0aWFsTG9jYXRpb25zID0gWydMb3MgQW5nZWxlcycsICdUb2t5bycsICdTeWRuZXknLCAnTW9zY293JywgJ0JhcmNlbG9uYScsICdOZXcgRGVsaGknLCAnQmVpamluZycsICdKb2hhbm5lc2J1cmcnLCAnQ2Fpcm8nLCAnVGVocmFuJywgJ0J1ZW5vcyBBaXJlcycsICdIYXZhbmEnLCAnTmV3IFlvcmsnLCAnRGFsbGFzJ107XG5cbmxldCBjdXJyTG9jYXRpb24gPSBpbml0aWFsTG9jYXRpb25zWyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpbml0aWFsTG9jYXRpb25zLmxlbmd0aCkpXTtcblxuXG5mdW5jdGlvbiBsb2FkVUkgKCkge1xuICAgIGNvbnN0IGxvY2F0aW9uRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IHNlYXJjaGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBzZWFyY2hiYXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblxuICAgICAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHNlYXJjaEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICBzZWFyY2hCdG4uaW5uZXJIVE1MID0gJ1NlYXJjaCc7XG5cbiAgICAgICAgc2VhcmNoQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyTG9jYXRpb24gPSBzZWFyY2hiYXIudmFsdWU7XG4gICAgICAgICAgICBkaXNwbGF5V2VhdGhlcihjdXJyTG9jYXRpb24pO1xuICAgICAgICB9O1xuICAgICAgICBzZWFyY2hiYXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgY3VyckxvY2F0aW9uID0gc2VhcmNoYmFyLnZhbHVlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlXZWF0aGVyKGN1cnJMb2NhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvY2F0aW9uRm9ybS5hcHBlbmQoc2VhcmNoYmFyLCBzZWFyY2hCdG4pO1xuICAgIFxuICAgIGNvbnN0IHVuaXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdW5pdFN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICB1bml0U3dpdGNoLmlkID0gJ3VuaXRTd2l0Y2gnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB1bml0Q2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIHVuaXRDaGVjay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgICAgICB1bml0Q2hlY2sub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVW5pdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdW5pdExhYmVsLmlubmVySFRNTCA9PT0gJ01ldHJpYycgPyB1bml0TGFiZWwuaW5uZXJIVE1MID0gJ0ltcGVyaWFsJyA6IHVuaXRMYWJlbC5pbm5lckhUTUwgPSAnTWV0cmljJztcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVdlYXRoZXIoY3VyckxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB1bml0U3dpdGNoLmFwcGVuZChcbiAgICAgICAgICAgICAgICB1bml0Q2hlY2ssXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdW5pdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIHVuaXRMYWJlbC5pbm5lckhUTUwgPSAnTWV0cmljJztcblxuICAgICAgICB1bml0Q29udGFpbmVyLmFwcGVuZCh1bml0U3dpdGNoLCB1bml0TGFiZWwpO1xuXG5cbiAgICBib2R5LmFwcGVuZChsb2NhdGlvbkZvcm0sIHVuaXRDb250YWluZXIpO1xuICAgIFxuICAgIGRpc3BsYXlXZWF0aGVyKGN1cnJMb2NhdGlvbik7XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIgKGlucHV0KSB7XG4gICAgXG4gICAgbGV0IHdlYXRoZXIgPSBhd2FpdCBmZXRjaFdlYXRoZXIoaW5wdXQpXG5cbiAgICBsZXQgb2xkV2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyJyk7XG5cbiAgICBpZiAob2xkV2VhdGhlcikge1xuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG9sZFdlYXRoZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IHdlYXRoZXJEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdlYXRoZXJEaXNwbGF5LmlkID0gJ3dlYXRoZXInXG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICAgICAgICAgICAgICAgIG5hbWUuaW5uZXJIVE1MID0gd2VhdGhlci5uYW1lXG5cbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICBpY29uLnNyYyA9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8nICsgd2VhdGhlci5pY29uICsgJ0AyeC5wbmcnO1xuXG4gICAgICAgICAgICBoZWFkZXIuYXBwZW5kKG5hbWUsIGljb24pO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSB3ZWF0aGVyLm1haW47XG5cbiAgICAgICAgY29uc3QgbWFpblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgbWFpblRlbXAuY2xhc3NMaXN0LmFkZCgndGVtcCcpO1xuICAgICAgICAgICAgbWFpblRlbXAuaW5uZXJIVE1MID0gd2VhdGhlci50ZW1wICsgJ8KwJztcblxuICAgICAgICBjb25zdCBkYXRhVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuXG4gICAgICAgICAgICBjb25zdCBoaVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgaGlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICAgICAgICAgIGhpTGFiZWwuaW5uZXJIVE1MID0gJ0hpZ2g6JztcbiAgICAgICAgICAgICAgICBjb25zdCBoaVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICBoaVRlbXAuaW5uZXJIVE1MID0gd2VhdGhlci5tYXggKyAnwrAnO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGhpUm93LmFwcGVuZChoaUxhYmVsLCBoaVRlbXApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBsb1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgbG9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICAgICAgICAgIGxvTGFiZWwuaW5uZXJIVE1MID0gJ0xvdzonO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICAgICAgICAgIGxvVGVtcC5pbm5lckhUTUwgPSB3ZWF0aGVyLm1pbiArICfCsCc7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbG9Sb3cuYXBwZW5kKGxvTGFiZWwsIGxvVGVtcCk7XG5cbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBmZWVsc1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZmVlbHNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICAgICAgICAgIGZlZWxzTGFiZWwuaW5uZXJIVE1MID0gJ0ZlZWxzIExpa2U6JztcbiAgICAgICAgICAgICAgICBjb25zdCBmZWVsc1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICBmZWVsc1RlbXAuaW5uZXJIVE1MID0gd2VhdGhlci5mZWVscyArICfCsCc7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZmVlbHNSb3cuYXBwZW5kKGZlZWxzTGFiZWwsIGZlZWxzVGVtcCk7XG5cblxuICAgICAgICAgICAgY29uc3QgaHVtaWRpdHlSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaHVtaWRpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICAgICAgICAgIGh1bWlkaXR5TGFiZWwuaW5uZXJIVE1MID0gJ0h1bWlkaXR5Oic7XG4gICAgICAgICAgICAgICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICBodW1pZGl0eS5pbm5lckhUTUwgPSB3ZWF0aGVyLmh1bWlkaXR5O1xuXG4gICAgICAgICAgICAgICAgaHVtaWRpdHlSb3cuYXBwZW5kKGh1bWlkaXR5TGFiZWwsIGh1bWlkaXR5KTtcblxuICAgICAgICAgICAgY29uc3Qgd2luZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB3aW5kTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kTGFiZWwuaW5uZXJIVE1MID0gJ1dpbmQ6JztcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZC5pbm5lckhUTUwgPSB3ZWF0aGVyLndpbmQ7XG4gICAgICAgICAgICAgICAgICAgIG1ldHJpYyA/IHdpbmQuaW5uZXJIVE1MICs9ICdrcGgnIDogd2luZC5pbm5lckhUTUwgKz0gJ21waCdcblxuICAgICAgICAgICAgICAgIHdpbmRSb3cuYXBwZW5kKHdpbmRMYWJlbCwgd2luZCk7XG5cblxuICAgICAgICAgICAgY29uc3Qgc3VucmlzZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdW5yaXNlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICBzdW5yaXNlTGFiZWwuaW5uZXJIVE1MID0gJ1N1bnJpc2U6J1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VucmlzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgc3VucmlzZURhdGUgPSBuZXcgRGF0ZSh3ZWF0aGVyLnN1bnJpc2UgKiAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgc3VucmlzZS5pbm5lckhUTUwgPSBzdW5yaXNlRGF0ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogdHJ1ZSB9KTtcblxuICAgICAgICAgICAgICAgIHN1bnJpc2VSb3cuYXBwZW5kKHN1bnJpc2VMYWJlbCwgc3VucmlzZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN1bnNldFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdW5zZXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICAgICAgICAgIHN1bnNldExhYmVsLmlubmVySFRNTCA9ICdTdW5zZXQ6J1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Vuc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdW5zZXREYXRlID0gbmV3IERhdGUod2VhdGhlci5zdW5zZXQgKiAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgc3Vuc2V0LmlubmVySFRNTCA9IHN1bnNldERhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IHRydWUgfSk7XG5cbiAgICAgICAgICAgICAgICBzdW5zZXRSb3cuYXBwZW5kKHN1bnNldExhYmVsLCBzdW5zZXQpO1xuXG4gICAgICAgICAgICBkYXRhVGFibGUuYXBwZW5kKGhpUm93LCBsb1JvdywgZmVlbHNSb3csIGh1bWlkaXR5Um93LCB3aW5kUm93LCBzdW5yaXNlUm93LCBzdW5zZXRSb3cpO1xuXG4gICAgICAgIHdlYXRoZXJEaXNwbGF5LmFwcGVuZChoZWFkZXIsIGRlc2NyaXB0aW9uLCBtYWluVGVtcCwgZGF0YVRhYmxlKTtcblxuICAgIGJvZHkuYXBwZW5kKHdlYXRoZXJEaXNwbGF5KTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBsb2dXZWF0aGVyKGlucHV0KSB7XG4gICAgbGV0IHdlYXRoZXIgPSBhd2FpdCBmZXRjaFdlYXRoZXIoaW5wdXQpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXIpO1xufVxuXG5leHBvcnQge1xuICAgIGxvYWRVSVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtwYXJzZUxvY2F0aW9uLCBmZXRjaFdlYXRoZXJ9IGZyb20gJy4vYXBpLmpzJztcbmltcG9ydCB7bG9hZFVJfSBmcm9tICcuL3VpLmpzJ1xuXG4vL1RFU1RJTkdcblxuY29uc29sZS5sb2coJ21pYyBjaGVjaycpO1xuXG4vKlxuXG4gIChhc3luYyAoKSA9PiB7XG4gICAgbGV0IHdlYXRoZXIgPSBhd2FpdCBmZXRjaFdlYXRoZXIoJ05ldytZb3JrJyk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlcik7XG4gIH0pKClcblxuKi8gXG5cbi8vVEVTVElOR1xuXG5sb2FkVUkoKTtcblxud2luZG93LmZldGNoV2VhdGhlciA9IGZldGNoV2VhdGhlcjtcbndpbmRvdy5wYXJzZUxvY2F0aW9uID0gcGFyc2VMb2NhdGlvbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==