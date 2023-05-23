import { useContext } from "react";
import ConsultaConversion from './ConsultaConversion'
import Actividades from './Actividades';
import { AuthContext } from "../context/AuthProvider";

export default function Inicial() {
    const { user } = useContext(AuthContext);
  return (
    <>
    <ConsultaConversion/>
    {user.rol === "admin"?<Actividades/>: null}
    </>
  )
}
