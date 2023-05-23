import React, { useEffect, useState } from 'react';
import { obtenerActividades } from "../utils/querys";

export default function Actividades() {
  const [actividades, setActividades] = useState([])

  useEffect(() => {
    obtenerActividades().then(actividad => setActividades(actividad))
  }, [actividades])

  return (
    <div className='container mt-4'>
      <table className="table">
        <thead>
          <tr className="table-secondary text-center" >
            <th>rol_usuario</th>
            <th>fecha_hora_actividad</th>
            <th>monto_origen</th>
            <th>fecha_conversion</th>
            <th>valor_moneda</th>
            <th>monto_conversion</th>
          </tr>
        </thead>
        <tbody>
          {actividades.map(actividad => {
            return (
              <tr key={actividad.id} className='text-center'>
                <td>{actividad.rol}</td>
                <td>{new Intl.DateTimeFormat('es-CL', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(actividad.fecha_hora_actividad))}</td>
                <td>{actividad.monto_origen}</td>
                <td>{new Intl.DateTimeFormat('es-CL', { dateStyle: 'short'}).format(new Date(actividad.fecha_conversion))}</td>
                <td>{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(actividad.valor_moneda)}</td>
                <td>{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(actividad.monto_conversion)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}


