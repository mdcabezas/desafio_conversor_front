import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { accederLogin } from "../utils/querys";

function Login() {

  const [form, setForm] = useState({ rol: "", password: "" });
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const onChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const data = await accederLogin(form);
    console.log("data despues query>>>>", data);
    if(!data.id || !data.rol){
     alert("Ingrese credenciales válidas");
    setForm({ rol: "", password: "" });
    return;
    }else{
      login(data);
      navigate("/");
      return;
    }
  }

  return (
    <div className="container col-lg-3 col-12 mt-5 border border-secondary rounded p-3">
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="rol" className="form-label">Rol</label>
          <input type="text" className="form-control" id="rol" aria-describedby="rolHelp" value={form.rol} onChange={onChange} />
          <div id="rolHelp" className="form-text">Ingrese su Rol {user}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="password" value={form.password} onChange={onChange} />
        </div>
        <div class="d-grid gap-2">
        <button type="submit" className="btn btn-primary mt-3">Ingresar <i class="fa-solid fa-right-to-bracket"></i></button>
        </div>
      </form>
    </div>
  );
}

export default Login;