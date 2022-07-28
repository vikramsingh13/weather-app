import React from 'react';

const WeatherDisplay = (props) => {

	//todo: add option to switch c/f
	//todo: display lat, long, humidity
	//todo: add vectors graphics for background

	return (
		<div className="weather-display">
			{props.city} {props.temp}&#8451; {props.tempF}&#8457;
		</div>
	);
}

export default WeatherDisplay;