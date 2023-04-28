import React from 'react';

const Climate = (props) => {
    const max = Math.floor(props.max * 9/5) + 32;
    const min = Math.floor(props.min * 9/5) + 32;
    return (
        <div className='climate-output'>
            <p>{max}</p>
            <p>{min}</p>
            <p>{props.sunrise}</p>
            <p>{props.sunset}</p>
            <p>{props.clouds}</p>
            <p>{props.humidity}</p>
        </div>
    )
}

export default Climate;