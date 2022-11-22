<template>
  <div>
    <div class="map">
      <TownComponent v-for="(v, k) in base_map.towns" :key="k" :info="v" />
      <CanalPlace
        v-for="(canal, index) in base_map.canals"
        :key="index"
        :town_a="base_map.towns[canal[0]]"
        :town_b="base_map.towns[canal[1]]"
      >
      </CanalPlace>
    </div>
    <MyHand :content="my_cards" />
  </div>
</template>

<script>
import base_map from "~/assets/js/map";
export default {
  data() {
    return {
      base_map,
      my_cards: [
        {
          type: "location",
          location: "bury",
        },
        {
          type: "location",
          location: "manchester",
        },
        {
          type: "location",
          location: "colne",
        },
        {
          type: "building",
          building: "coal_mine",
        },
        {
          type: "building",
          building: "port",
        },
        {
          type: "building",
          building: "cotton_mill",
        },
      ],
    };
  },
};
</script>

<style>
.map {
  position: relative;
}
</style>