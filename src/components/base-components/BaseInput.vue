<script setup>
import {computed} from "vue";

const props = defineProps({
  type: {
    default: 'text',
    type: String
  },
  label: String,
  modelValue: [String, Number]
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})

</script>

<template>
  <div class="input-block">
    <label
        v-if="label"
        class="input-block__label"
        for="some_input_id"
    >
      {{ label }}
    </label>
    <input
        id="some_input_id"
        v-model="value"
        class="input-block__input"
        :type="type"
    >
  </div>

</template>

<style lang="scss" scoped>
.input-block {
  display: block;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &__label {
    display: block;
    color: black;
  }

  &__input {
    display: block;
    min-width: 200px;
    min-height: 30px;
    border: 1px solid #1a1a1a;
    border-radius: 4px;

    &:focus, &:hover {
      border-color: #646cff;
      outline-color: #646cff;
    }
  }
}
</style>