<template>
  <div>
    <div class="hand">
      <div
        class="card"
        v-for="(card, index) in content"
        :key="index"
        @click="card_click(card)"
      >
        {{ card.type == "location" ? card.location : card.industry }}
      </div>
    </div>
    <div class="possibilities">
      <div v-for="(v, k) in state.playing_possibilities" :key="k">
        {{ v }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as possibilities from "~/assets/js/possibilities";
const state = reactive({ playing_possibilities: [] });
const props = defineProps({
  content: {
    type: Array,
    required: true,
  },
});

function card_click(card: possibilities.Card) {
  alert("clic! ");
}
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