<template>
  <div class="place">
    <component
      :is="info.type + '_place'"
      :info="info"
      style="width: 100%; height: 100%"
    ></component>
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
};
</script>

<style>
.place {
  width: 32px;
  height: 32px;
}

.place img {
  max-width: 100%;
  max-height: 100%;
}
</style>
