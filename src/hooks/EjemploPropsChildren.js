/* Ejemplo para entender el props.children */

import React from 'react'

const EjemploPropsChildren = (props) => {
  return (
    <div>
        <h1> Ejemplo Props.Children</h1>
        <h2> Nombre: {props.nombre}</h2>
        {/* props.children pinrara por defecto
        aquello que se encuentre entrre las etiquetas
        de aperrtura y cierre de este componente
        desde el componente de orden superior */}
        {props.children}
    </div>
  )
}

export default EjemploPropsChildren