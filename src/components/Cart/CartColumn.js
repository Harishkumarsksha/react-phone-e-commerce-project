import React, { Component } from "react";

export default class CartColumn extends Component {
  render() {
    return (
      <div className="container-fluid d-none d-lg-block text-center">
        <div className="row">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Products</p>
          </div>{" "}
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">name of Products</p>
          </div>{" "}
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">price</p>
          </div>{" "}
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">quantity</p>
          </div>{" "}
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">remove</p>
          </div>{" "}
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">total</p>
          </div>
        </div>
      </div>
    );
  }
}
