<template>
  <v-app>
    <app-navigation></app-navigation>

    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
    <bottom-nav></bottom-nav>
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";
import BottomNav from "@/components/BottomNav.vue";

export default {
  name: "App",
  components: {
    AppNavigation,
    BottomNav
  },
  mounted() {
    //var className = "grey lighten-3";
    document.body.classList.add("bg-dark");
  }
};
</script>

<style>
.bg-dark {
  background-color: #303030;
}
</style>