'use strict';

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&APPID=183d4af22c5b654ede3953c40f485cdf';
const units = '&units=metric';

const input = document.querySelector('input'),
      btn = document.querySelector('button'),
      image = document.querySelector('.image'),
      cityName = document.querySelector('.cityName'),
      warning = document.querySelector('.warning'),
      country = document.querySelector('.country'),
      timeZone = document.querySelector('.timeZone'),
      day = document.querySelector('.day'),
      dayTime = document.querySelector('.dayTime'),
      sunrise = document.querySelector('.sunrise'),
      sunset = document.querySelector('.sunset'),
      temperature = document.querySelector('.temp'),
      feelsLike = document.querySelector('.feelsLike'),
      main = document.querySelector('.main'),
      clouds = document.querySelector('.clouds'),
      humidity = document.querySelector('.humidity'),
      wind = document.querySelector('.wind'),
      pressure = document.querySelector('.pressure');
      // description = document.querySelector('.description');

let city;
let url;

const getWeather = () => {
  city = (!input.value) ? 'Kraków' : input.value;
  url = apiLink + city + apiKey + 
  units;

  axios.get(url)
  .then(res => {
    const data = res.data,
          name = res.data.name,
          countryRes = res.data.sys.country,
          dayTime = new Date().toLocaleDateString(),
          sunriseRes = new Date(res.data.sys.sunrise*1000).toLocaleTimeString(),
          sunsetRes = new Date(res.data.sys.sunset*1000).toLocaleTimeString(),
          tempRes = res.data.main.temp,
          feelsLikeRes = res.data.main.feels_like,
          mainStatus = Object.assign({}, ...res.data.weather),
          mainRes = mainStatus.main,
          icon = mainStatus.icon,
          // descriptionRes = mainStatus.description,
          cloudsRes = res.data.clouds.all,
          humidityRes = res.data.main.humidity  + '%',
          windRes  = res.data.wind.speed + ' km/h',
          pressureRes = res.data.main.pressure + ' hPa';

    image.setAttribute('src', 'http://openweathermap.org/img/wn/' + icon + '@2x.png');

    
    cityName.textContent = name;
    country.textContent = `(${countryRes})`;
    // description.textContent = descriptionRes;
    day.textContent = dayTime;
    sunrise.textContent = sunriseRes;
    sunset.textContent = sunsetRes;
    temperature.textContent = Math.floor(tempRes) + '°C';
    feelsLike.textContent = Math.floor(feelsLikeRes) + '°C';
    main.textContent = mainRes;
    clouds.textContent = cloudsRes + '%';
    humidity.textContent = humidityRes;
    wind.textContent = windRes;
    pressure.textContent = pressureRes;
    input.value = '';
   
  }).catch(() => warning.textContent = 'Wpisz poprawną nazwę miasta');
}
const enterCheck = () => {
  if(event.keyCode === 13) {
    getWeather();
  }
};


getWeather();
btn.addEventListener('click', getWeather);
input.addEventListener('keyup', enterCheck);