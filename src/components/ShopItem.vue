<template>
  <div class="w-full">
    <div class="flex">
      <div class="w-9/20 text-gray-400 text-xs">
        <figure class="flex items-center flex-nowrap">
          <div class="grid mr-4 w-18 h-18 rounded border border-gray-300">
            <img
              class="w-100 h-100 object-cover"
              src="@/assets/images/shirt.png"
              alt="item-avatar"
            />
          </div>
          <div>
            <h2 class="text-indigo-600 font-bold normal-case text-base">Shirt</h2>
            <p class="tracking-wide">Product code: X7R2OPX</p>
          </div>
        </figure>
      </div>

      <div class="w-1/5 text-gray-400 text-xs uppercase flex items-center justify-center">
        <button class="h-10 px-2 border-0 text-xl text-indigo-600 font-bold focus:outline-none">
          -
        </button>
        <input
          class="appearance-none border rounded w-10 h-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        />
        <button class="h-10 px-2 border-0 text-xl text-indigo-600 font-bold focus:outline-none">
          +
        </button>
      </div>

      <div class="w-1/5 text-gray-400 text-xs uppercase flex items-center justify-center">
        <span class="text-base text-black">
          20
        </span>
        <span class="text-base text-black ml-2">
          €
        </span>
      </div>

      <div class="w-3/10 text-gray-400 text-xs uppercase flex items-center justify-center">
        <span class="text-base text-black">
          20
        </span>
        <span class="text-base text-black ml-2">
          €
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop-item',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
