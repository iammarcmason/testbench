<template>
  <span>
    <home-top></home-top>
    <home-details></home-details>
    <home-plans></home-plans>
  </span>
</template>

<script>
import HomeTop from "@/components/HomeTop";
import HomeDetails from "@/components/HomeDetails";
import HomePlans from "@/components/HomePlans";

export default {
  name: "home",
  components: {
    HomeTop,
    HomeDetails,
    HomePlans
  }
};
</script>