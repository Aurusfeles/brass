<template>
  <div class="market">
    <div>Iron</div>
    <div v-for="(cost, index) in state.costs" :key="index" class="spot">
      {{ cost + "£" }}
      <div v-if="index >= market_spot">X</div>
    </div>
    <div>5£</div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({ costs: [1, 1, 2, 2, 3, 3, 4, 4] });

const props = defineProps({
  market_spot: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.market {
  display: flex;
}
.spot {
  border: 1px solid black;
}
</style>