// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let input1 = document.querySelector('.input1');

let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
btn.addEventListener('click', () => {
    h1.innerHTML = '';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input1.value}&appid=d41bd08dfe921b7e09a9ab6f38787cf8`)

        .then((res) => res.json())
        .then((weather)=> h1.innerHTML=(weather.weather[0].description))
})
