import { createStore } from 'vuex';

const store = new createStore({
  state: {
    products: [
      {
        id: 'X7R2OPX',
        title: 'Shirt',
        price: '20',
        image: 'shirt.png',
      },
      {
        id: 'X2G2OPZ',
        title: 'Mug',
        price: '5',
        image: 'mug.png',
      },
      {
        id: 'X3W2OPY',
        title: 'Cap',
        price: '10',
        image: 'cap.png',
      },
    ],
    discountRules: [
      {
        name: '2x1 Mug Offer',
        product: 'Mug',
        amount: 2,
        rate: 0.5,
      },
      {
        name: 'x3 Shirt Offer',
        product: 'Shirt',
        amount: 3,
        rate: 0.05,
      },
    ],
    cart: [],
  },
  getters: {
    cartSize: (state) => {
      return state.cart.reduce((total, product) => {
        return total + product.quantity;
      }, 0);
    },
    cartOriginalPrice: (state) => {
      return state.cart.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
    },
    cartTotalPrice: (state, getters) => {
      let total = state.cart.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
      let discount = state.cart.reduce((total, product) => {
        return total + getters.discountProduct(product.title);
      }, 0);
      return total + discount;
    },
    productQuantity: (state) => (productId) => {
      let product = state.cart.find((product) => product.id === productId);
      return product ? product.quantity : 0;
    },
    discountProduct: (state) => (productName) => {
      let product = state.cart.find((product) => product.title === productName);
      let discount = state.discountRules.find((rule) => rule.product === productName);

      if (!product?.quantity || !product) return 0;

      if (productName === 'Shirt') {
        return product?.quantity > 2 ? product.price * discount.rate * product?.quantity * -1 : 0;
      }
      if (productName === 'Mug') {
        return product?.quantity > 1
          ? product.price * discount.rate * (Math.floor(product?.quantity / 2) * 2) * -1
          : 0;
      }
      return 0;
    },
  },
  mutations: {
    addToCart: (state, productId) => {
      let product = state.products.find((product) => product.id === productId);
      let cartProduct = state.cart.find((product) => product.id === productId);

      if (cartProduct) {
        cartProduct.quantity++;
      } else {
        state.cart.push({
          ...product,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, productId) => {
      let cartProduct = state.cart.find((product) => product.id === productId);
      if (cartProduct.quantity === 0) return;
      cartProduct.quantity--;
    },
  },
  actions: {
    addToCart: ({ commit }, productId) => {
      commit('addToCart', productId);
    },
    removeFromCart: ({ commit }, productId) => {
      commit('removeFromCart', productId);
    },
  },
});

export default store;
