import React from "react";
import './index.css';

export default function CardAnimal(props){
    return (
        <div className="CardAnimal">
            <img src={props.imagemAnimal} alt="animal" />
        </div>
    )
}