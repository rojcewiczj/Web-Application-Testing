import React, {useState} from 'react';

const Display= (props) => {
    
return (
    <div className="display-container">
        <div className="display-strikes">
            <h1>Strikes</h1>
            <h1>{props.strikes}</h1>
        </div>
        <div className="display-balls">
            <h1>Balls</h1>
            <h1>{props.balls}</h1>
        </div>
        
    </div>
)

}

export default Display;