<template>
  <div class="industry_tile_stock">
    <div
      class="category"
      v-for="(category, category_key) in industry_tile_stock"
      :key="category_key"
    >
      <IndustryTile v-for="(tile, index) in category" :key="index" :info="tile">
        {{ tile }}
      </IndustryTile>
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
  max-width: 180px;
}
</style>