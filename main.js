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
    
    
    return new Weather(name, main, temp, min, max, feels, humidity, wind);
}

function Weather(name, main, temp, min, max, feels, humidity, wind) {
    this.name = name;
    this.main = main;
    this.temp = temp;
    this.min = min;
    this.max = max;
    this.feels = feels;
    this.humidity = humidity;
    this.wind = wind;
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
            _api_js__WEBPACK_IMPORTED_MODULE_0__.metric ? wind.innerHTML += 'kph' : wind.innerHTML += 'mph'

        weatherDisplay.append(name, description, mainTemp, feelsTemp, tempRangeContainer, humidity, wind);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGtFQUFrRSxTQUFTLFNBQVMsSUFBSTtBQUN4Rix1Q0FBdUMsYUFBYTtBQUNwRDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZtRjs7QUFFbkY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHdCQUF3QixxREFBWTs7QUFFcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkNBQU07O0FBRWxCOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0Esd0JBQXdCLHFEQUFZO0FBQ3BDO0FBQ0E7Ozs7Ozs7O1VDOUdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFEO0FBQ3ZCOztBQUU5Qjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBLDhDQUFNOztBQUVOLHNCQUFzQixpREFBWTtBQUNsQyx1QkFBdUIsa0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGtleSA9ICdlZjUxMjdjMmQyZjE0ZmU4MzQ0NjMwMDNmYjI2Y2E5Myc7XG5sZXQgbWV0cmljID0gdHJ1ZTtcblxuXG5mdW5jdGlvbiBwYXJzZUxvY2F0aW9uIChpbnB1dCkge1xuICAgIC8vVE9ETyBwYXJzZSBmb3JtIGlucHV0IGludG8gZm9ybWF0IHVzZWFibGUgZm9yIEFQSVxuICAgIGxldCBsb2NhdGlvbiA9IGlucHV0LnRyaW0oKTtcbiAgICBsb2NhdGlvbiA9IGlucHV0LnJlcGxhY2UoJyAnLCAnKycpXG5cbiAgICBsZXQgZmlyc3RGaXZlID0gbG9jYXRpb24uc3Vic3RyaW5nKDAsIDUpO1xuICAgICBpZiAoL15cXGQrJC8udGVzdChmaXJzdEZpdmUpKSB7XG4gICAgICAgICByZXR1cm4gJ3ppcD0nICsgZmlyc3RGaXZlICAgICAgICAgICAgICAgLy96aXAgY29kZSByZXR1cm5cbiAgICB9XG5cbiAgICByZXR1cm4gJ3E9JyArIGxvY2F0aW9uICAgICAgICAgICAgICAgICAgICAgICAgLy9mb3JtYXR0ZWQgc3RyaW5nIHJldHVyblxufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXIoaW5wdXQpIHtcbiAgICAvL1RPRE8gcmV0dXJuIGN1cnJlbnQgZGF0YVxuXG4gICAgbGV0IGxvY2F0aW9uID0gcGFyc2VMb2NhdGlvbihpbnB1dCk7XG5cbiAgICBjb25zdCB1cmwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj8ke2xvY2F0aW9ufSZhcHBpZD0ke2tleX1gXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0ZURhdGEoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZURhdGEoZGF0YSkge1xuXG4gICAgbGV0IG5hbWUgPSBkYXRhLm5hbWU7XG4gICAgbGV0IG1haW4gPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgbGV0IGh1bWlkaXR5ID0gZGF0YS5tYWluLmh1bWlkaXR5O1xuICAgIGxldCB0ZW1wLCBtaW4sIG1heCwgZmVlbHMsIHdpbmQ7XG5cbiAgICBpZiAobWV0cmljKSB7XG4gICAgICAgIHRlbXAgPSBjVGVtcChkYXRhLm1haW4udGVtcCk7XG4gICAgICAgIG1pbiA9IGNUZW1wKGRhdGEubWFpbi50ZW1wX21pbik7XG4gICAgICAgIG1heCA9IGNUZW1wKGRhdGEubWFpbi50ZW1wX21heCk7XG4gICAgICAgIGZlZWxzID0gY1RlbXAoZGF0YS5tYWluLmZlZWxzX2xpa2UpXG4gICAgICAgIHdpbmQgPSB0b0twaChkYXRhLndpbmQuc3BlZWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGVtcCA9IGZUZW1wKGRhdGEubWFpbi50ZW1wKTtcbiAgICAgICAgbWluID0gZlRlbXAoZGF0YS5tYWluLnRlbXBfbWluKTtcbiAgICAgICAgbWF4ID0gZlRlbXAoZGF0YS5tYWluLnRlbXBfbWF4KTtcbiAgICAgICAgZmVlbHMgPSBmVGVtcChkYXRhLm1haW4uZmVlbHNfbGlrZSlcbiAgICAgICAgd2luZCA9IHRvTXBoKGRhdGEud2luZC5zcGVlZCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHJldHVybiBuZXcgV2VhdGhlcihuYW1lLCBtYWluLCB0ZW1wLCBtaW4sIG1heCwgZmVlbHMsIGh1bWlkaXR5LCB3aW5kKTtcbn1cblxuZnVuY3Rpb24gV2VhdGhlcihuYW1lLCBtYWluLCB0ZW1wLCBtaW4sIG1heCwgZmVlbHMsIGh1bWlkaXR5LCB3aW5kKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgIHRoaXMudGVtcCA9IHRlbXA7XG4gICAgdGhpcy5taW4gPSBtaW47XG4gICAgdGhpcy5tYXggPSBtYXg7XG4gICAgdGhpcy5mZWVscyA9IGZlZWxzO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgICB0aGlzLndpbmQgPSB3aW5kO1xufVxuXG5mdW5jdGlvbiBmVGVtcChrVGVtcCkge1xuICAgIGxldCBmVGVtcCA9IDkgLyA1ICogKGtUZW1wIC0gMjczKSArIDMyIFxuICAgIHJldHVybiBNYXRoLnJvdW5kKGZUZW1wKTtcbn1cblxuZnVuY3Rpb24gY1RlbXAoa1RlbXApIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChrVGVtcCAtIDI3My4xNSk7XG59XG5cbmZ1bmN0aW9uIHRvTXBoKHNwZWVkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoc3BlZWQgKiAyLjIzNjkzNik7XG59XG5cbmZ1bmN0aW9uIHRvS3BoKHNwZWVkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoc3BlZWQgKiAzLjYpXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVVuaXRzKCkge1xuICAgIG1ldHJpYyA9ICFtZXRyaWNcbn1cblxuZXhwb3J0IHtcbiAgICBwYXJzZUxvY2F0aW9uLFxuICAgIHRyYW5zbGF0ZURhdGEsXG4gICAgZmV0Y2hXZWF0aGVyLFxuICAgIHRvZ2dsZVVuaXRzLFxuICAgIG1ldHJpYyxcbiAgICBXZWF0aGVyXG59OyIsImltcG9ydCB7bWV0cmljLCBwYXJzZUxvY2F0aW9uLCBmZXRjaFdlYXRoZXIsIHRvZ2dsZVVuaXRzLCBXZWF0aGVyfSBmcm9tICcuL2FwaS5qcyc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5sZXQgY3VyckxvY2F0aW9uID0gJ0xvcyBBbmdlbGVzJztcblxuZnVuY3Rpb24gbG9hZFVJICgpIHtcbiAgICBjb25zdCBsb2NhdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBzZWFyY2hiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgc2VhcmNoYmFyLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBzZWFyY2hCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICAgICAgc2VhcmNoQnRuLmlubmVySFRNTCA9ICdTZWFyY2gnO1xuXG4gICAgICAgIHNlYXJjaEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY3VyckxvY2F0aW9uID0gc2VhcmNoYmFyLnZhbHVlO1xuICAgICAgICAgICAgZGlzcGxheVdlYXRoZXIoY3VyckxvY2F0aW9uKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2VhcmNoYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgIGN1cnJMb2NhdGlvbiA9IHNlYXJjaGJhci52YWx1ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5V2VhdGhlcihjdXJyTG9jYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsb2NhdGlvbkZvcm0uYXBwZW5kKHNlYXJjaGJhciwgc2VhcmNoQnRuKTtcbiAgICBcbiAgICBjb25zdCB1bml0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHVuaXRTd2l0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgdW5pdFN3aXRjaC5pZCA9ICd1bml0U3dpdGNoJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdW5pdENoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICB1bml0Q2hlY2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICAgICAgdW5pdENoZWNrLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVVuaXRzKCk7XG4gICAgICAgICAgICAgICAgICAgIHVuaXRMYWJlbC5pbm5lckhUTUwgPT09ICdNZXRyaWMnID8gdW5pdExhYmVsLmlubmVySFRNTCA9ICdJbXBlcmlhbCcgOiB1bml0TGFiZWwuaW5uZXJIVE1MID0gJ01ldHJpYyc7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlXZWF0aGVyKGN1cnJMb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdW5pdFN3aXRjaC5hcHBlbmQoXG4gICAgICAgICAgICAgICAgdW5pdENoZWNrLFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHVuaXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICB1bml0TGFiZWwuaW5uZXJIVE1MID0gJ01ldHJpYyc7XG5cbiAgICAgICAgdW5pdENvbnRhaW5lci5hcHBlbmQodW5pdFN3aXRjaCwgdW5pdExhYmVsKTtcblxuXG4gICAgYm9keS5hcHBlbmQobG9jYXRpb25Gb3JtLCB1bml0Q29udGFpbmVyKTtcbiAgICBkaXNwbGF5V2VhdGhlcihjdXJyTG9jYXRpb24pO1xufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyIChpbnB1dCkge1xuICAgIFxuICAgIGxldCB3ZWF0aGVyID0gYXdhaXQgZmV0Y2hXZWF0aGVyKGlucHV0KVxuXG4gICAgbGV0IG9sZFdlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcicpO1xuXG4gICAgaWYgKG9sZFdlYXRoZXIpIHtcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChvbGRXZWF0aGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCB3ZWF0aGVyRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3ZWF0aGVyRGlzcGxheS5pZCA9ICd3ZWF0aGVyJ1xuXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgICAgICAgICBuYW1lLmlubmVySFRNTCA9IHdlYXRoZXIubmFtZVxuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSB3ZWF0aGVyLm1haW47XG5cbiAgICAgICAgY29uc3QgbWFpblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgbWFpblRlbXAuY2xhc3NMaXN0LmFkZCgndGVtcCcpO1xuICAgICAgICAgICAgbWFpblRlbXAuaW5uZXJIVE1MID0gd2VhdGhlci50ZW1wICsgJ8KwJztcblxuICAgICAgICBjb25zdCBmZWVsc1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuXG4gICAgICAgIGNvbnN0IHRlbXBSYW5nZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBjb25zdCBoaVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICAgICAgICAgIGhpVGVtcC5pbm5lckhUTUwgPSAnSGlnaDonICsgd2VhdGhlci5tYXggKyAnwrAnO1xuICAgICAgICAgICAgY29uc3QgbG9UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgICAgICAgICBsb1RlbXAuaW5uZXJIVE1MID0gJ0xvdzogJyArIHdlYXRoZXIubWluICsgJ8KwJztcblxuICAgICAgICAgICAgdGVtcFJhbmdlQ29udGFpbmVyLmFwcGVuZChoaVRlbXAsIGxvVGVtcCk7XG5cbiAgICAgICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICAgICAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZCgnaHVtaWRpdHknKTtcbiAgICAgICAgICAgIGh1bWlkaXR5LmlubmVySFRNTCA9ICdIdW1pZGl0eTogJyArIHdlYXRoZXIuaHVtaWRpdHkgKyAnJSc7XG5cbiAgICAgICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgICAgICB3aW5kLmNsYXNzTGlzdC5hZGQoJ3dpbmQnKTtcbiAgICAgICAgICAgIHdpbmQuaW5uZXJIVE1MID0gJ1dpbmQ6ICcgKyB3ZWF0aGVyLndpbmQ7XG4gICAgICAgICAgICBtZXRyaWMgPyB3aW5kLmlubmVySFRNTCArPSAna3BoJyA6IHdpbmQuaW5uZXJIVE1MICs9ICdtcGgnXG5cbiAgICAgICAgd2VhdGhlckRpc3BsYXkuYXBwZW5kKG5hbWUsIGRlc2NyaXB0aW9uLCBtYWluVGVtcCwgZmVlbHNUZW1wLCB0ZW1wUmFuZ2VDb250YWluZXIsIGh1bWlkaXR5LCB3aW5kKTtcblxuICAgIGJvZHkuYXBwZW5kKHdlYXRoZXJEaXNwbGF5KTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBsb2dXZWF0aGVyKGlucHV0KSB7XG4gICAgbGV0IHdlYXRoZXIgPSBhd2FpdCBmZXRjaFdlYXRoZXIoaW5wdXQpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXIpO1xufVxuXG5leHBvcnQge1xuICAgIGxvYWRVSVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtwYXJzZUxvY2F0aW9uLCBmZXRjaFdlYXRoZXJ9IGZyb20gJy4vYXBpLmpzJztcbmltcG9ydCB7bG9hZFVJfSBmcm9tICcuL3VpLmpzJ1xuXG4vL1RFU1RJTkdcblxuY29uc29sZS5sb2coJ21pYyBjaGVjaycpO1xuXG4vKlxuXG4gIChhc3luYyAoKSA9PiB7XG4gICAgbGV0IHdlYXRoZXIgPSBhd2FpdCBmZXRjaFdlYXRoZXIoJ05ldytZb3JrJyk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlcik7XG4gIH0pKClcblxuKi8gXG5cbi8vVEVTVElOR1xuXG5sb2FkVUkoKTtcblxud2luZG93LmZldGNoV2VhdGhlciA9IGZldGNoV2VhdGhlcjtcbndpbmRvdy5wYXJzZUxvY2F0aW9uID0gcGFyc2VMb2NhdGlvbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==