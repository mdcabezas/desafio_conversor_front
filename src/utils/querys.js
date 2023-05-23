import axios from 'axios';

const urlBase = "https://desafioconversorback-production.up.railway.app" // "http://192.168.1.66:3001"
const customHeader = { headers: { 'Content-Type': 'application/json' } };

const obtenerActividades = async () =>{
    const {data} =  await axios.get(`${urlBase}/api/actividades`)
    return data
  } 

  const grabarActividad = async (body) =>{
    const { data } = await axios.post(`${urlBase}/api/valor-uf`, body, customHeader)
    return data
  } 
 
  const accederLogin = async (body) =>{
    const { data } = await axios.post(`${urlBase}/api/login`, body, customHeader)
    return data
  } 

  export {obtenerActividades, grabarActividad, accederLogin}

  