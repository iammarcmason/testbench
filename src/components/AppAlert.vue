<template>
  <div>
    <v-alert
      v-for="post in posts"
      v-bind:key="post.fields.body"
      v-model="alert"
      border="left"
      close-text="Close Alert"
      type="info"
      dark
      dismissible
    >{{ post.fields.body }}</v-alert>
    <div class="text-center">
      <v-btn v-if="!alert" dark @click="alert = true">Reset</v-btn>
    </div>
  </div>
</template>
 <script>
const query = {
  skip: 0,
  limit: 10,
  content_type: "notification",
  order: "-sys.createdAt"
};

export default {
  name: "appAlert",
  data() {
    return {
      alert: true,
      posts: []
    };
  },
  mounted() {
    return this.$contentful
      .getEntries(query)
      .then(res => (this.posts = res.items));
  }
};
</script>