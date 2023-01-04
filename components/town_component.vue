<template>
  <div class="town" :id="name">
    <div class="place_group">
      <ConstructionPlace
        v-for="(place, index) in info.places"
        :key="index"
        :info="place"
        class="place"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import * as possibilities from "~/assets/js/possibilities";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  info: {
    type: possibilities.Town,
    required: true,
  },
});
</script>

<style>
.place {
  margin: 1px 1px;
}
.town {
  position: absolute;
}

.place_group {
  position: relative;
  display: flex;
}

#bury {
  left: 414px;
  top: 364px;
}

#rochdale {
  left: 525px;
  top: 342px;
}

#colne {
  left: 489px;
  top: 172px;
}

#burnley {
  left: 398px;
  top: 227px;
}
#oldham {
  left: 493px;
  top: 414px;
}
#lancaster {
  left: 176px;
  top: 94px;
}
#stockport {
  left: 441px;
  top: 581px;
}
#maclesfield {
  left: 431px;
  top: 651px;
}

#wigan {
  left: 175px;
  top: 401px;
}

#fleetwood {
  left: 85px;
  top: 165px;
}

#bolton {
  left: 295px;
  top: 365px;
}

#preston {
  left: 194px;
  top: 220px;
}
#preston .place:nth-child(1) {
  position: absolute;
  left: -18px;
  top: 36px;
}
#preston .place:nth-child(2) {
  position: absolute;
  left: 19px;
  top: 36px;
}

#bolton .place:nth-child(2) {
  position: absolute;
  left: 17px;
  top: 36px;
}
</style>