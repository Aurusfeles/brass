<template>
  <div>
    <CoalMarket :market_spot="3" />
    <IronMarket :market_spot="2" />
    <div class="map">
      <div class="map_content">
        <TownComponent v-for="(v, k) in game.map.towns" :key="k" :info="v" />
        <CanalPlace
          v-for="(canal, index) in game.map.canals"
          :key="index"
          :town_a="game.map.towns[canal.link[0]]"
          :town_b="game.map.towns[canal.link[1]]"
        >
        </CanalPlace>
      </div>
    </div>
    <MyHand :content="my_cards" />
  </div>
</template>

<script>
import base_map from "~/assets/js/map";
import my_hand from "~/components/my_hand.vue";
import * as possibilities from "~/assets/js/possibilities";
import game from "~/assets/js/example_game";

export default {
  components: {
    my_hand,
  },
  data() {
    return {
      game,
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
  height: 900px;
  width: 700px;
}

.map_content {
  position: relative;
}
</style>