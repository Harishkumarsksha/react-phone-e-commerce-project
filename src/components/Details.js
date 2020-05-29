import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./Context";
import Title from "./Title";
import { ButtonContainer } from "./Button";
export default class Details extends Component {
  dummy = (params) => {
    console.log("added to the cart");
  };

  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            title,
            inCart,
            img,
            price,
            info,
          } = value.detailProduct;
          const { addToCart, openModal } = value;
          return (
            <div className="container">
              <div className="row">
                <div className="col-10 mx-auto my-5 text-center text-slanted text-blue">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>model:{title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    price : <strong>$</strong>
                    {price}
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to product</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        return addToCart(id), openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
