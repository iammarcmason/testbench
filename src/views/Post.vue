<template>
  <v-container>
    <v-layout column>
      <h1>Blog Page</h1>

      <v-flex class="post">
        <div class="headline mt-3">{{ post.title }}</div>
        <p class="mt-3 body-2">{{ post.description }}</p>
        <v-divider></v-divider>

        <div class="mt-3 body-2" v-html="post.body"></div>
      </v-flex>
    </v-layout>
    <div id="disqus_thread"></div>
    <div class="comments">
      <vue-disqus shortname="iam-testbed" :identifier="page_id" :url="pageURL"></vue-disqus>
    </div>
  </v-container>
</template>
 <script>
export default {
  name: "blog",
  data() {
    return {
      post: [],
      pageURL: "https://testbed.iammarcmason/post/" + this.$route.params.postID,
      page_id: this.$route.params.postID
    };
  },
  mounted() {
    return this.$contentful.getEntry(this.$route.params.postID).then(res => {
      this.post = res.fields;
    });
  }
};
</script>

 <style scoped>
.post {
  margin-bottom: 50px;
  background: #555;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
