<script setup>
import { computed } from "vue";
import BaseInput from './base-components/BaseInput.vue'
import { clientDataFields } from '../constants/mockData.js'

const props = defineProps({
  modelValue: Object
})

const emit = defineEmits(['update:modelValue'])

const data = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})

</script>

<template>
  <section class="client-data">
    <h2>Данные клиента</h2>
    <BaseInput
        v-for="field in clientDataFields"
        v-model="data[field.fieldName]"
        :label="field.label"
        :type="field.type"
    />
  </section>
</template>

<style lang="scss" scoped>
  .client-data {
    h2 {
      color: black;
    }
  }
</style>