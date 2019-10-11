<template>
  <v-container>
    <v-layout column>
      <h1>Blog Page</h1>

      <v-flex class="post" v-for="post in posts" v-bind:key="post.fields.slug">
        <router-link :to="{ name: 'post', params: {postID: post.sys.id } }">
          <div class="headline mt-3">{{ post.fields.title }}</div>
        </router-link>
        <p class="subheading mt-3">{{ post.fields.description }}</p>
        <p class="subheading mt-3">{{ post.fields.body }}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
 <script>
const query = {
  skip: 0,
  limit: 10,
  order: "-sys.createdAt"
};

export default {
  name: "blog",
  data() {
    return { posts: [] };
  },
  mounted() {
    return this.$contentful
      .getEntries(query)
      .then(res => (this.posts = res.items))
      .catch(console.error);
  }
};
</script>
 <style scoped>
.post {
  margin-bottom: 50px;
  background: #555;
}
.post a {
  color: white;
}
</style>
