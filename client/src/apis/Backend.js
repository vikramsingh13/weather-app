import axios from 'axios';


export default axios.create({
	baseURL: "https://weather-app.vikramsingh.tech:5000",
});


/*
export default axios.create({
	baseURL: "http://localhost:5000",
});
*/