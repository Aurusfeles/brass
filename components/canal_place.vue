<template>
  <div class="canal" :style="css_color">
    <img src="~/assets/images/canal.png" alt="canal" />
  </div>
</template>

<script setup>
import { useGameStore } from "@/stores/game_store";
const { players } = useGameStore();
const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
});

const css_color = computed(() => {
  if (props.info.player === undefined) {
    return "";
  }
  return "background-color:" + players[props.info.player].color + ";";
});
</script>

<style>
.canal {
  position: absolute;
  border: 1px solid black;
  border-radius: 4px;
}
</style>