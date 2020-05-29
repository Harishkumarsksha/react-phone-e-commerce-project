import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "./Context";
import { ButtonContainer } from "./Button";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { openModal, closeModal, modalOpen } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContianer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center p-5"
                    >
                      <h5>Item is added to the cart</h5>
                      <img src={img} alt="product" className="img-fluid" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price : ${price}</h5>
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                          continuew shopping
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          go to Cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContianer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContianer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  display: felx;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
