import React from 'react';

const validation = (props) => {
    const maxValue = 50;
    const message = props.inputLength > maxValue ? "Text long enough!" : "";
    const style = {
        color: 'red'
    }
    return (
        <div>
            <p style={style}>{message}</p>    
        </div>
    );
    
    
}

export default validation;