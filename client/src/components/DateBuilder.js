import React from 'react';


const dateBuilder = () => {
	let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
	"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", 
	"Thursday", "Friday", "Saturday"];

	const d = new Date();

	let day = days[d.getDay()];
	let date = d.getDate();
	let month = months[d.getMonth()];
	let year = d.getFullYear();

	return (<div className='date-builder'>{day} {date} {month} {year}</div>);
}

export default dateBuilder;