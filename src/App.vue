<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <ybHelloWorld msg="xxx"></ybHelloWorld> -->
  <ybButtom round type="defalut" :loading="state.btnLoading">测试按钮</ybButtom>
</template>

<script>
export default {
  name: "App",
};
</script>

<script setup>
import { reactive } from "vue";
let state = reactive({
  btnLoading: true,
});
setTimeout(() => {
  state.btnLoading = false;
}, 13000);
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
