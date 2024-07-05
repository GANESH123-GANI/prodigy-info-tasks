const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

function searchWeather() {
  const cityInput = document.getElementById('cityInput').value.trim();
  
  if (cityInput === '') {
    alert('Please enter a city name.');
    return;
  }

  const apiUrl = https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${apiKey};

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Log the JSON data for reference

      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} &deg;C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Description: ${data.weather[0].description}</p>
      `;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      alert('Failed to fetch weather data. Please try again later.');
    });
}