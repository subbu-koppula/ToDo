import React from "react";
import './Card.css'

export default function Card2(props){

    return(
        <div className="card">
            <div className="card-content">
                <p className="card-title">{props.title}</p>
            {/* <p className="card-description">{props.description}</p> */}
            </div>
            <button className="card-button" onClick={done}>Done</button>
            <button className="card-button">Delete</button>
        </div>  
    )
}