<template>
  <div class="w-full">
    <div class="flex">
      <div class="text-xs text-gray-400 w-9/20">
        <figure class="flex items-center flex-nowrap">
          <div class="grid mr-4 border border-gray-300 rounded w-18 h-18">
            <img
              class="object-cover w-100 h-100"
              :src="require('@/assets/images/' + imageUrl + '')"
              alt="item-avatar"
            />
          </div>
          <div>
            <h2 class="text-base font-bold text-indigo-600 normal-case">{{ title }}</h2>
            <p class="tracking-wide">Product code: {{ code }}</p>
          </div>
        </figure>
      </div>

      <div class="flex items-center justify-center w-1/5 text-xs text-gray-400 uppercase">
        <button
          @click="removeFromCart(code)"
          class="h-10 px-2 text-xl font-extrabold text-indigo-600 border-0 focus:outline-none"
        >
          -
        </button>
        <input
          class="w-10 h-10 px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
          type="text"
          :value="productQuantity(code)"
        />
        <button
          @click="addToCart(code)"
          class="h-10 px-2 text-xl font-extrabold text-indigo-600 border-0 focus:outline-none"
        >
          +
        </button>
      </div>

      <div class="flex items-center justify-center w-1/5 text-xs text-gray-400 uppercase">
        <span class="text-base text-black">
          {{ parseFloat(price) }}
        </span>
        <span class="ml-2 text-base text-black">
          €
        </span>
      </div>

      <div class="flex items-center justify-center text-xs text-gray-400 uppercase w-3/10">
        <span class="text-base text-black">
          {{ price * productQuantity(code) }}
        </span>
        <span class="ml-2 text-base text-black">
          €
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'shop-item',
  props: {
    code: String,
    title: String,
    price: String,
    imageUrl: String,
  },
  computed: {
    ...mapState(['cart', 'products']),
    ...mapGetters(['productQuantity']),
  },
  methods: {
    ...mapActions(['addToCart', 'removeFromCart']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
