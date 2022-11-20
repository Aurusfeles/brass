<template>
  <div>
    <TownComponent v-for="(v, k) in base_map.towns" :key="k" :info="v" />
  </div>
</template>

<script>
import base_map from "~/assets/js/map";
import town_component from "~/components/town_component.vue";
export default {
  components: {
    town_component,
  },
  data() {
    return {
      base_map,
    };
  },
};
</script>

<style>
</style>