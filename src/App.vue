<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Athiti:wght@400;500;600&display=swap');
.application {
   font-family: 'Athiti', sans-serif !important;
}

#app {
  font-family: 'Athiti', sans-serif !important;
  background-image: url("assets/BG.png");
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  }

</style>
