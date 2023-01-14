<template>
  <div class="industry_tile_stock">
    <div
      class="category"
      v-for="(category, category_key) in industry_tile_stock"
      :key="category_key"
    >
      <div class="place" v-for="(tile, index) in category" :key="index">
        <IndustryTile :info="tile" class="tile">
          {{ tile }}
        </IndustryTile>
      </div>
    </div>
  </div>

  <div class="link_stock"></div>
</template>

<script setup lang="ts">
import { useGameStore } from "~/stores/game_store";
const { players } = useGameStore();

const props = defineProps({
  player_index: {
    type: Number,
    required: true,
  },
});

const industry_tile_stock = computed(() => {
  return players[props.player_index].industry_tile_stock;
});

const link_tile_stock = computed(() => {
  return players[props.player_index].link_tile_stock;
});
</script>

<style>
.industry_tile_stock {
  display: flex;
  max-width: 200px;
  justify-content: space-between;
}
.place {
  position: relative;
  width: 33px;
  height: 33px;
  border: 1px solid black;
  font-size: 11px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  background-color: lightgray;
}

.tile {
  position: absolute;
  width: 33px;
  height: 33px;
}
</style>