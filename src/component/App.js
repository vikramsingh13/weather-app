import React from 'react';
import DateBuilder from './DateBuilder';


const api = {
  key: "375162a981ffc0843627408d79b41347",
  base: "https://api.openweathermap.org/data/2.5"
}

class App extends React.Component{
  state = {
    date : DateBuilder,
  };

  render(){
    return(
      <div>
        <h1>Weather App</h1>
        <DateBuilder />
      </div>
    );
  }
}


export default App;
