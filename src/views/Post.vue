<template>
  <v-container>
    <v-layout column>
      <h1>Post Page</h1>
      <v-flex class="post">
        <div class="headline mt-3">{{ post.title }}</div>
        <p class="mt-3 body-2">{{ post.description }}</p>
        <v-divider></v-divider>

        <div class="mt-3 body-2" v-html="post.body">
          <!--<vue-markdown>{{ post.body }}</vue-markdown>-->
        </div>
      </v-flex>
    </v-layout>
    <div id="disqus_thread"></div>
    <div class="comments">
      <vue-disqus shortname="iam-testbed" :identifier="page_id" :url="pageURL"></vue-disqus>
    </div>
  </v-container>
</template>
 <script>
import VueMarkdown from "vue-markdown";
export default {
  name: "blog",
  data() {
    return {
      post: [],
      pageURL: "https://testbed.iammarcmason/post/" + this.$route.params.postID,
      page_id: this.$route.params.postID
    };
  },
  components: {
    VueMarkdown
  },
  mounted() {
    return this.$contentful.getEntry(this.$route.params.postID).then(res => {
      this.post = res.fields;
    });
  }
};
</script>

 <style>
.post {
  margin-bottom: 50px;
  background: #555;
  padding-left: 20px;
  padding-right: 20px;
}
code {
  background-color: #222 !important;
  color: #e37653 !important;
  padding: 10px;
  font-weight: 100 !important;
}
code .headr {
  text-align: right;
  margin-top: -20px;
  font-weight: 800;
  color: lime;
}
code hr {
  border: 1px solid #444;
}
code .pnk {
  color: hotpink !important;
}
code .lblu {
  color: lightblue !important;
}
code .dblu {
  color: rgb(43, 92, 253) !important;
}
code .ylo {
  color: yellow !important;
}
code .Lylo {
  color: #dcd079 !important;
}
code .org {
  color: orange !important;
}
code .grn {
  color: #63c597 !important;
}
code .wht {
  color: whitesmoke !important;
}
</style>
