<template>
  <div>
    <GameMap :info="game.map" />
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
  </div>
</template>

<script lang="ts" setup>
const game = useGame();
</script>



<script lang="ts">
import base_map from "~/assets/js/map";
import my_hand from "~/components/my_hand.vue";
import * as possibilities from "~/assets/js/possibilities";

export default {
  data() {},
  mounted() {},
};
</script>

<style>
</style>