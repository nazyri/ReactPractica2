import'../style/FormLogin.css'

function FormLogin() {
  return (
    <div>
        <form className="form">
        <label htmlFor="correo">Correo:</label>
        <input className="input" type="email" id="correo" name="correo" />
        <br/>
        <label htmlFor="clave">Contraseña:</label>
        <input className="input" type="password" id="clave" name="clave"/>
        <br/>
        <button type="submit">Iniciar Sesión</button>
        </form>
    </div>
  )
}

export default FormLogin
