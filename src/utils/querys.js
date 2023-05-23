import axios from 'axios';

const urlBase = "http://192.168.1.66:3001/api"
const customHeader = { headers: { 'Content-Type': 'application/json' } };

const obtenerActividades = async () =>{
    const {data} =  await axios.get(`${urlBase}/actividades`)
    return data
  } 

  const grabarActividad = async (body) =>{
    const { data } = await axios.post(`${urlBase}/valor-uf`, body, customHeader)
    return data
  } 
 
  const accederLogin = async (body) =>{
    const { data } = await axios.post(`${urlBase}/login`, body, customHeader)
    return data
  } 

  export {obtenerActividades, grabarActividad, accederLogin}

  