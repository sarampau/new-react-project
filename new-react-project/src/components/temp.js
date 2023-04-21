import React from 'react';

const Temp = (props) => {
    const temp = Math.floor(props.temp * 9/5) + 32;
    return (
        <div>
            <p>Hello there, the temperature today is {temp}</p>
            <p>The humidity is {props.humidity}</p>
            <p>The min temp will be {props.min}</p>
            <p>The max temp will be {props.max}</p>
        </div>
    )
}

export default Temp;