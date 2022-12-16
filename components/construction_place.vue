<template>
  <div class="place">
    <div class="background">
      <div :class="first_image_class"></div>

      <div v-if="is_multi" :class="second_image_class"></div>
    </div>
    <BuildingMarker
      v-if="info.building_marker !== undefined"
      :info="info.building_marker"
    />
  </div>
</template>

<script setup lang="ts">
const players = usePlayers();
</script>


<script lang="ts">
import * as possibilities from "~/assets/js/possibilities";

export default {
  props: {
    info: {
      type: possibilities.ConstructionPlace,
      required: true,
    },
  },
  computed: {
    is_multi() {
      return this.info.accepted_building_types.length == 2;
    },
    first_image_class() {
      let image_class = "image ";
      image_class += this.info.accepted_building_types[0];
      if (this.is_multi) {
        image_class += " half";
      }
      return image_class;
    },
    second_image_class() {
      let image_class = "image half bottom_right ";
      image_class += this.info.accepted_building_types[1];
      return image_class;
    },
  },
};
</script>

<style>
.place {
  position: relative;
  width: 31px;
  height: 31px;
  padding: 2px 2px;
  border: 1px solid black;
  font-size: 11px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  background-color: lightgray;
}

.image {
  background-size: contain;
  width: 31px;
  height: 31px;
  position: relative;
}

.half {
  position: absolute;
  width: 20px;
  height: 20px;
}
.bottom_right {
  right: 0px;
  bottom: 0px;
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
