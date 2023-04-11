import React from 'react';

const Temp = (props) => {
    const temp = props.temp;
    return (
        <h1>Hello there, the temperature today is {props.temp}</h1>
    )
}

export default Temp;