import React from "react";
import './index.css'

export default function CardInformacoes(props){
    let nomeAnimalCachorro = "Cachorro";
    let nomeAnimalGato = "Gato";
    let informacaoCachorro = "É um mamífero carnívoro da família dos canídeos.";
    let informacaoGato = "É um mamífero canívoro da família dos felídeos.";

    return (
        <div className='CardInformacao'>
        {/* Recebe o useState via props, o if ternário verifica e atualiza o componente */}
        <h3>Informação sobre o {props.tipoAnimal === "cachorro" ? nomeAnimalCachorro : nomeAnimalGato}</h3>
        <p>{props.informacaoAnimal === "cachorro" ? informacaoCachorro : informacaoGato}</p>
        </div>
    )
}