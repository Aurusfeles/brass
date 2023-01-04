<template>
  <div class="canal" :style="css_color">
    <img src="~/assets/images/canal.png" alt="canal" />
  </div>
</template>

<script setup>
import { useGameStore } from "@/stores/game_store";
const game_store = useGameStore();
</script>

<script lang="ts">
export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  computed: {
    players() {
      return game_store.players;
    },
    css_color() {
      if (this.info.player === undefined) {
        return "";
      }
      return "background-color:" + this.players[this.info.player].color + ";";
    },
  },
};
</script>

<style>
.canal {
  position: absolute;
  border: 1px solid black;
  border-radius: 4px;
}
</style>