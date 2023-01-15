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
import * as possibilities from "~/assets/js/possibilities";

const props = defineProps({
  industry_tile_stock: {
    type: possibilities.IndustryTileStock,
    required: true,
  },
  link_tile_stock: {
    type: Number,
    required: true,
  },
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