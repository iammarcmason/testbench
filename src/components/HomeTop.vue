<template>
  <v-container fluid fill-height class="home-top" style="max-height: 100vh;">
    <v-layout justify-center align-center column pa-5>
      <div class="display-4 font-weight-black white--text text-xs-center">Marc Mason</div>
      <div class="display-3 font-weight-black white--text text-xs-center mb-3">Data Person</div>
      <div
        class="display-1 font-weight-bold white--text text-xs-center"
      >Data analysis and visualisation solutions</div>
      <div class="display-4">I</div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomeTop"
};
</script>

<style scoped>
.home-top {
  background: url("https://i.ibb.co/0Zd0421/programming-code-minimalism-eat-wallpaper.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
