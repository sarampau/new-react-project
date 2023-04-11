import React, { Component } from 'react';
import axios from 'axios';

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
            .then(temp => this.setState({ temp }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='conatainer'>
                <h1>Hello there, the temperature today is {this.state.temp}</h1>
            </div>
        )
    }
}

export default App;