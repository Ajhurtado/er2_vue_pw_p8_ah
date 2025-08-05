import axios from 'axios';

const URL_ESTUDIANTES = "http://localhost:8081/api/universidad/v1/estudiantes";


const guardar = async (body) => {
    axios.post(URL_ESTUDIANTES,body);
}

export const guardarFachada = async (body) => {
    await guardar(body);
}

const obtenerTodos = async () => {
    const respuesta = axios.get(URL_ESTUDIANTES).then(resp => resp.data)
    return respuesta
}

export const obtenerTodosFachada = async () => {
    return await obtenerTodos();}

const obtenerPorCedula = async (cedula) =>{
    const respuesta = axios.get(`${URL_ESTUDIANTES}/${cedula}`).then(resp => resp.data);
    return respuesta;
}

export const obtenerPorCedulaFachada = async (cedula) =>{
    return await obtenerPorCedula(cedula);
}


