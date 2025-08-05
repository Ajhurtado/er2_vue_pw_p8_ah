<template>
  <ConsultarEstudiante @accion="accionRecibida"/>
  <FormularioEstudiante ref="tabla"/>
 
</template>

<script>
import FormularioEstudiante from "@/components/FormularioEstudiante.vue"
import ConsultarEstudiante from "@/components/ConsultarEstudiante.vue"

export default {
    components: {
        FormularioEstudiante,
        ConsultarEstudiante
    },
        methods:{
            accionRecibida(estudiante){
                this.$refs.tabla.cargarEstudiante(estudiante);
            }
    }
}
</script>

<style>

</style>