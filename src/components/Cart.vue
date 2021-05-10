<template>
  <div class="flex-1 p-6 lg:p-10">
    <h1 class="pb-4 text-lg font-medium text-black border-b border-gray-300">Shopping cart</h1>
    <div class="flex py-8">
      <div class="w-1/3 text-xs text-gray-400 uppercase lg:w-9/20">
        Product details
      </div>

      <div class="flex justify-center w-3/12 text-xs text-gray-400 uppercase lg:w-1/5">
        Quantity
      </div>
      <div class="flex justify-center w-3/12 text-xs text-gray-400 uppercase lg:w-1/5">
        Price
      </div>

      <div class="flex justify-center w-1/6 text-xs text-gray-400 uppercase lg:w-3/10">
        Total
      </div>
    </div>

    <div class="grid gap-8">
      <div v-for="product in products || []" :key="product.id">
        <Product
          :title="product.title"
          :code="product.id"
          :price="product.price"
          :imageUrl="product.image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Product from '@/components/Product';

export default {
  name: 'cart',
  components: {
    Product,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(['cart', 'products']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
