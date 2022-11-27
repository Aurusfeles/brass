<template>
  <div class="market">
    <div>Coal</div>
    <div v-for="(cost, index) in costs" :key="index" class="spot">
      {{ cost + "£" }}
      <div v-if="index >= market_spot">X</div>
    </div>
    <div>5£</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      costs: [1, 1, 2, 2, 3, 3, 4, 4],
    };
  },
  props: {
    market_spot: { type: Number },
  },
};
</script>

<style scoped>
.market {
  display: flex;
}
.spot {
  border: 1px solid black;
}
</style>