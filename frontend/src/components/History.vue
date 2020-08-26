<template>
  <div>
    <ul v-for="(idx, i) in history" :key="i">
      <li>{{ idx.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.history = this.$store.state.history;
  },
  data() {
    return {
      history: []
    };
  }
};
</script>

<style></style>
