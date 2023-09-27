<script setup>
import {computed} from "vue";

const props = defineProps({
  label: {
    default: 'label',
    type: String
  },
  modelValue: String,
  value: String
})

const emit = defineEmits(['update:modelValue'])

const picked = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})

</script>

<template>
  <div class="radio-block">
    <input
        id="some_radio_id"
        v-model="picked"
        :value="value"
        class="radio-block__input"
        type="radio"
    >
    <label
        for="some_radio_id"
        class="radio-block__label"
    >
      {{ label }}
    </label>
  </div>
</template>

<style lang="scss" scoped>
.radio-block {
  display: block;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &__label {
    color: black;

    &:focus, &:hover {
      border-color: #646cff;
      outline-color: #646cff;
    }
  }
}
</style>