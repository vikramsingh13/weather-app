import React from 'react';
import DateBuilder from './DateBuilder';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import OpenWeather from '../apis/openWeather';


class App extends React.Component{
  state = {
    date: DateBuilder,
    city: "Toronto",
    weatherInfo: {},
    errorMessage: "",
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

    console.log(response);


    await this.setState({
      weatherInfo: response.data.main,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      city: response.data.name,
    });

    console.log(this.state.city);

  }

  componentDidMount(){
    this.onSubmit();
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
        weatherInfo={this.state.weatherInfo}
        lat={this.state.lat}
        lon={this.state.lon}
        errorMessage={this.state.errorMessage}
        />

      </div>
    );
  }
}


export default App;
