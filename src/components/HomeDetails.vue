<template>
  <v-container>
    <v-layout column>
      <v-flex class="display-2 text-xs-center my-5">Welcome too my Stuff</v-flex>
      <v-flex>
        <div class="headline mt-3">Blog</div>
        <p class="subheading mt-3">My blog posts will live here...</p>
      </v-flex>
      <v-flex>
        <div class="headline mt-3">About</div>
        <p
          class="subheading mt-3"
        >This will have something about who I am and what I do, possibly CV...</p>
      </v-flex>
      <v-flex>
        <div class="headline mt-3">Projects</div>
        <p class="subheading mt-3">Stuff i've done / am doing...</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomeDetails"
};
</script>

<style scoped>
</style>