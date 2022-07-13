import React, { useState, useRef, useEffect } from "react";

const EjemploDeHooks = (props) => {
  // Dos contadores distintos
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // Referencia con useRef() para asociar una variable con un elemento del DOM del componente
  const miRef = useRef();

  const incrementar1 = () => {
    setContador1((prevState) => prevState + 1);
  };

  const incrementar2 = () => {
    setContador2((prevState) => prevState + 1);
  };

  // Trabajando con el useEffect

  // Caso 1: Ejecutar siempre un snippet de codigo
  // Cada vez que haya un cambio del estado del componente
  // se ejecuta aquello que este dentro del useEffect

  // useEffect(() => {
  //   console.log("Cambio en el estado del componente");
  //   console.log("Mostrando referencia del Dom");
  //   console.log(miRef);
  // });

  // useEffect(() => {
  //   console.log("Cambio en el estado del contador 1");
  //   console.log("Mostrando referencia del Dom");
  //   console.log(miRef);
  // }, [contador1])

  useEffect(() => {
    console.log("Cambio en el estado del contador 1 o contador 2");
    console.log("Mostrando referencia del Dom");
    console.log(miRef);
  }, [contador1, contador2])
  

  return (
    <div>
      <h1>Ejemplo de useState, useRef y useEffect</h1>
      <h2>Contador 1: {contador1}</h2>
      <h2>Contador 2: {contador2}</h2>
      {/* Elemento referenciado */}
      <h3 ref={miRef}>Ejemplo de elemento referenciado</h3>
      <div>
        <button onClick={incrementar1}> Incrementar contador 1</button>
        <button onClick={incrementar2}> Incrementar contador 2</button>
      </div>
    </div>
  );
};

EjemploDeHooks.propTypes = {};

export default EjemploDeHooks;
