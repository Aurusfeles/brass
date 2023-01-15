<template>
  <div>
    <GameMap :info="map" />
    <CoalMarket :market_spot="coal_market.spot" />
    <IronMarket :market_spot="iron_market.spot" />
    <PlayerAssets
      v-for="(player, player_index) in players"
      :key="player_index"
      :info="player"
    />
  </div>
</template>

<script lang="ts" setup>
import { useGameStore } from "@/stores/game_store";
const { map, coal_market, iron_market, players } = useGameStore();
</script>

<style>
</style>