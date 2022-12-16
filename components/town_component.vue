<template>
  <div class="town" :id="name">
    <div class="place_group">
      <ConstructionPlace
        v-for="(place, index) in info.places"
        :key="index"
        :info="place"
      />
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
};
</script>

<style>
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
</style>