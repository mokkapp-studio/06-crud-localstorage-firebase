<template>
  <h1>Información del desarrollo</h1>
  <ul>
      <li>
          <h4>Inicio:</h4>
          <p>Incorporar el componente de info para la explicación e instalamos Element-ui</p>
      </li>
      <li>
          <h4>methods:</h4>
          <p>En los métodos colocamos la función del submit para el formulario.</p>
          <p>Dentro de la funcion de formulario se coloca:</p>
          <ol>
              <li><p>Limpiar formulario</p></li>
          </ol>
      </li>
      <li>
          <h4>computed:</h4>
          <p>Las propiedades computadas sirven para hacer un ternario y desabilitar el botón si los campos están vacíos.</p>
          <p>son funciones que devuelven un return</p>
      </li>
      <li>
          <h4>Formulario</h4>
          <p>Se crea un componente con el formulario. pero solo se añaden los input.</p>
          <p>El el-form y el-button se mantienen donde estabn los métodos y las propiedades computadas ya que el evento no se encuentra en la etiqueta form sino en el button.</p>
      </li>
      <li>
          <h4>VUEX</h4>
          <p>En el state creamos la tarea y el array de tareas para tenerla en el state global</p>
          <p>Para agregar elementos al array, hay que trabajar con las acciones y mutaciones de vuex.</p>
          <h5>Acciones y mutaciones</h5>
          <ol>
              <li><p>Se crea la acción con commit y tarea, (funcion que modifica el state + state)</p></li>
              <li><p>Le importamos el <b>MapAction</b> al componente donde se ejecuten las funciones desde vuex.</p></li>
          </ol>
          <h5>Imprimir el listado de tareas</h5>
          <p>Al crear el state en vuex, solo hay que importarlo al componente de listado.</p>
          <p>Hay que importar el mapState al componente y declararlo en propiedades computadas.</p>
          <p>Se hace un v-for para recorrer el array de tareas.</p>
          <h5>Eliminar tarea</h5>
          <p>Se crea una acción en las actions de vuex.</p>
          <p>state.tareas = state.tareas.filter(tarea => tarea.id !== payload) esta funcion de js filtra todos los elementos distintos al id seleccionado</p>
          <p>Se tiene que importar el mapAction que es donde está la función y declararlo en los metodos</p>
      </li>
      <li>
          <h4>Editar</h4>
          <h5>Crear vista editar con id. Editar/:id</h5>
          <p>Al botón editar la pasamos el router-link para que redirija a la vista de editar.</p>
          <p>:to="{
                name: 'Editar',
                params: {id: tarea.id}
            }"
        </p>
        <p>Le pasamos el nombre de la vista a la que queremos ir + el id ya que la ruta va con id (sino no se muestra nada).</p>
        <h5>Funcion</h5>
        <b>state.tarea = state.tareas.find(tarea => tarea.id === payload)</b>
        <p>Buscamos la tarea es igual al payload</p>
        <h5>Mapeamos el map state en la vista</h5>
      </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style scoped>
    h4{
        margin-bottom: 0;
    }
</style>