<template>
  <div class="container_tabla">
    <div> <button @click="consultarEsudiantes()">Consultar</button></div>
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th>Cédula</th>
                    <th>Nombre</th>                    
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="estudiante in estudiantes" :key="estudiante.cedula">
                    <td>{{ estudiante.cedula }}</td>
                    <td>{{ estudiante.nombre }}</td>
                    <td>
                        <button @click="mensajeHijo(estudiante.cedula)">Visualizar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import {obtenerTodosFachada} from "@/clients/EstudianteClient.js"

export default {
 data(){
    return {
      estudiantes: [],
    }
  },
  methods: {
     async consultarEsudiantes(){
        this.estudiantes = await obtenerTodosFachada();

     },
     mensajeHijo(estudiante){
        this.$emit("accion", estudiante);
     }
  }
 
}
</script>

<style scoped>
.container_tabla {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
}
button {
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    background: lightblue;
    color: white;
}
table {
    background: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
th, td {
    padding: 5px 16px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}
th {
    background: #f2f2f2;
    font-weight: bold;
}

</style>