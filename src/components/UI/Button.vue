<template>
  <button class="btn_gitbub" :class="btnstyle" v-bind="attrs" v-on="$listener">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  btnstyle: {
    type: String,
    default: "",
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
