import React from "react";
import "./Product.css";
const Product = (props) => {
  const { name, img, price, Instructor } = props.product;
  return (
    <div className="product-container list-group-item d-flex my-2 shadow ">
      <div>
        <img className="imgSize" src={img} alt="product-image" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <h5>Instructor:{Instructor}</h5>
        <br />
        <p>Price: ${price}</p>

        <button
          className="main-button"
          onClick={() => props.handleAddProduct(props.product)}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Product;
