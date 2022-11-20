<template>
  <div>
    <div v-for="(place, index) in info" :key="index">
      {{ index + place.type }}
      <component :info="place" :is="place.type + '_place'"></component>
    </div>
  </div>
</template>

<script>
import port_place from "~/components/port_place.vue";
import ironworks_place from "~/components/ironworks_place.vue";
import coal_mine_place from "~/components/coal_mine_place.vue";
import cotton_mill_place from "~/components/cotton_mill_place.vue";
import cotton_mill_or_port_place from "~/components/cotton_mill_or_port_place.vue";
import cotton_mill_or_coal_mine_place from "~/components/cotton_mill_or_coal_mine_place.vue";
import shipyard_place from "~/components/shipyard_place.vue";
import construction_place from "~/components/construction_place.vue";
export default {
  components: {
    construction_place,
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
};
</script>

<style>
</style>