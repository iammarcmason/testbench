<template>
  <v-container>
    <v-layout column>
      <v-flex class="display-2 text-xs-center my-5">Welcome to my Stuff</v-flex>
      <v-flex v-for="post in headers" v-bind:key="post.fields.slug">
        <div class="headline mt-3">{{ post.fields.header }}</div>

        <p class="subheading mt-3">{{ post.fields.body}}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const query = {
  skip: 0,
  include: 3,
  content_type: "frontpage",
  order: "sys.createdAt"
};
export default {
  name: "HomeDetails",
  data() {
    return { headers: [] };
  },
  mounted() {
    return this.$contentful
      .getEntries(query)
      .then(res => (this.headers = res.items));
  }
};
</script>

<style scoped>
</style>
