<template>
  <span>
    <v-navigation-drawer app v-model="drawer" class="grey darken-4" dark disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item :key="index" :to="item.link">
            <v-list-item-content>{{item.title}}</v-list-item-content>
          </v-list-item>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="grey darken-4" dark>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/">
        <v-toolbar-title to="/">{{appTitle}}</v-toolbar-title>
      </router-link>
      <router-link to="/">
        <v-btn text class="hidden-sm-and-down" to="/">Home</v-btn>
      </router-link>
      <v-btn text class="hidden-sm-and-down" to="/blog">Blog</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn text class="hidden-sm-and-down" to="/about">About</v-btn>
      <v-btn text class="hidden-sm-and-down" to="/projects">Projects</v-btn>
    </v-app-bar>
  </span>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      appTitle: "MdM Data Solutions",
      drawer: false,
      items: [
        { title: "Home", link: "/" },
        { title: "Blog", link: "/blog" },
        { title: "About", link: "/about" },
        { title: "Projects", link: "/projects" }
      ]
    };
  }
};
</script>
<style scoped>
a {
  color: white !important;
  text-decoration: none;
}
</style>

