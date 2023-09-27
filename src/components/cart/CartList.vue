<script setup>
import { reactive } from "vue";
import { defaultSelectedProducts } from '../../constants/mockData.js';
import { getNewTaskObject } from "../../utils/index.js";
import BaseInput from "../base-components/BaseInput.vue";
import BaseButton from "../base-components/BaseButton.vue";
import CartItem from './CartItem.vue'


const props = defineProps({
  modelValue: {
    type: Array,
    default: []
  },
  label: {
    type: String,
    default: "Label"
  }
})

let newProduct = reactive({...getNewTaskObject()})

const emit = defineEmits(['update:modelValue'])

emit('update:modelValue', defaultSelectedProducts)


const onChangeCount = (item, isIncrement) => {
  if(!isIncrement && item.count === 1) return;
  isIncrement ? item.count++ : item.count--;
}

const onDeleteItem = (item) => {
  const updatedList = props.modelValue.filter(elem => elem.id !== item.id);
  emit("update:modelValue", updatedList);
}

const onEditItem = (item, newName) => {
  const updatedList = props.modelValue.map(elem => elem.id === item.id ? {...elem, name: newName } : elem);
  emit("update:modelValue", updatedList);
}

const onAddNewItem = () => {
  const updatedList = [...props.modelValue, newProduct]
  emit('update:modelValue', updatedList)
  // todo: насколько норм так делать?)
  newProduct = reactive({...getNewTaskObject()})
}

</script>

<template>
<div class="cart">
  <CartItem
      v-for="product in modelValue"
      :key="product.id"
      :product="product"
      class="cart__item"
      @changeCount="onChangeCount(product, $event)"
      @deleteItem="onDeleteItem(product)"
      @editItem="onEditItem(product, $event)"
  />
  <div class="cart__add">
    <BaseInput
        v-model="newProduct.name"
        label="Название товара"
    />
    <BaseButton
        @click="onAddNewItem"
        content="Добавить"
    />
  </div>
</div>
</template>

<style lang="scss" scoped>
.cart {
  padding: 10px;
  min-height: 200px;
  background-color: #eee;
  border-radius: 4px;

  &__add {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>