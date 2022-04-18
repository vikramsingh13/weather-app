import React from 'react';

const WeatherDisplay = (props) => {
	
	return (
		<div className="weather-display">
			weather display for {props.city}
		</div>
	);
}

export default WeatherDisplay;