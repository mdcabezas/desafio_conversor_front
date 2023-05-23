import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function RutaProtegida({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    // no autenticado
    return <Navigate to="/login" />;
  }
  return children
};