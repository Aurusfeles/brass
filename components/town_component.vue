<template>
  <div class="town" :style="position">
    <div :id="info.name">
      <div class="place_group">
        <ConstructionPlace
          v-for="(place, index) in info.places"
          :key="index"
          :info="place"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import construction_place from "~/components/construction_place.vue";
import * as possibilities from "~/assets/js/possibilities";
export default {
  components: {
    construction_place,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    info: {
      type: possibilities.Town,
      required: true,
    },
  },
  computed: {
    position() {
      //return `top:${this.info.position.y}px;left:${this.info.position.x}px;`;
      return "";
    },
  },
};
</script>

<style>
.town {
  position: absolute;
  width: 90px;
}

.place_group {
  display: flex;
  flex-wrap: wrap;
}

#Bury {
}
</style>