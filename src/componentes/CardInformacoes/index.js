import React from "react";
import './index.css'

export default function CardInformacoes(props){
    <div className='CardInformacao'>
        <h3>Informação sobre o {props.tipoAnimal}</h3>
        <p>{props.informacaoAnimal}</p>
    </div>
}