import React from 'react';
import './Card.css';
import { useState } from 'react';

function Card(props) {
    // const [hide, sethide] = useState(true);

    function done(){
        props.handleDone(props.id)
        props.setCount(props.Count-1)
    }

    return (
        // hide ?
        // (
        <div>
            {/* <div className='checkbox'> */}
               <button className='checkbox' onClick={done}></button>
            {/* </div> */}
            <div className='details'>
                <p className='details-title'>{props.title}</p>
            </div>
        </div>
   
        // ) : null 
    );
}

export default Card;


        // <div className="card">
        // <div className="card-content">
        //     <p className="card-title">{props.title}</p>
        //     {/* <p className="card-description">{props.description}</p> */}
        // </div>
        // <button className="card-button" onClick={done}>Done</button>
        // </div>          