<template>
  <div class="multiple">
    <div class="half">
      <img src="~/assets/images/cotton_mill.png" :alt="info.type" />
    </div>
    <div class="half bottom_right">
      <img src="~/assets/images/coal_mine.png" :alt="info.type" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
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
</style>
