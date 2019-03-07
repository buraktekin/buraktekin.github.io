<template>
  <div id="app">
    <Welcome/>
  </div>
</template>

<script>
import Welcome from './components/Welcome/Welcome.vue'

export default {
  name: 'app',
  components: {
    Welcome
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url(https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
