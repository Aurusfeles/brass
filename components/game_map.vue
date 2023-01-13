<template>
  <div class="map">
    <div v-if="info !== undefined" class="map_content">
      <TownComponent
        v-for="(v, k) in info.towns"
        :key="k"
        :info="v"
        :name="k"
      />
      <LinkPlace
        v-for="(link, index) in info.links"
        :key="index"
        :info="link"
        era="canal"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import * as possibilities from "~/assets/js/possibilities";
const props = defineProps({
  info: {
    type: possibilities.GameMap,
    required: true,
  },
});
</script>

<style>
.map {
  height: 820px;
  width: 640px;
  background-image: url("~/assets/images/clear_map.png");
}

.map_content {
  position: relative;
}
</style>


