<script setup>
import {computed} from "vue";

const props = defineProps({
  options: Array,
  label: String,
  modelValue: Object
});

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
});

</script>

<template>
  <div class="select-block">
    <label
        for="some_select_id"
        class="select-block__label"
    >
      {{ label }}
    </label>
    <select
        id="some_select_id"
        v-model="value"
        class="select-block__select"
    >
      <option
          v-for="option in options"
          :key="option.id"
          :value="option"
          class="select-block__option"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.select-block {
  display: block;

  &__label {
    display: block;
    color: black;
  }

  &__select {
    padding: 5px;
    border-radius: 4px;

    &:focus, &:hover {
      border-color: #646cff;
      outline-color: #646cff;
    }
  }

  &__option {
    display: block;
  }
}
</style>