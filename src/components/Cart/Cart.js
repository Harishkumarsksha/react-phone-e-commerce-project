import React, { Component, Fragment } from "react";
import Title from "../Title";
import CartColumn from "./CartColumn";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../Context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <Fragment>
                  <Title name="your" title="cart" />
                  <CartColumn />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </Fragment>
              );
            } else {
              return (
                <Fragment>
                  <EmptyCart />
                </Fragment>
              );
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
