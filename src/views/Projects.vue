<template>
  <v-container fluid>
    <v-layout>
      <div class="projects">
        <h1>Projects Page</h1>

        <v-list three-line subheader>
          <v-header inset>Data Projects</v-header>

          <v-list-item
            v-for="item in dataProjects"
            :key="item.title"
            @click.prevent
            :to="item.sluglink"
          >
            <v-list-item-avatar>
              <v-icon :class="[item.iconClass]">{{item.icon}}</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle v-text="item.date"></v-list-item-subtitle>
              <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon>
                <v-icon color="grey lighten-1">mdi-information</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-header inset>Python Projects</v-header>

          <v-list-item
            v-for="item in pythonProjects"
            :key="item.title"
            @click.prevent
            :to="projects/ + item.slug"
          >
            <v-list-item-avatar>
              <v-icon :class="[item.iconClass]">{{item.icon}}</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon>
                <v-icon color="grey lighten-1">mdi-information</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </div>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "Projects",
  data: () => ({
    dataProjects: [
      {
        icon: "mdi-folder",
        iconClass: "grey lighten-1 white--text",
        title: "NHS Maternity Data Visualisations",
        sluglink: "project/NHS-Maternity-Data-Visualisations",
        date: "Jan 17, 2014",
        subtitle:
          "<span class='text--primary'>2015-2019</span> &mdash; An analysis of various maternity statistics from data found online using D3/chart.js & Vue"
      },
      {
        icon: "mdi-folder",
        iconClass: "grey lighten-1 white--text",
        title: "Python tests",
        sluglink: "project/python-test",
        date: "Jan 17, 2014",
        subtitle:
          "<span class='text--primary'>2015-2019</span> &mdash; An analysis of various  statistics from data found online using python"
      },
      {
        icon: "mdi-folder",
        iconClass: "grey lighten-1 white--text",
        title: "Work",
        date: "Jan 17, 2014",
        subtitle: "Jan 28, 2014"
      }
    ],
    pythonProjects: [
      {
        icon: "mdi-chart",
        iconClass: "blue white--text",
        title: "Vacation itinerary",
        subtitle: "Jan 20, 2014"
      },
      {
        icon: "mdi-call_to_action",
        iconClass: "amber white--text",
        title: "Kitchen remodel",
        subtitle: "Jan 10, 2014"
      }
    ]
  })
};
</script>
<style scoped>
.projects {
  width: 100%;
  height: 1em;
}
</style>