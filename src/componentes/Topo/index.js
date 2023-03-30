import React from "react";
import './index.css'

export default function Topo(props) {

    return (
        <header>
        <h1>Projeto Props + useState</h1>
        <p>Clique no botão para mudar os componentes abaixo</p>
        <button onClick={props.clickBotao}>Mudar Animal</button>
        </header>
    );
}