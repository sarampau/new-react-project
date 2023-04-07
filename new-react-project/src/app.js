import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
            params: {city: 'San Francisco'},
            headers: {
                'X-RapidAPI-Key': '36b91a9dd0msh567277b041e0cf5p13ff27jsnf75782a4c34b',
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