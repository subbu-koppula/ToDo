import React from 'react';
import './Card.css';
import { useState } from 'react';

function Card(props) {
    const [hide, sethide] = useState(true);
    function done(){
        sethide(false);
        props.setCount(props.Count-1)
    }
    return (
        hide ?
        (<div className="card">
            <div className="card-content">
                <p className="card-title">{props.title}</p>
                {/* <p className="card-description">{props.description}</p> */}
                <button className="card-button" onClick={done}>Done</button>
            </div>
        </div>) : null
    );
}

export default Card;
