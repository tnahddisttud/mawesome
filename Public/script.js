const buttonSumbit = document.querySelector('.btn-submit');
buttonSumbit.addEventListener('click', () => {
  const input = document.querySelector('[data-city]');
  city = input.value;
  fetch('/weather', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      city: city,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      setWeatherData(data);
    });
});

const locationElement = document.querySelector('[data-location]');
const statusElement = document.querySelector('[data-status]');
const temperatureElement = document.querySelector('[data-temperature]');
const feelslikeElement = document.querySelector('[data-feelslike]');
const windElement = document.querySelector('[data-wind]');
const icon = document.querySelector('.icon');

function setWeatherData(data, place) {
  locationElement.textContent = data.name;
  statusElement.textContent = data.weather[0].main;
  temperatureElement.textContent = data.main.temp;
  feelslikeElement.textContent = data.main.feels_like;
  windElement.textContent = data.wind.speed;
  idIcon = data.weather[0].icon;
  const imgSrc = `http://openweathermap.org/img/wn/${idIcon}@2x.png`;
  icon.innerHTML = `<img src="${imgSrc}">`;
}
