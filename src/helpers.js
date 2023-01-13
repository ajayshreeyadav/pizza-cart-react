export const getCart = () => {
  return new Promise((resolse, reject) => {
    const cart = window.localStorage.getItem('cart');
    resolse(cart);
  });
};

export const storeCart = cart => {
  window.localStorage.setItem('cart', JSON.stringify(cart));
};
