<template>
  <div class="px-10 py-8">
    <h1 class="text-lg text-black font-medium pb-4 border-b border-gray-300">Shopping cart</h1>
    <div class="w-full">
      <div class="flex py-8">
        <div class="w-9/20 text-gray-400 text-xs uppercase">
          Product details
        </div>

        <div class="w-1/5 text-gray-400 text-xs uppercase flex justify-center">Quantity</div>
        <div class="w-1/5 text-gray-400 text-xs uppercase flex justify-center">
          Price
        </div>

        <div class="w-3/10 text-gray-400 text-xs uppercase flex justify-center">
          Total
        </div>
      </div>
    </div>

    <div class="w-full">
      <ShopItem></ShopItem>
    </div>
  </div>
</template>

<script>
import ShopItem from '@/components/ShopItem';

export default {
  name: 'cart',
  components: {
    ShopItem,
  },
  data() {
    return {
      totalPrice: 0,
      cart: [],
      products: [
        {
          code: 'X7R2OPX',
          title: 'Shirt',
          price: 60,
          image: '@/assets/images/shirt.png',
        },
        {
          code: 'X2G2OPZ',
          title: 'Mug',
          price: 5,
          image: '@/assets/images/mug.png',
        },
        {
          code: 'X3W2OPY',
          title: 'Cap',
          price: 10,
          image: '@/assets/images/cap.png',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
