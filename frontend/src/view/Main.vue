<template>
  <div class="container">
      <vueHeader></vueHeader>
      <div class="main_content">
        dd
      </div>
  </div>
</template>

<script>
import vueHeader from '../components/Header'
export default {
     components: {
        vueHeader
    }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    
    .main_content {
       width: 100%;
       height: 1000px;
       background-color: antiquewhite;
       margin-top: 80px;
    }
  }
</style>

</style>