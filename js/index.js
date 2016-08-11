var city, region, country, address, weatherCode, weatherCodeCache,
    tempC = $('.temperature-celcius'),
    tempF = $('.temperature-fahrenheit'),
    buttonTemp = $('.button-temp'),
    
    buttonCitySearchGo = $('.button-city-search-go'),
    buttonCitySearch = $('.button-city-search'),
    citySearchText = $('.city-search-text-field'),
    citySearchName,
    weatherClass = ["wi wi-tornado", "wi wi-thunderstorm", "wi wi-hurricane", "wi wi-thunderstorm", "wi wi-thunderstorm", "wi wi-rain-mix", "wi wi-rain-mix", "wi wi-rain-mix", "wi wi-sprinkle", "wi wi-sprinkle", "wi wi-rain", "wi wi-showers", "wi wi-showers", "wi wi-snow", "wi wi-snow", "wi wi-snow-wind", "wi wi-snow", "wi wi-hail", "wi wi-sleet", "wi wi-dust", "wi wi-fog", "wi wi-fog", "wi wi-smoke", "wi wi-windy", "wi wi-windy", "wi wi-snowflake-cold", "wi wi-cloudy", "wi wi-night-alt-cloudy", "wi wi-wi-day-cloudy", "wi wi-night-partly-cloudy", "wi wi-sunny-day-overcast", "wi wi-night-clear", "wi wi-day-sunny", "wi wi-night-clear", "wi wi-day-sunny", "wi wi-rain-mix", "wi wi-thermometer", "wi wi-thunderstorm", "wi wi-thunderstorm", "wi wi-thunderstorm", "wi wi-showers", "wi wi-sleet", "wi wi-sleet", "wi wi-sleet","wi wi-cloud", "wi wi-storm-showers", "wi wi-rain-mix", "wi wi-storm-showers", "wi wi-alien"];

function loadWeatherIcon(weatherCode){
  if(weatherCodeCache){
    $("#weather-icon").removeClass(weatherClass[weatherCodeCache]);
    $("#weather-icon").addClass(weatherClass[weatherCode]);
    weatherCodeCache = weatherCode;
  } else {
    $("#weather-icon").addClass(weatherClass[weatherCode]);
    weatherCodeCache = weatherCode;
  }
}

function loadWeather(location, woeid){
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'c',
    success: function(weather){
      
      $('.temperature-celcius').html(weather.temp + " &#x2103");
      $('.temperature-fahrenheit').html(weather.alt.temp + " &#x2109");
      $('.weather-condition').html(weather.currently);
      
      
      city = weather.city;
      country = weather.country;
      if (city){
        address = city + ", " + country;
      } else {
        address = country;
      }
    
      $('.user-address').html(address);
      
      loadWeatherIcon(weather.code);
      
    },
    error: function(error){
      loadWeatherIcon(48);
      $('.temperature').html(error);
    }
  });
}


//document.ready
$(function(){
  
  tempF.hide();
  buttonCitySearchGo.hide();
  citySearchText.hide();
  
  $.get("http://ip-api.com/json", function(response){
    
    city = response.city;
    
    loadWeather(city,'');
     
  }, 'jsonp');
  
  buttonTemp.click(function(){
    tempC.toggle();
    tempF.toggle();
  });
  
  function toggleSearchBox(){
    buttonCitySearchGo.toggle();
    citySearchText.toggle();
    buttonCitySearch.toggle();
  }
  buttonCitySearch.click(function(){
    toggleSearchBox();
  });
  
  buttonCitySearchGo.click(function(){
    toggleSearchBox();
    citySearchName = citySearchText.val();
    loadWeather(citySearchName, '');
  });
});