<template>
  <div class="building_counter_stock">
    <div
      class="category"
      v-for="(category, category_key) in building_counter_stock"
      :key="category_key"
    >
      <BuildingCounter
        v-for="(counter, index) in category"
        :key="index"
        :info="counter"
      >
        {{ counter }}
      </BuildingCounter>
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

const building_counter_stock = computed(() => {
  return players[props.player_index].building_counter_stock;
});

const link_counter_stock = computed(() => {
  return players[props.player_index].link_counter_stock;
});
</script>

<style>
.building_counter_stock {
  display: flex;
  max-width: 180px;
}
</style>