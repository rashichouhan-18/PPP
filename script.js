function getWeather() {
    const locationInput = document.getElementById('locationInput').value;
    const weatherInfo = document.getElementById('weatherInfo');
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=86df7c6aa099f0257ca9f3169036cd36&units=metric`)
      .then(response => response.json())
      .then(data => {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const cityName = data.name;
  
        weatherInfo.innerHTML = `
          <h2>${cityName}</h2>
          <p>Temperature: ${temperature}°C</p>
          <p>Weather: ${description}</p>
        `;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = 'Error fetching weather data. Please try again.';
      });
  }
  