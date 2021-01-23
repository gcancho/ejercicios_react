import React, { useState } from 'react';

const FormularioInicioSesion = () => {
    const [usuario, cambiarUsuario] = useState();
    const [password, cambiarPassword] = useState();

    return (
        <form action="">
            <p>Usuario: {usuario}</p>
            <p>Contraseña: {password}</p>
            <div>
                <label htmlFor="usuario">Usuario</label>
                <input 
                    type="text" 
                    name="usuario" 
                    id="usuario"
                    value={usuario}
					/* Onchange se ejecuta cada vez que el input cambie */
                    onChange={(e)=>{
                        cambiarUsuario(e.target.value);
						}}
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input 
                    type="password"
                    name="password" 
                    id="password" 
                    value={password}
                    as
                    onChange={(e)=>{
                        cambiarPassword(e.target.value);
                        }}
                />
            </div>
            <button type="submit">Iniciar sesión</button>
        </form>
    );
}

export default FormularioInicioSesion;