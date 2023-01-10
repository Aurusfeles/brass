<template>
  <div>
    <GameMap :info="map" />
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
    <TileStock :player_index="0" />
  </div>
</template>

<script lang="ts" setup>
import { useGameStore } from "@/stores/game_store";
const { map } = useGameStore();
</script>

<style>
</style>