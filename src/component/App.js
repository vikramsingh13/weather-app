import React from 'react';
import DateBuilder from './DateBuilder';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';


const api = {
  key: "",
  base: "https://api.openweathermap.org/data/2.5"
}

class App extends React.Component{
  state = {
    date: DateBuilder,
    city: "Toronto",
    weatherInfo: {},
    errorMessage: ""
  };

  searchCity = (e) => {
    this.setState({city: e.target.value});
  }

  getWeatherInfo = async() => {
    const url = api.base + 
    "/weather?lat=43&lon=43&appid=" + 
    api.key;

    await fetch(url)
      .then(async response => {

        this.setState({weatherInfo: response, errorMessage: ""});
        console.log(this.state.weatherInfo);
      })
      .catch(error => {
        this.setState({weatherInfo: {}, errorMessage: error.toString()});
        console.log("An error occurrd while trying to fetch weather data: ", error);
      });

  }

  componentDidMount(){
    this.getWeatherInfo();
  }

  render(){
    return(
      <div>
        <h1>Weather App</h1>

        <SearchBar 
        city={this.state.city}
        onClick={this.searchCity} 
        />

        <DateBuilder />

        <WeatherDisplay 
        city={this.state.city}
        weatherInfo={this.state.weatherInfo}
        errorMessage={this.state.errorMessage}
        />

      </div>
    );
  }
}


export default App;
