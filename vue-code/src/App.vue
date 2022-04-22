<template>
  <p>vue demo</p>
  <!-- <hr> -->
  <!-- <WatchDemo1></WatchDemo1> -->
  <hr>
  <WatchDemo2></WatchDemo2>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import WatchDemo1 from './components/WatchDemo1' // Option API
import WatchDemo2 from './components/WatchDemo2' // Composition API

export default {
  name: 'App',
  components: {
    // HelloWorld
    // WatchDemo1,
    WatchDemo2,
  }
}
</script>

<style>

</style>
