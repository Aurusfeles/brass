<template>
  <div class="place">
    <div :class="first_image_class"></div>
    <div v-if="is_multi" :class="second_image_class"></div>
    <IndustryTile
      class="tile"
      v-if="info.industry_tile !== undefined"
      :info="info.industry_tile"
    />
  </div>
</template>

<script setup lang="ts">
import * as possibilities from "~/assets/js/possibilities";

const props = defineProps({
  info: {
    type: possibilities.ConstructionPlace,
    required: true,
  },
});

const is_multi = computed(() => {
  return props.info.accepted_industry_types.length == 2;
});

const first_image_class = computed(() => {
  let image_class = "image ";
  image_class += props.info.accepted_industry_types[0];
  if (is_multi.value) {
    image_class += " half";
  }
  return image_class;
});

const second_image_class = computed(() => {
  let image_class = "image half bottom_right ";
  image_class += props.info.accepted_industry_types[1];
  return image_class;
});
</script>


<style>
.tile {
  position: absolute;
  width: 33px;
  height: 33px;
}

.place {
  position: relative;
  width: 33px;
  height: 33px;
  border: 1px solid black;
  font-size: 11px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  background-color: lightgray;
}

.image {
  position: absolute;
  background-size: contain;
  width: 31px;
  height: 31px;
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
