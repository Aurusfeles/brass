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

#barrow_in_furness {
  left: 31px;
  top: 58px;
}

#blackburn {
  left: 331px;
  top: 255px;
}
#blackburn .place:nth-child(1) {
  position: absolute;
  left: -18px;
  top: 37px;
}

#blackburn .place:nth-child(2) {
  position: absolute;
  left: 19px;
  top: 37px;
}

#birkenhead {
  left: 67px;
  top: 509px;
}

#bury {
  left: 414px;
  top: 364px;
}

#ellesmere_port {
  left: 171px;
  top: 581px;
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

#liverpool {
  left: 67px;
  top: 400px;
}

#liverpool .place:nth-child(2) {
  position: absolute;
  left: 0px;
  top: 37px;
}

#liverpool .place:nth-child(3) {
  position: absolute;
  left: 37px;
  top: 37px;
}

#stockport {
  left: 441px;
  top: 581px;
}

#macclesfield {
  left: 431px;
  top: 651px;
}

#manchester {
  left: 424px;
  top: 437px;
}

#manchester .place:nth-child(1) {
  position: absolute;
  left: -20px;
  top: 36px;
}
#manchester .place:nth-child(2) {
  position: absolute;
  left: 18px;
  top: 36px;
}

#manchester .place:nth-child(4) {
  position: absolute;
  left: -1px;
  top: 73px;
}

#warrington_and_runcorn {
  left: 242px;
  top: 472px;
}

#warrington_and_runcorn .place:nth-child(2) {
  position: absolute;
  left: 0px;
  top: 37px;
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