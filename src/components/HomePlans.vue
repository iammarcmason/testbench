<template>
  <v-container grid-list-lg class="btm">
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Previous / Current Work</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md4 v-for="post in posts" v-bind:key="post.fields.slug">
        <v-card>
          <v-img src="https:" +{{post.fields.file.url}} height="500px">
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
      </v-flex>
      <!--
      <v-flex xs12 sm12 md4>
        <v-card>
          <v-img src="https://picsum.photos/id/1018/700/800" height="500px">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text">PRJ2</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Project 2</h3>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4>
        <v-card>
          <v-img src="https://picsum.photos/id/1022/700/800" height="500px">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text">PRJ3</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Project 3</h3>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

      -->
    </v-layout>
  </v-container>
</template>

<script>
const query = {
  skip: 0,
  limit: 3,
  order: "-sys.createdAt"
};

export default {
  name: "HomePlans",
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
.btm {
  padding-bottom: 56px;
}
</style>