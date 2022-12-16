<template>
  <div>
    <div class="image" />
    <div class="victory_points" :style="verso">
      {{ victory_points }}
    </div>
    <div class="cubes">
      <div v-for="(k, i) in cubes" :key="i" :class="'cube ' + cube_type"></div>
    </div>
    <div class="level">{{ level }}</div>
    <div class="production" :style="recto">{{ production }}</div>
    <div class="cost" :style="recto">{{ cost }}</div>
  </div>
</template>

<script>
import * as possibilities from "~/assets/js/possibilities";
export default {
  props: {
    info: {
      type: possibilities.BuildingMarker,
      required: true,
    },
  },
  computed: {
    verso() {
      return this.info.flipped ? "" : "display:none;";
    },
    recto() {
      return this.info.flipped ? "display:none;" : "";
    },
    cubes() {
      return this.info.cube_quantity;
    },
    cube_type() {
      return this.cube_type;
    },
    level() {
      return this.info !== undefined ? this.info.level : "";
    },
    production() {
      return this.info !== undefined ? this.info.production : "";
    },
    victory_points() {
      return this.info !== undefined ? this.info.vp : "";
    },
    cost() {
      return this.info !== undefined ? this.info.cost : "";
    },
  },
};
</script>

<style>
.multiple {
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

.image {
  max-width: 100%;
  max-height: 100%;
}

.victory_points {
  position: absolute;
  background-color: hotpink;
  bottom: 0px;
  right: 0px;
}

.level {
  position: absolute;
  bottom: 0px;
  left: 0px;
}

.production {
  position: absolute;
  top: 0px;
  left: 0px;
}

.cost {
  position: absolute;
  top: 0px;
  right: 0px;
}

.coal {
  background-color: hsl(0deg 0% 30%);
}

.iron {
  background-color: hsl(30deg 80% 80%);
}

.flipped {
  display: inherit;
}

.cubes {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  gap: 2px;
}
.cube {
  width: 10px;
  height: 10px;
}
</style>
