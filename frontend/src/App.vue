<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import "./style/font.css";
import "./style/reset.css";

export default {
  name: "App",
};
</script>

<style>
#app {
  display: flex;
  flex: none;
  flex-direction: column;
  align-items: center;
}
</style>
