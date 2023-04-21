import React from 'react';

const Temp = (props) => {
    const temp = Math.floor(props.temp * 9/5) + 32;
    const min = Math.floor(props.min * 9/5) + 32;
    const max = Math.floor(props.max * 9/5) + 32;
    return (
        <div>
            <p>Hello there, the temperature today is {temp}</p>
            <p>The humidity is {props.humidity}</p>
            <p>The min temp will be {min}</p>
            <p>The max temp will be {max}</p>
        </div>
    )
}

export default Temp;