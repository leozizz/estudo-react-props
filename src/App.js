import './App.css';

import { useState } from 'react';
import CardAnimal from './componentes/CardAnimal';
import CardInformacoes from './componentes/CardInformacoes';

export default function App() {

  const [tipoDoComponenteCard, setTipoDoCompomenteCard] = useState("cachorro");

  const alterarState = () => {
    if (tipoDoComponenteCard === "cachorro") {
      setTipoDoCompomenteCard("gato");
    } else {
      setTipoDoCompomenteCard("cachorro");
    }
  };

  return (
    <div className='App'>
      {/* componente Topo */}
      <header>
        <h1>Projeto Props + useState</h1>
        <p>Clique no botão para mudar os componentes abaixo</p>
        <button onClick={alterarState}>Mudar Animal</button>
      </header>
  
      {/* Componente CardAnimal */}
      <CardAnimal tipoAnimal={tipoDoComponenteCard}/>
  
      {/* Componente CardInformacoes */}
      <CardInformacoes tipoAnimal={tipoDoComponenteCard}/>
    </div>
  );
}