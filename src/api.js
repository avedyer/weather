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

    try {
        const response = await fetch(url, {mode: 'cors'});
        const data = await response.json();
        return translateData(data);
    }

    catch(err) {
        console.log(err);
        return false
    }
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


export {
    parseLocation,
    translateData,
    fetchWeather,
    toggleUnits,
    metric,
    Weather
};