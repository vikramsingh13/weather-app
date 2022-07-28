import axios from 'axios';


const KEY = "675e319b3159992cf3a14c96cbab50c9";


export default axios.create({
	baseURL: "https://api.openweathermap.org/data/2.5",
	params: {
		appid: KEY,
		units: 'metric',
	}


});