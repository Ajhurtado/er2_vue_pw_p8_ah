<template>
   <div class="container_estudiante">
    <h1>Vista Estudiante</h1>
    <div class="formulario">
        <p type="Nombre"> <input type="text" v-model="nombre" disabled></p>
        <p type="Apellido"> <input type="text" v-model="apellido" disabled></p>
        <p type="Cédula"> <input type="text" v-model="cedula" disabled></p>
        <p type="Fecha Nacimiento"> <input type="date" v-model="fechaNacimiento" disabled></p>
        <p type="Genero"> <input type="text" v-model="genero" disabled></p>
    </div>
  </div>
</template>

<script>
import {obtenerPorCedulaFachada} from "@/clients/EstudianteClient.js"

export default {
    data() {
        return {
        nombre: '',
        apellido: '',
        cedula: '',
        fechaNacimiento: '',
        genero: ''
        }
    },
    methods: {
        async cargarEstudiante(cedula) {
        const estudiante = await obtenerPorCedulaFachada(cedula);
        this.nombre = estudiante.nombre;
        this.apellido = estudiante.apellido;
        this.cedula = estudiante.cedula;
        this.fechaNacimiento = estudiante.fechaNacimiento;
        this.genero = estudiante.genero;
        }
    }
}
</script>

<style scoped>
.container_estudiante{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
}
.formulario{
    display: flex;
    width: 25%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 10px;
    padding: 20px;
    border: 5px solid black;

}
button{
    padding: 10px;
}
input{
    width: 95%;
    min-width: 200px;
}
p::before{
    content: attr(type);
    display: block;
    text-align: left;
}
</style>