<template>
  <h2>Listado de Tareas:</h2>
    <el-row :gutter="12">
        <el-col v-for="(tarea) in tareas" :key="tarea.id" :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
            <div class="card-task">
                <div class="card-header">
                    {{tarea.name}}
                </div> 
                <div class="card-body">
                    {{tarea.region}}
                    <div v-for="(type, index) in tarea.type" :key="index">
                        <p>
                        {{ tarea.type.length === index + 1 ? type : type+', '}}
                        </p>
                    </div>
                </div>
                <div class="card-footer">
                    <router-link
                        :to="{
                            name: 'Editar',
                            params: {id: tarea.id}
                        }"
                    >
                        <el-button>Editar</el-button>
                    </router-link>
                    <el-button type="danger" @click="deleteTareas(tarea.id)">Eliminar</el-button>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'Listado',
    computed: {
        ...mapState(['tareas']),
    },
    methods: {
        ...mapActions(['deleteTareas'])
    }
}
</script>

<style scoped>
    .card-task{
        background: rgb(239, 239, 239);
        padding: 1em;
        margin-bottom: 1em;
        border-radius: 5px;
    }
    .card-header{
        border-bottom: 1px solid white;
        text-align: center;
    }
    .card-body{
        display: block;
    }
    .card-footer{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>