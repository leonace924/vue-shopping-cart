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
    if (!product || !product?.quantity) return 0;

    let discount = discountRules.find((rule) => rule.product === productName);

    if (productName === 'Shirt' && product?.quantity >= discount.amount) {
      return product.price * discount.rate * product?.quantity;
    }
    if (productName === 'Mug' && product?.quantity >= discount.amount) {
      return product.price * discount.rate * (Math.floor(product?.quantity / 2) * 2);
    }
    return 0;
  }

  static getDiscountRules() {
    return discountRules;
  }
}

export default DiscountService;
