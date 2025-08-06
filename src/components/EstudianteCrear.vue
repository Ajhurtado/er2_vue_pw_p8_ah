<template>
  <div class="container_estudiante">
    <h1>Crear un nuevo Estudiante</h1>
    <div class="formulario">
        <p type="Nombre"> <input type="text" v-model="nombre"></p>
        <p type="Apellido"> <input type="text" v-model="apellido"></p>
        <p type="Cédula"> <input type="text" v-model="cedula"></p>
        <p type="Fecha Nacimiento"> <input type="date" v-model="fechaNacimiento"></p>
        <p type="Genero">
            <select v-model="genero">
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
            </select>
        </p>
        <div> <button @click="crearEstudiante()">CREAR</button></div>
    </div>
    <div class="mensaje">
        {{ mensajeExito}}
    </div>
  </div>
</template>

<script>
import {guardarFachada} from "@/clients/EstudianteClient.js"

export default {
    data(){
        return{
            cedula:"",
            nombre:"",
            apellido:"",
            fechaNacimiento:"",
            genero:"",
            mensajeExito:null
        }
    },
    methods:{
        async crearEstudiante(){
            const estudianteBody={
                cedula: this.cedula,
                nombre: this.nombre,
                apellido: this.apellido,
                fechaNacimiento: this.fechaNacimiento,
                genero: this.genero
            }

            if(!this.mensajeExito){
                await guardarFachada(estudianteBody)
            }
            this.mensajeExito="Estudiante creado correctamente"

            setTimeout(()=>{
                this.limpiar();
                this.mensajeExito=null
            },10000)
        },
        limpiar(){
            this.cedula="";
            this.nombre="";
            this.apellido="";
            this.fechaNacimiento="";
            this.genero="";
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
    width: 30%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 10px;
    padding: 20px;
    padding-bottom: 20px;
    border: 5px solid black;

}
button {
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    background: lightblue;
    color: white;
}
input, select {
    width: 95%;
    min-width: 200px;
}
p::before{
    content: attr(type);
    display: block;
    text-align: left;
}
.mensaje{
    color: green;
    font-weight: bold;
    margin-top: 20px;
    font-size: 20px;
}
</style>