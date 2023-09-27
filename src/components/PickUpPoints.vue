<script setup>
import BaseRadio from './base-components/BaseRadio.vue'
import {computed} from "vue";

const props = defineProps({
  modelValue: String,
  selectedCity: Object
})

const emit = defineEmits(['update:modelValue'])

const pickedPoint = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})

</script>

<template>
  <section class="pickup-points">
    <h2>Доступные пункты вывоза заказов</h2>
    <BaseRadio
        v-for="(city, index) in selectedCity?.pickupPoints"
        :key="index"
        v-model="pickedPoint"
        :value="city"
        :label="city"
    />
  </section>
</template>

<style lang="scss" scoped>
.pickup-points {
  margin-bottom: 20px;
  min-height: 150px;

  h2 {
    color: black;
  }
}
</style>