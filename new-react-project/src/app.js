import React, { Component } from 'react';
import axios from 'axios';
import Temp from './components/temp';
import Search from './components/search';
import './css/style.css';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            input: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        const options = {
            method: 'GET',
            url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
            params: {city: `${this.state.input}`},
            headers: {
                'X-RapidAPI-Key': `${API_KEY}`,
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        axios.request(options)
            .then(res => res.data)
            .then(data => this.setState({ data }))
            .catch(err => console.log(err))
        }
        
        handleInput(e) {
            this.setState({
                input: e.target.value
            });
        }
        
        render() {
            console.log('data', this.state.data)
        return (
            <div className='container'>
                <Search
                    input={this.state.input}
                    handleInput={this.handleInput}
                    handleOnClick={this.handleOnClick}
                />
                <Temp
                    temp={this.state.data.temp}
                    humidity={this.state.data.humidity}
                    min={this.state.data.min_temp}
                    max={this.state.data.max_temp}
                />
            </div>
        )
    }
}

export default App;