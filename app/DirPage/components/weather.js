class HomeWeather extends React.Component {
    constructor(props) {
      super(props);
      this.apiKey = '0a0f812e353be6b5282109f837de0186';
    }
    //call the default display weather
    componentDidMount() {
        this.getWeatherByLocation();
      }
    //display the current weather based on User's geolocation
    //using OpenWeatherMap API
      getWeatherByLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`;
    
            fetch(apiUrl)
              .then(response => response.json())
              .then(data => {
                const weatherDiv = document.getElementById('weather-section');
                const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
                const temperatureF = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(0); // Convert Kelvin to Fahrenheit
                //display weather information
                weatherDiv.innerHTML = `
                  
                  <p id ="locationName">${data.name}</p>
                  <p id ="hometemp" > ${temperatureF}°F  <img src="${iconUrl}" alt="Weather Icon" id="weatherImage"></p>
                  <p id="weahterStatus"> ${data.weather[0].main}</p>
                  
                `;
              })
              .catch(error => {
                const weatherDiv = document.getElementById('weather-section');
                weatherDiv.innerHTML = '<p>Failed to search for weather information.</p>';
              });
          });
        } else {
          console.log('Geolocation is not supported.');
        }
      }

    //get Weather after the user input a city name
    getWeather() {
      const location = document.getElementById('location').value;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apiKey}`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        
          const weatherDiv = document.getElementById('weather-section');
          const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
          const temperatureF = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(0); // Convert Kelvin to Fahrenheit
          weatherDiv.innerHTML = `
            <p id ="locationName">${data.name}</p>
            <p id ="hometemp" >\ ${temperatureF}°F  <img src="${iconUrl}" alt="Weather Icon" id="weatherImage"></p>
            <p id="weahterStatus"> ${data.weather[0].main}</p>
            
          `;
        })
        .catch(error => {
          const weatherDiv = document.getElementById('weather-section');
          weatherDiv.innerHTML = '<p>Failed to fetch weather information.</p>';
        });
    }
  
    render() {
      return (
        <div id='weather-block'>
            <div id="weather-section"></div>
          <input type="text" id="location" placeholder="Enter location..." />
          <button onClick={() => this.getWeather()}>Search</button>
  
        
         
        </div>
      );
    }
  }