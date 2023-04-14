import React, { Component } from 'react';
import axios from 'axios';
import Temp from './components/temp';
import './css/style.css';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: 0
        }
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
            params: {city: 'San Fransisco'},
            headers: {
                'X-RapidAPI-Key': `${API_KEY}`,
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        axios.request(options)
            .then(res => res.data.temp)
            .then(temp => this.setState({ temp: Math.floor(temp * 9/5) + 32 }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='container'>
                <Temp
                    temp={this.state.temp}
                />
            </div>
        )
    }
}

export default App;