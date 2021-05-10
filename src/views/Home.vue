<template>
  <div
    class="w-full h-screen bg-cover bg-dark-purple"
    :style="{
      backgroundImage: 'url(' + require('@/assets/images/background.png') + ')',
    }"
  >
    <div
      class="fixed max-w-5xl transform -translate-x-1/2 -translate-y-1/2 bg-white rounded w-modal md:w-5/6 top-1/2 left-1/2 h-modal max-h-160"
    >
      <div class="h-full overflow-auto lg:flex">
        <Cart />
        <Checkout />
      </div>
    </div>
  </div>
</template>

<script>
import Cart from '@/components/Cart';
import Checkout from '@/components/Checkout';

export default {
  name: 'home',
  components: {
    Cart,
    Checkout,
  },
};
</script>
