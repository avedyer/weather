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

    let name = data.name;
    let main = data.weather[0].description;
    let humidity = data.main.humidity;
    let sunrise = data.sys.sunrise;
    let sunset = data.sys.sunset;
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
    
    
    return new Weather(name, main, temp, min, max, feels, humidity, wind, sunrise, sunset);
}

function Weather(name, main, temp, min, max, feels, humidity, wind, sunrise, sunset) {
    this.name = name;
    this.main = main;
    this.temp = temp;
    this.min = min;
    this.max = max;
    this.feels = feels;
    this.humidity = humidity;
    this.wind = wind;
    this.sunrise = sunrise;
    this.sunset = sunset;
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

        const name = document.createElement('h1');
            name.classList.add('name');
            name.innerHTML = weather.name

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

                sunsetRow.append(sunriseLabel, sunrise);

            dataTable.append(hiRow, loRow, feelsRow, humidityRow, windRow, sunriseRow, sunsetRow);

        weatherDisplay.append(name, description, mainTemp, dataTable);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGtFQUFrRSxTQUFTLFNBQVMsSUFBSTtBQUN4Rix1Q0FBdUMsYUFBYTtBQUNwRDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Rm1GOztBQUVuRjtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esd0JBQXdCLHFEQUFZOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkNBQU07O0FBRTFCOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4RUFBOEUsa0RBQWtEOztBQUVoSTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0RUFBNEUsa0RBQWtEOztBQUU5SDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBLHdCQUF3QixxREFBWTtBQUNwQztBQUNBOzs7Ozs7OztVQ3pLQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xRDtBQUN2Qjs7QUFFOUI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQSw4Q0FBTTs7QUFFTixzQkFBc0IsaURBQVk7QUFDbEMsdUJBQXVCLGtEQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBrZXkgPSAnZWY1MTI3YzJkMmYxNGZlODM0NDYzMDAzZmIyNmNhOTMnO1xubGV0IG1ldHJpYyA9IHRydWU7XG5cblxuZnVuY3Rpb24gcGFyc2VMb2NhdGlvbiAoaW5wdXQpIHtcbiAgICAvL1RPRE8gcGFyc2UgZm9ybSBpbnB1dCBpbnRvIGZvcm1hdCB1c2VhYmxlIGZvciBBUElcbiAgICBsZXQgbG9jYXRpb24gPSBpbnB1dC50cmltKCk7XG4gICAgbG9jYXRpb24gPSBpbnB1dC5yZXBsYWNlKCcgJywgJysnKVxuXG4gICAgbGV0IGZpcnN0Rml2ZSA9IGxvY2F0aW9uLnN1YnN0cmluZygwLCA1KTtcbiAgICAgaWYgKC9eXFxkKyQvLnRlc3QoZmlyc3RGaXZlKSkge1xuICAgICAgICAgcmV0dXJuICd6aXA9JyArIGZpcnN0Rml2ZSAgICAgICAgICAgICAgIC8vemlwIGNvZGUgcmV0dXJuXG4gICAgfVxuXG4gICAgcmV0dXJuICdxPScgKyBsb2NhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9ybWF0dGVkIHN0cmluZyByZXR1cm5cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKGlucHV0KSB7XG4gICAgLy9UT0RPIHJldHVybiBjdXJyZW50IGRhdGFcblxuICAgIGxldCBsb2NhdGlvbiA9IHBhcnNlTG9jYXRpb24oaW5wdXQpO1xuXG4gICAgY29uc3QgdXJsID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/JHtsb2NhdGlvbn0mYXBwaWQ9JHtrZXl9YFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGVEYXRhKGRhdGEpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVEYXRhKGRhdGEpIHtcblxuICAgIGxldCBuYW1lID0gZGF0YS5uYW1lO1xuICAgIGxldCBtYWluID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIGxldCBodW1pZGl0eSA9IGRhdGEubWFpbi5odW1pZGl0eTtcbiAgICBsZXQgc3VucmlzZSA9IGRhdGEuc3lzLnN1bnJpc2U7XG4gICAgbGV0IHN1bnNldCA9IGRhdGEuc3lzLnN1bnNldDtcbiAgICBsZXQgdGVtcCwgbWluLCBtYXgsIGZlZWxzLCB3aW5kO1xuXG4gICAgaWYgKG1ldHJpYykge1xuICAgICAgICB0ZW1wID0gY1RlbXAoZGF0YS5tYWluLnRlbXApO1xuICAgICAgICBtaW4gPSBjVGVtcChkYXRhLm1haW4udGVtcF9taW4pO1xuICAgICAgICBtYXggPSBjVGVtcChkYXRhLm1haW4udGVtcF9tYXgpO1xuICAgICAgICBmZWVscyA9IGNUZW1wKGRhdGEubWFpbi5mZWVsc19saWtlKVxuICAgICAgICB3aW5kID0gdG9LcGgoZGF0YS53aW5kLnNwZWVkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRlbXAgPSBmVGVtcChkYXRhLm1haW4udGVtcCk7XG4gICAgICAgIG1pbiA9IGZUZW1wKGRhdGEubWFpbi50ZW1wX21pbik7XG4gICAgICAgIG1heCA9IGZUZW1wKGRhdGEubWFpbi50ZW1wX21heCk7XG4gICAgICAgIGZlZWxzID0gZlRlbXAoZGF0YS5tYWluLmZlZWxzX2xpa2UpXG4gICAgICAgIHdpbmQgPSB0b01waChkYXRhLndpbmQuc3BlZWQpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICByZXR1cm4gbmV3IFdlYXRoZXIobmFtZSwgbWFpbiwgdGVtcCwgbWluLCBtYXgsIGZlZWxzLCBodW1pZGl0eSwgd2luZCwgc3VucmlzZSwgc3Vuc2V0KTtcbn1cblxuZnVuY3Rpb24gV2VhdGhlcihuYW1lLCBtYWluLCB0ZW1wLCBtaW4sIG1heCwgZmVlbHMsIGh1bWlkaXR5LCB3aW5kLCBzdW5yaXNlLCBzdW5zZXQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgdGhpcy50ZW1wID0gdGVtcDtcbiAgICB0aGlzLm1pbiA9IG1pbjtcbiAgICB0aGlzLm1heCA9IG1heDtcbiAgICB0aGlzLmZlZWxzID0gZmVlbHM7XG4gICAgdGhpcy5odW1pZGl0eSA9IGh1bWlkaXR5O1xuICAgIHRoaXMud2luZCA9IHdpbmQ7XG4gICAgdGhpcy5zdW5yaXNlID0gc3VucmlzZTtcbiAgICB0aGlzLnN1bnNldCA9IHN1bnNldDtcbn1cblxuZnVuY3Rpb24gZlRlbXAoa1RlbXApIHtcbiAgICBsZXQgZlRlbXAgPSA5IC8gNSAqIChrVGVtcCAtIDI3MykgKyAzMiBcbiAgICByZXR1cm4gTWF0aC5yb3VuZChmVGVtcCk7XG59XG5cbmZ1bmN0aW9uIGNUZW1wKGtUZW1wKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoa1RlbXAgLSAyNzMuMTUpO1xufVxuXG5mdW5jdGlvbiB0b01waChzcGVlZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHNwZWVkICogMi4yMzY5MzYpO1xufVxuXG5mdW5jdGlvbiB0b0twaChzcGVlZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHNwZWVkICogMy42KVxufVxuXG5mdW5jdGlvbiB0b2dnbGVVbml0cygpIHtcbiAgICBtZXRyaWMgPSAhbWV0cmljXG59XG5cbmV4cG9ydCB7XG4gICAgcGFyc2VMb2NhdGlvbixcbiAgICB0cmFuc2xhdGVEYXRhLFxuICAgIGZldGNoV2VhdGhlcixcbiAgICB0b2dnbGVVbml0cyxcbiAgICBtZXRyaWMsXG4gICAgV2VhdGhlclxufTsiLCJpbXBvcnQge21ldHJpYywgcGFyc2VMb2NhdGlvbiwgZmV0Y2hXZWF0aGVyLCB0b2dnbGVVbml0cywgV2VhdGhlcn0gZnJvbSAnLi9hcGkuanMnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xubGV0IGluaXRpYWxMb2NhdGlvbnMgPSBbJ0xvcyBBbmdlbGVzJywgJ1Rva3lvJywgJ1N5ZG5leScsICdNb3Njb3cnLCAnQmFyY2Vsb25hJywgJ05ldyBEZWxoaScsICdCZWlqaW5nJywgJ0pvaGFubmVzYnVyZycsICdDYWlybycsICdUZWhyYW4nLCAnQnVlbm9zIEFpcmVzJywgJ0hhdmFuYScsICdOZXcgWW9yaycsICdEYWxsYXMnXTtcblxubGV0IGN1cnJMb2NhdGlvbiA9IGluaXRpYWxMb2NhdGlvbnNbKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGluaXRpYWxMb2NhdGlvbnMubGVuZ3RoKSldO1xuXG5cbmZ1bmN0aW9uIGxvYWRVSSAoKSB7XG4gICAgY29uc3QgbG9jYXRpb25Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHNlYXJjaGJhci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuXG4gICAgICAgIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgc2VhcmNoQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgICAgIHNlYXJjaEJ0bi5pbm5lckhUTUwgPSAnU2VhcmNoJztcblxuICAgICAgICBzZWFyY2hCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGN1cnJMb2NhdGlvbiA9IHNlYXJjaGJhci52YWx1ZTtcbiAgICAgICAgICAgIGRpc3BsYXlXZWF0aGVyKGN1cnJMb2NhdGlvbik7XG4gICAgICAgIH07XG4gICAgICAgIHNlYXJjaGJhci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICBjdXJyTG9jYXRpb24gPSBzZWFyY2hiYXIudmFsdWU7XG4gICAgICAgICAgICAgICAgZGlzcGxheVdlYXRoZXIoY3VyckxvY2F0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbG9jYXRpb25Gb3JtLmFwcGVuZChzZWFyY2hiYXIsIHNlYXJjaEJ0bik7XG4gICAgXG4gICAgY29uc3QgdW5pdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB1bml0U3dpdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIHVuaXRTd2l0Y2guaWQgPSAndW5pdFN3aXRjaCc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHVuaXRDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgdW5pdENoZWNrLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICAgICAgICAgIHVuaXRDaGVjay5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVVbml0cygpO1xuICAgICAgICAgICAgICAgICAgICB1bml0TGFiZWwuaW5uZXJIVE1MID09PSAnTWV0cmljJyA/IHVuaXRMYWJlbC5pbm5lckhUTUwgPSAnSW1wZXJpYWwnIDogdW5pdExhYmVsLmlubmVySFRNTCA9ICdNZXRyaWMnO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5V2VhdGhlcihjdXJyTG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHVuaXRTd2l0Y2guYXBwZW5kKFxuICAgICAgICAgICAgICAgIHVuaXRDaGVjayxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB1bml0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgdW5pdExhYmVsLmlubmVySFRNTCA9ICdNZXRyaWMnO1xuXG4gICAgICAgIHVuaXRDb250YWluZXIuYXBwZW5kKHVuaXRTd2l0Y2gsIHVuaXRMYWJlbCk7XG5cblxuICAgIGJvZHkuYXBwZW5kKGxvY2F0aW9uRm9ybSwgdW5pdENvbnRhaW5lcik7XG4gICAgXG4gICAgZGlzcGxheVdlYXRoZXIoY3VyckxvY2F0aW9uKTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5V2VhdGhlciAoaW5wdXQpIHtcbiAgICBcbiAgICBsZXQgd2VhdGhlciA9IGF3YWl0IGZldGNoV2VhdGhlcihpbnB1dClcblxuICAgIGxldCBvbGRXZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXInKTtcblxuICAgIGlmIChvbGRXZWF0aGVyKSB7XG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQob2xkV2VhdGhlcik7XG4gICAgfVxuXG4gICAgY29uc3Qgd2VhdGhlckRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd2VhdGhlckRpc3BsYXkuaWQgPSAnd2VhdGhlcidcblxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICAgICAgICAgICAgbmFtZS5pbm5lckhUTUwgPSB3ZWF0aGVyLm5hbWVcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gd2VhdGhlci5tYWluO1xuXG4gICAgICAgIGNvbnN0IG1haW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIG1haW5UZW1wLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKTtcbiAgICAgICAgICAgIG1haW5UZW1wLmlubmVySFRNTCA9IHdlYXRoZXIudGVtcCArICfCsCc7XG5cbiAgICAgICAgY29uc3QgZGF0YVRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcblxuICAgICAgICAgICAgY29uc3QgaGlSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGhpTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICBoaUxhYmVsLmlubmVySFRNTCA9ICdIaWdoOic7XG4gICAgICAgICAgICAgICAgY29uc3QgaGlUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgICAgICAgICAgaGlUZW1wLmlubmVySFRNTCA9IHdlYXRoZXIubWF4ICsgJ8KwJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBoaVJvdy5hcHBlbmQoaGlMYWJlbCwgaGlUZW1wKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbG9Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGxvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICBsb0xhYmVsLmlubmVySFRNTCA9ICdMb3c6JztcbiAgICAgICAgICAgICAgICBjb25zdCBsb1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICBsb1RlbXAuaW5uZXJIVE1MID0gd2VhdGhlci5taW4gKyAnwrAnO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxvUm93LmFwcGVuZChsb0xhYmVsLCBsb1RlbXApO1xuXG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZmVlbHNSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGZlZWxzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICBmZWVsc0xhYmVsLmlubmVySFRNTCA9ICdGZWVscyBMaWtlOic7XG4gICAgICAgICAgICAgICAgY29uc3QgZmVlbHNUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgICAgICAgICAgZmVlbHNUZW1wLmlubmVySFRNTCA9IHdlYXRoZXIuZmVlbHMgKyAnwrAnO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZlZWxzUm93LmFwcGVuZChmZWVsc0xhYmVsLCBmZWVsc1RlbXApO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IGh1bWlkaXR5Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGh1bWlkaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICBodW1pZGl0eUxhYmVsLmlubmVySFRNTCA9ICdIdW1pZGl0eTonO1xuICAgICAgICAgICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgICAgICAgICAgaHVtaWRpdHkuaW5uZXJIVE1MID0gd2VhdGhlci5odW1pZGl0eTtcblxuICAgICAgICAgICAgICAgIGh1bWlkaXR5Um93LmFwcGVuZChodW1pZGl0eUxhYmVsLCBodW1pZGl0eSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHdpbmRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2luZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZExhYmVsLmlubmVySFRNTCA9ICdXaW5kOic7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmQuaW5uZXJIVE1MID0gd2VhdGhlci53aW5kO1xuICAgICAgICAgICAgICAgICAgICBtZXRyaWMgPyB3aW5kLmlubmVySFRNTCArPSAna3BoJyA6IHdpbmQuaW5uZXJIVE1MICs9ICdtcGgnXG5cbiAgICAgICAgICAgICAgICB3aW5kUm93LmFwcGVuZCh3aW5kTGFiZWwsIHdpbmQpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHN1bnJpc2VSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VucmlzZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgICAgICAgICAgc3VucmlzZUxhYmVsLmlubmVySFRNTCA9ICdTdW5yaXNlOidcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN1bnJpc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN1bnJpc2VEYXRlID0gbmV3IERhdGUod2VhdGhlci5zdW5yaXNlICogMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIHN1bnJpc2UuaW5uZXJIVE1MID0gc3VucmlzZURhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IHRydWUgfSk7XG5cbiAgICAgICAgICAgICAgICBzdW5yaXNlUm93LmFwcGVuZChzdW5yaXNlTGFiZWwsIHN1bnJpc2UpO1xuXG4gICAgICAgICAgICBjb25zdCBzdW5zZXRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Vuc2V0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICBzdW5zZXRMYWJlbC5pbm5lckhUTUwgPSAnU3Vuc2V0OidcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN1bnNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgc3Vuc2V0RGF0ZSA9IG5ldyBEYXRlKHdlYXRoZXIuc3Vuc2V0ICogMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIHN1bnNldC5pbm5lckhUTUwgPSBzdW5zZXREYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH0pO1xuXG4gICAgICAgICAgICAgICAgc3Vuc2V0Um93LmFwcGVuZChzdW5yaXNlTGFiZWwsIHN1bnJpc2UpO1xuXG4gICAgICAgICAgICBkYXRhVGFibGUuYXBwZW5kKGhpUm93LCBsb1JvdywgZmVlbHNSb3csIGh1bWlkaXR5Um93LCB3aW5kUm93LCBzdW5yaXNlUm93LCBzdW5zZXRSb3cpO1xuXG4gICAgICAgIHdlYXRoZXJEaXNwbGF5LmFwcGVuZChuYW1lLCBkZXNjcmlwdGlvbiwgbWFpblRlbXAsIGRhdGFUYWJsZSk7XG5cbiAgICBib2R5LmFwcGVuZCh3ZWF0aGVyRGlzcGxheSk7XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gbG9nV2VhdGhlcihpbnB1dCkge1xuICAgIGxldCB3ZWF0aGVyID0gYXdhaXQgZmV0Y2hXZWF0aGVyKGlucHV0KTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbn1cblxuZXhwb3J0IHtcbiAgICBsb2FkVUlcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7cGFyc2VMb2NhdGlvbiwgZmV0Y2hXZWF0aGVyfSBmcm9tICcuL2FwaS5qcyc7XG5pbXBvcnQge2xvYWRVSX0gZnJvbSAnLi91aS5qcydcblxuLy9URVNUSU5HXG5cbmNvbnNvbGUubG9nKCdtaWMgY2hlY2snKTtcblxuLypcblxuICAoYXN5bmMgKCkgPT4ge1xuICAgIGxldCB3ZWF0aGVyID0gYXdhaXQgZmV0Y2hXZWF0aGVyKCdOZXcrWW9yaycpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXIpO1xuICB9KSgpXG5cbiovIFxuXG4vL1RFU1RJTkdcblxubG9hZFVJKCk7XG5cbndpbmRvdy5mZXRjaFdlYXRoZXIgPSBmZXRjaFdlYXRoZXI7XG53aW5kb3cucGFyc2VMb2NhdGlvbiA9IHBhcnNlTG9jYXRpb247XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=