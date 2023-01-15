<template>
  <div>
    Money: {{ info.money }} Spent money: {{ info.spent_money }} Income:{{
      info.income_track.values[info.income_track.spot]
    }}
    <TileStock
      :industry_tile_stock="info.industry_tile_stock"
      :link_tile_stock="info.link_tile_stock"
    />
  </div>
</template>

<script setup lang="ts">
import * as possibilities from "~/assets/js/possibilities";
const props = defineProps({
  info: {
    type: possibilities.Player,
    required: true,
  },
});
</script>

<style>
</style>