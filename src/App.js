import './App.css';

import { useState } from 'react';
import CardAnimal from './componentes/CardAnimal';
import CardInformacoes from './componentes/CardInformacoes';
import Topo from './componentes/Topo';

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
      <Topo clickBotao={alterarState}/>
  
      {/* Componente CardAnimal */}
      <CardAnimal tipoAnimal={tipoDoComponenteCard}/>
  
      {/* Componente CardInformacoes */}
      <CardInformacoes tipoAnimal={tipoDoComponenteCard}/>
    </div>
  );
}