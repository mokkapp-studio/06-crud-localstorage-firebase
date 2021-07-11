import { createStore } from 'vuex'
import router from '../router';

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: '',
      name: '',
      region: '',
      type: [],
      input: 0,
      resource: ''
    }
  },
  mutations: {
    cargar(state, payload) {
      state.tareas = payload
    },
    // la mutacion necesita un state (el array) y un payload será la tarea.
    // Cada vez que se llame a esta acción se empuja esa tarea al array de tareas.
    // el payload es la tarea.
    set(state, payload) {
      state.tareas.push(payload)
      console.log(state.tareas)
      //a la vez que se empuja una nueva tarea, empujamos también al navegador el state
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    eliminar(state, payload){
      state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
      // También el local storage elimina la tarea
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    tarea(state, payload){
      // Validación para que si se escribe una url que no existe, no lance un erro y devuelva a la home.
      // lo contrario a la función de encontrar tarea por id.
      if(!state.tareas.find(tarea => tarea.id === payload)){
        router.push('/')
        // Return finaliza la función.
        return

      }
      state.tarea = state.tareas.find(tarea => tarea.id === payload)
    },
    update(state, payload){
      state.tareas = state.tareas.map(tarea => tarea.id === payload.id ? payload : item)
      // importamos router para redirigir hacia la home.
      router.push('/')
      // también la actualización empujamos al local storage.
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    }
  },
  actions: {
    // Local Storage
    cargarLocalStorage({commit}){
      if(localStorage.getItem('tareas')){
        const tareas = JSON.parse(localStorage.getItem('tareas'))
        commit('cargar', tareas)
        return
      }
      localStorage.setItem('tareas', JSON.stringify([]))
    },
    // se declara el comit y la tarea que viene del formulario.
    setTareas({ commit}, tarea) {
      commit('set', tarea)
    },
    deleteTareas({commit}, id) {
      commit('eliminar', id)
    },
    setTarea({commit}, id){
      commit('tarea', id)
    },
    updateTarea({commit}, tarea){
      commit('update', tarea)
    }
  },
  modules: {
  }
})
