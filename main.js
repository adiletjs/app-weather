const selectedCity = document.querySelector('#city'),
      weatherName = document.querySelector('.weather-name'),
      weatherVal = document.querySelector('.weather-val'),
      weatherImg = document.querySelector('.weather-img'),
      fellsLike = document.querySelector('.fells-like'),
      pressure  = document.querySelector('.pressure'),
      wind  = document.querySelector('.wind'),
     humidity = document.querySelector('.humidity');
 function showWeather(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${selectedCity.value}&appid=faaaed719aaa40bfa02fcd18fd134a9f`)
        .then(function (arr){
            return arr.json()
        })
        .then(function (data){
            console.log(data)
            weatherName.textContent = data.weather[0]['description']
            weatherVal.innerHTML = `${Math.floor(data.main.temp-275)} &deg `
            weatherImg.innerHTML =  `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@4x.png">`;
            fellsLike.innerHTML = `${Math.floor(data.main['feels_like']-275 )} &deg `
            pressure.innerHTML = data.main['pressure']
            wind.innerHTML  = `${data.wind['deg']}  / ${data.wind['speed']}`
            humidity.innerHTML = data.main['humidity']
        })
}
showWeather()
selectedCity.addEventListener('change',showWeather)