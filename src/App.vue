<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
import Home from './views/Home.vue';

export default {
  name: 'app',
  components: {
    Home,
  },
};
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine";

@include md-register-theme("default", (
  primary: #fff,
  accent: #f16536,
  theme: dark
));

@import "~vue-material/dist/theme/all";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
