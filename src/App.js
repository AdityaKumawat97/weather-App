import React, { Component } from 'react';
import Weather from './component/weather'
import 'bootstrap/dist/css/bootstrap.css';
import 'weather-icons/css/weather-icons.css'


const API_key = '6e451c1baa67113a3ddddfc816a006b3'
class App extends Component { 
  constructor(props) {
    super(props)
    this.state = {}
    this.getWeather('api.openweathermap.org/data/2.5/weather?q=London,uk')
  }

  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`)
    const response = await api_call.json()
    console.log(response)
  }
  render() {
    return (
      <div className="container text-center">
        <Weather />
      </div>
    )
  }
}

  export default App;
