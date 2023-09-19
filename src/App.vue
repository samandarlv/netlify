<template>
  <Navbar />
  <Box1 />
  <Box2 />
</template>
<script setup>
  import Navbar from "./components/Navbar.vue";
  import Box1 from "./components/Box1.vue";
  import Box2 from "./components/Box2.vue";
</script>
<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: 1px solid red;
  }
  h1 {
    color: #333;
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
  }
  p {
    font-family: Vollkorn;
    font-style: normal;
    font-weight: 400;
  }
  .box-3-line {
    width: 80px;
    height: 2px;
    flex-shrink: 0;
    background: rgba(0, 0, 0, 0.09);
    margin: 28px auto;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
