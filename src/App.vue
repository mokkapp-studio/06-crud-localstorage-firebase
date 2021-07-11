<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/info">Info</router-link> |
    <router-link to="/editar">Editar</router-link>
  </div>
  <router-view/>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'App',
    methods: {
      ...mapActions(['cargarLocalStorage'])
    },
    created(){
      this.cargarLocalStorage()
    }
  }
</script>


<style>
#nav {
  padding: 30px;
  background: #38404a;
}

#nav a {
  font-weight: bold;
  color: #bbcee0;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
