<template>
  <div class="hand">
    <div
      class="card"
      v-for="(card, index) in content"
      :key="index"
      @click="card_click()"
    >
      {{ card.type == "location" ? card.location : card.building }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
    },
  },
  method: {
    card_click() {},
  },
};
</script>

<style>
.hand {
  display: flex;
}
.card {
  padding: 3px 3px;
  width: 100px;
  height: 150px;
  border: 1px solid black;
  border-radius: 4px;
  margin: 3px 3px;
}
</style>