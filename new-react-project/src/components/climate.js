import React from 'react';

const Climate = (props) => {
    const max = Math.floor(props.max * 9/5) + 32;
    const min = Math.floor(props.min * 9/5) + 32;
    const sunrise = new Date(props.sunrise).toLocaleTimeString();
    const sunset = new Date(props.sunset).toLocaleTimeString();
    return (
        <div className='climate-output'>
            <p>{max}</p>
            <p>{min}</p>
            <p>{sunrise}</p>
            <p>{sunset}</p>
            <p>{props.clouds}</p>
            <p>{props.humidity}%</p>
        </div>
    )
}

export default Climate;