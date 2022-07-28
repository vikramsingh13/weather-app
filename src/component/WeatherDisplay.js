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
			temp_f: null,
		};
	}

	//takes temp in C and returns temp in F
	celciusToF = c => (c * 9 / 5) + 32;

	//todo: add option to switch c/f
	//todo: display lat, long, humidity
	//todo: add vectors graphics for background

	render(){
		return (
			<div className="weather-display">
				{this.state.city} {this.celciusToF(this.state.temp)}F
			</div>
		);
	};
}

export default WeatherDisplay;