import React, {Component} from 'react';

import './UserOutput.css';
const userOutput = (props) =>{
    return (
        <div className="UserOutput">
            <p>Hi, I'm {props.username}</p>
            <p>And My favorite fruit is Kiwi.</p>
        </div>
    );
}

export default userOutput;