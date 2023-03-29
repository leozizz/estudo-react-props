import './App.css';

import { useState } from 'react';
import imagemCachorro from './assets/cachorro.jpg';
import imagemGato from './assets/gato.jpg';
import CardAnimal from './componentes/CardAnimal';
import CardInformacoes from './componentes/CardInformacoes';

export default function App() {
  let imagemAnimal = "";
  let informacaoAnimal = "";
  let tipoAnimal = "Cachorro"

  const [tipoDoComponenteCard, setTipoDoCompomenteCard] = useState("cachorro");

  const alterarState = () => {
    if (tipoDoComponenteCard === "cachorro") {
      setTipoDoCompomenteCard("gato");
    } else {
      setTipoDoCompomenteCard("cachorro");
    }
  };

  if (tipoDoComponenteCard === "cachorro") {
    imagemAnimal = imagemCachorro;
    informacaoAnimal = "É um mamífero carnívoro da família dos canídeos.";
    tipoAnimal = "Cachorro";
  } else {
    imagemAnimal = imagemGato;
    informacaoAnimal = "É um mamífero carnívoro da família dos felídeos.";
    tipoAnimal = "Gato";
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
      <CardAnimal imagemAnimal={imagemAnimal}/>
  
      {/* Componente CardInformacoes */}
      <CardInformacoes tipoAnimal={tipoAnimal} informacaoAnimal={informacaoAnimal}/>
    </div>
  );
}