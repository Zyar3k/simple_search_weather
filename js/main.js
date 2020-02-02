'use strict';

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&APPID=183d4af22c5b654ede3953c40f485cdf';
const units = '&units=metric';

// let city;
let city = 'St. Ives';
let url;

const getWeather = () => {
  url = apiLink + city + apiKey + units;

  axios.get(url)
  .then(res => {

    const data = res.data;
    console.log(data);
    /*
    temp
    main
    humidity
    city name
    feels like
    pressure
    daytime
    sunrise
    sunset
    timezone
    country
    wind
    clouds


    */
  });
}


getWeather();