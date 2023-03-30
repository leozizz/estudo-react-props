import React from "react";
import './index.css';

import ImagemCachorro from "../../assets/cachorro.jpg"
import ImagemGato from "../../assets/gato.jpg"

export default function CardAnimal(props){
    return (
        <div className="CardAnimal">
            {/* Recebe o useState via props, o if ternário verifica e atualiza o componente */}
            <img src={props.tipoAnimal === "cachorro" ? ImagemCachorro : ImagemGato} alt="animal" />
        </div>
    )
}