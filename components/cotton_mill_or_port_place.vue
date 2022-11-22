<template>
  <div class="multiple">
    <div class="half">
      <img src="~/assets/images/cotton_mill.png" :alt="info.type" width="64" />
    </div>
    <div class="half bottom_right">
      <img src="~/assets/images/port.png" :alt="info.type" width="64" />
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
