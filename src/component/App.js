import React from 'react';
import DateBuilder from './DateBuilder';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import OpenWeather from '../apis/OpenWeather';
import '../styles/App.css';


class App extends React.Component{
    state = {
        date: DateBuilder,
        errorMessage: "",
        city: "Toronto",
        temp: 20,
        tempF: 68,
        humidity: 50,
        feelsLike: 22,
        feelsLikeF: 71.6,
        lat: 43.6532,
        lon: 79.3832,
        tempDisplayC: true,

    };

    //handles on change for search bar text
    onChange = (e) => {
        this.setState({city: e.target.value});
    }

    //handles on submit for search form
    onSubmit = async() => {
        const response = await OpenWeather.get('/weather',{
            params: {
                q: this.state.city,
            }
        }).catch(err => {
            console.log(err);
        });

        this.setWeatherDetails(response);

    }

    //takes celcius and returns f
    celciusToF = c => ((c * 9 / 5) + 32).toFixed(2);

    //toggles temp info unit from c to f and vice versa
    //for weather display
    toggleTempDisplay = temp => {
        this.setState({tempDisplayC: this.state.tempDisplayC ? false : true});
    };

    //handles temp toggle for weather display
    //hides currently displaying unit and unhides the hidden unit
    //will switch from f to c if temp is true
    //c to f if temp is false
    showTempC = temp => {
        const weatherDisplayF = document.querySelector(".weather-display-f").classList;
        const weatherDisplayExtraF = document.querySelector(".weather-display-extra-f").classList;
        const tempF = document.querySelector("#temp-f").classList;
        const weatherDisplayC = document.querySelector(".weather-display-c").classList;
        const weatherDisplayExtraC = document.querySelector(".weather-display-extra-c").classList;
        const tempC = document.querySelector("#temp-c").classList;
        if(temp){
            weatherDisplayC.remove("temp-hidden");
            weatherDisplayF.add("temp-hidden");
            weatherDisplayExtraC.remove("temp-hidden");
            weatherDisplayExtraF.add("temp-hidden");
            tempF.remove('selected-temp');
            tempC.add('selected-temp');
        } else {
            weatherDisplayF.remove("temp-hidden");
            weatherDisplayC.add("temp-hidden");
            weatherDisplayExtraF.remove("temp-hidden");
            weatherDisplayExtraC.add("temp-hidden");
            tempC.remove('selected-temp');
            tempF.add('selected-temp');
        }
    }

    //handles on click for weather display temp toggle
    onClick = event => {
        if(event.target.id == "temp-c"){
            if(!this.state.tempDisplayC){
                this.toggleTempDisplay();
                this.showTempC(true);
            }
        }
        if(event.target.id == "temp-f"){
            if(this.state.tempDisplayC){
                this.toggleTempDisplay();
                this.showTempC(false);
            }
      }
    }

    setWeatherDetails = (response) => {
        const tempF = this.celciusToF(response.data.main.temp);
        const tempExtraF = this.celciusToF(response.data.main.feels_like);
        this.setState({
            temp: response.data.main.temp,
            tempF: tempF,
            humidity: response.data.main.humidity,
            feelsLike: response.data.main.feels_like,
            lat: response.data.coord.lat,
            lon: response.data.coord.lon,
            city: response.data.name,
        });
    }

    componentDidMount(){
        //this.onSubmit();
    }

    render(){
        return(
            <div className='app'>
                <div className="app-container"> 
                    <div className='app-heading'>Weather App</div>

                    <SearchBar 
                        city={this.state.city}
                        onSubmit={this.onSubmit}
                        onChange={this.onChange}
                    />

                    <DateBuilder />

                    <WeatherDisplay 
                        city={this.state.city}
                        temp={this.state.temp}
                        tempF={this.state.tempF}
                        humidity={this.state.humidity}
                        feelsLike={this.state.feelsLike}
                        feelsLikeF={this.state.feelsLikeF}
                        lat={this.state.lat}
                        lon={this.state.lon}
                        tempDisplayC={this.state.tempDisplayC}
                        toggleTempDisplay={this.toggleTempDisplay}
                        onClick={this.onClick}
                    
                    />

                    <div className='app-copyright'>

                    </div>

                </div>{/*--app container ends--*/}
            </div> /*--app ends--*/            
        );
    }
}


export default App;
