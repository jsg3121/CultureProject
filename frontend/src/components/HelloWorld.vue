<template>
  <div class="hello">
    <b>count : {{ this.$store.state.count }}</b>
    <br />
    <input type="button" @click="increment()" value="increment" />
    <input type="button" @click="decrement()" value="decrement" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  created: function () {
    console.log(this.$store.state.count);
  },
  methods: {
    increment: function () {
      this.$store.commit("increment");
    },
    decrement: function () {
      this.$store.commit("decrement");
    },
  },
};
</script>

<style scoped></style>
