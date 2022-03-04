import React from 'react';
import DateBuilder from './DateBuilder';


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
