import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  
  setTimeout(() => {
    navigate("/");
    return;
  }, "3000");


  return (
    <h3 className="m-5">🙃 NO se encuentra la RUTA! ... vamos de vuelta</h3>
  )
}
