// import React from 'react'

function FormRegister() {
  return (
    <div>
        <input className="inicio" id="nombre" type="nombre" placeholder="ingrese su nombre"/>
        <input className="inicio" id="apellido" type="apellido" placeholder="ingrese su apellido"/>
        <input className="inicio" id="correo" type="correo" placeholder="ingrese su correo"/>
        <input className="inicio" id="clave" type="clave" placeholder="ingrese su clave"/>
        <button id="registrar">Registrar</button>
    </div>
  )
}

export default FormRegister
