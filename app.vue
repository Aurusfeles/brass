<template>
  <div>
    <!--<CoalMarket :market_spot="3" />
    <IronMarket :market_spot="2" />
    <div class="map">
      <div class="map_content">
        <TownComponent v-for="(v, k) in game.map.towns" :key="k" :info="v" />
        <CanalPlace
          v-for="(canal, index) in canals"
          :key="index"
          :info="canal"
        />
      </div>
    </div>
    <MyHand :content="my_cards" />-->
    <TownComponent v-for="(v, k) in game.map.towns" :key="k" :info="v" />
  </div>
</template>

<script lang="ts" setup>
const towns = useTowns();
const canals = useCanals();
</script>



<script lang="ts">
import base_map from "~/assets/js/map";
import my_hand from "~/components/my_hand.vue";
import * as possibilities from "~/assets/js/possibilities";

export default {
  data() {
    return {
      game: new possibilities.Game(),
    };
  },
  mounted() {
    let game = new possibilities.Game();
    game.add_player("Aurus", "#FFAAAA");
    game.add_player("Bob", "#AAFFAA");
    let coal_mine = game.players[0].building_marker_stock.pop_building_tile(
      possibilities.BuildingType.CoalMine
    );
    if (coal_mine !== undefined) {
      game.map.set_building_marker(
        {
          town_name: possibilities.TownName.Wigan,
          construction_place_index: 0,
        },

        coal_mine,
        "none",
        "none"
      );
    }
    this.game = game;
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