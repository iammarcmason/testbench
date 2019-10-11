<template>
  <v-bottom-navigation v-model="bottomNav" class="ft">
    <v-btn value="twitter" href="http://twitter.com">
      <span>Twitter</span>
      <v-icon>mdi-twitter</v-icon>
    </v-btn>

    <v-btn value="facebook" href="http://facebook.com">
      <span>Facebook</span>
      <v-icon>mdi-facebook</v-icon>
    </v-btn>

    <v-btn value="github" href="http://github.com">
      <span>Github</span>
      <v-icon>mdi-github-circle</v-icon>
    </v-btn>

    <v-btn value="email">
      <span>Email</span>
      <v-icon>mdi-email-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomNav",
  data() {
    return {
      bottomNav: "recent"
    };
  }
};
</script>
<style>
.ft {
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>