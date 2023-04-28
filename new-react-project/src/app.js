import React, { Component } from 'react';
import axios from 'axios';
import Climate from './components/climate';
import Temp from './components/temp';
import Search from './components/search';
import './css/style.css';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            input: '',
            city: ''
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
            .then(data => this.setState({ data, city: this.state.input }))
            .catch(err => console.log(err))
        }
        
        handleInput(e) {
            this.setState({
                input: e.target.value
            });
        }
        
        render() {
            console.log('data', this.state.data);
            console.log('input', this.state.input)
        return (
            <div className='container'>
                <Search
                    input={this.state.input}
                    handleInput={this.handleInput}
                    handleOnClick={this.handleOnClick}
                />
                <div>
                    <Temp
                        city={this.state.city}
                        temp={this.state.data.temp}
                    />
                    <Climate
                        max={this.state.data.max_temp}
                        min={this.state.data.min_temp}
                    />
                </div>
            </div>
        )
    }
}

export default App;