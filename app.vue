<template>
  <div>
    <div class="map">
      <TownComponent v-for="(v, k) in base_map.towns" :key="k" :info="v" />
      <CanalPlace
        v-for="(index, canal) in base_map.canals"
        :key="index"
        :town_a="base_map.towns[canal.0]"
        :town_b="base_map.towns[canal.1]"
      />
    </div>
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
.map {
  position: relative;
}
</style>