/* UseState */

/*
Crear un componente funcional y acceder a su estado privado
a traves de un hook y poder modificarlo
*/

import React, { useState } from "react";

const EjemploDeHook = () => {
  // Valor inicial contador
  const valorInicial = 0;

  // Valor inicial Persona
  const personalInicial = {
    nombre: "Martin",
    email: "martin@hotmail.com",
  };

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personalInicial);

  const incrementarContador = () => {
    setContador((prevState) => prevState + 1);
  };

  const actualizarPersona = () => {
    // setPersona({
    //   nombre: "Pepe",
    //   email: "pepe@hotmail.com",
    // });
    setPersona((prevState) => {
      return { ...prevState, nombre: "pepe", email: "pepe@hotmail.com" };
    });
  };

  return (
    <div>
      <div>
        <h2>Contador: {contador}</h2>
        <h2>Nombre: {persona.nombre}</h2>
        <h2>Email: {persona.email}</h2>
      </div>
      <button onClick={incrementarContador}>Incrementar</button>
      <button onClick={actualizarPersona}>Actualizar Persona</button>
    </div>
  );
};

EjemploDeHook.propTypes = {};

export default EjemploDeHook;
