import React from 'react';

const Temp = (props) => {
    const temp = Math.floor(props.temp * 9/5) + 32;
    return (
        <div className='temp-output'>
            <p>{props.city}</p>
            <p>{temp}</p>
            
        </div>
    )
}

export default Temp;
