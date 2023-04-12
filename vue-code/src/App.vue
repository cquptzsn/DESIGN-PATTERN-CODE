<template>
  <div>
    <p>vue demo</p>
    <!-- <watch-demo1></watch-demo1> -->
    <hr />
    <WatchDemo2></WatchDemo2>
  </div>
</template>

<script>
 // Option API
// import WatchDemo1 from './components/WatchDemo1.vue';
// Composition API
import WatchDemo2 from './components/WatchDemo2.vue';

export default {
  name: 'App',
  components: {
    // WatchDemo1,
    WatchDemo2
  }
}
</script>

<style>

</style>
