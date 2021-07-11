<template>
  <h1>{{$route.params.id}}</h1>
  {{tarea}}
  <el-form>
    <Formulario :tarea="tarea"/>
  </el-form>
  <el-form-item>
      <el-button 
        type="primary" 
        @click="updateTarea(tarea)"
      >
        Actualizar
      </el-button>
    </el-form-item>
</template>

<script>
import Formulario from '../components/Formulario.vue';
import { mapState, mapActions } from 'vuex';
export default {
    name: 'Editar',
    components: {
        Formulario
    },
    computed: {
        ...mapState(['tarea'])
    },
    // llamada a la acción dentro de los métodos
    methods: {
        ...mapActions(['setTarea', 'updateTarea'])
    },
    // ciclo de vida de Vue
    created() {
        this.setTarea(this.$route.params.id)
    }
}
</script>
 