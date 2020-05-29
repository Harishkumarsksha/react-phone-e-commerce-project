import React, { Component, createContext } from "react";
import { storeProducts, detailProduct } from "../data";
const ProductContext = createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  getItme = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };
  handleDetails = (id) => {
    const product = this.getItme(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = (id) => {
    const tempProducts = this.state.products;
    const index = tempProducts.indexOf(this.getItme(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  setStoreProducts = () => {
    let TempProducts = [];
    storeProducts.forEach((item) => {
      const singleItme = { ...item };
      TempProducts = [...TempProducts, singleItme];
    });
    this.setState(() => {
      return { products: TempProducts };
    });
  };

  openModal = (id) => {
    const product = this.getItme(id);

    this.setState(() => {
      return { modalOpen: true, modalProduct: product };
    });
    console.log("inside the openModal status", this.state.modalOpen);
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
    console.log("closeModal is called ", this.state.modalOpen);
  };

  incremet = (id) => {
    let tempCart = [...this.state.cart];

    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decremet = (id) => {
    let tempCart = [...this.state.cart];

    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;

      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItme(id));
    const removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setStoreProducts();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subtotal = 0;
    this.state.cart.map((item) => (subtotal += item.total));
    const tempTax = subtotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subtotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  componentDidMount() {
    this.setStoreProducts();
  }
  render() {
    const { products, detailProduct } = this.state;
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          incremet: this.incremet,
          decremet: this.decremet,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
