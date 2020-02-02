'use strict';

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&APPID=183d4af22c5b654ede3953c40f485cdf';
const units = '&units=metric';

const input = document.querySelector('input');
const btn = document.querySelector('button');

const cityName = document.querySelector('.cityName');
const warning = document.querySelector('.warning');
const country = document.querySelector('.country');
const timeZone = document.querySelector('.timeZone');
const day = document.querySelector('.day');
const dayTime = document.querySelector('.dayTime');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const temperature = document.querySelector('.temp');
const feelsLike = document.querySelector('.feelsLike');
const main = document.querySelector('.main');
const clouds = document.querySelector('.clouds');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const pressure = document.querySelector('.pressure');

// let city;
let city = 'Warszawa';
let url;

const getWeather = () => {
  url = apiLink + city + apiKey + 
  units;

  

  axios.get(url)
  .then(res => {
    const data = res.data;
    const name = res.data.name;
    const countryRes = res.data.sys.country;

    // const timeZoneRes = 
    
    // const myTime = 

    const tempRes = res.data.main.temp;
    const feelsLikeRes = res.data.main.feels_like;
    const mainStatus = Object.assign({}, ...res.data.weather);
    const mainRes = mainStatus.main;
    const cloudsRes = res.data.clouds.all;
    const humidityRes = res.data.main.humidity  + '%';
    const windRes  = res.data.wind.speed + 'km/h';
    const pressureRes = res.data.main.pressure + 'hPa'


    console.log(data);
    cityName.textContent = name;
    country.textContent = countryRes;
    // timeZone.textContent = timeZoneRes;

    // dayTime.textContent = res.data.name;
    // sunrise.textContent = res.data.name;
    // sunset.textContent = res.data.name;
    temperature.textContent = Math.floor(tempRes) + '°C';
    feelsLike.textContent = Math.floor(feelsLikeRes) + '°C';
    main.textContent = mainRes;
    clouds.textContent = cloudsRes + '%';
    humidity.textContent = humidityRes;
    wind.textContent = windRes;
    pressure.textContent = pressureRes;

    
  });
}


getWeather();