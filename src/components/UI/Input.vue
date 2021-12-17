<template>
  <div class="input_Container">
    <label v-if="label" :for="type">
      {{ label }}
    </label>
    <input
      :type="type"
      v-bind="$attrs"
      :value="value"
      :class="inputStyle"
      :id="tyoe"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    for: String,
    inputStyle: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    label: String,
  },
};
</script>

<style lang="scss">
.input_Container {
  input {
    padding: 10px;
    outline: none;
  }
  label {
    display: flex;
    justify-content: flex-start;
    font-weight: bold;
  }
}
</style>
