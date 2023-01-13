<template>
  <div
    class="canal"
    :id="era + '-' + info.link[0] + '-' + info.link[1]"
    :style="css_color"
  ></div>
</template>

<script setup>
import { useGameStore } from "@/stores/game_store";
const { players } = useGameStore();
const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
  era: {
    type: String,
    required: true,
  },
});

const css_color = computed(() => {
  if (props.info.player === undefined) {
    return "";
  }
  return "background-color:" + players[props.info.player].color + ";";
});
</script>

<style>
.canal {
  width: 15px;
  height: 15px;
  position: absolute;
  border: 1px solid black;
  border-radius: 50%;
}

#canal-warrington_and_runcorn-ellesmere_port {
  left: 202px;
  top: 540px;
}

#canal-liverpool-ellesmere_port {
  left: 138px;
  top: 520px;
}

#canal-ellesmere_port-northwich {
  left: 225px;
  top: 643px;
}

#canal-the_midlands-northwich {
  left: 327px;
  top: 711px;
}

#canal-macclesfield-the_midlands {
  left: 415px;
  top: 697px;
}

#canal-stockport-macclesfield {
  left: 460px;
  top: 630px;
}

#canal-manchester-stockport {
  left: 460px;
  top: 550px;
}

#canal-manchester-warrington_and_runcorn {
  left: 334px;
  top: 504px;
}

#canal-bolton-bury {
  left: 384px;
  top: 384px;
}

#canal-manchester-bolton {
  left: 374px;
  top: 450px;
}

#canal-manchester-bury {
  left: 432px;
  top: 413px;
}

#canal-liverpool-wigan {
  left: 160px;
  top: 440px;
}

#canal-warrington_and_runcorn-wigan {
  left: 246px;
  top: 446px;
}

#canal-preston-wigan {
  left: 193px;
  top: 330px;
}
</style>