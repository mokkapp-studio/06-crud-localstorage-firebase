<template>
  <h1>Formulario</h1>
  <el-form 
    ref="tarea" 
    class="form"
    label-position="top"
  >
    <Formulario :tarea="tarea"/>
    <el-form-item>
      <el-button 
        type="primary" 
        @click="procesarFormulario()"
        :disabled="bloquear"
      >
        Crear
      </el-button>
    </el-form-item>
  </el-form>

  <hr>
  <Listado/>
</template>

<script>
import Formulario from '../components/Formulario.vue';
import Listado from '../components/Listado.vue';
// las acciones van dentro de los metodos
import { mapActions } from 'vuex'
const shortid = require('shortid');
 
export default {
  name: 'Home',
  components: {
    Formulario,
    Listado
  },
  data(){
    return {
      tarea: {
        id: '',
        name: '',
        region: '',
        type: [],
        input: 0,
        resource: ''
      }
    }
  },
  methods: {
      ...mapActions(['setTareas']),

      procesarFormulario() {
      
      // se genera un id aleatorio.
      this.tarea.id = shortid.generate()

      // enviar los datos a vuex, por eso se mapea la acción.
      // la tarea que se está generando viaja a vuex.
      // el commit se encarga de hacer el push al array de tareas.
      this.setTareas(this.tarea)

      // console.log(this.tarea),

      // limpiar formulario
      this.tarea = {
        id: '',
        name: '',
        region: '',
        type: [],
        input: 0,
        resource: ''
      }
    }
  },
  computed: {
      bloquear(){
      return this.tarea.name === "" ? true : false;
      }
  },
}
</script>

<style scoped>
  .form{
    max-width: 350px;
  }
</style>
