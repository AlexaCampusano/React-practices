import React, {Component} from 'react';

const userOutput = (props) =>{
    return (
        <div>
            <p>Hi, I'm {props.username}</p>
            <p>And My favorite fruit is Kiwi.</p>
        </div>
    );
}

export default userOutput;