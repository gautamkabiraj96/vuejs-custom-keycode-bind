<template>
  <div id="app">
    <input v-model="inputValue" v-on:keyup.f2="onF2" />
    <div class="np-credits">wwww.nightprogrammer.com</div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    data() {
      return {
        inputValue: "",
      };
    },
    onF2() {
      alert("F2 triggerd!");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 24px;
}

.np-credits {
  font-size: 12px;
  margin-top: 12px;
  color: #4b4b4b;
}
</style>