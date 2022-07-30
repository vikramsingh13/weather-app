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

        await this.setWeatherDetails(response);

    }

    //takes celcius and returns f
    celciusToF = c => (c * 9 / 5) + 32;

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
        const weatherDisplayC = document.querySelector(".weather-display-c").classList;
        const weatherDisplayF = document.querySelector(".weather-display-f").classList;
        if(temp){
            weatherDisplayC.remove("temp-hidden");
            weatherDisplayF.add("temp-hidden");
        } else {
            weatherDisplayF.remove("temp-hidden");
            weatherDisplayC.add("temp-hidden");
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

    setWeatherDetails = async(response) => {
        const tempF = await this.celciusToF(response.data.main.temp).toFixed(2);
        this.setState({
            temp: response.data.main.temp,
            tempF: tempF,
            humidity: response.data.main.humidity,
            feelsLike: response.data.main.humidity,
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
                        lat={this.state.lat}
                        lon={this.state.lon}
                        tempDisplayC={this.state.tempDisplayC}
                        toggleTempDisplay={this.toggleTempDisplay}
                        onClick={this.onClick}
                    
                    />

                </div>{/*--app container ends--*/}
            </div> /*--app ends--*/            
        );
    }
}


export default App;
