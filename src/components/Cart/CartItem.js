import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, count, total } = item;
  const { incremet, decremet, removeItem } = value;
  return (
    <div className="my-2 row text-center text-capitalize">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          alt="product"
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price:</span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-felx justify-content-center">
          <span className="btn btn-black mx-1" onClick={() => decremet(id)}>
            -
          </span>
          <span className="btn btn-black mx-1">{count}</span>
          <span className="btn btn-black mx-1" onClick={() => incremet(id)}>
            +
          </span>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>total items : ${total}</strong>
      </div>
    </div>
  );
}
