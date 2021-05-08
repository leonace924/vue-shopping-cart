<template>
  <div
    class="w-full h-screen bg-dark-purple bg-cover"
    :style="{
      backgroundImage: 'url(' + require('@/assets/images/background.png') + ')',
    }"
  >
    <div
      class="bg-white rounded w-full md:w-3/4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-6"
    >
      <Cart />
    </div>
  </div>
</template>

<script>
import Cart from '@/components/Cart';

export default {
  name: 'home',
  components: {
    Cart,
  },
};
</script>
