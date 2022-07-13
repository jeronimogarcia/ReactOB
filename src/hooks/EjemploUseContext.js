/* Ejemplo de UseState y UseContext */

import React, { useState, useContext } from "react";
const miContexto = React.createContext(null);

const Componente1 = (props) => {
  // Lo inicializamos null
  // Se va a rellenar con los datos del contexto del padre

  const state = useContext(miContexto)
 
  return (
    <div>
      <h1>El token es: {state.token}</h1>
      <Componente2></Componente2>
    </div>
  );
};



const Componente2 = (props) => {
  const state = useContext(miContexto);

  return (
    <div>
      <h2>La sesion es: {state.sesion}</h2>
    </div>
  );
};

export const MiComponenteConContexto = () => {
  const estadoInicial = {
    token: "12345",
    sesion: 1,
  };

  // Creamos el estado del componente

  const [sessionData, setSessionData] = useState(estadoInicial);

  const actualizarSesion = () => {
    setSessionData ((prevState)=>{
        return {...prevState, token: '598465', sesion: 2}
    })
  }
  

  return (
    <miContexto.Provider value = {sessionData}>
        {/* Todo lo que este adentro puede leer los datos de sessionData*/}
        {/* Si se actualiza, los componentes tambien se actualizan */}
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar Sesion</button>
    </miContexto.Provider>
  );
};
