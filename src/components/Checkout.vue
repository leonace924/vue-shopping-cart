<template>
  <div class="flex flex-col w-full px-8 py-10 bg-gray-100 rounded-r lg:h-full lg:w-64 xl:w-72">
    <h1 class="pb-4 text-lg font-medium text-black border-b border-gray-300">Order Summary</h1>
    <div class="flex justify-between py-8 border-b border-gray-300">
      <span class="text-sm text-gray-700">{{ cartSize }} Items</span>
      <span class="text-base font-semibold">{{ currency(cartOriginalPrice) }}</span>
    </div>
    <div class="py-6 border-b border-gray-300">
      <span class="block mb-5 text-xs text-gray-500 uppercase">
        Discounts
      </span>

      <div class="grid gap-5">
        <div v-for="rule in discountRules || []" :key="rule.name" class="flex justify-between">
          <span class="text-sm text-gray-700">{{ rule.name }}</span>
          <span class="text-sm font-semibold">
            {{ currency(discountProduct(rule.product)) }}
          </span>
        </div>
      </div>
    </div>

    <div class="mt-auto">
      <div class="flex items-center justify-between py-6 border-t border-gray-300">
        <span class="text-sm text-gray-700 uppercase">
          Total Cost
        </span>
        <span class="text-xl font-bold text-gray-700">
          {{ currency(cartTotalPrice) }}
        </span>
      </div>
      <button
        class="w-full p-4 mb-6 text-base font-semibold leading-3 text-white bg-indigo-600 rounded focus:outline-none"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script>
import { currency } from '@/utils/currency';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'checkout',
  computed: {
    ...mapState(['cart', 'discountRules']),
    ...mapGetters(['cartSize', 'cartOriginalPrice', 'cartTotalPrice', 'discountProduct']),
  },
  setup() {
    return {
      currency,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
