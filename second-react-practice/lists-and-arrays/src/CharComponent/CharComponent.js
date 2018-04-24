import React from 'react';
import './CharComponent.css'

const charComponent = (prop) => {
    return (
        <div className="charBox" onClick={prop.click}>
            {prop.charValue}
        </div>
    );
}

export default charComponent;