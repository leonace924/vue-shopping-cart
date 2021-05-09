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
    cart: [],
  },
  getters: {
    cartSize: (state) => {
      return state.cart.reduce((total, product) => {
        return total + product.quantity;
      }, 0);
    },
    cartTotalAmount: (state) => {
      return state.cart.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
    },
    productQuantity: (state) => (productId) => {
      let product = state.cart.find((product) => product.id === productId);
      console.log(product);
      return product ? product.quantity : 0;
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
