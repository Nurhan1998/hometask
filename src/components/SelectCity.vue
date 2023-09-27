<script setup>
import { computed } from "vue";
import BaseSelect from './base-components/BaseSelect.vue'
import { pickupPointsByCities } from '../constants/mockData.js';


const props = defineProps({
  modelValue: Object
})

const emit = defineEmits(['update:modelValue'])

const city = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})

</script>

<template>
  <section class="choose-city">
    <h2>Доступные города</h2>
    <BaseSelect
        v-model="city"
        :options="pickupPointsByCities"
        label="Выберите город"
    />
  </section>
</template>

<style lang="scss" scoped>
.choose-city {
  margin-bottom: 20px;

  h2 {
    color: black;
  }
}
</style>