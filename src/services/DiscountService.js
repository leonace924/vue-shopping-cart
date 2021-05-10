let discountRules = [
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
];

class DiscountService {
  static scanProduct(cart, productName) {
    let product = cart.find((product) => product.title === productName);
    let discount = discountRules.find((rule) => rule.product === productName);

    if (!product?.quantity || !product) return 0;

    if (productName === 'Shirt') {
      return product?.quantity >= discount.amount
        ? product.price * discount.rate * product?.quantity
        : 0;
    }
    if (productName === 'Mug') {
      return product?.quantity >= discount.amount
        ? product.price * discount.rate * (Math.floor(product?.quantity / 2) * 2)
        : 0;
    }
    return 0;
  }

  static getDiscountRules() {
    return discountRules;
  }
}

export default DiscountService;
