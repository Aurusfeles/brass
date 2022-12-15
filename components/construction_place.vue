<template>
  <div class="place">
    <div v-if="info !== undefined">
      <div :class="image_class"></div>
      <BuildingMarker :info="info.building_marker" />
    </div>
  </div>
</template>

<script setup lang="ts">
const players = usePlayers();
</script>


<script lang="ts">
import * as possibilities from "~/assets/js/possibilities";
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
      type: possibilities.ConstructionPlace,
    },
  },
  computed: {
    image_class(building_type: possibilities.BuildingType) {
      return "";
    },
  },
};
</script>

<style>
.place {
  position: relative;
  width: 32px;
  height: 32px;
  border: 1px solid black;
  border-radius: 4px;
  margin: 2px 2px;
  padding: 2px 2px;
  font-size: 11px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  background-color: lightgray;
}

.image {
  background-size: contain;
  width: 100%;
  height: 100%;
  position: relative;
}

.coal_mine {
  background-image: url("~/assets/images/coal_mine.png");
}
.cotton_mill {
  background-image: url("~/assets/images/cotton_mill.png");
}
.port {
  background-image: url("~/assets/images/port.png");
}
.shipyard {
  background-image: url("~/assets/images/shipyard.png");
}
.ironworks {
  background-image: url("~/assets/images/ironworks.png");
}
</style>
