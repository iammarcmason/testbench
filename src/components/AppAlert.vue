<template>
  <div>
    <v-alert
      v-model="alert"
      border="left"
      close-text="Close Alert"
      color="deep-purple accent-4"
      dark
      dismissible
    >
      Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus.
      Vivamus consectetuer hendrerit lacus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
    </v-alert>
    <div class="text-center">
      <v-btn v-if="!alert" color="deep-purple accent-4" dark @click="alert = true">Reset</v-btn>
    </div>
  </div>
</template>
 <script>
const query = {
  skip: 0,
  limit: 10,
  content_type: "blogPost",
  order: "-sys.createdAt",
  include: 2
};

export default {
  name: "appAlert",
  data() {
    return {
      alert: true
    };
  },
  mounted() {
    return this.$contentful
      .getEntries(query)
      .then(res => (this.posts = res.items));
  }
};
</script>