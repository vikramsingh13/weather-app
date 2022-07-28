import React, {Component} from 'react';

class WeatherDisplay extends Component{
	constructor(props){
		super(props);

		this.state = {
			temp: this.props.weatherInfo.temp,
			humidity: this.props.weatherInfo.humidity,
			lat: this.props.lat,
			lon: this.props.lon,
			city: this.props.city,
		};
	}

	//kelvinToCelcius

	render(){
		return (
			<div className="weather-display">
				{this.state.temp}K {this.state.city}
			</div>
		);
	};
}

export default WeatherDisplay;