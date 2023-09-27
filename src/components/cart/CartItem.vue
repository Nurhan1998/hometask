<script setup>
import BaseButton from '../base-components/BaseButton.vue';
import { ref } from "vue";
import BaseInput from "../base-components/BaseInput.vue";

const props = defineProps({
  product: Object,
});

const isEditing = ref(false);
const inputData = ref(props.product.name);

const emit = defineEmits(["changeCount", "deleteItem", "editItem"])

const handleEditClick = () => {
  isEditing.value = true
}

const handleSaveClick = () => {
  emit('editItem', inputData)
  isEditing.value = false
}
</script>

<template>
  <div class="product">
    <div class="product__top">
      <BaseInput
          v-if="isEditing"
          v-model="inputData"
      />
      <h3 v-else class="product__name">
        {{ product.name }}
      </h3>

      <div class="product__counter">
      <BaseButton
          @click="emit('changeCount',  true)"
          content="+"
      />
      <div class="product__count">{{ product.count }}</div>
      <BaseButton
          @click="emit('changeCount',  false)"
          content="-"
      />
    </div>
    </div>

    <div class="product__bottom">
      <BaseButton
          @click="emit('deleteItem')"
          content="удалить"
      />
      <BaseButton
          v-if="isEditing"
          @click="handleSaveClick"
          content="сохранить"
      />
      <BaseButton
          v-else
          @click="handleEditClick"
          content="редактировать"
      />
    </div>
  </div>

</template>

<style lang="scss" scoped>
.product {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: black;
  width: 460px;
  height: 100px;

  &__top {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  &__bottom {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  &__counter {
    display: flex;
  }

  &__count {
    margin: 0 10px;
  }

  &:not(:first-child) {
    margin-top: 10px;
  }
}
</style>