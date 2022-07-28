import React from 'react';
import DateBuilder from './DateBuilder';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import OpenWeather from '../apis/OpenWeather';


class App extends React.Component{
  state = {
    date: DateBuilder,
    errorMessage: "",
    city: "Toronto",
    temp: 0,
    tempF: 0,
    humidity: 0,
    feelsLike: 0,
    lat: 43,
    lon: 43,

  };

  onChange = (e) => {
    this.setState({city: e.target.value});
  }

  onSubmit = async() => {
    const response = await OpenWeather.get('/weather',{
      params: {
        q: this.state.city,
      }
    });

    await this.setWeatherDetails(response);

  }

  //takes celcius and returns f
  celciusToF = c => (c * 9 / 5) + 32;

  setWeatherDetails = async(response) => {
    const tempF = await this.celciusToF(response.data.main.temp);
    this.setState({
      temp: response.data.main.temp,
      tempF: tempF,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.humidity,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      city: response.data.name,
    });
  }

  componentDidMount(){
    //this.onSubmit();
  }

  render(){
    return(
      <div>
        <h1>Weather App</h1>

        <SearchBar 
          city={this.state.city}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        />

        <DateBuilder />

        <WeatherDisplay 
          city={this.state.city}
          temp={this.state.temp}
          tempF={this.state.tempF}
          humidity={this.state.humidity}
          feelsLike={this.state.feelsLike}
          lat={this.state.lat}
          lon={this.state.lon}
        />

      </div>
    );
  }
}


export default App;
