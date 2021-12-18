<template>
  <div class="input_Container">
    <label v-if="label" :for="type">
      {{ label }}
    </label>
    <input
      :type="type"
      v-bind="$attrs"
      :value="modelValue"
      :class="inputStyle"
      :id="type"
      autocomplete="new-value"
      autocorrect="false"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "AppInput",
  props: {
    inputStyle: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    label: String,
  },
  emits: ["update:modelValue"],
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
