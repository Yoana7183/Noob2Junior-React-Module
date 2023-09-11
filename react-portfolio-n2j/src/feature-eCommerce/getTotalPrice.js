const getTotalPriceAfterDescount = (product) => {
  if (product.discount && product.discount > 0) {
    const discountedPrice =
      product.price - product.price * (product.discount / 100);
    return discountedPrice.toFixed(2);
  }
  return product.price;
};
export default getTotalPriceAfterDescount;
