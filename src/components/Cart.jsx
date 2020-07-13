// calculate each item
// export default class Items extends Component {

import React, { Component } from "react";

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      item: [
        {
          id: 1,
          product: "Yoga Lesson",
          quantity: 0,
          price: 25,
        },
        {
          id: 2,
          product: "Harem Pants",
          quantity: 0,
          price: 30,
        },
        {
          id: 3,
          product: "Chakra Bowl",
          quantity: 0,
          price: 40,
        },
        {
          id: 4,
          product: "Palo Santo",
          quantity: 0,
          price: 15,
        },
      ],
      cartSubTotal: 0,
      tax: 0.06,
      total: 0,
    };
  }

  addQuantity = (index) => {
    this.setState({
      quantity: this.state.item[index].quantity++,
    });
  };

  subQuantity = (index) => {
    this.setState({
      quantity: this.state.item[index].quantity--,
    });
  };

  render() {
    let yoga = this.state.item[0];
    let mat = this.state.item[1];
    let harem = this.state.item[2];
    let sum = yoga.quantity + mat.quantity + harem.quantity;
    let yogaQuant = yoga.quantity;
    let matQuant = mat.quantity;
    let haremQuant = harem.quantity;

    let CartSubTotal =
      yogaQuant * yoga.price +
      matQuant * mat.price +
      haremQuant * harem.quantity;

    let tax = CartSubTotal * this.state.tax;
    let total = tax * CartSubTotal;
    return (
      <div className="term">
        <div className="items">
          <dt>
            <div className="firstItem">
            <br></br>
              {yoga.product} ${yoga.price} 
              <br></br>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  this.subQuantity(0);
                }}
              >
                {" "}
                -{" "}
              </button>
              <dd>
                {yoga.quantity}
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => this.addQuantity(0)}
                >
                  {" "}
                  +{" "}
                </button>
                <br></br>
              </dd>
            </div>
          </dt>
          <div className="secondItem">
            <br></br>
            {mat.product} ${mat.price}
            <br></br>
            <br></br>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => this.subQuantity(1)}
            >
              {" "}
              -{" "}
            </button>
            {mat.quantity}
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => this.addQuantity(1)}
            >
              {" "}
              +{" "}
            </button>
            <br></br>
          </div>
          <div className="secondItem">
            <br></br>
            {harem.product} ${harem.price}
            <br></br>
            <br></br>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => this.subQuantity(1)}
            >
              {" "}
              -{" "}
            </button>
            {harem.quantity}
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => this.addQuantity(1)}
            >
              {" "}
              +{" "}
            </button>
            <br></br>
          </div>
        </div>
        <dt>
          <div className="checkOut">
            <hr />
            {sum} Items in Cart
            <br></br>
            <br></br>
            Subtotal: ${CartSubTotal}
            <br></br>
            Estimated Tax: {tax}
            <br></br>
            Total: {total}
          </div>
        </dt>
      </div>
    );
  }
}

export default Cart;
