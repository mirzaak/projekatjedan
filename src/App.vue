<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App"
  }
</script>

<style >
body::-webkit-scrollbar {
  width: 8px;
  border-radius: 20px;
}
body::-webkit-scrollbar-thumb {
  background: lightgray;
  border-radius: 10px;
}
</style>