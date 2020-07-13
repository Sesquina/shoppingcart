// calculate each item
// export default class Items extends Component {

import React, { Component } from "react";

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      item: [
        {
          imgURL:
            "https://www.stoptheboring.com/wp-content/uploads/2017/10/Slay-All-Day-Then-Namaste-Yoga-Mat-with-Bonus-Carrying-Bag-featuring-shoulder-strap-0-1.jpg",
          name: "Yoga Mat",
          quantity: 0,
          price: 25.0,
        },
        {
          imgURL:
            "https://harempants.imgix.net/s/files/1/0754/0497/products/SURE-DESIGN-_336-of-485_1024x1024.jpg?v=1471356794",
          name: "Harem Pants",
          quantity: 0,
          price: 30.0,
        },
        {
          imgURL:
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmZ8NE0XlXX7BPwvIhrWq2-MJZt_X9lscDpPgPbGEMQwL2ehk6g1WQ4UfJ6uwbCChfumIz62AIoY4og5Usxaw7zAROA-VEJ509Z3FFWaM&usqp=CAc",
          name: "Chakra Bowl",
          quantity: 0,
          price: 40.0,
        },
        {
          imgURL:
            "https://cdn.shopify.com/s/files/1/1223/5804/products/PhotoMar26_122725PM.jpg?v=1585324630",
          name: "Palo Santo",
          quantity: 0,
          price: 15.0,
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
    let mat = this.state.item[0];
    let harem = this.state.item[1];
    let bowl = this.state.item[2];
    let palo = this.state.item[3];

    let cartSubTotal =
      mat.quantity * mat.price.toFixed(2) +
      harem.quantity * harem.price.toFixed(2) +
      bowl.quantity * bowl.price.toFixed(2) +
      palo.quantity * palo.price.toFixed(2);
    let finalTax = cartSubTotal.toFixed(2) * this.state.tax.toFixed(2);
    let totalItemSum =
      mat.quantity + harem.quantity + bowl.quantity + palo.quantity;
    let { quantity } = this.state.item[0];
    let total = (cartSubTotal + finalTax).toFixed(2);

    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title"> {mat.name}</h2>
              <p className="card-text">$ {mat.price} </p>
              <button
                className="btn btn-primary btn-sm m-2"
                onClick={() => {
                  this.addQuantity(0);
                }}
              >
                Add To Cart
              </button>
              <p className="card-text"> {mat.quantity}</p>
              <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => {
                  this.subQuantity(0);
                }}
              >
                {" "}
                Remove From Cart
              </button>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title"> {harem.name} </h2>
              <p className="card-text">$ {harem.price} </p>
              <button
                className="btn btn-primary btn-sm m-2"
                onClick={() => {
                  this.addQuantity(1);
                }}
              >
                Add To Cart
              </button>
              <p className="card-text"> {harem.quantity}</p>
              <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => {
                  this.subQuantity(1);
                }}
              >
                {" "}
                Remove From Cart{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{bowl.name}</h2>
              <p className="card-text">$ {bowl.price}</p>
              <button
                className="btn btn-primary btn-sm m-2"
                onClick={() => {
                  this.addQuantity(2);
                }}
              >
                Add To Cart
              </button>
              <p className="card-text"> {bowl.quantity} </p>
              <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => {
                  this.subQuantity(2);
                }}
              >
                {" "}
                Remove From Cart{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title"> {palo.name}</h2>
              <p className="card-text"> ${palo.price}</p>
              <button
                className="btn btn-primary btn-sm m-2"
                onClick={() => {
                  this.addQuantity(3);
                }}
              >
                Add To Cart
              </button>
              <p> {palo.quantity} </p>
              <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => {
                  this.subQuantity(3);
                }}
              >
                {" "}
                Remove From Cart{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="checkOut">
          <h1>Order Summary</h1>
          <h3>Items in Cart {totalItemSum}</h3>
          <h3>Subtotal {cartSubTotal}</h3>
          <h3>Tax {finalTax}</h3>
          <h3>Total {total}</h3>
        </div>
      </div>
    );
  }
}

export default Cart;
