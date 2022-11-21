<template>
  <div>
    <div class="half">
      <img src="~/assets/images/cotton_mill.png" :alt="info.type" width="64" />
    </div>
    <div class="half">
      <img src="~/assets/images/coal_mine.png" :alt="info.type" width="64" />
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
.half {
  width: 16px;
  height: 16px;
}
</style>
