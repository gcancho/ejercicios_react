import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Usuario from './componentes/Usuario';

const App = () => {
  // El estado por defecto se encuentra en true y con ayuda de la funcion cambiarEstadoSesion ..
  // .. se podrá cambiar
  const [sesion, cambiarEstadoSesion] = useState(true);

  const cerrarSesion = () => {
    cambiarEstadoSesion(false);
  }

  const abrirSesion = () =>{
    cambiarEstadoSesion(true);
  }

  return (
    <>
      {sesion === true ?
        <>
          <Usuario />
          <button onClick={cerrarSesion}>Cerrar sesión</button>
        </>
        :
        <>
          <p>No ha podido iniciar sesion</p>
          <button onClick={abrirSesion}>Iniciar sesión</button>
        </>
      }
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));