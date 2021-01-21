import React from 'react';
import ReactDOM from 'react-dom';

const usuario = 'Giovanni';
const sesion = true;
const pais = 'Perú';

const microfono =(
  <>
    {sesion === true ? 
    <>
    <h1>Bienvenido {usuario}</h1>
    <p>Que tengas un buen día</p>

    {/* Si el pais existe entonces mostrar el párrafo, de modo contrario no mostrarlo */}
    {pais && <p>Tu eres del país de : {pais}</p>}
    </>
    : <p>No ha podido iniciar sesion</p>}
  </>
)

ReactDOM.render(microfono,document.getElementById('root'));