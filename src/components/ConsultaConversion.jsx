import { useState, useContext } from "react";
import { grabarActividad } from "../utils/querys";
import { AuthContext } from "../context/AuthProvider";

function ConsultaConversion() {
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({ uf: 0, date: "", user: "" });
  const [total, setTotal] = useState(0);

  const onChange = (e) => {
    setForm({ ...form, [e.target.id]: (e.target.value).replace(',', '.') })
  }

  const convert = async (e) => {
    e.preventDefault()
    const data = await grabarActividad({ ...form, user: user.id })
    setTotal(data)
  }

  return (
    <div className="container col-lg-3 col-12 mt-5 border border-secondary rounded p-3">
      <h5 className="text-center">Bienvenido {user.rol}</h5>
      <form onSubmit={convert}>
        <div className="mb-3">
          <label htmlFor="rol" className="form-label">UF a CLP</label>
          <input type="text" className="form-control" id="uf" aria-describedby="rolHelp" value={form.uf} onChange={onChange} />
          <div id="ufHelp" className="form-text">Ingrese cantidad de UF</div>
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Fecha</label>
          <input type="date" className="form-control" id="date" value={form.date} onChange={onChange} />
          <div id="dateHelp" className="form-text">Ingrese fecha de conversion</div>
        </div>
        <div class="d-grid gap-2">
          <button type="submit" className="btn btn-primary my-3">Convertir <i class="fa-solid fa-check"></i></button>
        </div>
      </form>
      <hr></hr>
      <h3 className="text-center">CLP: {new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(total)}</h3>
    </div>
  );
}

export default ConsultaConversion;

/*

    <div className="container">
      <h2>UF- {JSON.stringify(user)}</h2>
      <form className="mt-3" onSubmit={convert}>
      <input
      id="uf"
      value={form.uf}
      type="number" 
      placeholder="Ingrese el monto en UF"
      onChange={onChange}
      />

      <input
      id="date"
      value={form.date}
      type="date" 
      placeholder="Ingrese Fecha"
      onChange={onChange}
      />

      <button>Convertir</button>
      </form>
      <h3 >Total CLP: {total}</h3>
    </div>
    
*/