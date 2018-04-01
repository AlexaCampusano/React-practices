import React, {Component} from 'react';

const userInput = (props) =>{
    const input = {
        margin: '16px auto',
        padding: '16px',
        fontSize: '12px',
        outline: 'none',
        fontFamily: 'inherit',
        boxSizing: 'border-box',
        boxShadow: '0 2px 3px #ccc'
    }
    return (
        <div style={input}>
            <input type="text" onChange={props.change} value={props.username}/>
        </div>
    );
}
export default userInput;