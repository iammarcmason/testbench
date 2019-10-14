<template>
  <v-container>
    <v-layout column>
      <v-flex class="display-2 text-xs-center my-5">Welcome to my Stuff</v-flex>
      <v-flex v-for="post in posts" v-bind:key="post.fields.slug">
        <div class="headline mt-3">{{ post.fields.header }}Blog</div>
        <p class="subheading mt-3">{{ post.fields.body }}My blog posts will live here...</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const query = {
  skip: 0,
  limit: 10,
  content_type_id: "blogPost",
  order: "-sys.createdAt"
};
export default {
  name: "HomeDetails",
  data() {
    return { posts: [] };
  },
  mounted() {
    return this.$contentful
      .getEntries(query)
      .then(res => (this.posts = res.items));
  }
};
</script>

<style scoped>
</style>