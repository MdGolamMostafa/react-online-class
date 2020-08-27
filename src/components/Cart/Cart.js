import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }

  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };
  return (
    <div>
      <h4>Order summery</h4>
      <h2> Purchase:{cart.length}</h2>
      <h4>Total Price: ${formatNumber(total)}</h4>
      <p></p>
    </div>
  );
};

export default Cart;
