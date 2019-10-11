<template>
  <v-container>
    <v-layout column>
      <h1>Blog Page</h1>

      <v-flex class="post">
        <div class="headline mt-3">{{ post.title }}</div>
        <p class="subheading mt-3">{{ post.description }}</p>
        <p class="subheading mt-3">{{ post.body }}</p>
      </v-flex>
      <div id="disqus_thread"></div>
    </v-layout>
  </v-container>
</template>
 <script>
export default {
  name: "blog",
  data() {
    return { post: [] };
  },
  mounted() {
    return this.$contentful
      .getEntry(this.$route.params.postID)
      .then(res => {
        this.post = res.fields;
      })
      .catch(console.error);
    //"https://testbed.iammarcmason/post/" + this.$route.params.postID;
  }
};

var disqus_config = function() {
  this.page.url =
    "https://testbed.iammarcmason/post/" + this.$route.params.postID; // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = this.$route.params.postID; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() {
  // DON'T EDIT BELOW THIS LINE
  var d = document,
    s = d.createElement("script");
  s.src = "https://iam-testbed.disqus.com/embed.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
})();
</script>

 <style scoped>
.post {
  margin-bottom: 50px;
  background: #555;
}
</style>
