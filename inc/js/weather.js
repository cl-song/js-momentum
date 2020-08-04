const weather = document.querySelector('.js-weather');
let coordsObj = {};
const API_KEY = '88d4df111341279da07cd8076b40c0ff';

function loadCoords() {
    const loadedCoords = localStorage.getItem('coords');
    if(loadedCoords === null) {
        setCoords();
    } else {
        coordsObj = JSON.parse(loadedCoords);
        getWeather(coordsObj.latitude, coordsObj.longitude);
    }
}

function setCoords() {
    // navigator.geolocation.getCurrentPosition(geoSucces, geoError);
    navigator.geolocation.getCurrentPosition( function(pos) {
        const latitude = pos.coords.latitude; // 위도
        const longitude = pos.coords.longitude; // 경도
        coordsObj = {
            latitude: latitude,
            longitude: longitude
        };
        saveCoords(coordsObj);
        getWeather(latitude, longitude);
    }, function(err) {
        console.error('GPS Error!');
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem('coords', JSON.stringify(coordsObj));
}

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`
    ).then( function(response) {
        return response.json();
    }).then( function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function init() {
    loadCoords();
}
init();