import React from 'react';
import '../styles/WeatherDisplay.css';

const WeatherDisplay = (props) => {

	//todo: add option to switch c/f
	//todo: display lat, long, humidity
	//todo: add vectors graphics for background

	return (
		<div className="weather-display">
			<div className='weather-display-container'>
				<div className='weather-display-city'>{props.city}</div>
				<div className="weather-display-coords">
					<span className="weather-display-lat">
					Lat: {props.lat}
					</span>
					&nbsp;&nbsp;|&nbsp;&nbsp;
					<span className="weather-display-lon">
					Long: {props.lon}
					</span>
				</div>
				<div className="weather-display-temp">
					<span className='weather-display-c'>
					{props.temp}
					</span>
					<span className='weather-display-f temp-hidden'>
					{props.tempF}
					</span>
                </div>
                <div className='weather-display-unit'>
					<span className="weather-display-c-toggle selected-temp" id="temp-c" onClick={props.onClick}>
					&#8451; 
					</span>
					&nbsp;|&nbsp;
					<span className="weather-display-f-toggle" id="temp-f" onClick={props.onClick}>
					&#8457; 
					</span>	
				</div>
			</div>
		</div>
	);
}

export default WeatherDisplay;