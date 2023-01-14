<template>
  <div>
    <GameMap :info="map" />
    Money: {{ players[0].money }}
    <CoalMarket :market_spot="coal_market.spot" />
    <IronMarket :market_spot="iron_market.spot" />
    <TileStock :player_index="0" />
  </div>
</template>

<script lang="ts" setup>
import { useGameStore } from "@/stores/game_store";
const { map, coal_market, iron_market, players } = useGameStore();
</script>

<style>
</style>