import React, { useState } from "react";
import fakeData from "../../fackData";
import "./Class.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
const Class = () => {
  const first12 = fakeData.slice(0, 12);
  const [products, setProducts] = useState(first12);

  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  const [cart, setCart] = useState([]);
  return (
    <div>
      <div className="Class-container ">
        <div className="">
          {products.map((pd) => (
            <Product handleAddProduct={handleAddProduct} product={pd}></Product>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Class;
