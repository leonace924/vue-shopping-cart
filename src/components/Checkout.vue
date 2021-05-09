<template>
  <div class="w-64 px-8 py-10 bg-gray-100 rounded-r xl:w-72">
    <h1 class="pb-4 text-lg font-medium text-black border-b border-gray-300">Order Summary</h1>
    <div class="flex py-8 border-b border-gray-300">
      <span class="text-sm text-gray-700"> {{ cartSize }} Items </span>
    </div>
    <div class="flex py-6 border-b border-gray-300">
      <span class="text-xs text-gray-500 uppercase">
        Discount
      </span>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'checkout',
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartSize', 'cartTotalAmount']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
