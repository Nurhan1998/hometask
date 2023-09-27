<script setup>
import { reactive } from "vue";
import ClientData from './components/ClientData.vue'
import PickUpPoints from './components/PickUpPoints.vue'
import ChooseCity from './components/SelectCity.vue'
import BaseButton from './components/base-components/BaseButton.vue'
import CartList from './components/cart/CartList.vue'


const state = reactive({
  city: null,
  pickupPoint: null,
  clientData: {
    name: null,
    surname: null,
    phone: null
  },
  order: []
})

const handleSendClick = (state) => {
  console.log(state)
}

</script>

<template>
  <h1>Оформление заказа</h1>
  <div class="checkout">
    <form class="form" @submit.prevent>
      <ChooseCity v-model="state.city"/>
      <PickUpPoints
          :selectedCity="state.city"
          v-model="state.pickupPoint"
      />
      <ClientData v-model="state.clientData"/>
      <BaseButton
          class="form__submit"
          content="Отправить"
          @click.prevent="handleSendClick(state)"
      />
    </form>
    <CartList v-model="state.order"/>
  </div>
</template>

<style lang="scss" scoped>
.checkout {
  display: flex;
  align-items: flex-start;
}

.form {
  width: 80%;
  margin-right: 20px;

  &__submit {
    margin-top: 10px;
    background-color: #4b4545;
  }
}
</style>
