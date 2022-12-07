<template>
  <div class="place" :style="style">
    <component
      :is="type"
      :info="info"
      style="width: 100%; height: 100%"
    ></component>
  </div>
</template>

<script setup>
const players = usePlayers();
</script>


<script>
import port_place from "~/components/port_place.vue";
import ironworks_place from "~/components/ironworks_place.vue";
import coal_mine_place from "~/components/coal_mine_place.vue";
import cotton_mill_place from "~/components/cotton_mill_place.vue";
import cotton_mill_or_port_place from "~/components/cotton_mill_or_port_place.vue";
import cotton_mill_or_coal_mine_place from "~/components/cotton_mill_or_coal_mine_place.vue";
import shipyard_place from "~/components/shipyard_place.vue";
export default {
  components: {
    port_place,
    shipyard_place,
    cotton_mill_place,
    coal_mine_place,
    ironworks_place,
    cotton_mill_or_port_place,
    cotton_mill_or_coal_mine_place,
  },
  props: {
    info: {
      type: Object,
    },
  },
  computed: {
    type() {
      if (this.info.marker !== undefined) {
        return this.info.marker.type + "_place";
      } else {
        return this.info.type + "_place";
      }
    },
    style() {
      return this.css_color;
    },
    css_color() {
      if (this.info.marker === undefined) {
        return "background-color:lightgray";
      }
      return (
        "background-color:" + this.players[this.info.marker.player].color + ";"
      );
    },
  },
};
</script>

<style>
.place {
  width: 32px;
  height: 32px;
  border: 1px solid black;
  border-radius: 4px;
  margin: 2px 2px;
  padding: 2px 2px;
}

.place img {
  max-width: 100%;
  max-height: 100%;
}
</style>
