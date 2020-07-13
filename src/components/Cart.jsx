// calculate each item
// export default class Items extends Component {

import React, { Component } from "react";

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      item: [
        {
          name: "Yoga Mat",
          quantity: 0,
          price: 25.00,
        },
        {
          name: "Harem Pants",
          quantity: 0,
          price: 30.00,
        },
        {
          name: "Chakra Bowl",
          quantity: 0,
          price: 40.00,
        },
        {
          name: "Palo Santo",
          quantity: 0,
          price: 15.00,
        },
      ],
      cartSubTotal: 0,
      tax: 0.06,
      total: 0,
    }
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
    (mat.quantity * mat.price.toFixed(2)) + (harem.quantity * harem.price.toFixed(2))+ (bowl.quantity * bowl.price.toFixed(2)) + (palo.quantity * palo.price.toFixed(2))   
    let finalTax = cartSubTotal.toFixed(2) * this.state.tax.toFixed(2);
    let totalItemSum = mat.quantity + harem.quantity + bowl.quantity + palo.quantity;
    let {quantity} = this.state.item [0];
    let total = (cartSubTotal + tax).toFixed(2);

    return (
      <div className="wrapper">


        <div className="firstItems">
        <img />
       <img src='./assets/namaslaymat.jpg'/>
      {mat.name}
      {mat.price}
      <button className='btn' onClick={() => {this.addQuantity(0)}}>Add To Cart</button>
      {mat.quantity}
      <button className='btn' onClick={()=> {this.subQuantity(0)}}> Remove From Cart</button>
      </div>


      <div className="secondItems">
        <img src='./assets/harempants.jpeg'/>
        {harem.name}
        {harem.price}
        <button className='btn' onClick={() => {this.addQuantity(1)}}>Add To Cart</button>
        {harem.quantity}
        <button className='btn' onClick={() => {this.subQuantity(1)}}> Remove From Cart </button>
      </div>

      <div className="thirdItems">
        <img src='./assets/chakrabowl.jpg'/>
        {bowl.name}
        {bowl.price}
        <button className='btn' onClick={() => {this.addQuantity(2)}}>Add To Cart</button>
        {bowl.quantity}
        <button className='btn' onClick={() => {this.subQuantity(2)}}> Remove From Cart </button>
      </div>

      <div className="fourthItems">
        <img src='./assets/palosanto.jpg'/>
        {palo.name}
        {palo.price}
        <button className='btn' onClick={() => {this.addQuantity(3)}}>Add To Cart</button>
        {palo.quantity}
        <button className='btn' onClick={() => {this.subQuantity(3)}}> Remove From Cart </button>
      </div>




export default Cart;
