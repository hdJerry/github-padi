<template>
  <button class="btn_gitbub" :class="btnStyle" v-bind="$attrs">
    <loader :color="loaderColor" v-if="loading" />
    <slot v-else />
  </button>
</template>

<script>
import Loader from "./Loader.vue";
export default {
  name: "AppButton",
  components: { Loader },
  props: {
    btnStyle: {
      type: String,
      default: "",
    },
    loaderColor: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn_github {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
