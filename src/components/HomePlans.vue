<template>
  <v-container grid-list-lg class="btm">
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Latest posts</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md4 v-for="post in posts" v-bind:key="post.fields.slug">
        <router-link :to="{ name: 'post', params: {postID: post.sys.id } }">
          <v-card>
            <v-img :src="post.fields.heroImage.fields.file.url" height="500px">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">{{ post.fields.title }}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ post.fields.title }}</h3>
                <div>{{ post.fields.description }}</div>
              </div>
            </v-card-title>
          </v-card>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const query = {
  skip: 0,
  limit: 3,
  order: "-sys.createdAt",
  include: 3
};

export default {
  name: "HomePlans",
  data() {
    return { posts: [], includes: [] };
  },
  mounted() {
    return this.$contentful
      .getEntries(query)
      .then(res => (this.posts = res.items))
      .then(res => (this.assets = res.includes));
  }
};
</script>
 <style scoped>
.btm {
  padding-bottom: 56px;
}
a {
  text-decoration: none;
}
</style>