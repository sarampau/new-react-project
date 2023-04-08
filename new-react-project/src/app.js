import React, { Component } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
    constructor(props) {
        super(props);
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
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='conatainer'>
                <h1>Hello there</h1>
            </div>
        )
    }
}

export default App;