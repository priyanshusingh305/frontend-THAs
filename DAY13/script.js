// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let input1 = document.querySelector('.input1');
let h2 = document.querySelector('h2')
let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');

document.querySelector('input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        weather();
        temp();
        wind();
        input.value = ""
   


    }
});
btn.addEventListener('click', () => {
    weather();
    temp();
    wind();
})
function temp(){
    h1.innerHTML = '';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input1.value}&appid=d41bd08dfe921b7e09a9ab6f38787cf8`)

        .then((res) => res.json())
        .then((weather) => h2.innerHTML = (Math.round(weather.main.feels_like-273.15)+"°C"))
}
function weather(){
    h1.innerHTML = '';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input1.value}&appid=d41bd08dfe921b7e09a9ab6f38787cf8`)

        .then((res) => res.json())
        .then((weather) => h1.innerHTML = (weather.weather[0].description))
}
function wind(){
    h1.innerHTML = '';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input1.value}&appid=d41bd08dfe921b7e09a9ab6f38787cf8`)

        .then((res) => res.json())
        .then((weather) => h3.innerHTML=(Math.round(weather.wind.speed*1.60934)+"Km/hr"))
}