<template>
  <v-container>
    <v-layout>
      <div class="project">
        <h1>Project Page</h1>
        <component v-bind:is="componentFile"></component>
      </div>
    </v-layout>
  </v-container>
</template>
 <script>
export default {
  name: "project",

  data() {
    return {
      pageURL:
        "https://testbed.iammarcmason/project/" + this.$route.params.projectID,
      projectID: this.$route.params.projectID
    };
  },
  computed: {
    componentFile() {
      return () => import(`@/components/projects/${this.projectID}.vue`);
    }
  },
  mounted() {}
};
</script>

 <style scoped>
.post {
  margin-bottom: 50px;
  background: #555;
  padding-left: 20px;
  padding-right: 20px;
}
.project {
  width: 100%;
  height: 1em;
}
</style>
